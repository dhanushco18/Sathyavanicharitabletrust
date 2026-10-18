import React from "react";
import { formatIndianNumber, cn } from "@/lib/utils";
import { ImpactMetric } from "@/lib/types";
import { CheckCircle2, FileText, HelpCircle } from "lucide-react";

interface ImpactCardProps {
  metric: ImpactMetric;
  className?: string;
}

export function ImpactCard({ metric, className }: ImpactCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-subtle card-glow-hover overflow-hidden",
        className
      )}
    >
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-amber" />

      <div>
        {/* Verification Status Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
            {metric.period}
          </span>
          {metric.isAudited ? (
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200"
              title="Verified organizational milestone"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
              Verified
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300"
              title="Documented register entry"
            >
              <FileText className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
              Documented Record
            </span>
          )}
        </div>

        {/* Tabular Metric Value */}
        <div className="flex items-baseline gap-1 my-2">
          <span className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight">
            {formatIndianNumber(metric.value)}
          </span>
          {metric.suffix && (
            <span className="text-2xl sm:text-3xl font-bold text-brand-amber">
              {metric.suffix}
            </span>
          )}
        </div>

        {/* Metric Label */}
        <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mt-2">
          {metric.label}
        </h3>
      </div>

      {/* Verification Source Footer */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500 font-medium">
        <FileText className="w-3.5 h-3.5 text-brand-navy/60 shrink-0 mt-0.5" aria-hidden="true" />
        <span className="leading-snug">Source: {metric.verificationSource}</span>
      </div>
    </div>
  );
}
