"use client";

import React from "react";
import { Globe } from "lucide-react";
import { SupportedLanguage } from "@/lib/i18n/translations";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "header" | "footer";
  showIcon?: boolean;
}

export function LanguageSwitcher({
  className,
  variant = "header",
  showIcon = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setLanguage(lang);
    try {
      localStorage.setItem("sathiya_pref_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // Safe fallback when localStorage is restricted
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl p-0.5 border text-xs font-semibold select-none transition-all",
        variant === "header"
          ? "bg-slate-100/90 border-slate-200/90 text-slate-700 shadow-2xs"
          : "bg-slate-800/80 border-slate-700 text-slate-300",
        className
      )}
      role="group"
      aria-label="Language selection / மொழி தேர்வு"
    >
      {showIcon && (
        <Globe
          className={cn(
            "w-3.5 h-3.5 ml-1.5 mr-1 shrink-0",
            variant === "header" ? "text-slate-500" : "text-slate-400"
          )}
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        onClick={() => handleLanguageChange("en")}
        className={cn(
          "px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-lg transition-all text-xs font-bold tracking-wide",
          language === "en"
            ? variant === "header"
              ? "bg-white text-slate-900 shadow-xs border border-slate-200/90"
              : "bg-brand-navy text-white shadow-xs border border-brand-navy-light/40"
            : variant === "header"
            ? "hover:text-slate-950 text-slate-600 border border-transparent"
            : "hover:text-white text-slate-400 border border-transparent"
        )}
        aria-pressed={language === "en"}
        title="Switch to English"
      >
        EN
      </button>

      <span
        className={cn(
          "px-0.5 select-none",
          variant === "header" ? "text-slate-300" : "text-slate-600"
        )}
        aria-hidden="true"
      >
        |
      </span>

      <button
        type="button"
        onClick={() => handleLanguageChange("ta")}
        className={cn(
          "px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-lg transition-all text-xs font-bold tracking-wide",
          language === "ta"
            ? variant === "header"
              ? "bg-amber-400 text-slate-950 shadow-xs border border-amber-500/80 font-bold"
              : "bg-amber-400 text-slate-950 shadow-xs border border-amber-500/80 font-bold"
            : variant === "header"
            ? "hover:text-slate-950 text-slate-600 border border-transparent"
            : "hover:text-amber-300 text-slate-400 border border-transparent"
        )}
        aria-pressed={language === "ta"}
        title="தமிழுக்கு மாற்றவும் (Switch to Tamil)"
      >
        தமிழ்
      </button>
    </div>
  );
}
