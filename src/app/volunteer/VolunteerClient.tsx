"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  Sprout,
  Star,
  GraduationCap,
  X,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Gift,
  Clock,
  Sparkles,
  MessageSquare,
  Briefcase,
  Building2,
  Lightbulb,
  FileText,
  CheckCircle2,
  Paperclip,
  Smile,
  HandHeart,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VolunteerApplicationForm } from "@/components/forms/VolunteerApplicationForm";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

interface VolunteerRoleItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  image: string;
  tag: string;
}

const VOLUNTEER_ROLES: VolunteerRoleItem[] = [
  {
    id: "education",
    title: "Education Support",
    description: "Help with teaching, learning activities and mentoring children.",
    icon: <BookOpen className="w-4 h-4" />,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    image: "/assets/images/tuition-learning.jpg",
    tag: "Tuition Center",
  },
  {
    id: "child-dev",
    title: "Child Development",
    description: "Assist in early learning, creative activities and child care programs.",
    icon: <Users className="w-4 h-4" />,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    image: "/assets/images/volunteer-child-dev.jpg",
    tag: "Weekend Arts",
  },
  {
    id: "community",
    title: "Community Outreach",
    description: "Support awareness drives, health camps and local community initiatives.",
    icon: <HandHeart className="w-4 h-4" />,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    image: "/assets/images/prog-community-hero.jpg",
    tag: "Field Support",
  },
  {
    id: "environment",
    title: "Environment",
    description: "Join tree plantation drives, clean-up campaigns and environmental education.",
    icon: <Sprout className="w-4 h-4" />,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    image: "/assets/images/tree-planting.jpg",
    tag: "Green Chennai",
  },
  {
    id: "festival",
    title: "Festival Support",
    description: "Help organize and distribute essentials during festivals.",
    icon: <Gift className="w-4 h-4" />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    image: "/assets/images/diwali-distribution.jpg",
    tag: "Diwali Drives",
  },
];

const VOLUNTEER_TESTIMONIALS = [
  {
    name: "Nivetha",
    role: "Volunteer",
    image: "/assets/images/team-ms-priya.jpg",
    quote:
      "Volunteering with Sathiyavani Trust has been a truly enriching experience. Seeing the children's smiles motivates me to keep contributing.",
  },
  {
    name: "Vinoth Kumar",
    role: "Weekend Tutor",
    image: "/assets/images/team-mr-vinoth.jpg",
    quote:
      "Spending two hours every Saturday guiding high schoolers in algebra has given my weekends real purpose. The kids' enthusiasm is contagious.",
  },
  {
    name: "Anitha S.",
    role: "Arts & Sports Mentor",
    image: "/assets/images/team-ms-anitha.jpg",
    quote:
      "From drawing workshops to reading sessions, watching these children grow in confidence is the most rewarding feeling.",
  },
];

export function VolunteerClient() {
  const { trans } = useLanguage();
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isFlexibleModalOpen, setIsFlexibleModalOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <div className="bg-[#FAF8F5] min-h-screen relative overflow-hidden font-body text-slate-800">
      {/* Decorative leaf branch in top-left background */}
      <div className="absolute top-0 left-0 w-44 sm:w-64 h-44 sm:h-64 pointer-events-none select-none opacity-20 z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-700">
          <path
            d="M0 0C40 60 120 70 190 20C150 100 80 130 0 140V0Z"
            fill="currentColor"
            opacity="0.35"
          />
          <path
            d="M10 20C50 60 100 70 160 40M40 70C70 95 110 90 140 70M70 110C95 125 130 115 150 95"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative leaf branch in top-right background */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 pointer-events-none select-none opacity-20 z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-800">
          <path
            d="M200 0C160 60 80 70 10 20C50 100 120 130 200 140V0Z"
            fill="currentColor"
            opacity="0.35"
          />
          <path
            d="M190 20C150 60 100 70 40 40M160 70C130 95 90 90 60 70M130 110C105 125 70 115 50 95"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* =========================================================================
          1. HERO SECTION
         ========================================================================= */}
      <section className="relative z-10 pt-8 sm:pt-12 pb-10 sm:pb-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (Cols: 6) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Tag: VOLUNTEER WITH US */}
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-slate-400 rounded-full" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-700">
                  {trans("Volunteer With Us", "தன்னார்வலராக இணையுங்கள்")}
                </span>
              </div>

              {/* Headings matching mockup */}
              <div className="space-y-1">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                  {trans("Be the Change", "மாற்றத்தின் தொடக்கமாய்")}
                </h1>
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D824E] block tracking-tight leading-tight">
                  {trans("They Believe In", "குழந்தைகளுடன் இணையுங்கள்")}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                {trans(
                  "Your time, skills and compassion can create real opportunities for children and communities. Join hands with Sathiyavani Charitable Trust and be a part of a brighter, kinder and more inclusive tomorrow.",
                  "உங்கள் நேரம், திறமை மற்றும் அன்பு பின்தங்கிய குழந்தைகளுக்கு புதிய வாய்ப்புகளை உருவாக்குகிறது. சத்தியவாணி அறக்கட்டளையுடன் கைகோர்த்து ஒளிரும் எதிர்காலத்தை உருவாக்குங்கள்."
                )}
              </p>

              {/* Primary Action Button */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* Primary Button (Hot pink pill) */}
                <button
                  type="button"
                  onClick={() => setIsApplicationModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-sm shadow-md shadow-pink-500/20 transition-all hover:scale-102 active:scale-95 group"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* 4 Badges in horizontal row matching mockup */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                {/* 1. Real People */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-800 bg-[#FFFBEB] border border-amber-200/90 shadow-2xs">
                  <Users className="w-3.5 h-3.5 text-amber-600" />
                  <span>{trans("Real People", "உண்மையான மனிதர்கள்")}</span>
                </div>

                {/* 2. Real Opportunities */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 bg-[#F0FDF4] border border-emerald-200/90 shadow-2xs">
                  <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{trans("Real Opportunities", "உண்மையான வாய்ப்புகள்")}</span>
                </div>

                {/* 3. Real Impact */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-700 bg-[#FFF0F4] border border-rose-200/90 shadow-2xs">
                  <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                  <span>{trans("Real Impact", "உண்மையான தாக்கம்")}</span>
                </div>

                {/* 4. Brighter Tomorrows */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-900 bg-[#FEFCE8] border border-yellow-300/80 shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{trans("Brighter Tomorrows", "ஒளிரும் எதிர்காலம்")}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card (Cols: 6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] sm:aspect-[16/10] bg-slate-100 group">
                <Image
                  src="/assets/images/volunteer-hero.jpg"
                  alt="Smiling volunteer in dark navy polo shirt teaching school children outdoors"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Top-Right Tilted Note Sticker Frame */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 transform rotate-2 hover:rotate-0 transition-transform duration-300 z-10 pointer-events-none select-none max-w-[210px] sm:max-w-[250px]">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-2xl shadow-xl border border-slate-200/90 text-center">
                    <div className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-tight">
                      <div className="flex items-center justify-center gap-1 text-slate-900">
                        <span>{trans("Small Actions", "சிறு முயற்சிகள்")}</span>
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
                      </div>
                      <div className="text-brand-navy">{trans("Create", "உருவாக்கும்")}</div>
                      <div className="text-amber-600 font-extrabold">{trans("Big Changes", "பெரும் மாற்றங்கள்")}</div>
                    </div>
                    {/* Caption neatly framed inside */}
                    <div className="mt-2 pt-2 border-t border-slate-100 text-slate-600 text-[10px] sm:text-[11px] font-semibold leading-snug">
                      {trans("People like you make this possible", "உங்களைப் போன்ற நல்மனங்களே இதை சாத்தியமாக்குகிறார்கள்")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. WAYS YOU CAN VOLUNTEER (5 Track Cards + 1 Flexible Card)
         ========================================================================= */}
      <section className="py-8 sm:py-12 relative z-10">
        <Container>
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <div className="relative inline-block">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {trans("Ways You Can Volunteer", "நீங்கள் பங்களிக்கக்கூடிய வழிகள்")}
              </h2>
              {/* Yellow decorative brush underline */}
              <svg className="w-24 sm:w-32 h-2 text-amber-400 mt-1" viewBox="0 0 100 10" fill="none">
                <path
                  d="M2 6C25 2 75 2 98 7"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* 6-Item Grid: 5 Roles + 1 Flexible Opportunity Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-4 items-stretch">
            {VOLUNTEER_ROLES.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-3xl p-3 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo thumbnail */}
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 mb-2.5">
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-2 mb-1.5">
                    <div
                      className={`w-7 h-7 rounded-xl ${role.iconBg} ${role.iconColor} flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      {role.icon}
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      {role.id === "education" ? trans("Education Support", "கல்வி ஆதரவு")
                        : role.id === "child-dev" ? trans("Child Development", "குழந்தை வளர்ச்சி")
                        : role.id === "community" ? trans("Community Outreach", "சமூக உதவி")
                        : role.id === "environment" ? trans("Environment", "சுற்றுச்சூழல்")
                        : trans("Festival Support", "பண்டிகை கால உதவி")}
                    </h3>
                  </div>

                  {/* Subtext description */}
                  <p className="text-slate-500 text-[11px] leading-relaxed mb-3">
                    {role.id === "education" ? trans("Help with teaching, learning activities and mentoring children.", "குழந்தைகளுக்கு பாடம் கற்பித்தல் மற்றும் மாலை நேர பயிற்சியில் உதவுங்கள்.")
                      : role.id === "child-dev" ? trans("Assist in early learning, creative activities and child care programs.", "படைப்பாற்றல் செயல்பாடுகள் மற்றும் குழந்தை நல்வாழ்வு திட்டங்களில் உதவுங்கள்.")
                      : role.id === "community" ? trans("Support awareness drives, health camps and local community initiatives.", "விழிப்புணர்வு முகாம்கள் மற்றும் களப்பணிகளில் பங்கெடுங்கள்.")
                      : role.id === "environment" ? trans("Join tree plantation drives, clean-up campaigns and environmental education.", "மரக்கன்றுகள் நடுதல் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வில் இணையுங்கள்.")
                      : trans("Help organize and distribute essentials during festivals.", "பண்டிகைக் காலங்களில் தேவைகளை ஒழுங்குபடுத்தி விநியோகிக்க உதவுங்கள்.")}
                  </p>
                </div>

                {/* Bottom circular arrow trigger */}
                <div className="pt-1 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsApplicationModalOpen(true)}
                    className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors group-hover:bg-[#E11D74] group-hover:text-white"
                    aria-label={`Apply for ${role.title}`}
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}

            {/* Card 6: "Don't have time to volunteer regularly?" (Flexible card matching mockup) */}
            <div className="bg-[#FFFDF5] rounded-3xl p-4 border border-amber-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
              {/* Paperclip illustration in top right */}
              <div className="absolute top-3 right-3 text-emerald-600 select-none">
                <Paperclip className="w-5 h-5 -rotate-45" />
              </div>

              <div>
                {/* Waving hand / rays icon */}
                <div className="w-9 h-9 rounded-2xl bg-rose-100/80 text-rose-600 flex items-center justify-center mb-2.5">
                  <HandHeart className="w-5 h-5" />
                </div>

                <h3 className="font-heading font-bold text-slate-900 text-xs sm:text-sm leading-snug mb-1.5">
                  {trans("Don't have time to volunteer regularly?", "வாரந்தோறும் வர நேரம் இல்லையா?")}
                </h3>

                <p className="text-slate-600 text-[11px] leading-relaxed mb-4">
                  {trans("You can still contribute through skill-based support, event volunteering or one-time drives.", "திறன் சார்ந்த வழிகாட்டல் அல்லது ஒரு நாள் சிறப்பு நிகழ்வுகள் மூலம் நீங்கள் பங்களிக்கலாம்.")}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsFlexibleModalOpen(true)}
                  className="w-full py-2 px-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-[11px] transition-all flex items-center justify-center gap-1 shadow-2xs"
                >
                  <span>{trans("Explore Flexible Opportunities", "நெகிழ்வான வாய்ப்புகளை காண்க")}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. WHY VOLUNTEER WITH US? + TESTIMONIAL + OUR VOLUNTEERS IN ACTION
         ========================================================================= */}
      <section className="py-8 sm:py-12 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Card: Why Volunteer With Us? (Cols: 4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight mb-4">
                  {trans("Why Volunteer With Us?", "ஏன் எங்களோடு இணைய வேண்டும்?")}
                </h3>

                {/* 5 Circular Benefit Items */}
                <div className="flex flex-wrap items-center justify-between gap-3 py-1">
                  {/* Benefit 1 */}
                  <div className="flex flex-col items-center text-center w-14">
                    <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mb-1 shadow-2xs">
                      <Heart className="w-4 h-4 fill-rose-600" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">
                      {trans("Make a Real Difference", "நேரடி தாக்கம்")}
                    </span>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex flex-col items-center text-center w-14">
                    <div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-1 shadow-2xs">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">
                      {trans("Learn New Skills", "புதிய திறன்கள்")}
                    </span>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex flex-col items-center text-center w-14">
                    <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-1 shadow-2xs">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">
                      {trans("Be Part of a Community", "அன்பான சமூகம்")}
                    </span>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex flex-col items-center text-center w-14">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-1 shadow-2xs">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">
                      {trans("Meaningful Experience", "அர்த்தமுள்ள அனுபவம்")}
                    </span>
                  </div>

                  {/* Benefit 5 */}
                  <div className="flex flex-col items-center text-center w-14">
                    <div className="w-9 h-9 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 flex items-center justify-center mb-1 shadow-2xs">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">
                      {trans("Create Lasting Impact", "நிலையான மாற்றம்")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{trans("Certificate & formal letters of community service provided", "தன்னார்வத் தொண்டுக்கான சான்றிதழ் மற்றும் பரிந்துரை கடிதம் வழங்கப்படும்")}</span>
              </div>
            </div>

            {/* Center Card: Testimonial (Nivetha) (Cols: 4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between relative">
              <div className="flex items-start gap-3.5">
                {/* Photo of volunteer */}
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-emerald-200 shadow-xs">
                  <Image
                    src={VOLUNTEER_TESTIMONIALS[testimonialIdx].image}
                    alt={VOLUNTEER_TESTIMONIALS[testimonialIdx].name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-emerald-600 text-2xl font-serif font-black leading-none block -mb-1 select-none">
                    &ldquo;&ldquo;
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    &ldquo;{VOLUNTEER_TESTIMONIALS[testimonialIdx].quote}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-bold text-slate-900">
                    — {VOLUNTEER_TESTIMONIALS[testimonialIdx].name},{" "}
                    <span className="text-slate-500 font-medium">
                      {VOLUNTEER_TESTIMONIALS[testimonialIdx].role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Indicator dots */}
              <div className="flex items-center justify-center gap-1.5 pt-3">
                {VOLUNTEER_TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setTestimonialIdx(dotIdx)}
                    className={`h-1.5 rounded-full transition-all ${
                      dotIdx === testimonialIdx ? "w-5 bg-emerald-600" : "w-1.5 bg-slate-300"
                    }`}
                    aria-label={`Slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Card: Our Volunteers in Action (Cols: 4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight mb-4">
                  {trans("Our Volunteers in Action", "களத்தில் எங்கள் தன்னார்வலர்கள்")}
                </h3>

                {/* 4 Metrics in a row/grid matching mockup */}
                <div className="grid grid-cols-4 gap-2 text-center py-1">
                  {/* Metric 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      100+
                    </span>
                    <span className="text-[9px] font-semibold text-slate-500 mt-0.5 leading-tight">
                      {trans("Active Volunteers", "தன்னார்வலர்கள்")}
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      5,000+
                    </span>
                    <span className="text-[9px] font-semibold text-slate-500 mt-0.5 leading-tight">
                      {trans("Hours Contributed", "பங்களித்த மணிநேரம்")}
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-1">
                      <Heart className="w-4 h-4 fill-pink-600" />
                    </div>
                    <span className="font-heading font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      10+
                    </span>
                    <span className="text-[9px] font-semibold text-slate-500 mt-0.5 leading-tight">
                      {trans("Programs Supported", "ஆதரித்த திட்டங்கள்")}
                    </span>
                  </div>

                  {/* Metric 4 */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 fill-amber-500" />
                    </div>
                    <span className="font-heading font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      {trans("Many", "ஆயிரக்கணக்கான")}
                    </span>
                    <span className="text-[9px] font-semibold text-slate-500 mt-0.5 leading-tight">
                      {trans("Lives Touched", "பயனடைந்த மக்கள்")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative leafy sprig in right corner */}
              <div className="pt-2 text-right text-emerald-600 opacity-20 pointer-events-none">
                <Sprout className="w-6 h-6 ml-auto" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. HOW TO BECOME A VOLUNTEER & WHO CAN VOLUNTEER?
         ========================================================================= */}
      <section className="py-8 sm:py-12 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left 4-Step Timeline: How to Become a Volunteer (Cols: 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-center">
              <div className="mb-5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {trans("How to Become a Volunteer", "தன்னார்வலராவது எப்படி?")}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 relative">
                {/* Step 1 */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#E11D74] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      1
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4 fill-rose-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      {trans("Express Your Interest", "விருப்பத்தை தெரிவிக்கவும்")}
                    </h4>
                    <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed mt-0.5">
                      {trans("Fill out our simple volunteer form.", "எங்கள் எளிய தன்னார்வ விண்ணப்பத்தை பூர்த்தி செய்யுங்கள்.")}
                    </p>
                  </div>
                  <div className="hidden sm:block absolute top-3 -right-1 text-slate-300">
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#0284C7] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      2
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      {trans("Discussion", "கலந்தாலோசித்தல்")}
                    </h4>
                    <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed mt-0.5">
                      {trans("We'll connect with you to understand your interests and skills.", "உங்கள் திறன்கள் மற்றும் விருப்பங்களை அறிய உங்களைத் தொடர்பு கொள்வோம்.")}
                    </p>
                  </div>
                  <div className="hidden sm:block absolute top-3 -right-1 text-slate-300">
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#16A34A] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      3
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      {trans("Orientation", "வழிகாட்டுதல்")}
                    </h4>
                    <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed mt-0.5">
                      {trans("Learn about our programs and volunteer guidelines.", "திட்டங்கள் மற்றும் வழிகாட்டு நெறிமுறைகளை அறிந்து கொள்ளுங்கள்.")}
                    </p>
                  </div>
                  <div className="hidden sm:block absolute top-3 -right-1 text-slate-300">
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#F59E0B] text-slate-950 font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      4
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      {trans("Get Started", "தொடங்குங்கள்")}
                    </h4>
                    <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed mt-0.5">
                      {trans("Join activities and make a positive impact!", "நற்பணிகளில் இணைந்து மகிழ்ச்சியுடன் தொடங்குங்கள்!")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Who Can Volunteer? (Cols: 5 - Dark Navy banner matching mockup) */}
            <div className="lg:col-span-5 bg-[#0F2942] rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight mb-4">
                  {trans("Who Can Volunteer?", "யாரெல்லாம் இணையலாம்?")}
                </h3>

                {/* 5 Icons Row */}
                <div className="grid grid-cols-5 gap-2 text-center mb-4">
                  {/* Students */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-1.5 hover:bg-white/20 transition-colors">
                      <GraduationCap className="w-4 h-4 text-sky-300" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-200 leading-tight">
                      {trans("Students", "மாணவர்கள்")}
                    </span>
                  </div>

                  {/* Working Professionals */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-1.5 hover:bg-white/20 transition-colors">
                      <Briefcase className="w-4 h-4 text-emerald-300" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-200 leading-tight">
                      {trans("Working Professionals", "பணியாளர்கள்")}
                    </span>
                  </div>

                  {/* Teachers */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-1.5 hover:bg-white/20 transition-colors">
                      <Users className="w-4 h-4 text-amber-300" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-200 leading-tight">
                      {trans("Teachers", "ஆசிரியர்கள்")}
                    </span>
                  </div>

                  {/* Organizations */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-1.5 hover:bg-white/20 transition-colors">
                      <Building2 className="w-4 h-4 text-purple-300" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-200 leading-tight">
                      {trans("Organizations", "நிறுவனங்கள்")}
                    </span>
                  </div>

                  {/* Anyone with a Big Heart */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-1.5 hover:bg-white/20 transition-colors">
                      <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-200 leading-tight">
                      {trans("Anyone with a Big Heart", "அன்புள்ளம் கொண்ட எவரும்")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right handwritten script slogan with heart doodle matching mockup */}
              <div className="border-t border-white/15 pt-3 flex items-center justify-between">
                <div className="font-handwriting text-amber-200 text-sm sm:text-base leading-tight">
                  <div>{trans("Different People", "பல்வேறு மனிதர்கள்")}</div>
                  <div>{trans("Different Skills", "பல்வேறு திறன்கள்")}</div>
                  <div className="text-white font-bold">{trans("A Stronger Tomorrow", "வலிமையான எதிர்காலம்")}</div>
                </div>

                <div className="text-pink-400">
                  <Heart className="w-6 h-6 stroke-[1.5]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. BOTTOM PANORAMIC HORIZON BANNER & FLOATING CTA CARD
         ========================================================================= */}
      <section className="relative w-full pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        {/* Background photo: Volunteers facing sunrise */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/volunteer-team-horizon.jpg"
            alt="Volunteers in navy shirts facing the mountain sunrise"
            fill
            unoptimized
            className="object-cover object-center"
          />
          {/* Gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />
        </div>

        {/* Script Accent on Horizon */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-right">
          <div className="inline-block transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="font-handwriting text-2xl sm:text-3xl text-amber-200 font-bold drop-shadow-lg">
              {trans("Together We Create Brighter Tomorrows", "இணைந்து உருவாக்குவோம் ஒளிமயமான எதிர்காலத்தை")} <span className="text-rose-400 inline-block">♡</span>
            </span>
          </div>
        </div>

        {/* Floating Bottom Card: Ready to Make a Difference? */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/80 flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Left text */}
            <div className="flex items-center gap-3.5 text-center md:text-left">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  {trans("Ready to Make a Difference?", "மாற்றத்தை உருவாக்கத் தயாரா?")}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                  {trans("Join our growing community of volunteers and be a part of meaningful change.", "எங்கள் தன்னார்வலர் குடும்பத்தில் இணைந்து அர்த்தமுள்ள மாற்றத்தை ஏற்படுத்துங்கள்.")}
                </p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsApplicationModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <span>{trans("Register as a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                <span>{trans("Have Questions? Contact Us", "கேள்விகள் உள்ளதா? தொடர்பு கொள்க")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MODAL: VOLUNTEER APPLICATION FORM
         ========================================================================= */}
      {isApplicationModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8">
            <button
              type="button"
              onClick={() => setIsApplicationModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close form modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{trans("Direct Volunteer Application", "நேரடி தன்னார்வ விண்ணப்பம்")}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
              {trans("Apply to Volunteer", "தன்னார்வலராக விண்ணப்பிக்க")}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              {trans("Fill out your details below. Our volunteer coordinator will reach out for a brief conversation and orientation schedule.", "உங்கள் விவரங்களை பூர்த்தி செய்யுங்கள். எங்கள் தன்னார்வ ஒருங்கிணைப்பாளர் உங்களை தொடர்பு கொள்வார்.")}
            </p>

            <VolunteerApplicationForm />
          </div>
        </div>
      )}



      {/* =========================================================================
          MODAL: FLEXIBLE OPPORTUNITIES
         ========================================================================= */}
      {isFlexibleModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative border border-slate-200">
            <button
              type="button"
              onClick={() => setIsFlexibleModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Paperclip className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                {trans("Flexible Volunteering Pathways", "நெகிழ்வான தன்னார்வ வாய்ப்புகள்")}
              </h3>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed mb-5">
              {trans("Can't commit to regular weekend batches? We welcome skill-based volunteers and periodic project supporters:", "வாரந்தோறும் வர இயலவில்லையா? திறன் சார்ந்த ஆதரவு மற்றும் பருவகால திட்டங்களில் நீங்கள் பங்கேற்கலாம்:")}
            </p>

            <div className="space-y-3 mb-6 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">{trans("1. Digital & Design Support", "1. டிஜிட்டல் & வடிவமைப்பு ஆதரவு")}</strong>
                <span className="text-slate-600">{trans("Help design flyers, social posts, photography, or website enhancements from home.", "வீட்டிலிருந்தபடியே சுவரொட்டிகள், புகைப்படங்கள் அல்லது இணையதள மேம்பாடுகளில் உதவலாம்.")}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">{trans("2. Seasonal Distribution Drives", "2. பண்டிகை கால விநியோகப் பணிகள்")}</strong>
                <span className="text-slate-600">{trans("Join our Diwali gift kit packing or back-to-school bag distribution days (1-day commitment).", "தீபாவளி பரிசுப் பொருட்கள் பேக்கிங் அல்லது கல்வி உபகரணங்கள் விநியோகத்தில் ஒரு நாள் உதவலாம்.")}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">{trans("3. Guest Speaker / Career Talks", "3. சிறப்பு வழிகாட்டுதல் & தொழில் ஆலோசனைகள்")}</strong>
                <span className="text-slate-600">{trans("Deliver a 45-minute interactive career guidance session for 10th standard students.", "10-ஆம் வகுப்பு மாணவர்களுக்கு 45 நிமிட வழிகாட்டல் அல்லது ஊக்குவிப்பு அமர்வை வழங்கலாம்.")}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsFlexibleModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
              >
                {trans("Close", "மூடுக")}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsFlexibleModalOpen(false);
                  setIsApplicationModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-xs transition-colors"
              >
                {trans("Express Interest", "விருப்பத்தை தெரிவிக்க")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
