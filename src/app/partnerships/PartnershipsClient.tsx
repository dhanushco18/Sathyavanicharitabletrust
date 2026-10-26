"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Handshake,
  Heart,
  Users,
  Sprout,
  TrendingUp,
  Target,
  Globe,
  GraduationCap,
  Sparkles,
  BookOpen,
  Smile,
  Gift,
  TreePine,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  MessageSquare,
  X,
  Layers,
  BarChart3,
  FileText,
  Clock,
  Compass,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/constants";
import { PartnershipInquiryForm } from "@/components/forms/PartnershipInquiryForm";
import { useLanguage } from "@/context/LanguageContext";

// Partner Testimonials
const PARTNER_VOICES = [
  {
    name: "Corporate CSR Lead",
    company: "Technology Solutions Group",
    image: "/assets/images/team-mr-vinoth.jpg",
    quote:
      "Partnering with Sathiyavani Charitable Trust has been a meaningful experience for our organization. Their commitment, transparency and real impact in communities inspire us to do more together.",
  },
  {
    name: "CSR Committee Director",
    company: "Manufacturing Enterprises Ltd",
    image: "/assets/images/team-mr-kumar.jpg",
    quote:
      "The quarterly outcome reports and verifiable beneficiary registers gave our board complete confidence. Sathiyavani Trust bridges corporate resources with direct community empowerment.",
  },
  {
    name: "Head of Employee Engagement",
    company: "Financial Services Corp",
    image: "/assets/images/founder-raghu.jpg",
    quote:
      "Our team volunteer days at the library learning center and weekend tree plantation drives engaged hundreds of our employees in authentic, purposeful social service.",
  },
];

// Focus Areas
const FOCUS_AREAS = [
  {
    title: "Education",
    desc: "Support access to quality education for underprivileged children.",
    image: "/assets/images/prog-education.jpg",
    color: "rose",
    icon: BookOpen,
  },
  {
    title: "Child Development",
    desc: "Nurture early learning, nutrition, and holistic development.",
    image: "/assets/images/about-story-children.jpg",
    color: "sky",
    icon: Smile,
  },
  {
    title: "Community Outreach",
    desc: "Strengthen rural and underserved communities.",
    image: "/assets/images/prog-community.jpg",
    color: "amber",
    icon: Users,
  },
  {
    title: "Environment",
    desc: "Support tree plantation, clean-up drives and environmental awareness.",
    image: "/assets/images/prog-environment-sapling.jpg",
    color: "emerald",
    icon: Sprout,
  },
  {
    title: "Festival Support",
    desc: "Help bring joy and essentials to families during festivals.",
    image: "/assets/images/prog-festival-distribution.jpg",
    color: "purple",
    icon: Gift,
  },
];

export function PartnershipsClient() {
  const { t, trans } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<string>("CSR Partnership");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVoiceIndex, setCurrentVoiceIndex] = useState(0);

  const breadcrumbItems = [
    { label: t("navHome"), href: "/" },
    { label: t("navGetInvolved"), href: "/get-involved" },
    { label: t("navPartnerships") },
  ];

  const handleOpenModal = (optionName: string) => {
    setSelectedOption(optionName);
    setIsModalOpen(true);
  };

  const nextVoice = () => {
    setCurrentVoiceIndex((prev) => (prev + 1) % PARTNER_VOICES.length);
  };

  const prevVoice = () => {
    setCurrentVoiceIndex((prev) => (prev - 1 + PARTNER_VOICES.length) % PARTNER_VOICES.length);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Breadcrumb Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-100/60 sticky top-16 z-20">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* =========================================================================
          HERO SECTION (Matching Mockup with Hero Banner & Handshake Overlay)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pb-20">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-amber-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-emerald-50/40 via-amber-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center">
                <span className="bg-[#E59819] text-[#0F2942] font-black uppercase text-[11px] sm:text-xs tracking-wider px-3.5 py-1.5 rounded-full shadow-2xs">
                  {trans("CORPORATE SPONSORSHIPS", "நிறுவனக் கூட்டுறவு")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12]">
                <span className="text-[#0F2942] block">{trans("Stronger Partnerships", "வலிமையான கூட்டுறவு")}</span>
                <span className="text-[#E59819] block mt-1">{trans("Brighter Communities", "ஒளிரும் சமுதாயம்")}</span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t("partnerHeroSubtitle")}
              </p>

              {/* 4 Circular Action Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* 1. Empower Communities */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-rose-100 shadow-2xs hover:border-rose-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                    <Heart className="w-3 h-3 fill-white/80" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Empower Communities", "சமூக மேம்பாடு")}
                  </span>
                </div>

                {/* 2. Create Opportunities */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-100 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Sprout className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Create Opportunities", "புதிய வாய்ப்புகள்")}
                  </span>
                </div>

                {/* 3. Build a Better Tomorrow */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-sky-100 shadow-2xs hover:border-sky-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <Users className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Build a Better Tomorrow", "சிறந்த எதிர்காலம்")}
                  </span>
                </div>

                {/* 4. Make a Lasting Impact */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-amber-100 shadow-2xs hover:border-amber-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#E59819] text-white flex items-center justify-center shrink-0">
                    <Target className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Make a Lasting Impact", "நிலையான தாக்கம்")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Background decorative soft glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/30 via-emerald-100/30 to-sky-100/30 rounded-3xl blur-xl" />

                {/* Main Hero Card Frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-white">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/assets/images/corporate-hero.jpg"
                      alt="Indian school children smiling alongside business partners in an outdoor CSR collaboration handshake"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Subtle warm vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Doodle Overlay Top-Right: "Partner for a Brighter Tomorrow" */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-amber-100/80 -rotate-2 transform hover:rotate-0 transition-transform">
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#0F2942] leading-tight">
                        {trans("Partner for a", "இணையுங்கள்")}
                      </p>
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#E59819] mt-0.5">
                        {trans("Brighter Tomorrow", "ஒளிரும் எதிர்காலத்திற்கு")}
                      </p>
                    </div>

                    {/* Dark Pillar Badges Stack on Bottom Right */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-medium border border-white/10 shadow-xs">
                        <span className="text-emerald-400">🍃</span>
                        <span>{trans("Social Impact", "சமூக தாக்கம்")}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-medium border border-white/10 shadow-xs">
                        <span className="text-sky-400">📈</span>
                        <span>{trans("Inclusive Growth", "அனைவரையும் உள்ளடக்கிய வளர்ச்சி")}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-medium border border-white/10 shadow-xs">
                        <span className="text-amber-400">👥</span>
                        <span>{trans("Stronger Communities", "வலுவான சமூகம்")}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-medium border border-white/10 shadow-xs">
                        <span className="text-cyan-400">🌐</span>
                        <span>{trans("Sustainable Future", "நிலையான எதிர்காலம்")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MIDDLE SECTION 1:
          "Why Partner With Us?" (Left) & "Our Focus Areas" (Right)
          ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white border-y border-amber-100/70 shadow-xs">
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-8 items-start">
            {/* Left 5 Columns: Why Partner With Us? (4 Cards) */}
            <div className="xl:col-span-5 space-y-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2942]">
                  {trans("Why Partner With Us?", "ஏன் எங்களோடு இணைய வேண்டும்?")}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {trans("Your corporate support helps us scale our impact and create sustainable change.", "உங்கள் நிறுவன ஆதரவு எங்கள் தாக்கத்தை விரிவுபடுத்தி நிலையான மாற்றத்தை உருவாக்குகிறது.")}
                </p>
              </div>

              {/* 4 Cards in 2x2 or 4-row layout */}
              <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-3 pt-2">
                {/* Card 1: Meaningful Impact */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 p-3.5 shadow-2xs hover:shadow-xs hover:border-rose-200 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2 shadow-2xs">
                    <Heart className="w-5 h-5 fill-rose-500/20" />
                  </div>
                  <h3 className="font-heading text-xs font-bold text-slate-900 mb-1">
                    {trans("Meaningful Impact", "உண்மையான தாக்கம்")}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug">
                    {trans("Contribute to verified community development programs.", "சான்றளிக்கப்பட்ட களப்பணி திட்டங்களில் பங்குபெறுங்கள்.")}
                  </p>
                </div>

                {/* Card 2: Employee Engagement */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 p-3.5 shadow-2xs hover:shadow-xs hover:border-sky-200 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-2 shadow-2xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xs font-bold text-slate-900 mb-1">
                    {trans("Employee Engagement", "பணியாளர் பங்களிப்பு")}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug">
                    {trans("Involve your team in volunteering and social initiatives.", "உங்கள் குழுவை தன்னார்வத் தொண்டில் ஈடுபடுத்துங்கள்.")}
                  </p>
                </div>

                {/* Card 3: Brand Value */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 p-3.5 shadow-2xs hover:shadow-xs hover:border-emerald-200 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 shadow-2xs">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xs font-bold text-slate-900 mb-1">
                    {trans("Brand Value", "நம்பகமான மதிப்பு")}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug">
                    {trans("Be associated with a trusted and credible charitable organization.", "நம்பகமான மற்றும் நேர்மையான அறக்கட்டளையுடன் இணையுங்கள்.")}
                  </p>
                </div>

                {/* Card 4: Sustainable Change */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 p-3.5 shadow-2xs hover:shadow-xs hover:border-amber-200 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#E59819] flex items-center justify-center mb-2 shadow-2xs">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xs font-bold text-slate-900 mb-1">
                    {trans("Sustainable Change", "நிலையான மாற்றம்")}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug">
                    {trans("Support long-term programs that create real opportunities.", "நீண்டகால வாய்ப்புகளை உருவாக்கும் திட்டங்களை ஆதரியுங்கள்.")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Our Focus Areas (5 Cards + View All Link) */}
            <div className="xl:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2942]">
                    {trans("Our Focus Areas", "எங்கள் முக்கிய களங்கள்")}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {trans("Partner with us across our key programs.", "எங்கள் முக்கிய திட்டங்களில் இணைந்து செயல்படுங்கள்.")}
                  </p>
                </div>
                <Link
                  href="/programs"
                  className="px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-bold text-xs inline-flex items-center gap-1 transition-colors"
                >
                  <span>{trans("View All Programs", "அனைத்து திட்டங்கள்")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 5 Focus Areas Horizontal Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
                {FOCUS_AREAS.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col group"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <Image
                          src={area.image}
                          alt={area.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                      </div>
                      <div className="p-3 flex-1 flex flex-col">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center -mt-6 mb-1.5 relative z-10 border-2 border-white shadow-2xs ${
                            area.color === "rose"
                              ? "bg-rose-50 text-rose-600"
                              : area.color === "sky"
                              ? "bg-sky-50 text-[#0284C7]"
                              : area.color === "amber"
                              ? "bg-amber-50 text-[#E59819]"
                              : area.color === "emerald"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-purple-50 text-purple-600"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="font-heading text-xs font-bold text-slate-900 mb-1">
                          {area.title === "Education" ? trans("Education", "இலவச கல்வி")
                            : area.title === "Child Development" ? trans("Child Development", "குழந்தை வளர்ச்சி")
                            : area.title === "Community Outreach" ? trans("Community Outreach", "சமூக உதவி")
                            : area.title === "Environment" ? trans("Environment", "சுற்றுச்சூழல்")
                            : trans("Festival Support", "பண்டிகை கால உதவி")}
                        </h3>
                        <p className="text-[10px] text-slate-600 leading-snug">
                          {area.title === "Education" ? trans("Support access to quality education for underprivileged children.", "பின்தங்கிய குழந்தைகளுக்கு தரமான கல்வி கிடைக்க ஆதரவளியுங்கள்.")
                            : area.title === "Child Development" ? trans("Nurture early learning, nutrition, and holistic development.", "ஆரம்பக் கல்வி, ஊட்டச்சத்து மற்றும் முழுமையான நல்வாழ்வை வளர்த்தெடுங்கள்.")
                            : area.title === "Community Outreach" ? trans("Strengthen rural and underserved communities.", "எளிய குடும்பங்களுக்கு அத்தியாவசிய கள உதவிகளை வழங்குங்கள்.")
                            : area.title === "Environment" ? trans("Support tree plantation, clean-up drives and environmental awareness.", "மரக்கன்றுகள் நடுதல் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வை ஆதரியுங்கள்.")
                            : trans("Help bring joy and essentials to families during festivals.", "பண்டிகைக் காலங்களில் குடும்பங்களுக்கு புத்தாடைகள் மற்றும் மகிழ்ச்சியைப் பகிருங்கள்.")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MIDDLE SECTION 2:
          "Corporate Sponsorship Options" (Left)
          "Our Impact So Far" (Middle)
          "Partner Voices" (Right)
          ========================================================================= */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 5 Cols: Corporate Sponsorship Options (4 Models) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                  {trans("Corporate Sponsorship Options", "நிறுவன ஆதரவு வாய்ப்புகள்")}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {trans("Choose a partnership model that aligns with your organization's goals.", "உங்கள் நிறுவனத்தின் இலக்குகளுக்கு ஏற்ற ஆதரவு முறையைத் தேர்ந்தெடுங்கள்.")}
                </p>

                {/* 4 Sponsorship Option Cards in 2x2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5">
                  {/* Option 1: Program Sponsorship */}
                  <div className="bg-[#FAF9F5] rounded-2xl border border-sky-200/80 p-3.5 shadow-2xs flex flex-col justify-between hover:border-sky-400 transition-all">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-2">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading text-xs font-bold text-slate-900 mb-1">
                        {trans("Program Sponsorship", "முழு திட்ட ஆதரவு")}
                      </h4>
                      <p className="text-[10px] text-slate-600 leading-snug mb-3">
                        {trans("Support a complete program such as education, child development or environmental initiatives.", "கல்வி, குழந்தை வளர்ச்சி அல்லது சுற்றுச்சூழல் திட்டங்களை முழுமையாக ஆதரிக்கலாம்.")}
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpenModal("Program Sponsorship")}
                      className="w-full py-1.5 px-2.5 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#075985] text-white text-[11px] font-bold rounded-lg shadow-2xs transition-all inline-flex items-center justify-center gap-1"
                    >
                      <span>{trans("Partner Now", "இணைந்திடுங்கள்")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Option 2: Project Sponsorship */}
                  <div className="bg-[#FAF9F5] rounded-2xl border border-rose-200/80 p-3.5 shadow-2xs flex flex-col justify-between hover:border-rose-400 transition-all">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-rose-100 text-[#E11D48] flex items-center justify-center mb-2">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading text-xs font-bold text-slate-900 mb-1">
                        {trans("Project Sponsorship", "குறிப்பிட்ட திட்ட ஆதரவு")}
                      </h4>
                      <p className="text-[10px] text-slate-600 leading-snug mb-3">
                        {trans("Fund specific projects or activities within our programs.", "எங்கள் திட்டங்களின் குறிப்பிட்ட பணிகளுக்கு நிதியுதவி செய்யலாம்.")}
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpenModal("Project Sponsorship")}
                      className="w-full py-1.5 px-2.5 bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9F1239] text-white text-[11px] font-bold rounded-lg shadow-2xs transition-all inline-flex items-center justify-center gap-1"
                    >
                      <span>{trans("Partner Now", "இணைந்திடுங்கள்")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Option 3: CSR Partnership */}
                  <div className="bg-[#FAF9F5] rounded-2xl border border-emerald-200/80 p-3.5 shadow-2xs flex flex-col justify-between hover:border-emerald-400 transition-all">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading text-xs font-bold text-slate-900 mb-1">
                        {trans("CSR Partnership", "CSR கூட்டுறவு")}
                      </h4>
                      <p className="text-[10px] text-slate-600 leading-snug mb-3">
                        {trans("Collaborate under your CSR initiatives for long-term impact.", "உங்கள் CSR நிதியுதவி மூலம் நீண்டகால தாக்கத்தை ஏற்படுத்தலாம்.")}
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpenModal("CSR Partnership")}
                      className="w-full py-1.5 px-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-[11px] font-bold rounded-lg shadow-2xs transition-all inline-flex items-center justify-center gap-1"
                    >
                      <span>{trans("Partner Now", "இணைந்திடுங்கள்")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Option 4: In-kind Support */}
                  <div className="bg-[#FAF9F5] rounded-2xl border border-amber-200/80 p-3.5 shadow-2xs flex flex-col justify-between hover:border-amber-400 transition-all">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#E59819] flex items-center justify-center mb-2">
                        <Handshake className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading text-xs font-bold text-slate-900 mb-1">
                        {trans("In-kind Support", "பொருளுதவி மற்றும் வளங்கள்")}
                      </h4>
                      <p className="text-[10px] text-slate-600 leading-snug mb-3">
                        {trans("Provide goods, services or resources to strengthen our programs.", "எங்கள் திட்டங்களுக்கு தேவையான பொருட்கள் அல்லது சேவைகளை வழங்கலாம்.")}
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpenModal("In-kind Support")}
                      className="w-full py-1.5 px-2.5 bg-gradient-to-r from-[#E59819] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-white text-[11px] font-bold rounded-lg shadow-2xs transition-all inline-flex items-center justify-center gap-1"
                    >
                      <span>{trans("Discuss Options", "கலந்தாலோசியுங்கள்")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{trans("Audited utilization ledgers & official CSR receipts provided.", "ஆடிட் செய்யப்பட்ட வரவு-செலவு விவரங்கள் & அதிகாரப்பூர்வ CSR ரசீதுகள் வழங்கப்படும்.")}</span>
              </div>
            </div>

            {/* Middle 3.5 Cols: Our Impact So Far (4 Metrics) */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                  {trans("Our Impact So Far", "இதுவரையிலான கள தாக்கம்")}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {trans("Together with our partners, we are creating real change.", "எங்கள் பங்களிப்பாளர்களுடன் இணைந்து உண்மையான மாற்றத்தை உருவாக்குகிறோம்.")}
                </p>

                {/* 4 Stat Badges in a 2x2 grid */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {/* Metric 1 */}
                  <div className="text-center p-3 bg-slate-50/80 rounded-2xl border border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-1.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                      5,000+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-1">
                      {trans("Lives Touched", "பயனடைந்த மக்கள்")}
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="text-center p-3 bg-slate-50/80 rounded-2xl border border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mx-auto mb-1.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                      2,000+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-1">
                      {trans("Children Supported", "ஆதரவு பெற்ற குழந்தைகள்")}
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="text-center p-3 bg-slate-50/80 rounded-2xl border border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1.5">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                      10,000+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-1">
                      {trans("Trees Planted", "நடப்பட்ட மரக்கன்றுகள்")}
                    </div>
                  </div>

                  {/* Metric 4 */}
                  <div className="text-center p-3 bg-slate-50/80 rounded-2xl border border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#E59819] flex items-center justify-center mx-auto mb-1.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                      30+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-1">
                      {trans("Communities Reached", "சென்றடைந்த பகுதிகள்")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>{trans("Direct on-ground delivery", "நேரடி கள சேவை")}</span>
                <span className="font-bold text-[#0F2942]">{t("chennaiLocation")}</span>
              </div>
            </div>

            {/* Right 3.5 Cols: Partner Voices */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                    {trans("Partner Voices", "பங்களிப்பாளர்களின் கருத்துக்கள்")}
                  </h3>
                  {/* Slider Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevVoice}
                      aria-label="Previous partner testimonial"
                      className="w-7 h-7 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextVoice}
                      aria-label="Next partner testimonial"
                      className="w-7 h-7 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Testimonial Active Slide */}
                <div className="flex items-start gap-3.5 pt-1">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-sky-100 shadow-2xs">
                    <Image
                      src={PARTNER_VOICES[currentVoiceIndex].image}
                      alt={PARTNER_VOICES[currentVoiceIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-1.5">
                    <span className="font-serif text-3xl text-emerald-600 leading-none block -mb-2">
                      “
                    </span>
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      {PARTNER_VOICES[currentVoiceIndex].quote}
                    </p>
                    <div className="pt-1">
                      <div className="text-xs font-bold text-slate-900">
                        — {PARTNER_VOICES[currentVoiceIndex].name}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {PARTNER_VOICES[currentVoiceIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5">
                {PARTNER_VOICES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVoiceIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      currentVoiceIndex === idx
                        ? "w-5 bg-[#0F2942]"
                        : "w-1.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BOTTOM ROW:
          1. How to Partner With Us (Left)
          2. Our Esteemed Partners (Middle)
          3. Corporate Partnerships CTA Card (Right)
          ========================================================================= */}
      <section className="py-6 sm:py-10 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 4.5 Cols: How to Partner With Us (4 Steps) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                  {trans("How to Partner With Us", "எங்களுடன் இணைவது எப்படி?")}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {trans("A simple and transparent process to begin your partnership journey.", "எளிமையான, வெளிப்படையான 4 படிகளில் இணையுங்கள்.")}
                </p>

                {/* 4 Steps Horizontal / Responsive Flow */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
                  {/* Step 1: Explore */}
                  <div className="text-center space-y-1 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                      1
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      {trans("Explore", "அறிந்துகொள்ளுதல்")}
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      {trans("Understand our programs and partnership opportunities.", "எங்கள் திட்டங்கள் மற்றும் வாய்ப்புகளை தெரிந்துகொள்ளுங்கள்.")}
                    </p>
                  </div>

                  {/* Step 2: Discuss */}
                  <div className="text-center space-y-1 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                      2
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      {trans("Discuss", "கலந்தாலோசித்தல்")}
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      {trans("Connect with our team to align on goals and impact areas.", "எங்கள் குழுவுடன் தொடர்புகொண்டு இலக்குகளை முடிவு செய்யுங்கள்.")}
                    </p>
                  </div>

                  {/* Step 3: Plan Together */}
                  <div className="text-center space-y-1 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                      3
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      {trans("Plan Together", "திட்டமிடுதல்")}
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      {trans("Define the scope, timeline and outcomes.", "பணிகள், கால அளவு மற்றும் இலக்குகளை வடிவமைக்கவும்.")}
                    </p>
                  </div>

                  {/* Step 4: Create Impact */}
                  <div className="text-center space-y-1 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#E59819] text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                      4
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      {trans("Create Impact", "தாக்கத்தை ஏற்படுத்துதல்")}
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      {trans("Implement, monitor and celebrate our shared success.", "திட்டங்களை செயல்படுத்தி நற்பணிகளை முன்னெடுப்போம்.")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>{trans("Fast onboarding & customized MOUs", "விரைவான ஒருங்கிணைப்பு & புரிந்துணர்வு ஒப்பந்தம்")}</span>
                <span className="font-semibold text-slate-800">{trans("Direct Trustee Review", "அறங்காவலர் நேரடி மேற்பார்வை")}</span>
              </div>
            </div>

            {/* Middle 3.5 Cols: Our Esteemed Partners */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                  {trans("Our Esteemed Partners", "மதிப்பிற்குரிய பங்களிப்பாளர்கள்")}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {trans("We are grateful to our corporate partners for their support.", "எங்களை ஆதரிக்கும் பெருநிறுவன பங்களிப்பாளர்களுக்கு எங்கள் மனமார்ந்த நன்றிகள்.")}
                </p>

                {/* Partner Logos Grid */}
                <div className="grid grid-cols-2 gap-3 pt-5">
                  <div className="h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 text-slate-700 font-serif font-black text-xs tracking-wider">
                    TATA
                  </div>
                  <div className="h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 text-slate-700 font-sans font-bold text-xs">
                    Infosys
                  </div>
                  <div className="h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 text-slate-700 font-sans font-black text-xs tracking-widest">
                    HCL
                  </div>
                  <div className="h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 text-slate-700 font-sans font-bold text-xs lowercase">
                    wipro
                  </div>
                  <div className="h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 text-slate-700 font-sans font-bold text-[10px] text-center leading-tight">
                    Reliance <br />
                    <span className="text-[8px] font-normal text-slate-500">Industries Limited</span>
                  </div>
                  <div className="h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 text-slate-700 font-sans font-bold text-[10px] text-center leading-tight">
                    Tech <br />
                    <span className="text-[9px] font-medium text-slate-500">Mahindra</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 text-center">
                {trans("CSR grants, matching gift drives & resource collaborations.", "CSR மானியங்கள் மற்றும் வளப் பங்களிப்புகள்.")}
              </div>
            </div>

            {/* Right 4 Cols: Corporate Partnerships Floating Card Banner */}
            <div className="lg:col-span-4 bg-[#0F2942] rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800">
              {/* Background leaf illustration */}
              <div className="absolute -bottom-8 -right-8 w-36 h-36 opacity-10 pointer-events-none select-none">
                <Sprout className="w-full h-full text-white" />
              </div>

              <div className="space-y-3 relative z-10">
                <span className="text-amber-300 text-[10px] font-bold uppercase tracking-widest block">
                  {trans("Collaborate for Good", "நற்பணிக்காக இணையுங்கள்")}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                  {trans("Corporate Partnerships for a Brighter Tomorrow", "ஒளிரும் எதிர்காலத்திற்கான நிறுவன கூட்டுறவு")}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {trans("Let's create a stronger, kinder and more inclusive society — together through impactful CSR initiatives.", "தாக்கமிக்க CSR திட்டங்கள் மூலம் அன்பும் அக்கறையும் நிறைந்த சமுதாயத்தை ஒன்றாக உருவாக்குவோம்.")}
                </p>
              </div>

              <div className="space-y-2.5 pt-5 relative z-10">
                {/* Primary Button */}
                <button
                  onClick={() => handleOpenModal("CSR Partnership")}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9F1239] text-white text-xs font-bold rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <span>{trans("Partner With Us", "எங்களுடன் இணையுங்கள்")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Secondary Button */}
                <a
                  href={`mailto:info@sathiyavanitrust.org?subject=Corporate%20CSR%20Partnership%20Inquiry`}
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-300" />
                  <span>{trans("Contact Our CSR Team", "CSR குழுவை தொடர்பு கொள்ள")}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          INTERACTIVE PARTNERSHIP MODAL
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
                  {trans("Institutional CSR Collaboration", "நிறுவன CSR கூட்டுறவு")}
                </span>
                <h3 className="font-serif text-lg font-bold">
                  {trans("Partner With Sathiyavani Trust", "சத்தியவாணி அறக்கட்டளையுடன் இணையுங்கள்")}
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

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between">
                <span>
                  {trans("Selected Model:", "தேர்ந்தெடுக்கப்பட்ட முறை:")} <strong>{selectedOption}</strong>
                </span>
                <span className="text-[11px] text-slate-500">{trans("Fast Trustee Response", "அறங்காவலர்களின் நேரடி பதில்")}</span>
              </div>

              <PartnershipInquiryForm initialFocus={selectedOption} />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{trans("Audited utilization ledgers & official CSR receipts", "ஆடிட் செய்யப்பட்ட வரவு-செலவு கணக்கு & அதிகாரப்பூர்வ CSR ரசீதுகள்")}</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="font-bold text-slate-700 hover:text-slate-900"
              >
                {trans("Close", "மூடுக")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
