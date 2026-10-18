import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  inverted?: boolean;
}

export function Breadcrumbs({ items, className, inverted = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("py-3 text-xs sm:text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center gap-1 transition-colors",
              inverted
                ? "text-slate-300 hover:text-white"
                : "text-slate-500 hover:text-brand-navy"
            )}
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                className={cn("w-3.5 h-3.5 shrink-0", inverted ? "text-slate-400" : "text-slate-400")}
                aria-hidden="true"
              />
              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-semibold truncate max-w-[200px] sm:max-w-none",
                    inverted ? "text-white" : "text-slate-900"
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    inverted
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-brand-navy"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
