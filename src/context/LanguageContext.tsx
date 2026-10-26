"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SupportedLanguage, TRANSLATIONS, Translations } from "@/lib/i18n/translations";

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  isTamil: boolean;
  t: (key: keyof Translations) => string;
  translations: Translations;
  trans: (enText: string, taText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. Check saved language preference from localStorage
    const saved = localStorage.getItem("sathiya_pref_lang") as SupportedLanguage;
    if (saved === "ta" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }

    // 2. Listen to custom event dispatched anywhere (e.g., legacy switchers or scripts)
    const handleExternalChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: SupportedLanguage }>;
      if (customEvent.detail?.lang && (customEvent.detail.lang === "ta" || customEvent.detail.lang === "en")) {
        setLanguageState(customEvent.detail.lang);
        document.documentElement.lang = customEvent.detail.lang;
      }
    };

    window.addEventListener("sathiya_language_changed", handleExternalChange);
    return () => window.removeEventListener("sathiya_language_changed", handleExternalChange);
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("sathiya_pref_lang", lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new CustomEvent("sathiya_language_changed", { detail: { lang } }));
    } catch {
      // localStorage might fail in restricted iframe / storage quotas
    }
  };

  const currentTranslations = TRANSLATIONS[language];

  const t = (key: keyof Translations): string => {
    return currentTranslations[key] || TRANSLATIONS.en[key] || String(key);
  };

  const trans = (enText: string, taText: string): string => {
    return language === "ta" ? taText : enText;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isTamil: language === "ta",
        t,
        translations: currentTranslations,
        trans,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback for non-provider renders
    return {
      language: "en",
      setLanguage: () => {},
      isTamil: false,
      t: (key: keyof Translations) => TRANSLATIONS.en[key] || String(key),
      translations: TRANSLATIONS.en,
      trans: (enText: string) => enText,
    };
  }
  return context;
}
