"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  authenticateAdminCredentials,
  setAdminSessionCookie,
  clearAdminSessionCookie,
  getServerAdminSession,
} from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/rbac";
import { dataRepository } from "@/lib/db/client";
import { MetricStatus, InquiryStatus, ContentStatus } from "@/lib/db/types";

export interface ActionResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// ----------------------------------------------------------------------------
// 1. AUTH ACTIONS
// ----------------------------------------------------------------------------

export async function loginAdminAction(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  if (!email || !password) {
    return { success: false, error: "Please enter both administrative email and password." };
  }

  const result = await authenticateAdminCredentials(email, password);
  if (!result.success || !result.profile) {
    return { success: false, error: result.error || "Authentication failed." };
  }

  await setAdminSessionCookie(result.profile);
  redirect("/admin");
}

export async function logoutAdminAction(): Promise<void> {
  await clearAdminSessionCookie();
  redirect("/admin/login");
}

// ----------------------------------------------------------------------------
// 2. IMPACT METRICS WORKFLOW ACTIONS
// ----------------------------------------------------------------------------

export async function updateMetricStatusAction(
  metricId: string,
  newStatus: MetricStatus,
  reviewerNotes?: string
): Promise<ActionResult> {
  const session = await getServerAdminSession();
  if (!session) {
    return { success: false, error: "Unauthorized session. Please log in again." };
  }

  // Only Super Admins (Trustees) can approve or publish impact metrics
  if ((newStatus === "approved" || newStatus === "published") && !hasPermission(session.role, "approve_metrics")) {
    return {
      success: false,
      error: "Permission denied: Only Super Administrators can approve or publish impact metrics.",
    };
  }

  const updated = dataRepository.updateMetricStatus(metricId, newStatus, session.adminId, reviewerNotes);
  if (!updated) {
    return { success: false, error: "Impact metric not found." };
  }

  revalidatePath("/admin/impact");
  revalidatePath("/impact");
  revalidatePath("/");
  return { success: true, data: updated };
}

export async function createImpactMetricAction(data: {
  metric_key: string;
  title: string;
  numeric_value: number;
  display_suffix: string;
  unit: string;
  reporting_period: string;
  description: string;
  methodology: string;
  verification_source: string;
}): Promise<ActionResult> {
  const session = await getServerAdminSession();
  if (!session) {
    return { success: false, error: "Unauthorized session." };
  }

  // New metrics always start in 'draft' or 'submitted'
  const created = dataRepository.saveImpactMetric({
    ...data,
    status: "draft",
    created_by: session.adminId,
  });

  revalidatePath("/admin/impact");
  return { success: true, data: created };
}

// ----------------------------------------------------------------------------
// 3. PROGRAM ACTIONS
// ----------------------------------------------------------------------------

export async function saveProgramAction(data: {
  id?: string;
  slug: string;
  title: string;
  category: string;
  short_description: string;
  full_description: string;
  featured_image?: string | null;
  location: string;
  status: ContentStatus;
  sort_order: number;
}): Promise<ActionResult> {
  const session = await getServerAdminSession();
  if (!session || !hasPermission(session.role, "manage_content")) {
    return { success: false, error: "Permission denied to manage programs." };
  }

  if (!data.title.trim() || !data.slug.trim()) {
    return { success: false, error: "Program title and slug are required." };
  }

  const saved = dataRepository.saveProgram(data);
  revalidatePath("/admin/programs");
  revalidatePath("/programs");
  revalidatePath(`/programs/${saved.slug}`);
  return { success: true, data: saved };
}

export async function deleteProgramAction(id: string): Promise<ActionResult> {
  const session = await getServerAdminSession();
  if (!session || !hasPermission(session.role, "manage_content")) {
    return { success: false, error: "Permission denied." };
  }

  const deleted = dataRepository.deleteProgram(id);
  revalidatePath("/admin/programs");
  revalidatePath("/programs");
  return { success: deleted };
}

// ----------------------------------------------------------------------------
// 4. STORY ACTIONS
// ----------------------------------------------------------------------------

export async function saveStoryAction(data: {
  id?: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content_markdown: string;
  cover_image_url?: string | null;
  consent_verified: boolean;
  is_published: boolean;
}): Promise<ActionResult> {
  const session = await getServerAdminSession();
  if (!session || !hasPermission(session.role, "manage_content")) {
    return { success: false, error: "Permission denied to manage stories." };
  }

  // Mandatory Child Safeguarding Check: Cannot publish if consent is not verified
  if (data.is_published && !data.consent_verified) {
    return {
      success: false,
      error: "Safeguarding rule: You must verify parental/child photography consent before publishing.",
    };
  }

  const saved = dataRepository.saveStory({
    ...data,
    published_at: data.is_published ? new Date().toISOString() : null,
  });

  revalidatePath("/admin/stories");
  revalidatePath("/stories");
  return { success: true, data: saved };
}

// ----------------------------------------------------------------------------
// 5. INQUIRY ACTIONS
// ----------------------------------------------------------------------------

export async function updateInquiryStatusAction(
  id: string,
  status: InquiryStatus,
  notes?: string
): Promise<ActionResult> {
  const session = await getServerAdminSession();
  if (!session || !hasPermission(session.role, "manage_inquiries")) {
    return { success: false, error: "Permission denied to manage inquiries." };
  }

  const updated = dataRepository.updateInquiryStatus(id, status, notes);
  revalidatePath("/admin/enquiries");
  return { success: true, data: updated };
}
