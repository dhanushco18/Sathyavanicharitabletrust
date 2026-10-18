"use server";

import { dataRepository } from "@/lib/db/client";
import { InquiryType } from "@/lib/db/types";

export interface PublicInquiryResult {
  success: boolean;
  trackingId?: string;
  error?: string;
}

export async function submitPublicInquiryAction(
  prevState: PublicInquiryResult | null,
  formData: FormData
): Promise<PublicInquiryResult> {
  const fullName = formData.get("fullName")?.toString()?.trim();
  const phone = formData.get("phone")?.toString()?.trim();
  const email = formData.get("email")?.toString()?.trim() || null;
  const organizationName = formData.get("organizationName")?.toString()?.trim() || null;
  const inquiryType = (formData.get("inquiryType")?.toString() || "general") as InquiryType;
  const message = formData.get("message")?.toString()?.trim();

  // Basic honeypot bot check
  const honeypot = formData.get("website_bot_check")?.toString();
  if (honeypot) {
    // Silently drop bot submissions
    return { success: true, trackingId: "ST-INQ-BOT" };
  }

  if (!fullName || fullName.length < 2) {
    return { success: false, error: "Please enter your valid name." };
  }

  if (!phone || phone.length < 7) {
    return { success: false, error: "Please provide a reachable phone number for our coordinators." };
  }

  if (!message || message.length < 5) {
    return { success: false, error: "Please include a brief message or description of your enquiry." };
  }

  try {
    const saved = dataRepository.saveInquiry({
      inquiry_type: inquiryType,
      full_name: fullName,
      phone,
      email,
      organization_name: organizationName,
      message,
      status: "new",
    });

    return {
      success: true,
      trackingId: `ST-INQ-${saved.id.slice(-6).toUpperCase()}`,
    };
  } catch (err) {
    console.error("Failed to persist inquiry:", err);
    return {
      success: false,
      error: "Temporary network error. Please reach our coordinator directly at +91 98414 54501.",
    };
  }
}
