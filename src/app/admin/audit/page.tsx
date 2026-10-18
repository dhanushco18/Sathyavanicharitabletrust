import React from "react";
import { ShieldAlert, Clock, Database, CheckCircle2 } from "lucide-react";
import { dataRepository } from "@/lib/db/client";
import { getServerAdminSession } from "@/lib/auth/session";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Audit Trail & Security Logs — Sathiyavani Trust Admin",
};

export default async function AdminAuditPage() {
  const session = await getServerAdminSession();
  if (!session) return null;

  if (session.role !== "super_admin") {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <h3 className="font-heading font-bold text-slate-900 text-lg">Permission Denied</h3>
        <p className="text-xs text-slate-500 mt-1">
          Only Super Administrators have authorization to inspect security audit logs.
        </p>
      </div>
    );
  }

  const auditLogs = dataRepository.getAuditLogs();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-brand-navy" />
          System Audit Trail & Security Logs ({auditLogs.length})
        </h2>
        <p className="text-xs text-slate-500">
          Immutable event log of administrative state changes, metric approvals, and content publishing.
        </p>
      </div>

      {/* Security Privacy Notice */}
      <div className="p-4 bg-brand-muted/70 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
        <div className="leading-relaxed">
          <span className="font-bold text-slate-900 block">Sanitized Audit Policy:</span>
          In strict compliance with our security plan, passwords, authentication secrets, and full private
          messages are stripped prior to audit persistence.
        </div>
      </div>

      {/* Logs Table */}
      <Card className="p-0 border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
              <tr>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Action Type</th>
                <th className="py-3 px-4">Admin ID</th>
                <th className="py-3 px-4">Target Table</th>
                <th className="py-3 px-4">Sanitized Event Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/60">
                  <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                    {new Date(log.created_at).toLocaleString("en-IN")}
                  </td>
                  <td className="py-3 px-4 font-bold text-brand-navy">
                    <Badge variant="navy" size="sm">
                      {log.action_type}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500">{log.admin_id || "System"}</td>
                  <td className="py-3 px-4 font-mono text-slate-600">{log.target_table}</td>
                  <td className="py-3 px-4 font-mono text-[11px] text-slate-600">
                    {JSON.stringify(log.details)}
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
