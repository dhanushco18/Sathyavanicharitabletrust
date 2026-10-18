import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldAlert, FileCheck, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImpactCard } from "@/components/ui/ImpactCard";
import { VERIFIED_IMPACT_BASELINE, DIWALI_GROWTH_HISTORY } from "@/lib/constants";

export function ImpactSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            category="Accountability & Evidence"
            categoryVariant="teal"
            title="Measured Impact, Grounded in Real Verification"
            description="We believe social trust is earned through transparency. Rather than displaying unverified estimates, we report documented milestone records validated by physical registers and operational timelines."
            className="mb-0"
          />
        </div>

        {/* 4 Documented Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VERIFIED_IMPACT_BASELINE.map((metric) => (
            <ImpactCard key={metric.id} metric={metric} />
          ))}
        </div>

        {/* Historical Distribution Progression Panel */}
        <div className="bg-brand-canvas rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                Diwali Joy Initiative — Documented Beneficiary Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Annual gift kits (festive attire, sweets, learning stationery) delivered to underserved children.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
              <Info className="w-4 h-4 text-brand-navy" aria-hidden="true" />
              <span>Source: Annual Distribution Ledgers</span>
            </div>
          </div>

          {/* Responsive Growth Bar / Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {DIWALI_GROWTH_HISTORY.map((item) => (
              <div
                key={item.year}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  item.year === "2025"
                    ? "bg-amber-50/70 border-dashed border-amber-300"
                    : "bg-white border-slate-200 shadow-xs"
                }`}
              >
                <span className="text-xs font-semibold text-slate-500 block">
                  {item.year}
                </span>
                <span className="font-heading text-xl sm:text-2xl font-extrabold text-brand-navy block my-1">
                  {item.count}
                </span>
                <span className="text-[11px] text-slate-500 line-clamp-1" title={item.status}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* Audit & Transparency Footnote */}
          <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              * Note: The 2025 figure represents an active mobilization target for upcoming drives, not a completed tally.
            </p>
            <Link
              href="/impact"
              className="font-bold text-brand-navy hover:text-brand-terracotta transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore Detailed Social Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
