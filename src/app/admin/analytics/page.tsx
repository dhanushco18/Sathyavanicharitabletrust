import React from "react";
import Link from "next/link";
import {
  LineChart,
  Eye,
  Users,
  Target,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Heart,
  Handshake,
  GraduationCap,
} from "lucide-react";
import { getServerAdminSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/rbac";
import { analyticsRepository } from "@/lib/analytics/service";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Website Analytics & Usage — Sathiyavani Trust Admin",
  description: "Privacy-conscious aggregate platform engagement telemetry",
};

export default async function AdminAnalyticsPage() {
  const session = await getServerAdminSession();
  if (!session || !hasPermission(session.role, "view_analytics")) {
    return (
      <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center">
        <h2 className="text-lg font-bold text-slate-800">Access Restricted</h2>
        <p className="text-xs text-slate-500 mt-1">
          Your role does not have authorization to view platform analytics.
        </p>
      </div>
    );
  }

  const analytics = analyticsRepository.getAggregateMetrics(30);
  const totalConversions =
    analytics.ctaConversions.volunteerPledges +
    analytics.ctaConversions.sponsorshipPledges +
    analytics.ctaConversions.partnershipProposals +
    analytics.ctaConversions.generalInquiries;

  const totalDevices =
    analytics.deviceBreakdown.desktop +
    analytics.deviceBreakdown.mobile +
    analytics.deviceBreakdown.tablet;

  const mobileShare = totalDevices > 0 ? Math.round((analytics.deviceBreakdown.mobile / totalDevices) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
            Operational Telemetry
          </span>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
            Privacy-First Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Aggregate visitor engagement metrics for the {analytics.reportingPeriod}.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="teal" size="sm">
            Zero Tracking Cookies
          </Badge>
          <Badge variant="navy" size="sm">
            100% First-Party
          </Badge>
        </div>
      </div>

      {/* Privacy Guarantee Advisory */}
      <div className="p-4 bg-emerald-50/80 border border-emerald-200/90 rounded-2xl text-xs text-emerald-950 flex items-start gap-3 shadow-sm">
        <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-sm block">Citizen Privacy by Architecture:</span>
          <p className="leading-relaxed text-emerald-900">
            {analytics.privacyNotice} No browser fingerprinting, cross-site beacons, or personal data
            (names, phones, emails, messages) are ever captured into analytical logs.
          </p>
        </div>
      </div>

      {/* Primary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-500">Page Views</span>
            <div className="p-2 rounded-xl bg-blue-50 text-brand-navy">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-3xl text-slate-900">
            {analytics.totalPageViews.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Total public page visits</div>
        </Card>

        <Card className="p-5 border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-500">Est. Visitor Sessions</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-3xl text-slate-900">
            {analytics.uniqueSessionsEstimate.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Calculated via session frequency</div>
        </Card>

        <Card className="p-5 border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-500">CTA Conversions</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-3xl text-slate-900">
            {totalConversions.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Pledges & inquiries submitted</div>
        </Card>

        <Card className="p-5 border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-500">Mobile Share</span>
            <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
              <Smartphone className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-3xl text-slate-900">
            {mobileShare}%
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Visitors on mobile viewports</div>
        </Card>
      </div>

      {/* Two Column Grid: Top Pages & Conversions Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Most Viewed Pages */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6 border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-heading font-bold text-base text-slate-900">
                  Most Viewed Public Routes
                </h3>
                <p className="text-xs text-slate-500">Top destinations for citizens, volunteers, and donors</p>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400">Total: {analytics.topPages.length} Routes</span>
            </div>

            <div className="divide-y divide-slate-100">
              {analytics.topPages.map((page, idx) => {
                const percent = Math.round((page.count / analytics.totalPageViews) * 100);
                return (
                  <div key={page.path} className="py-3 flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">#{idx + 1}</span>
                        <Link
                          href={page.path}
                          target="_blank"
                          className="font-semibold text-xs text-slate-800 hover:text-brand-navy truncate inline-flex items-center gap-1"
                        >
                          {page.path}
                          <ArrowUpRight className="w-3 h-3 text-slate-400" />
                        </Link>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-brand-navy h-full rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-slate-900 block">
                        {page.count.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-400">{percent}% share</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right 1 Col: Community Conversions */}
        <div className="space-y-4">
          <Card className="p-6 border-slate-200 space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-base text-slate-900">
                Action Conversion Channels
              </h3>
              <p className="text-xs text-slate-500">Pledges & inquiries generated</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-700" />
                  <span className="font-bold text-slate-800">Student Sponsorships</span>
                </div>
                <span className="font-mono font-bold text-amber-900 text-sm">
                  {analytics.ctaConversions.sponsorshipPledges}
                </span>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200/70 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-navy" />
                  <span className="font-bold text-slate-800">Volunteer Mentors</span>
                </div>
                <span className="font-mono font-bold text-brand-navy text-sm">
                  {analytics.ctaConversions.volunteerPledges}
                </span>
              </div>

              <div className="p-3 bg-teal-50/70 border border-teal-200/70 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-teal-700" />
                  <span className="font-bold text-slate-800">CSR Partnerships</span>
                </div>
                <span className="font-mono font-bold text-teal-900 text-sm">
                  {analytics.ctaConversions.partnershipProposals}
                </span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-700" />
                  <span className="font-bold text-slate-800">General Tuition Inquiries</span>
                </div>
                <span className="font-mono font-bold text-slate-900 text-sm">
                  {analytics.ctaConversions.generalInquiries}
                </span>
              </div>
            </div>
          </Card>

          {/* Device Distribution */}
          <Card className="p-5 border-slate-200 space-y-3">
            <h4 className="font-heading font-bold text-sm text-slate-900">
              Device Category Distribution
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-600">
                <span>Mobile Phones</span>
                <span className="font-bold text-slate-800">
                  {analytics.deviceBreakdown.mobile} ({mobileShare}%)
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Desktop Computers</span>
                <span className="font-bold text-slate-800">
                  {analytics.deviceBreakdown.desktop} (
                  {totalDevices > 0 ? Math.round((analytics.deviceBreakdown.desktop / totalDevices) * 100) : 0}%)
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Tablets & iPads</span>
                <span className="font-bold text-slate-800">
                  {analytics.deviceBreakdown.tablet} (
                  {totalDevices > 0 ? Math.round((analytics.deviceBreakdown.tablet / totalDevices) * 100) : 0}%)
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
