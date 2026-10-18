import { AdminRole } from "../db/types";

export type Permission =
  | "manage_admins"
  | "approve_metrics"
  | "manage_content"
  | "manage_inquiries"
  | "manage_media"
  | "view_analytics";

const ROLE_PERMISSIONS: Record<AdminRole, Permission[]> = {
  super_admin: [
    "manage_admins",
    "approve_metrics",
    "manage_content",
    "manage_inquiries",
    "manage_media",
    "view_analytics",
  ],
  content_admin: [
    "manage_content",
    "manage_media",
    "view_analytics",
  ],
  enquiry_manager: [
    "manage_inquiries",
    "view_analytics",
  ],
};

export function hasPermission(role: AdminRole, permission: Permission): boolean {
  const permissions = ROLE_PERMISSIONS[role] || [];
  return permissions.includes(permission);
}

export function getRoleBadgeColor(role: AdminRole): "navy" | "amber" | "teal" {
  switch (role) {
    case "super_admin":
      return "navy";
    case "content_admin":
      return "teal";
    case "enquiry_manager":
      return "amber";
    default:
      return "navy";
  }
}

export function formatRoleTitle(role: AdminRole): string {
  switch (role) {
    case "super_admin":
      return "Super Administrator (Trustee)";
    case "content_admin":
      return "Content & Programs Lead";
    case "enquiry_manager":
      return "Enquiry & Volunteer Manager";
    default:
      return role;
  }
}
