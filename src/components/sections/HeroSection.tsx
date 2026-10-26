"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, GraduationCap, Sprout, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t, trans } = useLanguage();

  const quickPillars = [
    {
      title: t("heroPillarEducationTitle"),
      description: t("heroPillarEducationDesc"),
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
      iconBg: "bg-sky-100",
      href: "/programs/education",
    },
    {
      title: t("heroPillarHealthcareTitle"),
      description: t("heroPillarHealthcareDesc"),
      icon: <Heart className="w-6 h-6 text-rose-500 fill-rose-500/20" />,
      iconBg: "bg-rose-100",
      href: "/programs/child-development",
    },
    {
      title: t("heroPillarLivelihoodTitle"),
      description: t("heroPillarLivelihoodDesc"),
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      href: "/programs/community-outreach",
    },
    {
      title: t("heroPillarCommunityTitle"),
      description: t("heroPillarCommunityDesc"),
      icon: <Users className="w-6 h-6 text-amber-600" />,
      iconBg: "bg-amber-100",
      href: "/programs/community-outreach",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] flex items-center overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-children.jpg"
            alt="Joyful Indian school children smiling warmly at Sathiyavani Charitable Trust learning center"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center sm:object-[center_35%]"
          />
          {/* Gradient Overlay for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline & CTAs (8 cols) */}
            <div className="lg:col-span-8 text-left space-y-4 sm:space-y-5">
              {/* Top Tagline */}
              <span className="inline-block text-amber-400 font-bold text-xs sm:text-sm tracking-widest uppercase font-heading drop-shadow-sm">
                {t("heroTagline")}
              </span>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] drop-shadow-md">
                {t("heroTitle1")}<br />
                {t("heroTitle2")}<br />
                <span className="text-amber-400 font-serif font-bold">
                  {t("heroTitle3")}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed drop-shadow-sm">
                {t("heroSubtitle")}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 sm:pt-4">
                <Link
                  href="/sponsor"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white font-bold text-sm sm:text-base bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Heart className="w-4 h-4 fill-white text-white" aria-hidden="true" />
                  <span>{t("actionDonateNow")}</span>
                </Link>

                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white font-bold text-sm sm:text-base bg-black/40 hover:bg-black/60 border border-white/40 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Users className="w-4 h-4 text-white" aria-hidden="true" />
                  <span>{t("navGetInvolved")}</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Floating Handwritten Sticker Badge */}
            <div className="hidden lg:flex lg:col-span-4 justify-end relative">
              <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="relative bg-[#FFFBF0] border-2 border-amber-200/90 shadow-2xl rounded-2xl px-6 py-5 text-center min-w-[210px] backdrop-blur-sm">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-amber-200/80 rounded-sm shadow-xs" />

                  <div className="font-handwriting text-3xl sm:text-4xl text-slate-900 font-bold leading-tight">
                    {trans("Small", "சிறு")} <span className="text-rose-500 font-sans inline-block align-middle">♡</span><br />
                    {trans("Actions", "முயற்சி")}<br />
                    <span className="text-slate-900">{trans("Big Impact", "பெரும் மாற்றம்")}</span>
                  </div>

                  <svg
                    className="w-24 h-3 mx-auto mt-2 text-amber-500 stroke-current"
                    viewBox="0 0 100 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7C25 2 70 2 98 8"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating 4 Quick Feature Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-18 lg:-mt-22">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-elevated border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-full ${pillar.iconBg} flex items-center justify-center mb-4 shadow-xs`}
                >
                  {pillar.icon}
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 mb-1.5">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <Link
                href={pillar.href}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors group pt-2"
              >
                <span>{trans("Learn More", "மேலும் அறிய")}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
