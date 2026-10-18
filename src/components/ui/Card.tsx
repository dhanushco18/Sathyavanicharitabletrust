import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "flat" | "bordered" | "interactive";
}

export function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white border border-slate-200/80 shadow-subtle rounded-2xl",
    elevated: "bg-white border border-slate-100 shadow-card hover:shadow-elevated rounded-2xl transition-all duration-300",
    flat: "bg-brand-muted border border-slate-200/60 rounded-2xl",
    bordered: "bg-white border-2 border-slate-200 rounded-2xl",
    interactive:
      "bg-white border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-brand-navy/30 hover:-translate-y-1 transition-all duration-300 rounded-2xl cursor-pointer",
  };

  return (
    <div className={cn("overflow-hidden", variants[variant], className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 sm:p-7 pb-3 sm:pb-4", className)} {...props}>{children}</div>;
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 sm:px-7 py-2 sm:py-3", className)} {...props}>{children}</div>;
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 sm:p-7 pt-3 sm:pt-4 border-t border-slate-100 mt-auto", className)} {...props}>{children}</div>;
}
