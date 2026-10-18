import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  FileCheck2,
  Calendar,
  Info,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  HelpCircle,
  Download,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ImpactCard } from "@/components/ui/ImpactCard";
import {
  DIWALI_GROWTH_HISTORY,
  SITE_CONFIG,
} from "@/lib/constants";
import { getPublicImpactMetrics } from "@/lib/db/public-queries";

export const metadata: Metadata = {
  title: "Impact, Verification & Accountability | Sathiyavani Trust",
  description:
    "Transparent reporting on verified beneficiaries, documented festival distributions, student retention milestones, and our social audit methodology in Chennai.",
};

export default async function ImpactPage() {
  const breadcrumbItems = [{ label: "Impact & Evidence" }];
  const dbMetrics = await getPublicImpactMetrics();

  const displayMetrics = dbMetrics.map((m) => ({
    id: m.id,
    key: m.metric_key,
    label: m.title,
    value: m.numeric_value,
    suffix: m.display_suffix,
    period: m.reporting_period,
    verificationSource: m.verification_source,
    isAudited: m.status === "published",
  }));

  const metricDefinitions = [
    {
      metric: "Diwali Gift Beneficiaries",
      definition:
        "The logged count of distinct children and vulnerable family units receiving physical festival packages (new clothes, sweets, and educational kits) recorded in distribution rosters.",
      source: "Physical Signature & Handover Ledgers",
      frequency: "Annual (Diwali Season)",
    },
    {
      metric: "Tuition Center Retention",
      definition:
        "Students attending daily after-school study sessions at the Library Learning Center who successfully transition into their next academic standard without dropout.",
      source: "Tuition Attendance Registers",
      frequency: "Academic Year Basis",
    },
    {
      metric: "School Fee Sponsorships",
      definition:
        "Direct financial fee disbursements made to accredited schools on behalf of verified first-generation students at imminent risk of discontinuing education.",
      source: "Institutional Fee Receipts & Bank Vouchers",
      frequency: "Term / Annual Schedule",
    },
    {
      metric: "Saplings Planted & Nurtured",
      definition:
        "Native trees planted during civic greening drives in collaboration with Exnora, monitored for continuous survival by student green ambassadors.",
      source: "Drive Registers & Exnora Joint Logs",
      frequency: "Seasonal Greening Drives",
    },
  ];

  return (
    <div className="bg-brand-canvas min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-brand-muted/70 border-b border-slate-200">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="teal" size="md">
                Social Accountability
              </Badge>
              <Badge variant="navy" size="md">
                Documented Evidence
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Documented Impact, Grounded in Real Grassroots Verification
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We reject fabricated counters and unverified claims. Every number published on this
              platform corresponds to documented physical distribution ledgers, classroom rosters,
              or verified organizational milestones.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Verified Numbers */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="space-y-12">
            <div>
              <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                Documented Baselines
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Verified Operational Metrics
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Data last verified: October 2024 distribution ledger audit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayMetrics.map((metric) => (
                <ImpactCard key={metric.id} metric={metric} />
              ))}
            </div>

            {/* Historical Progression of the Diwali Joy Initiative */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-subtle space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <span className="text-xs uppercase font-bold text-brand-amber tracking-wider block">
                    Historical Growth
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Diwali Beneficiary Milestones (2019 – 2025)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Cumulative physical kit distributions logged across Chennai drives.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-brand-muted px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
                  <FileCheck2 className="w-4 h-4 text-brand-navy" />
                  <span>Physical Ledger Audit</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-brand-navy text-white text-xs uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Year</th>
                      <th className="py-3 px-4 font-semibold">Documented Beneficiaries</th>
                      <th className="py-3 px-4 font-semibold">Distribution Milestone / Status</th>
                      <th className="py-3 px-4 font-semibold">Verification Audit Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {DIWALI_GROWTH_HISTORY.map((row) => (
                      <tr
                        key={row.year}
                        className={row.year === "2025" ? "bg-amber-50/50" : "hover:bg-slate-50"}
                      >
                        <td className="py-3.5 px-4 font-heading font-bold text-slate-900">
                          {row.year}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-brand-navy">
                          {row.count}
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          {row.year === "2025" ? (
                            <span className="text-amber-800 font-semibold">
                              Provisional target (Active mobilization)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{row.status}</span>
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-500">
                          {row.year === "2025"
                            ? "Awaiting post-drive distribution audit"
                            : "Physical Signature & Handover Ledger"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Data Audit Governance Note */}
              <div className="p-4 bg-brand-muted/70 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 block">
                  * Note on 2025 and Future Data:
                </span>
                <p>
                  Sathiyavani Charitable Trust records completed counts only after physical gift
                  handovers are finalized and audited. Figures for 2026 are not published ahead of
                  actual operations.
                </p>
              </div>
            </div>

            {/* Metric Definitions & Methodology */}
            <div className="space-y-6">
              <div className="max-w-2xl">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Methodology & Definitions
                </span>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mt-1">
                  How We Count and Verify Social Impact
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Clear, public criteria for how each programmatic outcome is defined and substantiated.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {metricDefinitions.map((item, idx) => (
                  <Card key={idx} variant="default" className="p-6 space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <h4 className="font-heading text-base font-bold text-slate-900">
                        {item.metric}
                      </h4>
                      <Badge variant="navy" size="sm">
                        {item.frequency}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.definition}
                    </p>
                    <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-brand-teal" />
                      <span>Audit Source: {item.source}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Corporate CSR Diligence Callout */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-canvas border border-slate-200 text-center space-y-4">
              <ShieldCheck className="w-10 h-10 text-brand-navy mx-auto" />
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Institutional Due Diligence & Reporting
              </h3>
              <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                Corporate CSR committees and grantmakers requiring customized outcome reports,
                receipt verifications, or classroom visit logs may contact our administrative team
                directly.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button variant="primary" size="md" href="/partnerships">
                  Request Institutional CSR Dossier
                </Button>
                <Button variant="outline" size="md" href="/contact">
                  Schedule Center Inspection
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
