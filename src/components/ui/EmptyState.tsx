import React from "react";
import { FileSearch } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  note?: string;
  className?: string;
  action?: React.ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  note,
  className,
  action,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-brand-muted/70 rounded-2xl border border-dashed border-slate-300 max-w-2xl mx-auto",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-500 shadow-sm mb-4">
        {icon || <FileSearch className="w-6 h-6 text-brand-navy/60" aria-hidden="true" />}
      </div>

      <h4 className="font-heading text-lg font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed max-w-md mb-4">{description}</p>

      {note && (
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-4">
          <span>ℹ️ {note}</span>
        </div>
      )}

      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
