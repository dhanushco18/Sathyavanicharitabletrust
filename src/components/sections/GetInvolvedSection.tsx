"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GetInvolvedSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-20 sm:py-24 my-6 overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/cta-hands-sapling.jpg"
          alt="Hands gently holding soil with green sprout seedling representing community hope"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 sm:bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Headline & CTAs (9 cols) */}
          <div className="lg:col-span-9 text-center lg:text-left space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {t("getInvolvedHeading")}
            </h2>

            <p className="text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t("getInvolvedSubhead")}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                href="/sponsor"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-white text-white" aria-hidden="true" />
                <span>{t("actionDonateNow")}</span>
              </Link>

              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-black/45 hover:bg-black/65 border border-white/40 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Users className="w-4 h-4 text-white" aria-hidden="true" />
                <span>{t("actionBecomeVolunteer")}</span>
              </Link>
            </div>
          </div>

          {/* Right Script Accent Badge */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="text-center lg:text-right transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <span className="font-handwriting text-3xl sm:text-4xl text-amber-200 font-bold leading-tight drop-shadow-md block">
                {t("togetherTomorrowBadge1")}<br />
                {t("togetherTomorrowBadge2")}
              </span>
              <div className="text-rose-400 text-2xl mt-1">♡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
