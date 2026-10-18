import { InquiryRecord } from "@/lib/db/types";
import { SITE_CONFIG } from "@/lib/constants";

export interface EmailNotificationEntry {
  id: string;
  recipient: string;
  recipientType: "admin" | "visitor";
  subject: string;
  category: string;
  trackingId: string;
  status: "delivered" | "simulated" | "failed";
  providerMessageId?: string;
  timestamp: string;
  error?: string;
}

// In-memory transactional outbox for diagnostic logging & local inspection
const notificationOutbox: EmailNotificationEntry[] = [];

const resendApiKey = process.env.RESEND_API_KEY;
const isResendConfigured = Boolean(resendApiKey && !resendApiKey.includes("placeholder"));
const adminRecipientEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "notifications@sathiyavanitrust.org";
const senderEmail = process.env.SENDER_EMAIL || "updates@sathiyavanitrust.org";

/**
 * Sends administrative notification for newly persisted citizen enquiry
 */
export async function sendAdminNotification(
  inquiry: InquiryRecord,
  trackingId: string
): Promise<EmailNotificationEntry> {
  const subject = `[New ${inquiry.inquiry_type.toUpperCase()} Inquiry] Ref: ${trackingId} — ${inquiry.full_name}`;
  const now = new Date().toISOString();

  const emailHtml = `
    <h2>Sathiyavani Charitable Trust — New Inbound Communication</h2>
    <p>A new inquiry was successfully submitted on the public website and saved to the database.</p>
    <ul>
      <li><strong>Tracking Reference:</strong> ${trackingId}</li>
      <li><strong>Category:</strong> ${inquiry.inquiry_type}</li>
      <li><strong>Name:</strong> ${inquiry.full_name}</li>
      <li><strong>Phone:</strong> ${inquiry.phone}</li>
      <li><strong>Email:</strong> ${inquiry.email || "Not Provided"}</li>
      <li><strong>Organization:</strong> ${inquiry.organization_name || "None"}</li>
      <li><strong>Submitted At:</strong> ${now}</li>
    </ul>
    <h3>Message:</h3>
    <blockquote>${inquiry.message}</blockquote>
    <p><a href="https://sathiyavanitrust.netlify.app/admin/enquiries">Review in Administrative Dashboard &rarr;</a></p>
  `;

  if (isResendConfigured) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Sathiyavani Trust <${senderEmail}>`,
          to: [adminRecipientEmail],
          subject,
          html: emailHtml,
        }),
      });

      const resJson = await response.json();
      if (!response.ok) {
        throw new Error(resJson.message || "Resend API error");
      }

      const entry: EmailNotificationEntry = {
        id: `email-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        recipient: adminRecipientEmail,
        recipientType: "admin",
        subject,
        category: inquiry.inquiry_type,
        trackingId,
        status: "delivered",
        providerMessageId: resJson.id,
        timestamp: now,
      };
      notificationOutbox.unshift(entry);
      return entry;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Network error";
      const entry: EmailNotificationEntry = {
        id: `email-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        recipient: adminRecipientEmail,
        recipientType: "admin",
        subject,
        category: inquiry.inquiry_type,
        trackingId,
        status: "failed",
        error: errorMessage,
        timestamp: now,
      };
      notificationOutbox.unshift(entry);
      return entry;
    }
  }

  // Simulated delivery mode (used when Resend API key is not yet configured)
  const entry: EmailNotificationEntry = {
    id: `email-sim-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    recipient: adminRecipientEmail,
    recipientType: "admin",
    subject,
    category: inquiry.inquiry_type,
    trackingId,
    status: "simulated",
    timestamp: now,
  };
  notificationOutbox.unshift(entry);
  return entry;
}

/**
 * Sends citizen acknowledgement receipt when a valid email address is supplied
 */
export async function sendVisitorAcknowledgement(
  inquiry: InquiryRecord,
  trackingId: string
): Promise<EmailNotificationEntry | null> {
  if (!inquiry.email || !inquiry.email.includes("@")) {
    return null;
  }

  const subject = `Enquiry Received: ${trackingId} — Sathiyavani Charitable Trust`;
  const now = new Date().toISOString();

  const emailHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <h2 style="color: #0F4C81;">Sathiyavani Charitable Trust</h2>
      <p>Dear ${inquiry.full_name},</p>
      <p>Thank you for reaching out to Sathiyavani Charitable Trust regarding <strong>${inquiry.inquiry_type}</strong>.</p>
      <div style="background-color: #f8fafc; padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="margin: 0; font-size: 14px; font-weight: bold; color: #0F4C81;">Your Official Tracking Reference:</p>
        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 18px; color: #D9822B; font-weight: bold;">${trackingId}</p>
      </div>
      <p>Our volunteer coordinators review inquiries during operational hours (Monday–Friday 5:00 PM – 8:00 PM). A representative will follow up via phone at <strong>${inquiry.phone}</strong>.</p>
      <p style="font-size: 12px; color: #64748b; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
        Sathiyavani Charitable Trust &copy; ${new Date().getFullYear()} | Chennai, Tamil Nadu<br />
        Direct Coordinator Phone: ${SITE_CONFIG.phone}
      </p>
    </div>
  `;

  if (isResendConfigured) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Sathiyavani Trust <${senderEmail}>`,
          to: [inquiry.email],
          subject,
          html: emailHtml,
        }),
      });

      const resJson = await response.json();
      const entry: EmailNotificationEntry = {
        id: `email-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        recipient: inquiry.email,
        recipientType: "visitor",
        subject,
        category: inquiry.inquiry_type,
        trackingId,
        status: response.ok ? "delivered" : "failed",
        providerMessageId: resJson.id,
        timestamp: now,
      };
      notificationOutbox.unshift(entry);
      return entry;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Network error";
      const entry: EmailNotificationEntry = {
        id: `email-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        recipient: inquiry.email,
        recipientType: "visitor",
        subject,
        category: inquiry.inquiry_type,
        trackingId,
        status: "failed",
        error: errorMessage,
        timestamp: now,
      };
      notificationOutbox.unshift(entry);
      return entry;
    }
  }

  // Simulated receipt mode
  const entry: EmailNotificationEntry = {
    id: `email-sim-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    recipient: inquiry.email,
    recipientType: "visitor",
    subject,
    category: inquiry.inquiry_type,
    trackingId,
    status: "simulated",
    timestamp: now,
  };
  notificationOutbox.unshift(entry);
  return entry;
}

/**
 * Returns current outbox of transactional notifications for administrative inspection
 */
export function getNotificationOutbox(): EmailNotificationEntry[] {
  return [...notificationOutbox];
}
