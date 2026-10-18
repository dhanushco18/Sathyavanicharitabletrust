"use client";

import React, { useState, useEffect } from "react";
import { Languages } from "lucide-react";
import { SupportedLanguage } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "header" | "footer";
}

export function LanguageSwitcher({ className, variant = "header" }: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>("en");

  useEffect(() => {
    // Check saved language preference from localStorage
    const saved = localStorage.getItem("sathiya_pref_lang") as SupportedLanguage;
    if (saved === "ta" || saved === "en") {
      setCurrentLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const handleToggle = (lang: SupportedLanguage) => {
    setCurrentLang(lang);
    localStorage.setItem("sathiya_pref_lang", lang);
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent("sathiya_language_changed", { detail: { lang } }));
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl p-0.5 border text-xs font-semibold select-none",
        variant === "header"
          ? "bg-slate-50 border-slate-200 text-slate-700"
          : "bg-slate-800/80 border-slate-700 text-slate-300",
        className
      )}
      role="group"
      aria-label="Language selection / மொழி தேர்வு"
    >
      <button
        type="button"
        onClick={() => handleToggle("en")}
        className={cn(
          "px-2 py-1 rounded-lg transition-all text-xs font-bold",
          currentLang === "en"
            ? variant === "header"
              ? "bg-white text-brand-navy shadow-sm"
              : "bg-brand-navy text-white shadow-sm"
            : "hover:text-brand-navy"
        )}
        aria-pressed={currentLang === "en"}
      >
        EN
      </button>

      <span className="text-slate-300 dark:text-slate-600 px-0.5" aria-hidden="true">
        |
      </span>

      <button
        type="button"
        onClick={() => handleToggle("ta")}
        className={cn(
          "px-2 py-1 rounded-lg transition-all text-xs font-bold font-tamil",
          currentLang === "ta"
            ? variant === "header"
              ? "bg-brand-amber text-slate-950 shadow-sm"
              : "bg-brand-amber text-slate-950 shadow-sm"
            : "hover:text-brand-amber"
        )}
        aria-pressed={currentLang === "ta"}
      >
        தமிழ்
      </button>
    </div>
  );
}
