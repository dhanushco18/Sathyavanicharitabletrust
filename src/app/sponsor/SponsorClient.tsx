"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  Users,
  Lightbulb,
  Target,
  Heart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  HelpCircle,
  Copy,
  Check,
  X,
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/constants";
import { SponsorshipInquiryForm } from "@/components/forms/SponsorshipInquiryForm";
import { useLanguage } from "@/context/LanguageContext";

// Student testimonials for the interactive story carousel
const STUDENT_STORIES = [
  {
    name: "Kavya",
    nameTa: "காவ்யா",
    role: "Sponsored Student, Standard 9",
    roleTa: "மாணவி, 9-ம் வகுப்பு",
    image: "/assets/images/community-meena.jpg",
    quote:
      "With the support from Sathiyavani Trust, I can now study without worrying about fees. I dream of becoming a teacher and helping other children like me.",
    quoteTa:
      "சத்தியவாணி அறக்கட்டளையின் ஆதரவால் இப்போது கட்டணத்தைப் பற்றிய கவலையின்றி என்னால் படிக்க முடிகிறது. படித்து ஆசிரியராகி பிற குழந்தைகளுக்கு உதவுவதே என் கனவு.",
  },
  {
    name: "Karthik",
    nameTa: "கார்த்திக்",
    role: "Sponsored Student, Standard 10",
    roleTa: "மாணவர், 10-ம் வகுப்பு",
    image: "/assets/images/story-student-boy.jpg",
    quote:
      "The books and evening study center gave me the courage to score 92% in my board exams. I am the first in my family to pursue higher secondary education.",
    quoteTa:
      "புத்தகங்களும் மாலை நேர படிப்பு மையமும் எனக்கு தன்னம்பிக்கையை தந்து பொதுத்தேர்வில் 92% மதிப்பெண் பெற உதவியது. எங்கள் குடும்பத்தில் முதல் தலைமுறையாக மேல்நிலைக் கல்வி பயில்கிறேன்.",
  },
  {
    name: "Shalini",
    nameTa: "ஷாலினி",
    role: "Sponsored Student, Standard 11",
    roleTa: "மாணவி, 11-ம் வகுப்பு",
    image: "/assets/images/tuition-learning.jpg",
    quote:
      "Without the trust's educational grant, I would have had to drop out after 8th grade. Today, I am preparing for engineering entrance exams with confidence.",
    quoteTa:
      "அறக்கட்டளையின் கல்வி உதவித்தொகை இல்லையென்றால் 8-ம் வகுப்புடன் படிப்பை நிறுத்தியிருப்பேன். இன்று நம்பிக்கையுடன் பொறியியல் நுழைவுத் தேர்வுக்கு தயாராகி வருகிறேன்.",
  },
  {
    name: "Anand",
    nameTa: "ஆனந்த்",
    role: "Sponsored Student, Standard 8",
    roleTa: "மாணவர், 8-ம் வகுப்பு",
    image: "/assets/images/about-story-children.jpg",
    quote:
      "Having my own uniform, backpack, and geometry box made me feel proud every morning going to school. Thank you for believing in our future.",
    quoteTa:
      "எனக்கென சொந்த சீருடை, புத்தகப் பை, மற்றும் கணித உபகரணங்கள் கிடைத்தது பள்ளிக்கு செல்ல பெருமையளிக்கிறது. எங்கள் எதிர்காலத்தை நம்பியதற்கு மனமார்ந்த நன்றி.",
  },
];

const TRUST_BANK_DETAILS = {
  accountName: "Sathiyavani Charitable Trust",
  bankName: "State Bank of India",
  branch: "Chennai Main Branch",
  accountType: "Current Account (Trust)",
  accountNumber: "42109876543",
  ifsc: "SBIN0000800",
  upiId: "9841454501@sbi",
};

export function SponsorClient() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"bank" | "form">("form");
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const { t, trans, isTamil } = useLanguage();

  const breadcrumbItems = [
    { label: t("navHome"), href: "/" },
    { label: t("navGetInvolved"), href: "/get-involved" },
    { label: t("navSponsor") },
  ];

  const handleOpenSponsorModal = (planName: string, defaultTab: "bank" | "form" = "form") => {
    setSelectedPlan(planName);
    setModalTab(defaultTab);
    setIsModalOpen(true);
  };

  const handleCopyText = (text: string, fieldKey: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    } catch {
      // Insecure context fallback
    }
    setCopiedBankField(fieldKey);
    setTimeout(() => setCopiedBankField(null), 2500);
  };

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % STUDENT_STORIES.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + STUDENT_STORIES.length) % STUDENT_STORIES.length);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 selection:bg-rose-100 selection:text-rose-900">
      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-100/60 sticky top-16 z-20">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* =========================================================================
          HERO SECTION (Matching Mockup with Girl at Desk, Book Spine Stack & Sprout)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pb-20">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-100/40 via-rose-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-50/40 via-amber-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Tag */}
              <div className="flex items-center gap-2">
                <span className="w-8 h-[3px] bg-[#E59819] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F2942]">
                  {trans("SPONSOR A STUDENT", "மாணவருக்கு ஆதரவளியுங்கள்")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12]">
                <span className="text-[#0F2942] block">
                  {trans("Empower a Child", "ஒரு குழந்தையின் கல்வி")}
                </span>
                <span className="text-[#E59819] block mt-1">
                  {trans("Brighten a Future", "ஒளிமயமான எதிர்காலம்")}
                </span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t("sponsorHeroSubtitle")}
              </p>

              {/* 3 Value Pillars Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* 1. Quality Education */}
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 border border-rose-100 shadow-xs hover:border-rose-300 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Access to Quality Education", "தரமான இலவச கல்வி")}
                  </span>
                </div>

                {/* 2. Personal Development */}
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 border border-emerald-100 shadow-xs hover:border-emerald-300 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Personal Development", "தனித்திறன் & நல்வாழ்வு")}
                  </span>
                </div>

                {/* 3. Brighter Opportunities */}
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 border border-amber-100 shadow-xs hover:border-amber-300 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Brighter Opportunities", "சிறந்த நல்வாய்ப்புகள்")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Background decorative soft glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/30 via-rose-100/30 to-sky-100/30 rounded-3xl blur-xl" />

                {/* Main Hero Card Frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-white">
                  <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full">
                    <Image
                      src="/assets/images/sponsor-hero.jpg"
                      alt="Smiling Indian school girl at her classroom desk with stack of books and green plant seedling"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Subtle warm vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Doodle Overlay Top-Right: "A Little Support ♡ A Lifetime of Possibilities" */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-amber-100/80 -rotate-2 transform hover:rotate-0 transition-transform">
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#0F2942] leading-tight flex items-center gap-1.5">
                        <span>{trans("A Little Support", "சிறு ஆதரவு")}</span>
                        <span className="text-rose-500 font-sans not-italic text-sm">♡</span>
                      </p>
                      <p className="font-serif italic font-bold text-[11px] sm:text-xs text-[#0284C7] mt-0.5">
                        {trans("A Lifetime of Possibilities", "வாழ்நாள் நல்வாய்ப்புகள்")}
                      </p>
                    </div>

                    {/* Bottom-right interactive book stack label badge */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 hidden sm:flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-[11px] font-medium border border-white/20 shadow-md">
                      <span className="text-emerald-400">🌱</span>
                      <span>{trans("Education • Confidence • Tomorrow", "கல்வி • தன்னம்பிக்கை • எதிர்காலம்")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MIDDLE SECTION: "How Your Support Helps" (Left) & "Choose a Sponsorship Plan" (Right)
          ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white border-y border-amber-100/70 shadow-xs">
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-8 items-start">
            {/* Left 7 Columns: How Your Support Helps (4 Visual Cards) */}
            <div className="xl:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2942]">
                    How Your Support Helps
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Every rupee directly nurtures a student's holistic education journey.
                  </p>
                </div>
              </div>

              {/* 4 Cards Grid (2x2 on mobile/tablet, 4 columns on large desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 pt-2">
                {/* Card 1: Education Support */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/prog-education.jpg"
                      alt="Student studying with notebook and pen"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col">
                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center -mt-7 mb-2 relative z-10 border-2 border-white shadow-xs">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">
                      Education Support
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                      Covers school fees, books, uniforms and learning materials.
                    </p>
                  </div>
                </div>

                {/* Card 2: Learning & Mentoring */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-sky-200 transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/about-story-children.jpg"
                      alt="Smiling students in classroom learning together"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col">
                    <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center -mt-7 mb-2 relative z-10 border-2 border-white shadow-xs">
                      <Users className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">
                      Learning & Mentoring
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                      Access to guidance, extracurricular activities and life skills.
                    </p>
                  </div>
                </div>

                {/* Card 3: Personal Development */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-200 transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/sponsor-laptop.jpg"
                      alt="Student engaged in computer skills and personal development"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col">
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-[#E59819] flex items-center justify-center -mt-7 mb-2 relative z-10 border-2 border-white shadow-xs">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">
                      Personal Development
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                      Builds confidence, creativity and leadership skills.
                    </p>
                  </div>
                </div>

                {/* Card 4: Brighter Opportunities */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/tuition-learning.jpg"
                      alt="Young girl student smiling towards a bright future"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col">
                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center -mt-7 mb-2 relative z-10 border-2 border-white shadow-xs">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">
                      Brighter Opportunities
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                      Helps them pursue higher education and achieve their dreams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Choose a Sponsorship Plan (3 Pricing Cards) */}
            <div className="xl:col-span-5 space-y-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2942]">
                  Choose a Sponsorship Plan
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  You can sponsor a student fully or contribute a part of their education.
                </p>
              </div>

              {/* 3 Pricing Cards Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Plan 1: Full Sponsorship */}
                <div className="bg-[#FAF9F5] rounded-2xl border-2 border-rose-200/80 p-4 shadow-sm hover:shadow-md hover:border-rose-400 transition-all flex flex-col justify-between relative group">
                  {/* Subtle Top Badge */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                    Most Impact
                  </div>

                  <div className="text-center space-y-2 pt-1">
                    <div className="w-9 h-9 rounded-full bg-rose-100/70 text-rose-600 flex items-center justify-center mx-auto">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      Full Sponsorship
                    </h3>
                    <div className="space-y-0.5">
                      <div className="font-serif text-xl sm:text-2xl font-black text-[#0F2942]">
                        ₹ 12,000
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">
                        per year
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug pt-1">
                      Covers school fees, books, uniform, learning materials and essential support.
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenSponsorModal("Full Sponsorship (₹12,000/year)")}
                    className="mt-4 w-full py-2 px-3 bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9F1239] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow transition-all inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Sponsor Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Plan 2: Partial Sponsorship */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-sky-200/90 p-4 shadow-sm hover:shadow-md hover:border-sky-400 transition-all flex flex-col justify-between group">
                  <div className="text-center space-y-2 pt-1">
                    <div className="w-9 h-9 rounded-full bg-sky-100/80 text-[#0284C7] flex items-center justify-center mx-auto">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      Partial Sponsorship
                    </h3>
                    <div className="space-y-0.5">
                      <div className="font-serif text-xl sm:text-2xl font-black text-[#0F2942]">
                        ₹ 6,000
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">
                        per year
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug pt-1">
                      Contribute towards education expenses and academic kits for a student.
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenSponsorModal("Partial Sponsorship (₹6,000/year)")}
                    className="mt-4 w-full py-2 px-3 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#075985] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow transition-all inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Sponsor Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Plan 3: Custom Support */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-amber-200/90 p-4 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group">
                  <div className="text-center space-y-2 pt-1">
                    <div className="w-9 h-9 rounded-full bg-amber-100/80 text-[#E59819] flex items-center justify-center mx-auto">
                      <Heart className="w-5 h-5 fill-amber-400/40" />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      Custom Support
                    </h3>
                    <div className="space-y-0.5">
                      <div className="font-serif text-lg sm:text-xl font-black text-[#0F2942] py-0.5">
                        Any Amount
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">
                        flexible gift
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug pt-1">
                      Support based on your preference, frequency and financial availability.
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenSponsorModal("Custom Support (Any Amount)")}
                    className="mt-4 w-full py-2 px-3 bg-gradient-to-r from-[#E59819] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow transition-all inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Contribute Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          THIRD SECTION: 3 CARDS IN A ROW
          1. The Impact You Create
          2. A Student's Story (Interactive Testimonial Carousel)
          3. How It Works (4-Step Sequential Process)
          ========================================================================= */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Card 1: The Impact You Create (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                  The Impact You Create
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Real opportunities. Real progress. Real change.
                </p>

                {/* 2x2 Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {/* Stat 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-xl font-black text-slate-900 leading-none">
                        2,000+
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-1">
                        Students Supported
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-xl font-black text-slate-900 leading-none">
                        95%
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-1">
                        School Retention Rate
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-xl font-black text-slate-900 leading-none">
                        500+
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-1">
                        Moved to Higher Education
                      </div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#E59819] flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-base font-bold text-slate-900 leading-tight">
                        Stronger
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        Communities Empowered
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Audited public accounts & direct student receipts.</span>
              </div>
            </div>

            {/* Card 2: A Student's Story (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                    A Student's Story
                  </h3>
                  {/* Prev / Next controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevStory}
                      aria-label="Previous student story"
                      className="w-7 h-7 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextStory}
                      aria-label="Next student story"
                      className="w-7 h-7 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Active Student Slide */}
                <div className="flex items-start gap-4 pt-1">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-200 shadow-xs">
                    <Image
                      src={STUDENT_STORIES[currentStoryIndex].image}
                      alt={STUDENT_STORIES[currentStoryIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <span className="font-serif text-3xl sm:text-4xl text-[#0284C7] leading-none block -mb-2">
                      “
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                      {STUDENT_STORIES[currentStoryIndex].quote}
                    </p>
                    <div className="pt-1">
                      <div className="text-xs font-bold text-slate-900">
                        — {STUDENT_STORIES[currentStoryIndex].name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {STUDENT_STORIES[currentStoryIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
                {STUDENT_STORIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStoryIndex(idx)}
                    aria-label={`Go to story ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      currentStoryIndex === idx
                        ? "w-6 bg-[#0284C7]"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Card 3: How It Works (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                  How It Works
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  A seamless, dignified 4-step sponsorship process.
                </p>

                {/* 4 Steps Horizontal / Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
                  {/* Step 1 */}
                  <div className="text-center space-y-1.5 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      1
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      Choose a Plan
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      Select the option that suits you.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center space-y-1.5 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      2
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      Make Contribution
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      Complete secure direct transfer.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center space-y-1.5 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      3
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      We Connect
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      We match you with a student.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="text-center space-y-1.5 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#E59819] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      4
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      See the Impact
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      Receive academic reports & progress.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Help Trigger */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Need guidance on student selection?</span>
                <button
                  onClick={() => handleOpenSponsorModal("Full Sponsorship (₹12,000/year)", "bank")}
                  className="font-bold text-[#0F2942] hover:text-rose-600 inline-flex items-center gap-1"
                >
                  <span>Bank Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BOTTOM PANORAMIC HORIZON BANNER (Matching Mockup with Students Looking Out)
          ========================================================================= */}
      <section className="py-8 sm:py-14">
        <Container>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
            {/* Background Panorama Image */}
            <Image
              src="/assets/images/sponsor-students-horizon.jpg"
              alt="Five school children with backpacks looking towards a bright sunrise horizon"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Darker contrast overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/60" />

            {/* Left Cursive Script Doodle */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-12 max-w-xs text-white z-10 hidden sm:block">
              <p className="font-serif italic font-bold text-lg sm:text-2xl text-amber-200 drop-shadow-md leading-tight">
                Education Today, <br />
                <span className="text-white">A Brighter Tomorrow</span>{" "}
                <span className="text-rose-400 not-italic">♡</span>
              </p>
            </div>

            {/* Center Floating Navy CTA Card */}
            <div className="relative z-10 max-w-xl mx-4 sm:mx-auto bg-[#0F2942]/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center text-white border border-white/20 shadow-2xl space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                Be the Reason for a Brighter Future
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-md mx-auto">
                Sponsor a student today and help them build a better, kinder tomorrow with quality
                education and mentorship.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                {/* Primary Button */}
                <button
                  onClick={() => handleOpenSponsorModal("Full Sponsorship (₹12,000/year)")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9F1239] text-white font-bold text-xs rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Heart className="w-4 h-4 fill-white/20" />
                  <span>Sponsor a Student</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Button */}
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/30 backdrop-blur-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Have Questions? Contact Us →</span>
                </Link>
              </div>
            </div>

            {/* Right Whimsical Tilted Paper Sticker */}
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-10 hidden md:block">
              <div className="bg-[#FAF9F5] text-slate-800 p-3.5 sm:p-4 rounded-xl shadow-xl border-2 border-amber-200/90 rotate-3 hover:rotate-0 transition-transform max-w-[200px]">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    🌱
                  </div>
                  <div className="text-[11px] font-serif font-bold text-slate-900 leading-snug">
                    Invest in Education, <br />
                    <span className="text-[#E59819]">Invest in a Brighter Tomorrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          DIRECT SPONSORSHIP MODAL
          Allows either submitting a personalized pledge inquiry or viewing bank details
          ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div
            className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-[#0F2942] to-[#1E3A5F] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">
                  Sathiyavani Charitable Trust
                </span>
                <h3 className="font-serif text-lg font-bold">
                  Sponsor a Student's Future
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold">
              <button
                onClick={() => setModalTab("form")}
                className={`flex-1 py-3 px-4 text-center border-b-2 transition-colors ${
                  modalTab === "form"
                    ? "border-[#E11D48] text-[#E11D48] bg-white"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                1. Submit Pledge Inquiry
              </button>
              <button
                onClick={() => setModalTab("bank")}
                className={`flex-1 py-3 px-4 text-center border-b-2 transition-colors ${
                  modalTab === "bank"
                    ? "border-[#0284C7] text-[#0284C7] bg-white"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                2. Direct Trust Bank Details
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              {modalTab === "form" ? (
                <div>
                  <div className="mb-4 p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between">
                    <span>
                      Selected Plan: <strong>{selectedPlan || "Full Sponsorship (₹12,000/year)"}</strong>
                    </span>
                    <button
                      onClick={() => setModalTab("bank")}
                      className="text-[11px] underline font-bold text-[#0F2942]"
                    >
                      View Bank Details
                    </button>
                  </div>
                  <SponsorshipInquiryForm initialTier={selectedPlan || undefined} />
                </div>
              ) : (
                <div className="space-y-4 text-xs">
                  <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl space-y-1">
                    <span className="font-bold text-[#0F2942] block text-sm">
                      Official Trust Current Account
                    </span>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Contributions are deposited directly into the registered State Bank of India
                      (SBI) Trust Account. No third-party commissions are deducted.
                    </p>
                  </div>

                  {/* Bank Account Fields */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                    {/* Account Name */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">
                          Account Name
                        </span>
                        <span className="font-bold text-slate-900 text-xs">
                          {TRUST_BANK_DETAILS.accountName}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          handleCopyText(TRUST_BANK_DETAILS.accountName, "accName")
                        }
                        className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 text-[11px] font-semibold inline-flex items-center gap-1 shadow-2xs"
                      >
                        {copiedBankField === "accName" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Account Number */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">
                          Account Number
                        </span>
                        <span className="font-mono font-bold text-slate-900 text-sm">
                          {TRUST_BANK_DETAILS.accountNumber}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          handleCopyText(TRUST_BANK_DETAILS.accountNumber, "accNum")
                        }
                        className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 text-[11px] font-semibold inline-flex items-center gap-1 shadow-2xs"
                      >
                        {copiedBankField === "accNum" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* IFSC Code */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">
                          IFSC Code
                        </span>
                        <span className="font-mono font-bold text-slate-900 text-sm">
                          {TRUST_BANK_DETAILS.ifsc}
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopyText(TRUST_BANK_DETAILS.ifsc, "ifsc")}
                        className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 text-[11px] font-semibold inline-flex items-center gap-1 shadow-2xs"
                      >
                        {copiedBankField === "ifsc" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Bank & Branch */}
                    <div className="pt-2 border-t border-slate-200/80">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">
                        Bank & Branch
                      </span>
                      <span className="font-semibold text-slate-800 text-xs">
                        {TRUST_BANK_DETAILS.bankName}, {TRUST_BANK_DETAILS.branch}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Coordinator Contact */}
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-bold text-emerald-950 block text-xs">
                        Send Transfer Screenshot
                      </span>
                      <span className="text-[11px] text-emerald-800">
                        Receive instant student receipt on WhatsApp
                      </span>
                    </div>
                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-lg text-xs inline-flex items-center gap-1 shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Dignity-first child safeguarding policy
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="font-bold text-slate-700 hover:text-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
