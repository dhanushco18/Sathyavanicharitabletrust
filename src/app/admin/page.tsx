import React from "react";
import Link from "next/link";
import {
  BookOpen,
  BarChart3,
  Inbox,
  FileText,
  Calendar,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { dataRepository } from "@/lib/db/client";
import { getServerAdminSession } from "@/lib/auth/session";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatRoleTitle } from "@/lib/auth/rbac";

export const metadata = {
  title: "Admin Overview — Sathiyavani Charitable Trust",
  description: "Administrative control center and governance overview",
};

export default async function AdminOverviewPage() {
  const session = await getServerAdminSession();
  if (!session) return null;

  // Retrieve actual database records
  const programs = dataRepository.getPrograms();
  const publishedPrograms = programs.filter((p) => p.status === "published");

  const impactMetrics = dataRepository.getImpactMetrics();
  const publishedMetrics = impactMetrics.filter((m) => m.status === "published");
  const pendingMetrics = impactMetrics.filter((m) => m.status === "submitted" || m.status === "draft");

  const inquiries = dataRepository.getInquiries();
  const newInquiries = inquiries.filter((i) => i.status === "new");

  const stories = dataRepository.getStories();
  const publishedStories = stories.filter((s) => s.is_published);

  const events = dataRepository.getEvents();
  const activeEvents = events.filter((e) => e.status === "published");

  const recentAuditLogs = dataRepository.getAuditLogs().slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-brand-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-elevated flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <Badge variant="amber" size="sm">
              Session Authenticated
            </Badge>
            <span className="text-white/60 text-xs">Role: {formatRoleTitle(session.role)}</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome back, {session.fullName}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Manage trust initiatives, approve verified impact records, review incoming community
            inquiries, and maintain child protection standards.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/impact"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-amber text-slate-950 font-bold rounded-xl text-xs hover:bg-brand-amber/90 transition-colors shadow-sm"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Review Metrics ({pendingMetrics.length})</span>
          </Link>
          <Link
            href="/admin/enquiries"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white font-semibold rounded-xl text-xs hover:bg-white/20 transition-colors border border-white/20"
          >
            <Inbox className="w-4 h-4" />
            <span>Inquiries ({newInquiries.length} New)</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Programs */}
        <Card className="p-5 border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Active Programs
            </span>
            <div className="p-2 rounded-xl bg-blue-50 text-brand-navy">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl text-slate-900">
            {publishedPrograms.length}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            {programs.length} total across 5 pillars
          </p>
        </Card>

        {/* Verified Impact Metrics */}
        <Card className="p-5 border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Published Metrics
            </span>
            <div className="p-2 rounded-xl bg-emerald-50 text-brand-teal">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl text-slate-900">
            {publishedMetrics.length}
          </div>
          <p className="text-[11px] text-amber-700 font-medium mt-1">
            {pendingMetrics.length} awaiting trustee review
          </p>
        </Card>

        {/* Confidential Inquiries */}
        <Card className="p-5 border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              New Inquiries
            </span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl text-slate-900">
            {newInquiries.length}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            {inquiries.length} total communications
          </p>
        </Card>

        {/* Stories & Case Studies */}
        <Card className="p-5 border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Published Stories
            </span>
            <div className="p-2 rounded-xl bg-rose-50 text-brand-terracotta">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl text-slate-900">
            {publishedStories.length}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">100% parental consent verified</p>
        </Card>
      </div>

      {/* Main Grid: Pending Action Items & Recent Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Metric Reviews Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-subtle space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-amber" />
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Impact Metric Verification Queue
              </h3>
            </div>
            <Link
              href="/admin/impact"
              className="text-xs font-semibold text-brand-navy hover:underline inline-flex items-center gap-1"
            >
              Manage all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {pendingMetrics.length === 0 ? (
            <div className="py-8 text-center text-slate-500 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
              <p className="text-sm font-medium text-slate-700">Verification Queue Clear</p>
              <p className="text-xs text-slate-400">All submitted impact figures have been processed.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingMetrics.map((metric) => (
                <div
                  key={metric.id}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="font-semibold text-slate-900">{metric.title}</div>
                    <div className="text-slate-500">
                      Period: <span className="font-medium">{metric.reporting_period}</span> | Stated:{" "}
                      <span className="font-bold text-brand-navy">
                        {metric.numeric_value.toLocaleString("en-IN")}
                        {metric.display_suffix}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Source: {metric.verification_source}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <Badge variant="amber" size="sm">
                      {metric.status}
                    </Badge>
                    <Link
                      href="/admin/impact"
                      className="block mt-1 text-[11px] font-bold text-brand-navy hover:underline"
                    >
                      Review &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Inbound Communications Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-subtle space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Inbox className="w-5 h-5 text-brand-teal" />
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Recent Confidential Inquiries
              </h3>
            </div>
            <Link
              href="/admin/enquiries"
              className="text-xs font-semibold text-brand-navy hover:underline inline-flex items-center gap-1"
            >
              View all ({inquiries.length}) <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {inquiries.length === 0 ? (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm font-medium">No inquiries received yet.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {inquiries.slice(0, 3).map((inq) => (
                <div
                  key={inq.id}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">{inq.full_name}</span>
                    <Badge
                      variant={
                        inq.status === "new"
                          ? "amber"
                          : inq.status === "in_progress"
                          ? "navy"
                          : "teal"
                      }
                      size="sm"
                    >
                      {inq.status}
                    </Badge>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Category: <span className="font-semibold capitalize">{inq.inquiry_type}</span> | Phone:{" "}
                    <span className="font-medium">{inq.phone}</span>
                  </div>
                  <p className="text-slate-600 line-clamp-1 italic text-[11px]">
                    &ldquo;{inq.message}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* System Audit Activity */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-subtle space-y-4">
        <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
          <Clock className="w-4 h-4 text-slate-500" />
          Recent Administrative Audit Activity
        </h3>

        <div className="divide-y divide-slate-100 text-xs">
          {recentAuditLogs.map((log) => (
            <div key={log.id} className="py-2.5 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="font-semibold text-slate-800">{log.action_type}</span>
                <div className="text-[11px] text-slate-500">
                  Target: <code className="bg-slate-100 px-1 py-0.5 rounded">{log.target_table}</code>
                </div>
              </div>
              <span className="text-slate-400 text-[11px] shrink-0">
                {new Date(log.created_at).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
