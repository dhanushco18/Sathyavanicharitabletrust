"use server";

import { headers } from "next/headers";
import { dataRepository } from "@/lib/db/client";
import { InquiryType } from "@/lib/db/types";
import {
  checkRateLimit,
  generateSubmissionHash,
  checkIdempotency,
  recordIdempotency,
} from "@/lib/security/rate-limiter";
import { sendAdminNotification, sendVisitorAcknowledgement } from "@/lib/email/service";

export interface PublicInquiryResult {
  success: boolean;
  trackingId?: string;
  error?: string;
}

export async function submitPublicInquiryAction(
  prevState: PublicInquiryResult | null,
  formData: FormData
): Promise<PublicInquiryResult> {
  const headerList = headers();
  const forwardedFor = headerList.get("x-forwarded-for") || headerList.get("cf-connecting-ip");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  // 1. Honeypot Bot Check
  const honeypot = formData.get("website_bot_check")?.toString();
  if (honeypot) {
    return { success: true, trackingId: "ST-INQ-SECURE-ACK" };
  }

  // 2. Rate Limiting Check (Max 5 requests per 10 minutes per IP)
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return {
      success: false,
      error: "Submission limit exceeded. To protect our community systems, please wait a few minutes before submitting another enquiry.",
    };
  }

  // 3. Extract & Sanitize Form Fields (Unicode / Tamil text friendly)
  const fullName = formData.get("fullName")?.toString()?.trim() || "";
  const phone = formData.get("phone")?.toString()?.trim() || "";
  const email = formData.get("email")?.toString()?.trim() || null;
  const organizationName = formData.get("organizationName")?.toString()?.trim() || null;
  const inquiryType = (formData.get("inquiryType")?.toString() || "general") as InquiryType;
  const message = formData.get("message")?.toString()?.trim() || "";

  // Extract optional workflow-specific metadata
  const areaOfInterest = formData.get("areaOfInterest")?.toString()?.trim();
  const availability = formData.get("availability")?.toString()?.trim();
  const sponsorshipTier = formData.get("sponsorshipTier")?.toString()?.trim();
  const partnershipCategory = formData.get("partnershipCategory")?.toString()?.trim();

  const metadataPayload: Record<string, unknown> = {};
  if (areaOfInterest) metadataPayload.areaOfInterest = areaOfInterest;
  if (availability) metadataPayload.availability = availability;
  if (sponsorshipTier) metadataPayload.sponsorshipTier = sponsorshipTier;
  if (partnershipCategory) metadataPayload.partnershipCategory = partnershipCategory;

  // 4. Validate Inputs
  if (!fullName || fullName.length < 2) {
    return { success: false, error: "Please enter your full name." };
  }

  // Support Indian 10-digit mobile, landlines, and international formatting (+91...)
  const cleanedPhone = phone.replace(/[\s-]/g, "");
  if (!cleanedPhone || cleanedPhone.length < 7 || cleanedPhone.length > 18) {
    return { success: false, error: "Please provide a valid contact telephone or mobile number." };
  }

  if (email && (!email.includes("@") || !email.includes("."))) {
    return { success: false, error: "Please enter a valid email address, or leave it blank." };
  }

  if (!message || message.length < 5) {
    return { success: false, error: "Please enter a descriptive message (minimum 5 characters)." };
  }

  if (message.length > 5000) {
    return { success: false, error: "Message exceeds 5,000 character limit. Please shorten your enquiry." };
  }

  // 5. Duplicate Submission / Idempotency Check (2-minute window)
  const submissionHash = generateSubmissionHash({
    phone: cleanedPhone,
    email,
    message,
    type: inquiryType,
  });

  const existingTrackingId = checkIdempotency(submissionHash);
  if (existingTrackingId) {
    return {
      success: true,
      trackingId: existingTrackingId,
    };
  }

  try {
    // 6. Database Persistence
    const saved = dataRepository.saveInquiry({
      inquiry_type: inquiryType,
      full_name: fullName,
      phone: cleanedPhone,
      email,
      organization_name: organizationName,
      message,
      metadata_payload: Object.keys(metadataPayload).length > 0 ? metadataPayload : undefined,
      status: "new",
    });

    const trackingId = `ST-${inquiryType.substring(0, 3).toUpperCase()}-${saved.id.slice(-6).toUpperCase()}`;

    // Record in idempotency cache
    recordIdempotency(submissionHash, trackingId);

    // 7. Transactional Notifications (Admin alert + Visitor acknowledgement)
    // Runs asynchronously; failure to deliver email does NOT fail the saved inquiry!
    sendAdminNotification(saved, trackingId).catch((err) =>
      console.error("Admin email dispatch note:", err)
    );

    if (saved.email) {
      sendVisitorAcknowledgement(saved, trackingId).catch((err) =>
        console.error("Visitor acknowledgement note:", err)
      );
    }

    return {
      success: true,
      trackingId,
    };
  } catch (err) {
    console.error("Failed to persist inquiry:", err);
    return {
      success: false,
      error: "A database error occurred. Please contact our leadership directly at +91 98414 54501.",
    };
  }
}
