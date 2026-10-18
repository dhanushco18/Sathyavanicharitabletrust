import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  category?: string;
  categoryVariant?: "navy" | "amber" | "terracotta" | "teal" | "neutral";
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
  titleClassName?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  category,
  categoryVariant = "navy",
  title,
  description,
  align = "left",
  inverted = false,
  className,
  titleClassName,
  as: Component = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-12",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {category && (
        <div className="mb-3">
          <Badge variant={categoryVariant} size="sm">
            {category}
          </Badge>
        </div>
      )}

      <Component
        className={cn(
          "font-heading font-extrabold tracking-tight",
          Component === "h1"
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.12]"
            : "text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-[1.2]",
          inverted && "text-white",
          titleClassName
        )}
      >
        {title}
      </Component>

      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed",
            inverted ? "text-slate-200" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
