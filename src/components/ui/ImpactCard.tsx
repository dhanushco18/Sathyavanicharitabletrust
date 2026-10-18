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
        "relative flex flex-col justify-between p-6 sm:p-7 bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card transition-all duration-200",
        className
      )}
    >
      <div>
        {/* Verification Status Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
            {metric.period}
          </span>
          {metric.isAudited ? (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"
              title="Verified organizational milestone"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-600" aria-hidden="true" />
              Verified
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-900 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-300"
              title="Historical self-report pending independent social audit"
            >
              <FileText className="w-3 h-3 text-amber-700" aria-hidden="true" />
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
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
        <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
        <span className="leading-snug">Source: {metric.verificationSource}</span>
      </div>
    </div>
  );
}
