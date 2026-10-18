import React from "react";
import { Users, ShieldCheck, Key, UserCheck, AlertCircle } from "lucide-react";
import { dataRepository } from "@/lib/db/client";
import { getServerAdminSession } from "@/lib/auth/session";
import { hasPermission, formatRoleTitle, getRoleBadgeColor } from "@/lib/auth/rbac";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Administrators & RBAC Roles — Sathiyavani Trust Admin",
};

export default async function AdminUsersPage() {
  const session = await getServerAdminSession();
  if (!session) return null;

  if (!hasPermission(session.role, "manage_admins")) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <h3 className="font-heading font-bold text-slate-900 text-lg">Permission Denied</h3>
        <p className="text-xs text-slate-500 mt-1">
          Only Super Administrators (Managing Trustees) can view or configure administrative roles.
        </p>
      </div>
    );
  }

  const admins = dataRepository.getAdmins();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-brand-navy" />
          Authorized Administrators & RBAC Roles ({admins.length})
        </h2>
        <p className="text-xs text-slate-500">
          Trustee profiles, operational roles, and access controls under least-privilege principles.
        </p>
      </div>

      {/* Security Advisory on Provisioning */}
      <div className="p-4 bg-slate-900 text-slate-300 rounded-3xl border border-slate-800 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-brand-amber font-bold">
          <Key className="w-4 h-4" />
          <span>No Public Self-Registration Policy</span>
        </div>
        <p className="text-slate-400 leading-relaxed text-[11px]">
          In accordance with our application security specification, public administrator sign-up is
          permanently disabled. New trustees and field coordinators must be provisioned via the secure
          Supabase SQL migration script or by an existing Super Administrator.
        </p>
      </div>

      {/* Admin Profiles Table */}
      <Card className="p-0 border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
              <tr>
                <th className="py-3 px-4">Administrator Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Assigned Role</th>
                <th className="py-3 px-4">Account Created</th>
                <th className="py-3 px-4">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {admins.map((adm) => (
                <tr key={adm.id} className="hover:bg-slate-50/60">
                  <td className="py-3 px-4 font-semibold text-slate-900 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-brand-navy/10 text-brand-navy flex items-center justify-center font-bold text-xs shrink-0">
                      {adm.full_name.charAt(0)}
                    </div>
                    <span>{adm.full_name}</span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-600">{adm.email}</td>
                  <td className="py-3 px-4">
                    <Badge variant={getRoleBadgeColor(adm.role)} size="sm">
                      {formatRoleTitle(adm.role)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-slate-500">
                    {new Date(adm.created_at).toLocaleDateString("en-IN")}
                  </td>
                  <td className="py-3 px-4 text-slate-500">
                    {adm.last_sign_in_at
                      ? new Date(adm.last_sign_in_at).toLocaleDateString("en-IN")
                      : "Never"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
