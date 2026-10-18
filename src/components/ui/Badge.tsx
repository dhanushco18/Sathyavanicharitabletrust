import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "navy" | "amber" | "terracotta" | "teal" | "neutral" | "provisional";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "navy",
  size = "md",
  ...props
}: BadgeProps) {
  const variants = {
    navy: "bg-brand-navy-soft text-brand-navy border border-brand-navy/15",
    amber: "bg-brand-amber-soft text-brand-amber-hover border border-brand-amber/20",
    terracotta: "bg-brand-terracotta-soft text-brand-terracotta border border-brand-terracotta/20",
    teal: "bg-brand-teal-soft text-brand-teal border border-brand-teal/20",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    provisional: "bg-amber-50 text-amber-900 border border-amber-300 font-mono text-[11px]",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 rounded-full tracking-wide uppercase font-semibold",
    md: "text-xs px-2.5 py-1 rounded-full font-medium",
  };

  return (
    <span
      className={cn("inline-flex items-center gap-1 select-none whitespace-nowrap", variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
