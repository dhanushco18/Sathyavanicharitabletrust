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
  Globe,
  Share2,
  Megaphone,
  Handshake,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageCircle,
  FileText,
  Phone,
  Sparkles,
  X,
  Compass,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

interface SupporterTestimonial {
  name: string;
  role: string;
  roleTa: string;
  image: string;
  quote: string;
  quoteTa: string;
}

const SUPPORTERS: SupporterTestimonial[] = [
  {
    name: "Priya",
    role: "Volunteer",
    roleTa: "தன்னார்வலர்",
    image: "/assets/images/team-ms-priya.jpg",
    quote:
      "Volunteering with Sathiyavani Trust has been one of the most fulfilling experiences of my life. Seeing the smiles of the children and the positive change in communities keeps me inspired.",
    quoteTa:
      "சத்தியவாணி அறக்கட்டளையில் தன்னார்வலராக பணியாற்றுவது என் வாழ்வின் மறக்க முடியாத அனுபவம். குழந்தைகளின் புன்னகையும் சமுதாய மாற்றமும் என்னை தொடர்ந்து ஊக்கப்படுத்துகிறது.",
  },
  {
    name: "Rajesh K.",
    role: "Student Sponsor",
    roleTa: "மாணவர் கல்வி ஆதரவாளர்",
    image: "/assets/images/team-mr-vinoth.jpg",
    quote:
      "Sponsoring a student's education here gives me complete peace of mind. Every rupee directly covers school fees and study materials without intermediaries or administrative leaks.",
    quoteTa:
      "இங்கு மாணவருக்குக் கல்வி உதவி செய்வது எனக்கு முழு மன அமைதியைத் தருகிறது. ஒவ்வொரு ரூபாயும் இடைத்தரகர்கள் இன்றி நேரிடையாக பள்ளி கட்டணங்கள் மற்றும் படிப்புப் பொருட்களுக்குப் பயன்படுகிறது.",
  },
  {
    name: "Dr. Malar",
    role: "Academic Mentor",
    roleTa: "கல்வி வழிகாட்டி",
    image: "/assets/images/team-ms-anitha.jpg",
    quote:
      "Our weekend tutoring sessions at the library center have transformed how these children approach mathematics and science. Their genuine hunger to learn is truly humbling.",
    quoteTa:
      "நூலக மையத்தில் எங்கள் வார இறுதி வகுப்புகள் குழந்தைகள் கணிதம் மற்றும் அறிவியலை அணுகும் விதத்தை மாற்றியுள்ளன. அவர்களின் கல்வி கற்கும் ஆர்வம் நெகிழ வைக்கிறது.",
  },
];

export function GetInvolvedClient() {
  const { trans } = useLanguage();
  const [activeSupporterIdx, setActiveSupporterIdx] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);

  const nextSupporter = () => {
    setActiveSupporterIdx((prev) => (prev + 1) % SUPPORTERS.length);
  };

  const prevSupporter = () => {
    setActiveSupporterIdx((prev) => (prev - 1 + SUPPORTERS.length) % SUPPORTERS.length);
  };

  const handleCopyLink = () => {
    try {
      if (typeof window !== "undefined" && navigator?.clipboard) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      }
    } catch {
      // Insecure context fallback
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://sathiyavanitrust.org/get-involved";
  const shareText = trans(
    "Support Sathiyavani Charitable Trust — Empowering underprivileged children with free education and community welfare in Chennai.",
    "சத்தியவாணி தொண்டு அறக்கட்டளைக்கு ஆதரவளிப்பீர் — சென்னையில் ஏழை எளிய குழந்தைகளுக்கு இலவச கல்வி மற்றும் சமுதாய நலம்."
  );

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
      <section className="relative z-10 pt-8 sm:pt-12 pb-12 sm:pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (Cols: 6) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Headings matching mockup */}
              <div className="space-y-1">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                  {trans("Get Involved", "இணைந்திடுங்கள்")}
                </h1>
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E59819] block tracking-tight leading-tight">
                  {trans("Make a Difference", "மாற்றத்தை உருவாக்குங்கள்")}
                </span>
              </div>

              {/* Subtext description */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                {trans(
                  "Be a part of our mission to create brighter futures for children and communities. Whether you donate, volunteer, partner or spread the word — every action counts and brings real change.",
                  "குழந்தைகள் மற்றும் ஏழை எளிய மக்களின் பிரகாசமான எதிர்காலத்திற்கான எங்கள் பணியில் நீங்களும் இணையுங்கள். நன்கொடை, தன்னார்வத் தொண்டு, கூட்டாண்மை அல்லது விழிப்புணர்வு — உங்கள் ஒவ்வொரு செயலும் உண்மையான மாற்றத்தை ஏற்படுத்தும்."
                )}
              </p>

              {/* 4 Pill Badges in horizontal row */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                {/* 1. Support Children */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-700 bg-[#FFF0F4] border border-rose-200/90 shadow-2xs">
                  <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                  <span>{trans("Support Children", "குழந்தைகளுக்கு ஆதரவு")}</span>
                </div>

                {/* 2. Stronger Communities */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-800 bg-[#FFFBEB] border border-amber-200/90 shadow-2xs">
                  <Users className="w-3.5 h-3.5 text-amber-600" />
                  <span>{trans("Stronger Communities", "வலிமையான சமூகம்")}</span>
                </div>

                {/* 3. Positive Change */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 bg-[#F0FDF4] border border-emerald-200/90 shadow-2xs">
                  <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{trans("Positive Change", "நேர்மறை மாற்றம்")}</span>
                </div>

                {/* 4. Brighter Tomorrows */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-900 bg-[#FEFCE8] border border-yellow-300/80 shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{trans("Brighter Tomorrows", "பிரகாசமான எதிர்காலம்")}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card (Cols: 6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] bg-slate-100 group">
                <Image
                  src="/assets/images/get-involved-hero.jpg"
                  alt="Happy smiling schoolgirl in uniform holding a heart card: Thank You for Being a Part of My Future"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />

                {/* Subtle soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Top-Right Tilted Note Sticker */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10 pointer-events-none select-none">
                  <div className="bg-white/95 backdrop-blur-xs px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-xl border border-slate-200/80 text-center">
                    <div className="font-handwriting font-bold text-slate-900 text-lg sm:text-xl leading-tight">
                      <div className="flex items-center justify-center gap-1 text-slate-900">
                        <span>{trans("Real People", "உண்மையான மனிதர்கள்")}</span>
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
                      </div>
                      <div className="text-brand-navy">{trans("Real Support", "நேரடி ஆதரவு")}</div>
                      <div className="text-amber-600">{trans("Real Change", "உண்மையான மாற்றம்")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Decorative gentle curved divider */}
      <div className="w-full h-4 bg-gradient-to-b from-transparent to-[#FAF8F5]" />

      {/* =========================================================================
          2. WAYS TO GET INVOLVED (4 Horizontal Cards Grid)
         ========================================================================= */}
      <section className="py-8 sm:py-12 relative z-10">
        <Container>
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="relative inline-block">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  {trans("Ways to Get Involved", "பங்கேற்கும் வழிகள்")}
                </h2>
                {/* Yellow decorative brush underline */}
                <svg
                  className="w-24 sm:w-32 h-2 text-amber-400 mt-1"
                  viewBox="0 0 100 10"
                  fill="none"
                >
                  <path
                    d="M2 6C25 2 75 2 98 7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="text-slate-500 text-xs sm:text-sm max-w-xl font-normal">
                {trans(
                  "Choose how you want to create a positive impact. There are many ways to support our mission.",
                  "மாற்றத்தை உருவாக்க உங்கள் வழியைத் தேர்ந்தெடுங்கள். எங்கள் நற்பணிகளுக்கு ஆதரவளிக்க பல வழிகள் உள்ளன."
                )}
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {/* Card 1: Donate */}
            <div className="bg-[#FFF8FA] rounded-3xl p-5 border border-pink-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Top: Icon + Title */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#FFE4EC] text-[#E11D74] flex items-center justify-center shrink-0 shadow-2xs">
                    <Heart className="w-5 h-5 fill-[#E11D74]" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {trans("Donate", "நன்கொடை")}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {trans(
                    "Your financial support helps provide education, child development, festival support, community outreach and environmental programs.",
                    "உங்கள் நிதி ஆதரவு இலவசக் கல்வி, குழந்தைகள் வளர்ச்சி, திருவிழா உதவிகள், சமூக நலம் மற்றும் சுற்றுச்சூழல் பணிகளுக்குப் பயன்படுகிறது."
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                {/* Image and Button container */}
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/sponsor"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 shrink-0"
                  >
                    <span>{trans("Donate Now", "நன்கொடை வழங்குக")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-rose-100 shrink-0 border border-rose-200/80 shadow-2xs">
                    <Image
                      src="/assets/images/get-involved-donate.jpg"
                      alt="Girl holding green plant sapling"
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Volunteer */}
            <div className="bg-[#F0F8FF] rounded-3xl p-5 border border-sky-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Top: Icon + Title */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 shadow-2xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {trans("Volunteer", "தன்னார்வலர்")}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {trans(
                    "Give your time and skills to support our programs and be part of meaningful on-ground initiatives.",
                    "எங்கள் களப்பணிகளில் உங்கள் நேரம் மற்றும் திறமைகளை அர்ப்பணித்து அர்த்தமுள்ள மாற்றத்தின் ஒரு பகுதியாகுங்கள்."
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                {/* Image and Button container */}
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 shrink-0"
                  >
                    <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-sky-100 shrink-0 border border-sky-200/80 shadow-2xs">
                    <Image
                      src="/assets/images/get-involved-volunteer.jpg"
                      alt="Volunteer in navy shirt interacting with school child"
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Partner */}
            <div className="bg-[#F0FDF4] rounded-3xl p-5 border border-emerald-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Top: Icon + Title */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0 shadow-2xs">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {trans("Partner", "கூட்டுப்பணி")}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {trans(
                    "Collaborate with us as an individual, organization or corporate partner to create a larger impact together.",
                    "பெரிய அளவிலான சமூக மாற்றத்தை ஏற்படுத்த தனிநபராக, தொண்டு அமைப்பாக அல்லது நிறுவனமாக எங்களுடன் இணைந்து செயல்படுங்கள்."
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                {/* Image and Button container */}
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/partnerships"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 shrink-0"
                  >
                    <span>{trans("Partner With Us", "எங்களுடன் இணையுங்கள்")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-emerald-100 shrink-0 border border-emerald-200/80 shadow-2xs">
                    <Image
                      src="/assets/images/get-involved-partner.jpg"
                      alt="Corporate handshake outdoors in green garden"
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Spread the Word */}
            <div className="bg-[#FFFDF5] rounded-3xl p-5 border border-amber-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Top: Icon + Title */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 shadow-2xs">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {trans("Spread the Word", "செய்தியைப் பரப்புங்கள்")}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {trans(
                    "Help us reach more people. Share our mission, programs and success stories with your network.",
                    "எங்கள் களப்பணிகள் பலரைச் சென்றடைய உதவுங்கள். அறக்கட்டளையின் திட்டங்கள் மற்றும் வெற்றிக் கதைகளை மற்றவர்களுடன் பகிருங்கள்."
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                {/* Image and Button container */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setIsShareModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 shrink-0"
                  >
                    <span>{trans("Share Our Mission", "பணியைப் பகிருங்கள்")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  {/* Smartphone thumbnail with floating social badges */}
                  <div className="relative flex items-center gap-1.5 shrink-0">
                    <div className="relative w-14 h-16 rounded-2xl overflow-hidden bg-amber-100 border border-amber-200/80 shadow-2xs">
                      <Image
                        src="/assets/images/get-involved-spread.jpg"
                        alt="Hands holding phone showing community charity post"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Floating Social Icons */}
                    <div className="flex flex-col gap-1">
                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          shareText + " " + shareUrl
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-4 h-4 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                        aria-label="Share on WhatsApp"
                      >
                        <MessageCircle className="w-2.5 h-2.5" />
                      </a>
                      {/* Instagram */}
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                        aria-label="Visit Instagram"
                      >
                        <Share2 className="w-2.5 h-2.5" />
                      </a>
                      {/* LinkedIn */}
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          shareUrl
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-4 h-4 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                        aria-label="Share on LinkedIn"
                      >
                        <span className="text-[7px] font-black leading-none">in</span>
                      </a>
                      {/* X / Twitter */}
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          shareText
                        )}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                        aria-label="Share on X"
                      >
                        <span className="text-[7px] font-black leading-none">𝕏</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. HOW YOU CAN HELP (4-Step Timeline + Together We Can Do More Card)
         ========================================================================= */}
      <section className="py-8 sm:py-12 relative z-10">
        <Container>
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="relative inline-block">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {trans("How You Can Help", "நீங்கள் எவ்வாறு உதவலாம்")}
                </h2>
                {/* Yellow decorative accent */}
                <svg className="w-20 sm:w-28 h-2 text-amber-400 mt-1" viewBox="0 0 100 10" fill="none">
                  <path
                    d="M2 6C25 2 75 2 98 7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="text-slate-500 text-xs sm:text-sm max-w-xl font-normal">
                {trans(
                  "Small actions lead to big change. Here's how you can get started.",
                  "சிறு செயல்களே பெரு மாற்றத்திற்கு வித்திடுகின்றன. நீங்கள் தொடங்குவதற்கான வழிகள் இதோ."
                )}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left 4-Step Timeline (Cols: 8) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 relative">
                {/* Step 1: Choose Your Way */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#E11D74] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      1
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <Compass className="w-5 h-5 text-rose-600" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm leading-snug">
                      {trans("Choose Your Way", "வழியைத் தேர்வு செய்க")}
                    </h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">
                      {trans("Select how you'd like to get involved.", "உங்களுக்கு விருப்பமான வழியைத் தேர்ந்தெடுங்கள்.")}
                    </p>
                  </div>

                  {/* Chevron arrow pointing right (hidden on mobile) */}
                  <div className="hidden sm:block absolute top-4 -right-1 text-slate-300">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                </div>

                {/* Step 2: Take Action */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#0284C7] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      2
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-sky-600" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm leading-snug">
                      {trans("Take Action", "செயலில் இறங்குங்கள்")}
                    </h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">
                      {trans("Complete a simple form or make a contribution.", "எளிய படிவத்தைப் பூர்த்தி செய்க அல்லது பங்களிக்கவும்.")}
                    </p>
                  </div>

                  {/* Chevron arrow pointing right (hidden on mobile) */}
                  <div className="hidden sm:block absolute top-4 -right-1 text-slate-300">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                </div>

                {/* Step 3: Join Our Community */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#16A34A] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      3
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm leading-snug">
                      {trans("Join Our Community", "சமூகத்தில் இணையுங்கள்")}
                    </h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">
                      {trans("Be part of our growing supporter network.", "எங்கள் ஆதரவாளர் வலையமைப்பில் இணையுங்கள்.")}
                    </p>
                  </div>

                  {/* Chevron arrow pointing right (hidden on mobile) */}
                  <div className="hidden sm:block absolute top-4 -right-1 text-slate-300">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                </div>

                {/* Step 4: Create Real Impact */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#F59E0B] text-slate-950 font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      4
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 fill-amber-500 text-amber-500" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm leading-snug">
                      {trans("Create Real Impact", "உண்மையான தாக்கம்")}
                    </h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">
                      {trans("Help us bring positive and lasting change.", "நீடித்த நேர்மறை மாற்றத்தை உருவாக்க உதவுங்கள்.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Together We Can Do More (Cols: 4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center gap-4">
                {/* Paper cutout figures photo */}
                <div className="relative w-28 h-20 sm:w-32 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/70 shadow-2xs">
                  <Image
                    src="/assets/images/get-involved-together.jpg"
                    alt="Hands holding white paper cutout figures of family holding hands"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {trans("Together We Can Do More", "ஒன்றிணைந்து சாதிப்போம்")}
                  </h3>
                  {/* Small doodle bar */}
                  <div className="w-6 h-1 bg-amber-400 rounded-full mt-1 mb-2" />
                </div>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed mt-3">
                {trans(
                  "When people come together with a shared purpose, we can create healthier communities, happier children and a brighter tomorrow.",
                  "பொதுவான உயரிய நோக்கத்துடன் மக்கள் இணையும்போது, ஆரோக்கியமான சமூகம், மகிழ்ச்சியான குழந்தைகள் மற்றும் ஒளிமயமான எதிர்காலத்தை நாம் படைக்க முடியும்."
                )}
              </p>

              {/* Decorative green leaf sprig in corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 pointer-events-none opacity-20 text-emerald-600">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0C55 25 75 45 100 50C75 55 55 75 50 100C45 75 25 55 0 50C25 45 45 25 50 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. BOTTOM 3-CARD ROW:
             1) The Difference You Can Make (4 items)
             2) Voices of Our Supporters (Testimonial Carousel)
             3) Join Us in Creating Brighter Futures (CTA box)
         ========================================================================= */}
      <section className="py-8 sm:py-12 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Card 1: The Difference You Can Make (Cols: 4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight">
                  {trans("The Difference You Can Make", "நீங்கள் ஏற்படுத்தும் தாக்கம்")}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mt-1 mb-5">
                  {trans(
                    "Your support helps us create opportunities, build stronger communities and bring lasting change.",
                    "உங்கள் ஆதரவு புதிய வாய்ப்புகளை உருவாக்குகிறது, சமூகத்தை பலப்படுத்துகிறது, நீடித்த மாற்றத்தை ஏற்படுத்துகிறது."
                  )}
                </p>
              </div>

              {/* 2x2 Impact Grid matching mockup */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* 1. Education Access */}
                <div className="flex items-start gap-2.5 p-2 rounded-2xl bg-rose-50/50 border border-rose-100/70">
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-bold text-slate-900 text-xs block leading-tight">
                      {trans("Education Access", "கல்வி வாய்ப்பு")}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">
                      {trans("More children in school", "அதிக குழந்தைகள் பள்ளிக்கு")}
                    </span>
                  </div>
                </div>

                {/* 2. Child Development */}
                <div className="flex items-start gap-2.5 p-2 rounded-2xl bg-emerald-50/50 border border-emerald-100/70">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Sprout className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-bold text-slate-900 text-xs block leading-tight">
                      {trans("Child Development", "குழந்தைகள் வளர்ச்சி")}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">
                      {trans("Healthier, happier children", "ஆரோக்கியமான, மகிழ்ச்சியான குழந்தைகள்")}
                    </span>
                  </div>
                </div>

                {/* 3. Community Support */}
                <div className="flex items-start gap-2.5 p-2 rounded-2xl bg-sky-50/50 border border-sky-100/70">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-bold text-slate-900 text-xs block leading-tight">
                      {trans("Community Support", "சமூக ஆதரவு")}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">
                      {trans("Stronger families and homes", "வலிமையான குடும்பங்கள்")}
                    </span>
                  </div>
                </div>

                {/* 4. Environment */}
                <div className="flex items-start gap-2.5 p-2 rounded-2xl bg-amber-50/50 border border-amber-100/70">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-bold text-slate-900 text-xs block leading-tight">
                      {trans("Environment", "சுற்றுச்சூழல்")}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">
                      {trans("Cleaner and greener Chennai", "தூய்மையான பசுமை சென்னை")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Voices of Our Supporters (Cols: 4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between relative">
              {/* Header with Title and Nav arrows */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight">
                  {trans("Voices of Our Supporters", "எங்கள் ஆதரவாளர்களின் குரல்")}
                </h3>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prevSupporter}
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Previous supporter quote"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSupporter}
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Next supporter quote"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quote Content */}
              <div className="flex items-start gap-3.5 my-2">
                {/* Supporter Avatar */}
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-emerald-200 shadow-xs">
                  <Image
                    src={SUPPORTERS[activeSupporterIdx].image}
                    alt={SUPPORTERS[activeSupporterIdx].name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Quote icon */}
                  <span className="text-emerald-600 text-2xl font-serif font-black leading-none block -mb-1 select-none">
                    &ldquo;&ldquo;
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    &ldquo;{trans(SUPPORTERS[activeSupporterIdx].quote, SUPPORTERS[activeSupporterIdx].quoteTa)}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-bold text-slate-900">
                    — {SUPPORTERS[activeSupporterIdx].name},{" "}
                    <span className="text-slate-500 font-medium">
                      {trans(SUPPORTERS[activeSupporterIdx].role, SUPPORTERS[activeSupporterIdx].roleTa)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Carousel indicator dots */}
              <div className="flex items-center justify-center gap-1.5 pt-2">
                {SUPPORTERS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveSupporterIdx(dotIdx)}
                    className={`h-1.5 rounded-full transition-all ${
                      dotIdx === activeSupporterIdx ? "w-5 bg-emerald-600" : "w-1.5 bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Card 3: Join Us in Creating Brighter Futures (Cols: 4) */}
            <div className="lg:col-span-4 bg-[#FFF5F7] rounded-3xl p-6 sm:p-7 border border-rose-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
              {/* Hand-drawn pink heart doodle in top right */}
              <div className="absolute top-4 right-4 text-rose-400 select-none pointer-events-none">
                <svg className="w-8 h-8" viewBox="0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight mb-2 pr-6">
                  {trans("Join Us in Creating Brighter Futures", "பிரகாசமான எதிர்காலத்தை உருவாக்க இணையுங்கள்")}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-normal">
                  {trans(
                    "Whether you donate, volunteer, partner or simply spread the word — you can make a real difference. Be a part of our journey towards a kinder, stronger and more inclusive society.",
                    "நன்கொடை, தன்னார்வலர், கூட்டுப்பணி அல்லது செய்தி பரப்புதல் — உங்களால் உண்மையான மாற்றத்தை ஏற்படுத்த முடியும். அன்பான, சமத்துவமான சமுதாயத்திற்கான எங்கள் பயணத்தில் பங்குபெறுங்கள்."
                  )}
                </p>
              </div>

              {/* Dual Action Buttons matching mockup */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                {/* Donate Now Button (Pink) */}
                <Link
                  href="/sponsor"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-xs shadow-sm transition-all active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 fill-white text-white" />
                  <span>{trans("Donate Now", "நன்கொடை வழங்குக")}</span>
                </Link>

                {/* Become a Volunteer Button (White/Border) */}
                <Link
                  href="/volunteer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 shadow-2xs transition-all active:scale-95"
                >
                  <Users className="w-3.5 h-3.5 text-slate-600" />
                  <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. TRANSPARENCY NOTICE & DIRECT CONTACT BANNER
         ========================================================================= */}
      <section className="pb-16 pt-4 relative z-10">
        <Container>
          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 sm:p-6 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-heading font-bold text-slate-900 text-xs sm:text-sm block">
                  {trans(
                    "Coordinator-Assisted Giving • No Online Commercial Gateways",
                    "ஒருங்கிணைப்பாளர் நேரடி வழிகாட்டுதல் • வணிக இடைத்தரகர்கள் இல்லை"
                  )}
                </span>
                <span className="text-slate-500 text-[11px] block mt-0.5">
                  {trans(
                    "100% of student fee grants and kit supplies are coordinated directly via verified trust accounts.",
                    "மாணவர்களின் கல்விக் கட்டண நிதியுதவிகள் மற்றும் உபகரணங்கள் அனைத்தும் சரிபார்க்கப்பட்ட அறக்கட்டளை கணக்கு வழியாக நேரடியாக நிர்வகிக்கப்படுகின்றன."
                  )}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsBankModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
              >
                {trans("View Account Details", "வங்கி விவரங்களைக் காண்க")}
              </button>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{trans("WhatsApp Us", "வாட்ஸ்அப் செய்தி")}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MODAL: SHARE OUR MISSION
         ========================================================================= */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200">
            <button
              type="button"
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close share dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Megaphone className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                {trans("Share Our Mission", "எங்கள் பணியைப் பகிருங்கள்")}
              </h3>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed mb-6">
              {trans(
                "Amplify our grassroots initiatives across Chennai. Share with your family, friends and professional networks.",
                "சென்னையில் எங்கள் களப்பணிகளை பலருக்கு கொண்டுசேருங்கள். உங்கள் குடும்பத்தினர், நண்பர்கள் மற்றும் சமூக வலைப்பின்னல்களில் பகிருங்கள்."
              )}
            </p>

            {/* Quick Share Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] font-bold text-xs transition-colors"
              >
                <span className="font-bold">LinkedIn</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-black/5 hover:bg-black/10 text-slate-900 font-bold text-xs transition-colors"
              >
                <span className="font-bold">𝕏 (Twitter)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">{trans("Copied!", "நகலெடுக்கப்பட்டது!")}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>{trans("Copy Link", "இணைப்பை நகலெடு")}</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 break-all select-all">
              {shareUrl}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: BANK / ACCOUNT DETAILS (Transparency)
         ========================================================================= */}
      {isBankModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative border border-slate-200">
            <button
              type="button"
              onClick={() => setIsBankModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-[#E11D74] flex items-center justify-center">
                <Heart className="w-4 h-4 fill-[#E11D74]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                {trans("Direct Trust Contribution", "நேரடி அறக்கட்டளை வங்கிப் பங்களிப்பு")}
              </h3>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed mb-5">
              {trans(
                "To guarantee zero leakages and 100% transparency, all donations are received directly via our official trust account. Once completed, share your receipt on WhatsApp to receive an official trust acknowledgment.",
                "இடைத்தரகர்கள் இன்றி 100% வெளிப்படைத்தன்மையுடன் நிதி சேர, அனைத்து நன்கொடைகளும் அதிகாரப்பூர்வ அறக்கட்டளை கணக்கில் நேரடியாகப் பெறப்படுகின்றன. செலுத்தியவுடன் ரசீதை வாட்ஸ்அப்பில் பகிர்ந்துகொண்டு அதிகாரப்பூர்வ ஒப்புதலைப் பெறலாம்."
              )}
            </p>

            <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-slate-200 space-y-2.5 text-xs text-slate-800 mb-6">
              <div className="flex justify-between py-1 border-b border-slate-200/70">
                <span className="text-slate-500">{trans("Account Name:", "கணக்கு பெயர்:")}</span>
                <span className="font-bold text-slate-900">Sathiyavani Charitable Trust</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/70">
                <span className="text-slate-500">{trans("Bank:", "வங்கி:")}</span>
                <span className="font-bold text-slate-900">State Bank of India</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/70">
                <span className="text-slate-500">{trans("Branch:", "கிளை:")}</span>
                <span className="font-bold text-slate-900">Chennai Main Branch</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/70">
                <span className="text-slate-500">{trans("Account Type:", "கணக்கு வகை:")}</span>
                <span className="font-bold text-slate-900">{trans("Current Account (Trust)", "நடப்புக் கணக்கு (அறக்கட்டளை)")}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">{trans("Coordinator Helpline:", "ஒருங்கிணைப்பாளர் உதவி எண்:")}</span>
                <span className="font-bold text-brand-navy">{SITE_CONFIG.phone}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsBankModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
              >
                {trans("Close", "மூடுக")}
              </button>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-2xs"
              >
                {trans("Contact on WhatsApp", "வாட்ஸ்அப் செய்தி")}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
