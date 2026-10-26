"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gift,
  Heart,
  Users,
  Utensils,
  Shirt,
  Sparkles,
  GraduationCap,
  ArrowRight,
  X,
  CheckCircle2,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function FestivalSupportClient() {
  const { trans } = useLanguage();
  const [isApproachModalOpen, setIsApproachModalOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-10 sm:pb-14 lg:pt-8 lg:pb-14 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content (Cols: 6) */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 relative z-10">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
                <Link
                  href="/"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {trans("Home", "முகப்பு")}
                </Link>
                <span className="text-slate-400">&gt;</span>
                <Link
                  href="/programs"
                  className="text-amber-600 hover:text-amber-700 hover:underline transition-colors"
                >
                  {trans("Programs", "திட்டங்கள்")}
                </Link>
                <span className="text-slate-400">&gt;</span>
                <span className="text-slate-700 font-medium">
                  {trans("Festival Support", "பண்டிகைக்கால ஆதரவு")}
                </span>
              </div>

              {/* Tag / Pill */}
              <div>
                <span className="inline-block bg-[#FED467] text-amber-950 px-3.5 py-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider rounded-full shadow-2xs">
                  {trans("Festival Support Program", "பண்டிகைக்கால ஆதரவுத் திட்டம்")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.12]">
                {trans("Spreading Joy,", "மகிழ்ச்சியைப் பகிர்வோம்,")} <br />
                <span className="text-[#F59E0B]">
                  {trans("During Every Festival", "ஒவ்வொரு பண்டிகையிலும்")}
                </span>
              </h1>

              {/* Subtitle description */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                {trans(
                  "We bring happiness and hope to underprivileged families by supporting them during festivals, so they too can celebrate with dignity and joy.",
                  "பண்டிகைக் காலங்களில் ஏழை எளிய குடும்பங்களுக்கும் ஆதரவளித்து, அவர்களும் சுயமரியாதையுடனும் மகிழ்ச்சியுடனும் கொண்டாடுவதை உறுதிசெய்கிறோம்."
                )}
              </p>

              {/* 3 Feature Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <div className="flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-600" />
                  <span>{trans("Festival Kits", "பண்டிகைப் பெட்டகம்")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                  <span>{trans("Joy & Happiness", "மகிழ்ச்சியும் ஆனந்தமும்")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-orange-600" />
                  <span>{trans("Inclusive Celebration", "அனைவருக்குமான கொண்டாட்டம்")}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition (Cols: 6) */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src="/assets/images/prog-festival-hero.jpg"
                    alt="South Indian family celebrating Diwali with gift box, glowing clay diyas, and flowers"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-center hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Tilted Sticker */}
                <div className="absolute -top-4 sm:-top-6 right-0 sm:right-3 bg-white px-5 py-4 rounded-2xl shadow-xl border border-slate-100 rotate-6 transform hover:rotate-0 transition-transform duration-300 select-none z-20">
                  <div className="font-serif italic text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-wide text-right">
                    <div>{trans("Together,", "ஒன்றிணைந்து,")}</div>
                    <div>{trans("Let's Make", "பண்டிகைகளை")}</div>
                    <div className="text-slate-950 font-black">{trans("Festivals Brighter!", "ஒளிரச் செய்வோம்!")}</div>
                  </div>
                  <svg className="w-24 sm:w-28 h-3 text-amber-400 ml-auto mt-1" viewBox="0 0 100 12" fill="none">
                    <path
                      d="M3 8C26 2.5 72 2.5 97 9"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. MIDDLE SECTION: PROGRAM OVERVIEW + WHAT WE PROVIDE + DISTRIBUTION CARD */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* 1. Left Card: Program Overview */}
            <div className="lg:col-span-3 bg-[#F0F6FD] border border-blue-100/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2.5" />
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {trans("Program Overview", "திட்டத்தின் கண்ணோட்டம்")}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {trans(
                    "Our Festival Support Program ensures that no one is left behind during festivals. We provide essential kits, festive meals and clothing to families in need, spreading happiness and strengthening community bonds.",
                    "பண்டிகைக் காலங்களில் எந்தவொரு குடும்பமும் விடுபடாமல் இருக்க எங்கள் பண்டிகைக்கால ஆதரவுத் திட்டம் செயல்படுகிறது. அத்தியாவசியப் பொருட்கள், புத்தாடைகள் மற்றும் இனிப்புகளை வழங்கி சமூக பிணைப்பை பலப்படுத்துகிறோம்."
                  )}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsApproachModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0D2440] hover:bg-[#1E3A5F] text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 group cursor-pointer"
                >
                  <span>{trans("Our Approach", "எங்கள் அணுகுமுறை")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* 2. Middle Section: What We Provide */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {trans("What We Provide", "நாம் வழங்கும் உதவிகள்")}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 h-full">
                {/* 1. Festival Kits */}
                <div className="bg-[#FFF0F4] border border-pink-100/90 rounded-2xl p-4 text-center flex flex-col items-center justify-between group hover:shadow-xs transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#FFE4EE] text-[#E11D74] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <Gift className="w-6 h-6 text-[#E11D74]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug mb-1">
                      {trans("Festival Kits", "பண்டிகைப் பெட்டகம்")}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {trans("Essentials for major festivals", "முக்கியப் பண்டிகைக்கான தேவைகள்")}
                    </p>
                  </div>
                </div>

                {/* 2. Festive Meals */}
                <div className="bg-[#F0FAF5] border border-emerald-100/90 rounded-2xl p-4 text-center flex flex-col items-center justify-between group hover:shadow-xs transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <Utensils className="w-6 h-6 text-[#16A34A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug mb-1">
                      {trans("Festive Meals", "பண்டிகை உணவு")}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {trans("Nutritious meals for families", "குடும்பங்களுக்கான சத்தான உணவு")}
                    </p>
                  </div>
                </div>

                {/* 3. New Clothes */}
                <div className="bg-[#F5F2FD] border border-purple-100/90 rounded-2xl p-4 text-center flex flex-col items-center justify-between group hover:shadow-xs transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <Shirt className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug mb-1">
                      {trans("New Clothes", "புத்தாடைகள்")}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {trans("Dignity and joy for every child", "குழந்தைகளுக்கு சுயமரியாதை & மகிழ்ச்சி")}
                    </p>
                  </div>
                </div>

                {/* 4. Community Celebrations */}
                <div className="bg-[#FFF7ED] border border-orange-100/90 rounded-2xl p-4 text-center flex flex-col items-center justify-between group hover:shadow-xs transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform shadow-2xs">
                    <Users className="w-6 h-6 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug mb-1">
                      {trans("Community Celebrations", "சமூகக் கொண்டாட்டம்")}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {trans("Togetherness for a happier community", "ஒன்றிணைந்து கொண்டாடும் ஒற்றுமை")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Right Card: Gift Distribution Photo Card */}
            <div className="lg:col-span-3 rounded-3xl overflow-hidden relative shadow-xs border border-slate-200/80 bg-slate-100 flex flex-col justify-end min-h-[220px]">
              <Image
                src="/assets/images/prog-festival-distribution.jpg"
                alt="Volunteer handing festive Diwali gift package to grandmother in village"
                fill
                unoptimized
                className="object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              <div className="absolute -bottom-2 -right-1 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 rotate-2 select-none z-10">
                <div className="font-serif italic text-base sm:text-lg font-extrabold text-slate-900 leading-tight text-center">
                  <div>{trans("Festivals", "பண்டிகைகள்")}</div>
                  <div className="text-amber-600 font-black">{trans("for Everyone", "அனைவருக்கும்")}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. BOTTOM 3-CARD ROW: Our Impact | Testimonial (Meena) | Get Involved */}
      <section className="pt-10 sm:pt-14 pb-6">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* 1. Our Impact */}
            <div className="lg:col-span-5 bg-[#FFFCF6] border border-amber-200/70 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2" />
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                  {trans("Our Impact", "எங்கள் தாக்கம்")}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1 mb-5">
                  {trans("Bringing smiles during every celebration.", "ஒவ்வொரு கொண்டாட்டத்திலும் புன்னகையை ஏற்படுத்துதல்.")}
                </p>
              </div>

              {/* 4 Stat Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-1.5 shadow-2xs">
                    <Gift className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 block leading-tight">
                    5,000+
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Festival Kits Distributed", "வழங்கப்பட்ட பண்டிகைப் பெட்டகங்கள்")}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1.5 shadow-2xs">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 block leading-tight">
                    10,000+
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Individuals Benefited", "பயனடைந்த பொதுமக்கள்")}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-1.5 shadow-2xs">
                    <GraduationCap className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 block leading-tight">
                    50+
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Communities Supported", "ஆதரவளித்த பகுதிகள்")}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-1.5 shadow-2xs">
                    <Heart className="w-4 h-4 text-orange-600 fill-orange-600" />
                  </div>
                  <span className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 block leading-tight">
                    100%
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Joy Shared", "பகிரப்பட்ட மகிழ்ச்சி")}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Voices / Testimonial: Meena */}
            <div className="lg:col-span-4 bg-[#FFFCF6] border border-amber-200/70 rounded-3xl p-6 sm:p-7 flex flex-col justify-center shadow-xs relative">
              <span className="text-amber-400 text-4xl sm:text-5xl font-serif font-black leading-none block -mb-2 select-none">
                &ldquo;&ldquo;
              </span>

              <div className="flex items-center gap-4 my-1">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-amber-300/80 shadow-xs bg-amber-50">
                  <Image
                    src="/assets/images/festival-meena-child.jpg"
                    alt="Meena, child beneficiary of festival support"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                    &ldquo;{trans(
                      "Thanks to Sathiyavani Trust, I could celebrate Diwali with my family this year. It made me very happy!",
                      "சத்தியவாணி அறக்கட்டளைக்கு நன்றி, இந்த வருடம் என் குடும்பத்துடன் தீபாவளியை மகிழ்ச்சியாகக் கொண்டாட முடிந்தது!"
                    )}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-bold text-slate-900">
                    — {trans("Meena,", "மீனா,")}{" "}
                    <span className="text-slate-500 font-medium">
                      {trans("Beneficiary", "பயனடைந்த மாணவி")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Get Involved */}
            <div className="lg:col-span-3 bg-[#FFF0F4] border border-pink-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs relative overflow-hidden">
              <div className="absolute -bottom-2 -right-2 text-amber-500/90 pointer-events-none select-none">
                <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M50 18C50 18 42 32 42 42C42 47 45.5 50 50 50C54.5 50 58 47 58 42C58 32 50 18 50 18Z"
                    fill="#F59E0B"
                  />
                  <path
                    d="M50 24C50 24 45 34 45 42C45 45 47 47 50 47C53 47 55 45 55 42C55 34 50 24 50 24Z"
                    fill="#FDE047"
                  />
                  <path
                    d="M20 50C25 68 75 68 80 50C76 60 62 66 50 66C38 66 24 60 20 50Z"
                    fill="#D97706"
                  />
                  <path
                    d="M22 49C22 49 35 55 50 55C65 55 78 49 78 49C78 51 65 57 50 57C35 57 22 51 22 49Z"
                    fill="#FBBF24"
                  />
                  <path
                    d="M38 66L34 76H66L62 66H38Z"
                    fill="#B45309"
                  />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight mb-1.5">
                  {trans("Get Involved", "இணைந்திடுங்கள்")}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal max-w-[200px]">
                  {trans(
                    "Help us spread joy and hope during festivals.",
                    "பண்டிகைக் காலங்களில் மகிழ்ச்சியையும் நம்பிக்கையையும் பரப்ப உதவுங்கள்."
                  )}
                </p>
              </div>

              <div className="relative z-10 pt-2">
                <Link
                  href="/sponsor"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{trans("Donate Now", "நன்கொடை வழங்குக")}</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. BESPOKE BOTTOM NAVY BANNER */}
      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="bg-[#0B2545] text-white py-5 px-6 sm:px-10 rounded-2xl sm:rounded-3xl shadow-md border border-slate-700/50 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute -left-3 -bottom-4 text-emerald-500/25 pointer-events-none select-none">
              <svg className="w-20 h-20" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 90 Q 30 50, 80 40 Q 60 70, 10 90 Z" />
                <path d="M15 90 Q 40 40, 90 20 Q 60 60, 15 90 Z" />
              </svg>
            </div>

            <div className="absolute -right-3 -top-4 text-emerald-500/25 pointer-events-none select-none">
              <svg className="w-20 h-20" viewBox="0 0 100 100" fill="currentColor">
                <path d="M90 10 Q 70 50, 20 60 Q 40 30, 90 10 Z" />
                <path d="M85 10 Q 60 60, 10 80 Q 40 40, 85 10 Z" />
              </svg>
            </div>

            <div className="flex items-center gap-4 relative z-10 text-center md:text-left">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="font-heading text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white">
                {trans("Together, let's ensure that every festival is a time of", "ஒன்றாக இணைந்து ஒவ்வொரு பண்டிகையும் அனைவருக்கும்")}{" "}
                <span className="font-serif italic text-amber-300 font-semibold">
                  {trans("happiness for all.", "மகிழ்ச்சியைத் தருவதை உறுதிசெய்வோம்.")}
                </span>
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
              >
                <Users className="w-4 h-4 text-white" />
                <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. APPROACH & WELFARE PROTOCOL MODAL */}
      {isApproachModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="festival-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-150">
            <button
              type="button"
              onClick={() => setIsApproachModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{trans("Festive Support Framework", "பண்டிகை ஆதரவுக் கட்டமைப்பு")}</span>
            </div>

            <h3 id="festival-modal-title" className="font-serif text-2xl font-bold text-slate-900 mb-3">
              {trans("Dignified Festive Giving & Inclusivity", "சுயமரியாதையுடன் கூடிய பண்டிகை உதவிகள்")}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              {trans(
                "Our festival support program brings light and dignity to roadside and tribal families. We ensure all gifts are brand new, tailored to size, and distributed respectfully.",
                "சாலையோர மற்றும் பழங்குடியின எளிய குடும்பங்களுக்கு ஒளிமயமான பண்டிகையை உருவாக்க புதிய ஆடைகள், இனிப்புகள் மற்றும் பள்ளி உபகரணங்களை சுயமரியாதையுடன் வழங்குகிறோம்."
              )}
            </p>

            <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed mb-6">
              <div className="flex items-start gap-3 p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Individual Sizing & Brand New Clothes:", "சரியான அளவு & புத்தம் புதிய ஆடைகள்:")}</strong>{" "}
                  {trans(
                    "Every enrolled child receives brand-new festive traditional attire measured accurately in advance.",
                    "ஒவ்வொரு குழந்தைக்கும் முன்கூட்டியே அளவெடுக்கப்பட்டு புத்தம் புதிய பாரம்பரியப் புத்தாடைகள் வழங்கப்படுகின்றன."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Family Sweet & Nutrition Boxes:", "இனிப்பு & மளிகைப் பெட்டகங்கள்:")}</strong>{" "}
                  {trans(
                    "Sweets, savouries, and grocery provisions ensure the entire household can celebrate and cook together.",
                    "இனிப்புகள், பலகாரங்கள் மற்றும் அத்தியாவசிய உணவு மளிகைப் பொருட்கள் மூலம் குடும்பம் மகிழ்ந்து சமைக்க உதவுகிறது."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Educational Motivation Kits:", "கல்வி ஊக்குவிப்புப் பெட்டகம்:")}</strong>{" "}
                  {trans(
                    "Academic notebooks, geometry boxes, and books are paired with festive gifts to encourage schooling.",
                    "குறிப்பேடுகள், வரைபடக் கருவிகள் மற்றும் புத்தகங்கள் பண்டிகைப் பரிசுகளுடன் வழங்கப்பட்டு கல்வி கற்கும் ஆர்வம் தூண்டப்படுகிறது."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Privacy & Child Safeguarding:", "தனியுரிமை & பாதுகாப்பு:")}</strong>{" "}
                  {trans(
                    "Respectful, private community handover without exploitative photo ops or media spectacle.",
                    "ஊடக விளம்பரங்கள் மற்றும் புகைப்படக் காட்சிப்படுத்தல் இன்றி மரியாதையுடன் தனிப்பட்ட முறையில் உதவிகள் சேர்ப்பிக்கப்படுகின்றன."
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsApproachModalOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {trans("Close", "மூடுக")}
              </button>
              <Link
                href="/volunteer"
                onClick={() => setIsApproachModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-[#FED467] hover:bg-[#F5B82E] text-slate-950 font-bold text-xs sm:text-sm shadow-xs transition-all"
              >
                {trans("Volunteer for Festive Drive", "பண்டிகைப் பணிக்கு தன்னார்வலராக இணையுங்கள்")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
