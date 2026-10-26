"use client";

import React from "react";
import { Users, BookOpen, Heart, Sprout } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ImpactSection() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "2,500+",
      label: t("impactStatLives"),
      icon: <Users className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-700" />,
    },
    {
      value: "700+",
      label: t("impactStatChildren"),
      icon: <BookOpen className="w-8 h-8 sm:w-9 sm:h-9 text-sky-700" />,
    },
    {
      value: "1,200+",
      label: t("impactStatMedical"),
      icon: <Heart className="w-8 h-8 sm:w-9 sm:h-9 text-rose-500 fill-rose-500" />,
    },
    {
      value: "350+",
      label: t("impactStatFamilies"),
      icon: <Sprout className="w-8 h-8 sm:w-9 sm:h-9 text-amber-600" />,
    },
  ];

  return (
    <section className="relative w-full pt-12 pb-10 sm:pt-16 sm:pb-14 mt-8 sm:mt-10 mb-6 bg-[#EDF7F2]">
      {/* Top gentle wave */}
      <div className="absolute -top-5 left-0 right-0 h-6 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-6 fill-[#EDF7F2]"
        >
          <path d="M0,0 C200,60 400,-20 600,40 C800,100 1000,10 1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Bottom gentle wave */}
      <div className="absolute -bottom-5 left-0 right-0 h-6 overflow-hidden leading-none pointer-events-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-6 fill-[#EDF7F2]"
        >
          <path d="M0,0 C200,60 400,-20 600,40 C800,100 1000,10 1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Title: "Our Impact" */}
          <div className="lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            <h2 className="font-handwriting text-4xl sm:text-5xl font-bold text-slate-800 tracking-wide transform -rotate-3">
              {t("impactTitle")}
            </h2>
            <div className="w-20 h-1.5 bg-amber-400 rounded-full mt-1 transform -rotate-1 shadow-xs" />
          </div>

          {/* Right: 4 Stat Items */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 items-center">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <div className="shrink-0">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
