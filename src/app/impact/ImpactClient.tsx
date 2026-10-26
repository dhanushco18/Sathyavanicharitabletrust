"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Heart,
  Users,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  Smile,
  Gift,
  Building2,
  TreePine,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ExternalLink,
  BookOpen,
  Sparkles,
  Phone,
  MessageSquare,
  Copy,
  Check,
  X,
  Sliders,
  CheckCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

// Voices of Change Testimonials
const VOICES_OF_CHANGE = [
  {
    name: "Revathi",
    nameTa: "ரேவதி",
    role: "Student Beneficiary",
    roleTa: "மாணவி",
    image: "/assets/images/community-meena.jpg",
    quote:
      "Because of the support from Sathiyavani Trust, I can now go to school regularly. I dream of becoming a teacher and helping other children in my village.",
    quoteTa:
      "சத்தியவாணி அறக்கட்டளையின் ஆதரவால் இப்போது என்னால் பள்ளிக்கு தொடர்ந்து செல்ல முடிகிறது. படித்து ஆசிரியராகி மற்ற குழந்தைகளுக்கு உதவ வேண்டும் என்பதே எனது கனவு.",
  },
  {
    name: "Murugan",
    nameTa: "முருகன்",
    role: "Father & Community Member",
    roleTa: "பெற்றோர், சென்னை",
    image: "/assets/images/team-mr-kumar.jpg",
    quote:
      "When the trust conducted free health camps in our neighborhood, my mother received checkups and medicines without paying a single rupee. They treat everyone with true respect.",
    quoteTa:
      "அறக்கட்டளை எங்கள் பகுதியில் இலவச மருத்துவ முகாம் நடத்தியபோது, எனது தாயாருக்கு ஒரு ரூபாய் கூட செலவின்றி சிகிச்சையும் மருந்துகளும் கிடைத்தன. உண்மையான அன்போடு சேவை செய்கிறார்கள்.",
  },
  {
    name: "Suresh",
    nameTa: "சுரேஷ்",
    role: "Evening Study Center Student",
    roleTa: "மாலை நேர கல்வி மைய மாணவர்",
    image: "/assets/images/story-student-boy.jpg",
    quote:
      "The evening study center provided solar lighting, notebooks, and teacher guidance when my home had no electricity. I passed my 10th standard board exams with 89%.",
    quoteTa:
      "வீட்டில் மின்சாரம் இல்லாதபோது மாலை நேர மையத்தின் சூரிய ஒளி விளக்குகளும் ஆசிரியர் வழிகாட்டலும் எனக்கு உதவியாக இருந்தன. பத்தாம் வகுப்பில் 89% மதிப்பெண் பெற்றேன்.",
  },
  {
    name: "Karpagam",
    nameTa: "கற்பகம்",
    role: "Women's Livelihood Participant",
    roleTa: "மகளிர் சுயதொழில் பயனாளினி",
    image: "/assets/images/tuition-learning.jpg",
    quote:
      "The tailoring equipment and vocational training gave our self-help group the means to earn an honest livelihood. Our children now study with dignity.",
    quoteTa:
      "தையல் இயந்திரமும் தொழில் பயிற்சியும் எங்கள் சுயஉதவி குழுவிற்கு சொந்தக் காலில் நிற்கும் நம்பிக்கையை தந்தது. இன்று எங்கள் பிள்ளைகள் கண்ணியத்துடன் படிக்கிறார்கள்.",
  },
];

export function ImpactClient() {
  const [activeVoiceIndex, setActiveVoiceIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null);
  const { t, trans, isTamil } = useLanguage();

  const breadcrumbItems = [
    { label: t("navHome"), href: "/" },
    { label: t("navImpact") },
  ];

  const nextVoice = () => {
    setActiveVoiceIndex((prev) => (prev + 1) % VOICES_OF_CHANGE.length);
  };

  const prevVoice = () => {
    setActiveVoiceIndex((prev) => (prev - 1 + VOICES_OF_CHANGE.length) % VOICES_OF_CHANGE.length);
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

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      {/* Sticky Breadcrumb Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-100/60 sticky top-16 z-20">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* =========================================================================
          HERO SECTION (Matching Mockup with Eyebrow, Dual-tone Serif & Children)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pb-20">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-emerald-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-sky-50/40 via-emerald-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center">
                <span className="bg-[#E59819] text-[#0F2942] font-black uppercase text-[11px] sm:text-xs tracking-wider px-3.5 py-1.5 rounded-full shadow-2xs">
                  {trans("OUR IMPACT", "நமது தாக்கம்")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.12]">
                <span className="text-[#0F2942] block">
                  {trans("Real People", "உண்மையான மனிதர்கள்")}
                </span>
                <span className="text-[#16A34A] block mt-1">
                  {trans("Real Change", "நேரடி சமூக மாற்றம்")}
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t("impactSubhead")}
              </p>

              {/* 4 Feature Badges in Horizontal Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* 1. Children Empowered */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-rose-100 shadow-2xs hover:border-rose-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                    <GraduationCap className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Children Empowered", "மாணவர்கள் முன்னேற்றம்")}
                  </span>
                </div>

                {/* 2. Healthier Communities */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-100 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Heart className="w-3 h-3 fill-white/80" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Healthier Communities", "ஆரோக்கியமான சமூகம்")}
                  </span>
                </div>

                {/* 3. Stronger Families */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-amber-100 shadow-2xs hover:border-amber-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#E59819] text-white flex items-center justify-center shrink-0">
                    <Users className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Stronger Families", "வலுவான குடும்பங்கள்")}
                  </span>
                </div>

                {/* 4. Greener Environment */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-100 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
                    <Sprout className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Greener Environment", "பசுமை சுற்றுச்சூழல்")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Background decorative soft glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-200/30 via-amber-100/30 to-sky-100/30 rounded-3xl blur-xl" />

                {/* Main Hero Card Frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-white">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/assets/images/about-story-children.jpg"
                      alt="Cheerful Indian school children in blue uniforms looking up with bright smiles under sunny trees"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Subtle warm vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top-Right Handwritten Doodle Note: "Together We Create Brighter Tomorrows ♡" */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-amber-100/80 -rotate-2 transform hover:rotate-0 transition-transform">
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#0F2942] leading-tight flex items-center gap-1.5">
                        <span>{trans("Together We Create", "ஒன்றிணைந்து உருவாக்குவோம்")}</span>
                        <span className="text-rose-500 font-sans not-italic text-sm">♡</span>
                      </p>
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#0284C7] mt-0.5">
                        {trans("Brighter Tomorrows", "ஒளிரும் எதிர்காலம்")}
                      </p>
                    </div>

                    {/* Tilted Paper Sticker Top-Right */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                      <div className="bg-[#FAF9F5] text-slate-800 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-lg border border-amber-200/90 rotate-2 hover:rotate-0 transition-transform flex items-center gap-2">
                        <span className="text-emerald-600 text-sm">🌱</span>
                        <div className="text-[10px] sm:text-[11px] font-serif font-bold text-slate-900 leading-tight">
                          {trans("Small Changes", "சிறு முயற்சிகள்")} <br />
                          <span className="text-[#16A34A]">{trans("Make a Big Impact", "பெரும் மாற்றங்கள் தரும்")}</span>
                        </div>
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
          HORIZONTAL STATS BANNER: "Our Overall Impact"
          With 5 Stats + Mahatma Gandhi Quote
          ========================================================================= */}
      <section className="relative z-10 -mt-4 sm:-mt-6 mb-8 sm:mb-12">
        <Container>
          <div className="bg-white rounded-3xl border border-amber-100/80 shadow-md p-6 sm:p-7">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              {/* Left Column: Title */}
              <div className="lg:w-48 xl:w-56 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-6">
                <span className="text-[10px] sm:text-xs font-bold text-amber-700 tracking-wider uppercase block mb-1">
                  {trans("Key Milestones", "முக்கிய மைல்கற்கள்")}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                  {trans("Our Overall Impact", "எங்கள் ஒட்டுமொத்த தாக்கம்")}
                </h2>
                <p className="text-xs text-slate-500 leading-snug mt-1">
                  {trans("Real support. Real progress. Real change.", "உண்மையான ஆதரவு. உண்மையான வளர்ச்சி. உண்மையான மாற்றம்.")}
                </p>
              </div>

              {/* Middle 5 Stat Metrics Grid */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-3 py-1">
                {/* Stat 1: 5,000+ Lives Touched */}
                <div className="text-center sm:text-left space-y-1">
                  <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto sm:mx-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                    5,000+
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">
                    {trans("Lives Touched", "பயனடைந்தோர்")}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight hidden sm:block">
                    {trans("Children, families and community members", "குழந்தைகள், குடும்பங்கள் மற்றும் பொதுமக்கள்")}
                  </div>
                </div>

                {/* Stat 2: 2,000+ Children Supported */}
                <div className="text-center sm:text-left space-y-1">
                  <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center mx-auto sm:mx-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                    2,000+
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">
                    {trans("Children Supported", "ஆதரவு பெற்ற குழந்தைகள்")}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight hidden sm:block">
                    {trans("Education and learning opportunities", "கல்வி மற்றும் கற்றல் வாய்ப்புகள்")}
                  </div>
                </div>

                {/* Stat 3: 50+ Health Camps */}
                <div className="text-center sm:text-left space-y-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto sm:mx-0">
                    <Heart className="w-4 h-4 fill-emerald-500/20" />
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                    50+
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">
                    {trans("Health Camps", "மருத்துவ முகாம்கள்")}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight hidden sm:block">
                    {trans("Improved access to healthcare", "மேம்படுத்தப்பட்ட மருத்துவ வசதி")}
                  </div>
                </div>

                {/* Stat 4: 30+ Communities Reached */}
                <div className="text-center sm:text-left space-y-1">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-[#E59819] flex items-center justify-center mx-auto sm:mx-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                    30+
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">
                    {trans("Communities Reached", "சென்றடைந்த பகுதிகள்")}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight hidden sm:block">
                    {trans("Rural and underserved areas", "கிராமப்புற மற்றும் பின்தங்கிய பகுதிகள்")}
                  </div>
                </div>

                {/* Stat 5: 10,000+ Trees Planted */}
                <div className="text-center sm:text-left space-y-1 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto sm:mx-0">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-black text-slate-900 leading-none">
                    10,000+
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">
                    {trans("Trees Planted", "நடப்பட்ட மரக்கன்றுகள்")}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight hidden sm:block">
                    {trans("For a greener, cleaner environment", "பசுமையான, தூய்மையான சூழலுக்காக")}
                  </div>
                </div>
              </div>

              {/* Right Column: Mahatma Gandhi Quote */}
              <div className="lg:w-64 xl:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 relative">
                <div className="flex items-start gap-2">
                  <span className="font-serif text-3xl text-amber-500 leading-none shrink-0">“</span>
                  <div>
                    <p className="font-serif italic text-xs text-slate-700 leading-relaxed">
                      {trans(
                        "The best way to find yourself is to lose yourself in the service of others.",
                        "பிறருக்கு சேவை செய்வதில் உங்களை அர்ப்பணிப்பதே உங்களை நீங்கள் கண்டறிய சிறந்த வழி."
                      )}
                    </p>
                    <span className="text-[10px] font-bold text-slate-500 mt-1 block tracking-wider uppercase">
                      {trans("— Mahatma Gandhi", "— மகாத்மா காந்தி")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MIDDLE SECTION: Impact Across Our Programs (5 Cards)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white border-y border-amber-100/70 shadow-xs">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-700 tracking-wider uppercase mb-1 block">
                  {trans("Direct Results", "நேரடி தாக்கங்கள்")}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2942]">
                  {trans("Impact Across Our Programs", "எங்கள் திட்டங்களின் தாக்கம்")}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                  {trans(
                    "Our programs create meaningful and measurable change in the lives of children, families and communities.",
                    "எங்கள் திட்டங்கள் குழந்தைகள், குடும்பங்கள் மற்றும் சமூகங்களின் வாழ்வில் உண்மையான, அளவிடக்கூடிய மாற்றத்தை உருவாக்குகின்றன."
                  )}
                </p>
              </div>
              <Link
                href="/programs"
                className="px-4 py-2 rounded-full border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-bold text-xs inline-flex items-center gap-1.5 transition-colors shrink-0 self-start sm:self-auto"
              >
                <span>{trans("View All Programs", "அனைத்து திட்டங்களையும் காண்க")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 5 Program Impact Cards Grid across full width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 pt-2">
                {/* 1. Free Education */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/prog-education.jpg"
                      alt="Student studying with notebook"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center -mt-6 mb-1.5 relative z-10 border-2 border-white shadow-2xs">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      Free Education
                    </h3>
                    <div className="font-serif text-sm font-black text-[#0F2942] my-0.5">
                      2,000+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mb-2">
                      Children Supported
                    </div>
                    <ul className="space-y-1 text-[10px] text-slate-600 border-t border-slate-200/60 pt-2 mt-auto">
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-rose-500 shrink-0" />
                        <span>Access to education</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-rose-500 shrink-0" />
                        <span>Learning materials</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-rose-500 shrink-0" />
                        <span>Brighter opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2. Child Development */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/about-story-children.jpg"
                      alt="Children playing and learning"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="w-7 h-7 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center -mt-6 mb-1.5 relative z-10 border-2 border-white shadow-2xs">
                      <Smile className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      Child Development
                    </h3>
                    <div className="font-serif text-sm font-black text-[#0F2942] my-0.5">
                      500+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mb-2">
                      Children Benefited
                    </div>
                    <ul className="space-y-1 text-[10px] text-slate-600 border-t border-slate-200/60 pt-2 mt-auto">
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-sky-600 shrink-0" />
                        <span>Early learning support</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-sky-600 shrink-0" />
                        <span>Nutrition & wellness</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-sky-600 shrink-0" />
                        <span>Holistic growth</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 3. Community Outreach */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/prog-community.jpg"
                      alt="Community members participating in outreach"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="w-7 h-7 rounded-full bg-amber-50 text-[#E59819] flex items-center justify-center -mt-6 mb-1.5 relative z-10 border-2 border-white shadow-2xs">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      Community Outreach
                    </h3>
                    <div className="font-serif text-sm font-black text-[#0F2942] my-0.5">
                      30+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mb-2">
                      Communities Reached
                    </div>
                    <ul className="space-y-1 text-[10px] text-slate-600 border-t border-slate-200/60 pt-2 mt-auto">
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#E59819] shrink-0" />
                        <span>Awareness programs</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#E59819] shrink-0" />
                        <span>Livelihood support</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#E59819] shrink-0" />
                        <span>Stronger local ties</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 4. Festival Support */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/prog-festival-distribution.jpg"
                      alt="Children celebrating festival distribution"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="w-7 h-7 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center -mt-6 mb-1.5 relative z-10 border-2 border-white shadow-2xs">
                      <Gift className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      Festival Support
                    </h3>
                    <div className="font-serif text-sm font-black text-[#0F2942] my-0.5">
                      3,500+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mb-2">
                      Individuals & Families
                    </div>
                    <ul className="space-y-1 text-[10px] text-slate-600 border-t border-slate-200/60 pt-2 mt-auto">
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-purple-600 shrink-0" />
                        <span>Festive celebrations</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-purple-600 shrink-0" />
                        <span>Inclusive distributions</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-purple-600 shrink-0" />
                        <span>Spreading joy & hope</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 5. Environment */}
                <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/images/prog-environment-sapling.jpg"
                      alt="Students planting trees and saplings"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center -mt-6 mb-1.5 relative z-10 border-2 border-white shadow-2xs">
                      <Sprout className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      Environment
                    </h3>
                    <div className="font-serif text-sm font-black text-[#0F2942] my-0.5">
                      10,000+
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mb-2">
                      Trees Planted
                    </div>
                    <ul className="space-y-1 text-[10px] text-slate-600 border-t border-slate-200/60 pt-2 mt-auto">
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>Tree planting drives</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>Clean-up initiatives</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>Eco-awareness clubs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BOTTOM ROW:
          1. Voices of Change (Testimonial Slider)
          2. Transformation in Action (Interactive Before / After Comparison)
          3. Our Commitment for the Future (4 Mini Cards)
          ========================================================================= */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Block 1 (Left 4 Cols): Voices of Change */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                      Voices of Change
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Real stories from the people whose lives we've touched.
                    </p>
                  </div>
                  {/* Arrows */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={prevVoice}
                      aria-label="Previous story"
                      className="w-7 h-7 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextVoice}
                      aria-label="Next story"
                      className="w-7 h-7 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Active Slide */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-emerald-100 shadow-2xs">
                    <Image
                      src={VOICES_OF_CHANGE[activeVoiceIndex].image}
                      alt={VOICES_OF_CHANGE[activeVoiceIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-1.5">
                    <span className="font-serif text-3xl text-emerald-600 leading-none block -mb-2">
                      “
                    </span>
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      {VOICES_OF_CHANGE[activeVoiceIndex].quote}
                    </p>
                    <div className="pt-1">
                      <div className="text-xs font-bold text-slate-900">
                        — {VOICES_OF_CHANGE[activeVoiceIndex].name}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {VOICES_OF_CHANGE[activeVoiceIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5">
                {VOICES_OF_CHANGE.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveVoiceIndex(idx)}
                    aria-label={`Go to voice ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      activeVoiceIndex === idx
                        ? "w-5 bg-emerald-600"
                        : "w-1.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Block 2 (Middle 4.5 Cols): Transformation in Action (Interactive Before & After) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                    Transformation in Action
                  </h3>
                  <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
                    <button
                      onClick={() => setSliderPosition(0)}
                      className={`px-2 py-0.5 rounded ${sliderPosition === 0 ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500"}`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setSliderPosition(50)}
                      className={`px-2 py-0.5 rounded ${sliderPosition === 50 ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500"}`}
                    >
                      Split
                    </button>
                    <button
                      onClick={() => setSliderPosition(100)}
                      className={`px-2 py-0.5 rounded ${sliderPosition === 100 ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500"}`}
                    >
                      After
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  From makeshift rural shelters to vibrant, equipped study centers.
                </p>

                {/* Interactive Comparison Container */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xs select-none">
                  {/* After Image (Full background) */}
                  <div className="absolute inset-0">
                    <Image
                      src="/assets/images/prog-community-hero.jpg"
                      alt="Renovated community learning center"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      After
                    </div>
                  </div>

                  {/* Before Image (Clipped overlay) */}
                  <div
                    style={{ width: `${sliderPosition}%` }}
                    className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-lg transition-all duration-150"
                  >
                    <div className="relative w-full h-full min-w-[320px] sm:min-w-[400px]">
                      <Image
                        src="/assets/images/prog-community-hut.jpg"
                        alt="Makeshift village shelter before renovation"
                        fill
                        className="object-cover filter grayscale-20"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-slate-800 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      Before
                    </div>
                  </div>

                  {/* Interactive Slider Divider Handle */}
                  <div
                    style={{ left: `${sliderPosition}%` }}
                    className="absolute inset-y-0 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-6 h-6 rounded-full bg-white text-slate-700 shadow-md flex items-center justify-center border border-slate-300 text-[10px] font-bold">
                      ⇄
                    </div>
                  </div>
                </div>

                {/* Slider Input Control */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-500">Before</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="flex-1 accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                  />
                  <span className="text-[10px] font-bold text-emerald-700">After</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Infrastructure Renovation</span>
                <span className="font-bold text-slate-800">100% Volunteer Led</span>
              </div>
            </div>

            {/* Block 3 (Right 3.5 Cols): Our Commitment for the Future */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                  Our Commitment for the Future
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  We will continue to create a positive and lasting impact through our programs.
                </p>

                {/* 4 Commitment Cards Grid */}
                <div className="grid grid-cols-2 gap-3 pt-5">
                  {/* Commitment 1 */}
                  <div className="bg-[#FAF9F5] rounded-2xl border border-sky-100 p-3 text-center flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-1.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      More Children
                    </div>
                    <div className="text-[10px] text-slate-500">
                      in School
                    </div>
                  </div>

                  {/* Commitment 2 */}
                  <div className="bg-[#FAF9F5] rounded-2xl border border-emerald-100 p-3 text-center flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5">
                      <Heart className="w-4 h-4 fill-emerald-600/30" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      Healthier
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Communities
                    </div>
                  </div>

                  {/* Commitment 3 */}
                  <div className="bg-[#FAF9F5] rounded-2xl border border-rose-100 p-3 text-center flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-rose-100 text-[#E11D48] flex items-center justify-center mb-1.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      Greater
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Opportunities
                    </div>
                  </div>

                  {/* Commitment 4 */}
                  <div className="bg-[#FAF9F5] rounded-2xl border border-amber-100 p-3 text-center flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#E59819] flex items-center justify-center mb-1.5">
                      <TreePine className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      A Cleaner
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Environment
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Audited Social Goals</span>
                <Link
                  href="/get-involved"
                  className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  <span>Join Our Journey</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BOTTOM HORIZON PANORAMIC CTA STRIP
          "Together We Create Brighter Tomorrows ♡"
          ========================================================================= */}
      <section className="py-6 sm:py-10 pb-16">
        <Container>
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[140px] sm:min-h-[160px] flex items-center justify-between px-6 sm:px-12">
            {/* Background Image */}
            <Image
              src="/assets/images/sponsor-students-horizon.jpg"
              alt="Students looking towards sunrise horizon"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark contrast gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-slate-950/80" />

            {/* Left Cursive Quote */}
            <div className="relative z-10 max-w-md">
              <p className="font-serif italic font-bold text-xl sm:text-2xl lg:text-3xl text-amber-200 drop-shadow flex items-center gap-2">
                <span>Together We Create Brighter Tomorrows</span>
                <span className="text-rose-400 not-italic">♡</span>
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsBankModalOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9F1239] text-white font-bold text-xs rounded-xl shadow-md inline-flex items-center gap-1.5 transition-transform hover:scale-[1.02]"
              >
                <Heart className="w-3.5 h-3.5 fill-white/20" />
                <span>Donate Now</span>
              </button>

              <Link
                href="/volunteer"
                className="px-5 py-2.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md inline-flex items-center gap-1.5 transition-colors"
              >
                <Users className="w-3.5 h-3.5 text-slate-700" />
                <span>Become a Volunteer</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          DIRECT BANK DETAILS MODAL
          ========================================================================= */}
      {isBankModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
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
                  Official Trust Account Details
                </h3>
              </div>
              <button
                onClick={() => setIsBankModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 text-xs">
              <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-2xl">
                <span className="font-bold text-[#0F2942] block text-sm mb-0.5">
                  Direct Bank Transfer (NEFT / RTGS / IMPS)
                </span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Every rupee reaches designated community programs directly with 0% intermediary
                  deductions.
                </p>
              </div>

              {/* Bank Account Details Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Account Name:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">Sathiyavani Charitable Trust</span>
                    <button
                      onClick={() => handleCopyText("Sathiyavani Charitable Trust", "accName")}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      {copiedBankField === "accName" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Bank:</span>
                  <span className="font-bold text-slate-900">State Bank of India (SBI)</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Branch:</span>
                  <span className="font-bold text-slate-900">Chennai Main Branch</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-semibold">Account Type:</span>
                  <span className="font-bold text-slate-900">Current Account (Trust)</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 font-semibold">Trust Helpline / WhatsApp:</span>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
                  >
                    <span>{SITE_CONFIG.phone}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Receipt Acknowledgment */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-emerald-950 block text-xs">
                    Send Transfer Acknowledgment
                  </span>
                  <span className="text-[11px] text-emerald-800">
                    Receive your official trust donation receipt on WhatsApp
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

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Direct Account Accountability
              </span>
              <button
                onClick={() => setIsBankModalOpen(false)}
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
