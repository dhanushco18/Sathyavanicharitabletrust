import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  HeartHandshake,
  Users,
  Sparkles,
  TreePine,
  ArrowRight,
} from "lucide-react";
import { Programme } from "@/lib/types";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: Programme;
  className?: string;
}

export function ProgramCard({ program, className }: ProgramCardProps) {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-brand-navy" aria-hidden="true" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-brand-amber" aria-hidden="true" />,
    Users: <Users className="w-6 h-6 text-brand-terracotta" aria-hidden="true" />,
    Sparkles: <Sparkles className="w-6 h-6 text-brand-amber" aria-hidden="true" />,
    TreePine: <TreePine className="w-6 h-6 text-brand-teal" aria-hidden="true" />,
  };

  const borderAccents = {
    navy: "group-hover:border-brand-navy/40",
    amber: "group-hover:border-brand-amber/40",
    terracotta: "group-hover:border-brand-terracotta/40",
    teal: "group-hover:border-brand-teal/40",
  };

  const bgAccents = {
    navy: "bg-brand-navy-soft text-brand-navy",
    amber: "bg-brand-amber-soft text-brand-amber-hover",
    terracotta: "bg-brand-terracotta-soft text-brand-terracotta",
    teal: "bg-brand-teal-soft text-brand-teal",
  };

  const topAccentBars = {
    navy: "bg-brand-navy",
    amber: "bg-brand-amber",
    terracotta: "bg-brand-terracotta",
    teal: "bg-brand-teal",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-subtle card-glow-hover overflow-hidden",
        borderAccents[program.accentColor],
        className
      )}
    >
      {/* Top Accent Line */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5",
          topAccentBars[program.accentColor]
        )}
      />

      <div>
        {/* Header Icon & Category */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs border border-white/60",
              bgAccents[program.accentColor]
            )}
          >
            {iconMap[program.iconName] || <GraduationCap className="w-6 h-6" />}
          </div>
          {program.badgeText && (
            <Badge variant={program.accentColor} size="sm">
              {program.badgeText}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-3 leading-snug">
          <Link href={program.href} className="focus:outline-none">
            <span className="absolute inset-0 rounded-2xl" aria-hidden="true" />
            {program.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
          {program.summary}
        </p>
      </div>

      {/* Footer Link & Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-brand-navy group-hover:text-brand-terracotta transition-colors">
        <span>Explore Initiative</span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
