"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Heart,
  Users,
  Sprout,
  BarChart3,
  Smile,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Star,
  CheckCircle2,
  Shirt,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Globe,
  Share2,
  Megaphone,
  Handshake,
  Compass,
  FileText,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

const EDUCATION_SUPPORTERS = [
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
      "Sponsoring a student's education here gives me complete peace of mind. Every rupee directly covers school fees and study materials without intermediaries.",
    quoteTa:
      "இங்கு மாணவருக்குக் கல்வி உதவி செய்வது எனக்கு முழு மன அமைதியைத் தருகிறது. ஒவ்வொரு ரூபாயும் இடைத்தரகர்கள் இன்றி நேரிடையாக பள்ளி கட்டணங்கள் மற்றும் படிப்புப் பொருட்களுக்குப் பயன்படுகிறது.",
  },
  {
    name: "Dr. Malar",
    role: "Science & Math Mentor",
    roleTa: "அறிவியல் & கணித வழிகாட்டி",
    image: "/assets/images/team-ms-anitha.jpg",
    quote:
      "The library tuition center gives children from single-room tenements a quiet, well-lit place to study, ask questions without fear, and prepare for board exams.",
    quoteTa:
      "நூலக மாலைநேர வகுப்பு மையம் ஏழை எளிய மாணவர்களுக்கு அமைதியான, வெளிச்சமான படிப்பு சூழலையும், பயமின்றி சந்தேகங்களைக் கேட்டு பொதுத் தேர்வுக்கு தயாராகும் வாய்ப்பையும் தருகிறது.",
  },
];

export function FreeEducationClient() {
  const { trans } = useLanguage();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"schedule" | "syllabus" | "transparency">("schedule");
  const [activeSupporterIdx, setActiveSupporterIdx] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const nextSupporter = () => {
    setActiveSupporterIdx((prev) => (prev + 1) % EDUCATION_SUPPORTERS.length);
  };

  const prevSupporter = () => {
    setActiveSupporterIdx((prev) => (prev - 1 + EDUCATION_SUPPORTERS.length) % EDUCATION_SUPPORTERS.length);
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

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://sathiyavanitrust.org/programs/education";
  const shareText = trans(
    "Support Free Education with Sathiyavani Charitable Trust — After-school tuition, books & fee sponsorship for children in Chennai.",
    "சத்தியவாணி அறக்கட்டளையின் இலவசக் கல்விப் பணிக்கு ஆதரவளிப்பீர் — மாலைநேர டியூஷன், புத்தகங்கள் மற்றும் கல்விக் கட்டண உதவி."
  );

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 lg:pt-10 lg:pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content (Cols: 6) */}
            <div className="lg:col-span-6 space-y-6 relative z-10">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
                <Link
                  href="/programs"
                  className="text-amber-600 hover:text-amber-700 hover:underline transition-colors flex items-center gap-1"
                >
                  {trans("Programs", "திட்டங்கள்")}
                </Link>
                <span className="text-slate-400">&gt;</span>
                <span className="text-slate-700">{trans("Free Education", "இலவசக் கல்வி")}</span>
              </div>

              {/* Main Headline with playful doodle */}
              <div className="relative pt-1">
                <div className="absolute -top-3 left-48 sm:left-64 pointer-events-none opacity-80 select-none">
                  <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 36 36" fill="none" stroke="currentColor">
                    <path
                      d="M12 24C12 18 16 12 24 10C24 18 18 24 12 24Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 24V28" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="28" cy="8" r="1.5" fill="currentColor" />
                    <circle cx="8" cy="14" r="1" fill="currentColor" />
                  </svg>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                  {trans("Free", "இலவச")} <span className="text-[#16a34a]">{trans("Education", "கல்வி")}</span>
                </h1>
              </div>

              {/* Subtext description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {trans(
                  "Education is not a privilege, it is a right. We support underprivileged children with free education to build a brighter and equal future.",
                  "கல்வி ஒரு சலுகை அல்ல, அது ஒவ்வொரு குழந்தையின் உரிமை. ஏழை எளிய குழந்தைகள் சமத்துவமான, ஒளிமயமான எதிர்காலத்தை அடைய இலவசக் கல்வி ஆதரவை வழங்குகிறோம்."
                )}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/sponsor"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#E11D74] hover:bg-[#C91865] text-white font-semibold text-sm sm:text-base shadow-md shadow-pink-500/25 transition-all hover:shadow-lg active:scale-95 group"
                >
                  <GraduationCap className="w-5 h-5 text-white" />
                  <span>{trans("Support Education", "கல்விக்கு ஆதரவளியுங்கள்")}</span>
                  <ChevronRight className="w-4 h-4 text-white/90 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Visual Composition (Cols: 6) */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Smiling Children Photo */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src="/assets/images/hero-children.jpg"
                    alt="Indian schoolchildren smiling together in uniform"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-top hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Tilted Sticker: Educate Empower Transform */}
                <div className="absolute -top-5 sm:-top-7 right-0 sm:right-2 bg-white/98 backdrop-blur-xs px-5 py-3.5 rounded-2xl shadow-xl border border-slate-100 -rotate-6 transform hover:rotate-0 transition-transform duration-300 select-none z-20">
                  <div className="font-handwriting text-2xl sm:text-3xl font-bold text-slate-900 leading-snug tracking-wide">
                    <div>{trans("Educate", "கற்பிப்போம்")}</div>
                    <div>{trans("Empower", "வலுவூட்டுவோம்")}</div>
                    <div className="flex items-center gap-1.5">
                      <span>{trans("Transform", "மாற்றுவோம்")}</span>
                      <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline-block" />
                    </div>
                  </div>
                  <svg className="w-28 h-3 text-amber-400 mt-0.5" viewBox="0 0 100 12" fill="none">
                    <path
                      d="M3 8C26 2.5 72 2.5 97 9"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Floating Pill Badge: Every Child Deserves a Chance to Learn */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-xl border border-slate-100 flex items-center gap-3 z-20 hover:shadow-2xl transition-shadow">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-inner">
                    <GraduationCap className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-left pr-2">
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {trans("Every Child", "ஒவ்வொரு குழந்தைக்கும்")}
                    </span>
                    <span className="block text-[11px] sm:text-xs font-semibold text-slate-600 leading-tight">
                      {trans("Deserves a Chance to Learn", "கற்கும் உரிமை உண்டு")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. MIDDLE 3-COLUMN SECTION (About the Program | Key Benefits | Our Impact) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Column 1: About the Program */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {trans("About the Program", "திட்டம் பற்றி")}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {trans(
                    "Our Free Education program aims to provide quality education to children from economically weaker sections. We support students with school supplies, uniforms, books, and academic resources to ensure they can learn without financial barriers.",
                    "பொருளாதாரத்தில் பின்தங்கிய குழந்தைகளுக்கு தரமான கல்வி வழங்குவதே எங்களின் இலவசக் கல்வி திட்டத்தின் நோக்கம். நிதித் தடைகளின்றி படிக்க பள்ளி உபகரணங்கள், சீருடைகள், புத்தகங்கள் மற்றும் கல்வி ஆதாரங்களை வழங்குகிறோம்."
                  )}
                </p>
              </div>

              {/* Mint Callout Card */}
              <div className="bg-[#EAFBF1] border border-emerald-200/70 rounded-2xl p-4 flex items-start gap-3 mt-6">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {trans(
                    "Education creates opportunities, builds confidence, and helps children achieve their dreams.",
                    "கல்வி புதிய வாய்ப்புகளை உருவாக்குகிறது, நம்பிக்கையை வளர்க்கிறது, குழந்தைகளின் கனவுகளை நனவாக்குகிறது."
                  )}
                </p>
              </div>
            </div>

            {/* Column 2: Key Benefits */}
            <div className="flex flex-col h-full">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {trans("Key Benefits", "முக்கிய நன்மைகள்")}
              </h2>

              <div className="space-y-4">
                {/* Benefit 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug">
                      {trans("Access to quality education", "தரமான கல்வி வாய்ப்பு")}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {trans("Helps children learn without financial stress.", "நிதிச் சுமையின்றி குழந்தைகள் கற்கும் சூழல்.")}
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug">
                      {trans("School supplies and uniforms", "பள்ளி உபகரணங்கள் மற்றும் சீருடைகள்")}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {trans("Ensures basic learning needs are met.", "அடிப்படை கற்றல் தேவைகள் பூர்த்தியாவதை உறுதிசெய்கிறது.")}
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug">
                      {trans("Better academic performance", "சிறந்த கல்வித் தேர்ச்சி")}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {trans("Builds confidence and skills for the future.", "எதிர்காலத்திற்கான திறன்களையும் தன்னம்பிக்கையையும் வளர்க்கிறது.")}
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug">
                      {trans("Equal opportunities for all", "அனைவருக்கும் சம வாய்ப்பு")}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {trans("Helps every child dream and achieve.", "ஒவ்வொரு குழந்தையும் கனவு கண்டு சாதிக்க வழிகோலுகிறது.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Our Impact (2x2 Pastel Grid) */}
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                  {trans("Our Impact", "எங்கள் தாக்கம்")}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {/* 1. Children Educated */}
                <div className="bg-[#F0F7FF] border border-sky-100/90 rounded-2xl p-4 flex flex-col justify-between min-h-[105px] transition-all hover:shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-sky-200/70 text-sky-700 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-sky-700" />
                    </div>
                    <span className="font-heading text-2xl font-extrabold text-slate-900">
                      700+
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 mt-2 block">
                    {trans("Children Educated", "கல்வி பயின்ற குழந்தைகள்")}
                  </span>
                </div>

                {/* 2. Schools Supported */}
                <div className="bg-[#FFF1F4] border border-rose-100/90 rounded-2xl p-4 flex flex-col justify-between min-h-[105px] transition-all hover:shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-rose-200/70 text-rose-700 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4 text-rose-700" />
                    </div>
                    <span className="font-heading text-2xl font-extrabold text-slate-900">
                      12
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 mt-2 block">
                    {trans("Schools Supported", "ஆதரவளித்த பள்ளிகள்")}
                  </span>
                </div>

                {/* 3. Books Distributed */}
                <div className="bg-[#F0FDF4] border border-emerald-100/90 rounded-2xl p-4 flex flex-col justify-between min-h-[105px] transition-all hover:shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-200/70 text-emerald-700 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="font-heading text-2xl font-extrabold text-slate-900">
                      1,500+
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 mt-2 block">
                    {trans("Books Distributed", "வழங்கப்பட்ட புத்தகங்கள்")}
                  </span>
                </div>

                {/* 4. Students Progressed */}
                <div className="bg-[#FFFBEB] border border-amber-100/90 rounded-2xl p-4 flex flex-col justify-between min-h-[105px] transition-all hover:shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-200/70 text-amber-700 flex items-center justify-center shrink-0">
                      <Smile className="w-4 h-4 text-amber-700" />
                    </div>
                    <span className="font-heading text-2xl font-extrabold text-slate-900">
                      98%
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 mt-2 block">
                    {trans("Students Progressed", "தேர்ச்சி பெற்ற மாணவர்கள்")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHAT WE PROVIDE + BE A PART OF THEIR FUTURE */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 4 Cards: What We Provide */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-5 tracking-tight">
                  {trans("What We Provide", "நாம் வழங்கும் உதவிகள்")}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {/* Card 1: Tuition Support */}
                  <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                    <div>
                      <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/assets/images/tuition-learning.jpg"
                          alt="Tuition study session"
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                          <GraduationCap className="w-4 h-4 text-sky-600" />
                        </div>
                        <div className="pr-1">
                          <h3 className="font-bold text-sm text-slate-900 leading-snug">
                            {trans("Tuition Support", "டியூஷன் கல்வி உதவி")}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                            {trans("Help with school and exam fees.", "பள்ளி மற்றும் தேர்வுக் கட்டண உதவி.")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 flex justify-end">
                      <Link
                        href="/sponsor"
                        className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 flex items-center justify-center transition-colors"
                        aria-label="Learn more about Tuition Support"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: Books & Study Materials */}
                  <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                    <div>
                      <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/assets/images/prog-education.jpg"
                          alt="Books and learning supplies"
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                          <BookOpen className="w-4 h-4 text-pink-600" />
                        </div>
                        <div className="pr-1">
                          <h3 className="font-bold text-sm text-slate-900 leading-snug">
                            {trans("Books & Study Materials", "புத்தகங்கள் & படிப்புப் பொருட்கள்")}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                            {trans("Essential learning resources.", "அத்தியாவசியக் கல்வி உபகரணங்கள்.")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 flex justify-end">
                      <Link
                        href="/sponsor"
                        className="w-6 h-6 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 flex items-center justify-center transition-colors"
                        aria-label="Learn more about Books and Study Materials"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Card 3: Uniforms & Essentials */}
                  <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                    <div>
                      <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/assets/images/diwali-distribution.jpg"
                          alt="Uniform and clothing support"
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Shirt className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="pr-1">
                          <h3 className="font-bold text-sm text-slate-900 leading-snug">
                            {trans("Uniforms & Essentials", "சீருடைகள் & தேவைகள்")}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                            {trans("Basic clothing and school needs.", "பள்ளி உடைகள் மற்றும் அடிப்படைத் தேவைகள்.")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 flex justify-end">
                      <Link
                        href="/sponsor"
                        className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                        aria-label="Learn more about Uniforms and Essentials"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Card 4: Mentorship & Guidance */}
                  <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                    <div>
                      <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/assets/images/about-story-children.jpg"
                          alt="Mentorship group discussion"
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Users className="w-4 h-4 text-amber-600" />
                        </div>
                        <div className="pr-1">
                          <h3 className="font-bold text-sm text-slate-900 leading-snug">
                            {trans("Mentorship & Guidance", "வழிகாட்டுதல் & ஆலோசனை")}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                            {trans("Support for better career goals.", "உயர்கல்வி மற்றும் எதிர்கால இலக்குகளுக்கான வழிகாட்டல்.")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 flex justify-end">
                      <Link
                        href="/sponsor"
                        className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 flex items-center justify-center transition-colors"
                        aria-label="Learn more about Mentorship and Guidance"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Be a Part of Their Future */}
            <div className="lg:col-span-4 mt-6 lg:mt-0 flex">
              <div className="bg-[#EEF6FC] border border-sky-200/80 rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between w-full shadow-xs">
                <div className="absolute top-5 right-5 text-sky-400 select-none">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 tracking-tight pr-8">
                    {trans("Be a Part of Their Future", "அவர்களின் எதிர்காலத்தில் இணையுங்கள்")}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {trans(
                      "Your support can help a child access quality education and build a better tomorrow.",
                      "உங்கள் சிறிய உதவி ஒரு குழந்தையின் தரமான கல்விக்கும் பிரகாசமான எதிர்காலத்திற்கும் வழிகோலும்."
                    )}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/sponsor"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow active:scale-95 text-sm"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{trans("Donate Now", "நன்கொடை வழங்குக")}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/volunteer"
                    className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold flex items-center justify-center gap-2 border border-slate-200 shadow-2xs transition-all active:scale-95 text-sm"
                  >
                    <Users className="w-4 h-4 text-slate-700" />
                    <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. EXPANDABLE OPERATIONAL & SYLLABUS DETAILS */}
      <section className="pb-8">
        <Container>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block mb-1">
                  {trans("Tuition Center Framework", "டியூஷன் மையக் கட்டமைப்பு")}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  {trans("Curriculum, Batches & Transparent Logistics", "பாடத்திட்டம், வகுப்புகள் மற்றும் வெளிப்படையான மேலாண்மை")}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  {trans("Verified schedules, student eligibility, and zero-fee policy.", "வகுப்பு நேரங்கள், மாணவர் தகுதி மற்றும் 100% இலவசக் கொள்கை.")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-all self-start sm:self-auto"
              >
                <span>
                  {isDetailsOpen
                    ? trans("Hide Operational Details", "விவரங்களை மறைக்க")
                    : trans("View Operational Details", "விவரங்களைக் காண்க")}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDetailsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Expandable Tabs Section */}
            {isDetailsOpen && (
              <div className="mt-6 pt-6 border-t border-slate-100 animate-fade-in">
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setActiveTab("schedule")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      activeTab === "schedule"
                        ? "bg-slate-900 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {trans("Schedule & Timings", "நேரம் & அட்டவணை")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("syllabus")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      activeTab === "syllabus"
                        ? "bg-slate-900 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {trans("Subjects & Syllabus", "பாடங்கள் & பாடத்திட்டம்")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("transparency")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      activeTab === "transparency"
                        ? "bg-slate-900 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {trans("Zero Fee & Sponsorship", "இலவசக் கொள்கை & உதவி")}
                  </button>
                </div>

                {activeTab === "schedule" && (
                  <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                          <Calendar className="w-4 h-4 text-brand-navy" />
                          <span>{trans("Days of Operation", "வகுப்பு நாட்கள்")}</span>
                        </div>
                        <span className="font-bold text-slate-900 text-sm block">
                          {trans("Monday to Friday", "திங்கள் முதல் வெள்ளி வரை")}
                        </span>
                        <span className="text-[11px] text-slate-500">{trans("Regular evening classes", "வழக்கமான மாலைநேர வகுப்புகள்")}</span>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                          <Clock className="w-4 h-4 text-brand-navy" />
                          <span>{trans("Class Timings", "வகுப்பு நேரம்")}</span>
                        </div>
                        <span className="font-bold text-slate-900 text-sm block">
                          {trans("5:00 PM – 7:30 PM", "மாலை 5:00 – 7:30 மணி")}
                        </span>
                        <span className="text-[11px] text-slate-500">{trans("Split primary & secondary batches", "ஆரம்ப மற்றும் உயர்நிலை பிரிவு")}</span>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                          <MapPin className="w-4 h-4 text-brand-navy" />
                          <span>{trans("Center Location", "மையத்தின் அமைவிடம்")}</span>
                        </div>
                        <span className="font-bold text-slate-900 text-sm block">
                          {trans("Community Library Facility", "சமூக நூலக வளாகம்")}
                        </span>
                        <span className="text-[11px] text-slate-500">Chennai, Tamil Nadu</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>{trans("Quiet, Safe Study Atmosphere:", "அமைதியான, பாதுகாப்பான படிப்பு சூழல்:")}</strong>{" "}
                        {trans(
                          "Our evening tuition operates in the local library facility, offering well-lit study tables, reference books, and freedom from household distractions for children whose families live in single-room tenements.",
                          "ஒரே அறையில் வாழும் எளிய குடும்பத்துப் பிள்ளைகள் வீட்டில் உள்ள கவனச்சிதறல்கள் இன்றி வெளிச்சமான மேசைகள், குறிப்பு நூல்களுடன் அமைதியாகப் படிக்க உள்ளூர் நூலக வளாகத்தில் மாலைநேர வகுப்புகள் இயங்குகின்றன."
                        )}
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "syllabus" && (
                  <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-2">
                        <span className="font-bold text-slate-900 text-sm block">
                          {trans("Core Subjects Taught:", "கற்பிக்கப்படும் முக்கிய பாடங்கள்:")}
                        </span>
                        <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                          <li><strong>{trans("Mathematics:", "கணிதம்:")}</strong> {trans("Foundational arithmetic, algebra, and geometry.", "அடிப்படை எண்கணிதம், இயற்கணிதம் மற்றும் வடிவியல்.")}</li>
                          <li><strong>{trans("Science:", "அறிவியல்:")}</strong> {trans("Physics, chemistry, and biological sciences.", "இயற்பியல், வேதியியல் மற்றும் உயிரியல் அறிவியல்.")}</li>
                          <li><strong>{trans("Languages:", "மொழிகள்:")}</strong> {trans("Tamil (mother tongue) and communicative English.", "தமிழ் தாய்மொழி மற்றும் தொடர்பு ஆங்கிலம்.")}</li>
                          <li><strong>{trans("Exam Prep:", "தேர்வுப் பயிற்சி:")}</strong> {trans("Special weekend mock test series for 10th standard board exams.", "10ஆம் வகுப்பு பொதுத்தேர்வுக்கு சிறப்பு மாதிரித் தேர்வுகள்.")}</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-2">
                        <span className="font-bold text-slate-900 text-sm block">
                          {trans("Teaching Methodology:", "கற்பித்தல் முறை:")}
                        </span>
                        <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                          <li>{trans("Small batch size (maximum 15 students per tutor) for individual attention.", "தனிப்பட்ட கவனத்திற்காக சிறிய வகுப்பறை பிரிவு (15 மாணவர்கள் வரை).")}</li>
                          <li>{trans("Daily homework reinforcement and concept clarification.", "தினசரி வீட்டுப்பாடம் மற்றும் பாடக் கருத்துகள் விளக்கம்.")}</li>
                          <li>{trans("Moral science, teamwork, and storytelling sessions on Saturdays.", "சனிக்கிழமைகளில் நன்னெறி, குழு விளையாட்டு மற்றும் கதைகள்.")}</li>
                          <li>{trans("Quarterly parent-teacher check-ins to monitor report cards.", "மதிப்பெண் அறிக்கைகளை கண்காணிக்க காலாண்டு பெற்றோர் சந்திப்புகள்.")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "transparency" && (
                  <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center">
                        <span className="text-xs text-slate-500 font-medium block">{trans("Annual Study Kit", "வருடாந்திர படிப்புப் பெட்டகம்")}</span>
                        <span className="font-heading text-xl font-bold text-slate-900 block my-1">₹1,500</span>
                        <span className="text-[11px] text-slate-500">{trans("School bag, stationery, notebooks", "பள்ளிப் பை, எழுதுபொருட்கள், குறிப்பேடுகள்")}</span>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center">
                        <span className="text-xs text-slate-500 font-medium block">{trans("Term Exam Fee Aid", "பருவத் தேர்வுக் கட்டண உதவி")}</span>
                        <span className="font-heading text-xl font-bold text-slate-900 block my-1">₹3,500</span>
                        <span className="text-[11px] text-slate-500">{trans("Direct school fee grant for high-risk dropouts", "பள்ளி இடைநிற்றலைத் தடுக்க நேரடி உதவிக் கட்டணம்")}</span>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center">
                        <span className="text-xs text-slate-500 font-medium block">{trans("Full Year Student Support", "முழு ஆண்டு மாணவர் ஆதரவு")}</span>
                        <span className="font-heading text-xl font-bold text-[#E11D74] block my-1">₹6,000</span>
                        <span className="text-[11px] text-slate-500">{trans("Full tuition, kit, and academic mentorship", "முழு டியூஷன், உபகரணங்கள் மற்றும் கல்வி வழிகாட்டல்")}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span className="text-xs text-slate-700 font-medium">
                          {trans(
                            "Zero fee charged from beneficiaries. 100% voluntary trust sponsorship.",
                            "மாணவர்களிடமிருந்து எவ்விதக் கட்டணமும் பெறப்படுவதில்லை. 100% அறக்கட்டளை இலவச சேவை."
                          )}
                        </span>
                      </div>
                      <Link
                        href="/sponsor"
                        className="text-xs font-bold text-brand-navy hover:text-brand-terracotta inline-flex items-center gap-1"
                      >
                        <span>{trans("View Sponsorship Protocol", "ஆதரவு நெறிமுறைகளைக் காண்க")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 5. GET INVOLVED IN EDUCATION */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none select-none opacity-20 z-0">
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

        <Container className="relative z-10">
          {/* Top Header */}
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="relative inline-block">
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase block mb-1">
                  {trans("Community Pathways", "சமூக வழிகள்")}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  {trans("Ways to Get Involved in Education", "கல்விப் பணியில் இணைந்திடுங்கள்")}
                </h2>
                <svg
                  className="w-28 sm:w-36 h-2.5 text-amber-400 mt-1"
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
                  "Choose how you want to create a positive educational impact. There are many ways to support our mission.",
                  "கல்வி மாற்றத்தை உருவாக்க உங்கள் வழியைத் தேர்ந்தெடுங்கள். ஆதரவளிக்க பல வழிகள் உள்ளன."
                )}
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch mb-10">
            {/* Card 1: Donate */}
            <div className="bg-[#FFF8FA] rounded-3xl p-5 border border-pink-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#FFE4EC] text-[#E11D74] flex items-center justify-center shrink-0 shadow-2xs">
                    <Heart className="w-5 h-5 fill-[#E11D74]" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {trans("Donate", "நன்கொடை")}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {trans(
                    "Your financial support helps cover student school fees, textbooks, uniforms, exam fees and evening tuition supplies.",
                    "உங்கள் நிதி உதவி மாணவர்களின் கல்விக் கட்டணம், பாடப்புத்தகங்கள், சீருடைகள் மற்றும் மாலைநேர டியூஷன் தேவைகளைப் பூர்த்திசெய்கிறது."
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/sponsor"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 shrink-0"
                  >
                    <span>{trans("Donate Now", "நன்கொடை வழங்குக")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

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
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 shadow-2xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {trans("Volunteer", "தன்னார்வலர்")}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {trans(
                    "Give your time to teach mathematics, science, English or mentor high school students at our Chennai Library Learning Center.",
                    "எங்கள் சென்னை நூலக மையத்தில் கணிதம், அறிவியல், ஆங்கிலம் கற்பிக்க அல்லது வழிகாட்ட உங்கள் நேரத்தை அர்ப்பணியுங்கள்."
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 shrink-0"
                  >
                    <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-sky-100 shrink-0 border border-sky-200/80 shadow-2xs">
                    <Image
                      src="/assets/images/get-involved-volunteer.jpg"
                      alt="Volunteer tutoring student"
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
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0 shadow-2xs">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {trans("Partner", "கூட்டுப்பணி")}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {trans(
                    "Collaborate with us as an institution or CSR partner to support classrooms, provide digital tablets, or fund full batch sponsorships.",
                    "வகுப்பறை வசதிகள், டிஜிட்டல் கற்றல் சாதனங்கள் அல்லது முழு பிரிவு மாணவர் நிதி ஆதரவுக்கு நிறுவனமாக எங்களுடன் இணையுங்கள்."
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/partnerships"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 shrink-0"
                  >
                    <span>{trans("Partner With Us", "எங்களுடன் இணையுங்கள்")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-emerald-100 shrink-0 border border-emerald-200/80 shadow-2xs">
                    <Image
                      src="/assets/images/get-involved-partner.jpg"
                      alt="Partnership handshake"
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
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 shadow-2xs">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    {trans("Spread the Word", "செய்தியைப் பரப்புங்கள்")}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {trans(
                    "Help us reach more families and students. Share our educational milestones and stories with your friends and networks.",
                    "எங்கள் இலவச கல்வி சேவைகள் மேலும் பல எளிய குடும்பங்களை சென்றடைய நண்பர்களுடன் பகிர்ந்து உதவுங்கள்."
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setIsShareModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 shrink-0"
                  >
                    <span>{trans("Share Our Mission", "பணியைப் பகிருங்கள்")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <div className="relative flex items-center gap-1.5 shrink-0">
                    <div className="relative w-14 h-16 rounded-2xl overflow-hidden bg-amber-100 border border-amber-200/80 shadow-2xs">
                      <Image
                        src="/assets/images/get-involved-spread.jpg"
                        alt="Sharing mission on mobile"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-4 h-4 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                        aria-label="Share on WhatsApp"
                      >
                        <MessageCircle className="w-2.5 h-2.5" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-4 h-4 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                        aria-label="Share on LinkedIn"
                      >
                        <span className="text-[7px] font-black leading-none">in</span>
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
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

          {/* How You Can Help (4 Steps + Together We Can Do More Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mb-10">
            {/* Left 4-Step Timeline */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight">
                  {trans("How You Can Help", "நீங்கள் எவ்வாறு உதவலாம்")}
                </h3>
                <p className="text-slate-500 text-xs mt-0.5">
                  {trans("Small actions lead to big change. Here's how you can get started.", "சிறு செயல்களே பெரு மாற்றத்திற்கு வித்திடுகின்றன. நீங்கள் தொடங்குவதற்கான எளிய வழிகள்.")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 relative">
                {/* Step 1 */}
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
                  <div className="hidden sm:block absolute top-4 -right-1 text-slate-300">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                </div>

                {/* Step 2 */}
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
                  <div className="hidden sm:block absolute top-4 -right-1 text-slate-300">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                </div>

                {/* Step 3 */}
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
                  <div className="hidden sm:block absolute top-4 -right-1 text-slate-300">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                </div>

                {/* Step 4 */}
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

            {/* Right Card: Together We Can Do More */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-28 h-20 sm:w-32 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/70 shadow-2xs">
                  <Image
                    src="/assets/images/get-involved-together.jpg"
                    alt="Paper cutout family figures"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {trans("Together We Can Do More", "ஒன்றிணைந்து சாதிப்போம்")}
                  </h3>
                  <div className="w-6 h-1 bg-amber-400 rounded-full mt-1 mb-2" />
                </div>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed mt-3">
                {trans(
                  "When people come together with a shared purpose, we can create healthier communities, happier children and a brighter tomorrow.",
                  "பொதுவான உயரிய நோக்கத்துடன் மக்கள் இணையும்போது, ஆரோக்கியமான சமூகம், மகிழ்ச்சியான குழந்தைகள் மற்றும் ஒளிமயமான எதிர்காலத்தை நாம் படைக்க முடியும்."
                )}
              </p>
            </div>
          </div>

          {/* Bottom 3-Card Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Card 1: The Difference You Can Make */}
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

              <div className="grid grid-cols-2 gap-3.5">
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

                <div className="flex items-start gap-2.5 p-2 rounded-2xl bg-emerald-50/50 border border-emerald-100/70">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Sprout className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-bold text-slate-900 text-xs block leading-tight">
                      {trans("Child Development", "குழந்தைகள் வளர்ச்சி")}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">
                      {trans("Healthier, happier children", "ஆரோக்கியமான குழந்தைகள்")}
                    </span>
                  </div>
                </div>

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

                <div className="flex items-start gap-2.5 p-2 rounded-2xl bg-amber-50/50 border border-amber-100/70">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-bold text-slate-900 text-xs block leading-tight">
                      {trans("Environment", "சுற்றுச்சூழல்")}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">
                      {trans("Cleaner, greener Chennai", "தூய்மையான பசுமை சென்னை")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Voices of Our Supporters */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between relative">
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

              <div className="flex items-start gap-3.5 my-2">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-emerald-200 shadow-xs">
                  <Image
                    src={EDUCATION_SUPPORTERS[activeSupporterIdx].image}
                    alt={EDUCATION_SUPPORTERS[activeSupporterIdx].name}
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
                    &ldquo;{trans(EDUCATION_SUPPORTERS[activeSupporterIdx].quote, EDUCATION_SUPPORTERS[activeSupporterIdx].quoteTa)}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-bold text-slate-900">
                    — {EDUCATION_SUPPORTERS[activeSupporterIdx].name},{" "}
                    <span className="text-slate-500 font-medium">
                      {trans(EDUCATION_SUPPORTERS[activeSupporterIdx].role, EDUCATION_SUPPORTERS[activeSupporterIdx].roleTa)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 pt-2">
                {EDUCATION_SUPPORTERS.map((_, dotIdx) => (
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

            {/* Card 3: Join Us in Creating Brighter Futures */}
            <div className="lg:col-span-4 bg-[#FFF5F7] rounded-3xl p-6 sm:p-7 border border-rose-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-4 right-4 text-rose-400 select-none pointer-events-none">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href="/sponsor"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-xs shadow-sm transition-all active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 fill-white text-white" />
                  <span>{trans("Donate Now", "நன்கொடை வழங்குக")}</span>
                </Link>

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

      {/* 6. BOTTOM DARK PHOTOGRAPHIC BANNER */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/images/cta-hands-sapling.jpg"
            alt="Hands holding soil and growing sapling"
            fill
            unoptimized
            className="object-cover object-left opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/90" />
        </div>

        <Container className="relative z-10 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Left: Handwritten script */}
            <div className="text-center lg:text-left shrink-0">
              <div className="font-handwriting text-2xl sm:text-3xl text-white font-bold leading-tight select-none">
                <div>{trans("Together", "ஒன்றாக இணைந்து")}</div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <span>{trans("we can make", "நாம் உருவாக்குவோம்")}</span>
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline" />
                </div>
                <div>{trans("a difference!", "ஒரு மாற்றத்தை!")}</div>
              </div>
              <svg className="w-24 h-2.5 text-amber-400 mx-auto lg:mx-0 mt-1" viewBox="0 0 100 12" fill="none">
                <path d="M2 7C25 2 75 2 98 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Center: 3 Pillars */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 lg:gap-8 lg:border-x lg:border-slate-800 lg:px-8 py-1">
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-xs sm:text-sm lg:text-base text-white tracking-wide">
                  {trans("Educate Children", "குழந்தைகளுக்குக் கல்வி")}
                </span>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Sprout className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="font-bold text-xs sm:text-sm lg:text-base text-white tracking-wide">
                  {trans("Build Confidence", "நம்பிக்கையை வளர்ப்போம்")}
                </span>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="font-bold text-xs sm:text-sm lg:text-base text-white tracking-wide">
                  {trans("Create Opportunities", "வாய்ப்புகளை உருவாக்குவோம்")}
                </span>
              </div>
            </div>

            {/* Right: Button */}
            <div className="shrink-0">
              <Link
                href="/sponsor"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#F5B82E] hover:bg-[#EAA81D] text-slate-950 font-extrabold text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-95 group"
              >
                <span>{trans("Learn Today Lead Tomorrow", "இன்றைய கற்றல் நாளைய தலைமை")}</span>
                <div className="w-6 h-6 rounded-full bg-slate-950 text-amber-300 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. SHARE OUR MISSION MODAL */}
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
                "Amplify our free educational initiatives across Chennai. Share with your family, friends and professional networks.",
                "சென்னையில் எங்கள் இலவச கல்விப் பணிகளைப் பலருக்குக் கொண்டுசேருங்கள். உங்கள் குடும்பத்தினர், நண்பர்கள் மற்றும் சமூக வலைப்பின்னல்களில் பகிருங்கள்."
              )}
            </p>

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
    </div>
  );
}
