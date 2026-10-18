import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "navy" | "secondary" | "outline" | "amber" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  icon,
  iconPosition = "left",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none rounded-xl";

  const variants = {
    primary:
      "bg-brand-terracotta text-white hover:bg-brand-terracotta-hover active:bg-brand-terracotta-hover/90 shadow-sm shadow-brand-terracotta/20 focus-visible:outline-brand-terracotta",
    navy:
      "bg-brand-navy text-white hover:bg-brand-navy-light active:bg-brand-navy-dark shadow-sm shadow-brand-navy/20 focus-visible:outline-brand-navy",
    amber:
      "bg-brand-amber text-white hover:bg-brand-amber-hover shadow-sm shadow-brand-amber/20 focus-visible:outline-brand-amber",
    secondary:
      "bg-white border-2 border-brand-navy text-brand-navy hover:bg-brand-navy-soft active:bg-brand-navy/10 focus-visible:outline-brand-navy",
    outline:
      "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-slate-600",
    ghost:
      "bg-transparent text-brand-navy hover:bg-brand-navy-soft active:bg-brand-navy/10 focus-visible:outline-brand-navy",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-sm shadow-green-600/20 focus-visible:outline-green-600",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 min-h-[36px] gap-1.5",
    md: "text-sm px-5 py-2.5 min-h-[44px] gap-2 sm:min-h-[48px]",
    lg: "text-base px-7 py-3.5 min-h-[48px] sm:min-h-[52px] gap-2.5 font-semibold",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
