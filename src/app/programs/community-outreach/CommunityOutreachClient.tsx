"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Sprout,
  Users,
  Star,
  Megaphone,
  Stethoscope,
  Cog,
  Home,
  HeartHandshake,
  BookOpen,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  X,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function CommunityOutreachClient() {
  const { trans } = useLanguage();
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isApproachModalOpen, setIsApproachModalOpen] = useState(false);

  const testimonials = [
    {
      quote:
        "The awareness programs and health camps have truly made a difference in our village. We feel more informed, supported and hopeful for a better future.",
      quoteTa:
        "விழிப்புணர்வு நிகழ்ச்சிகளும் மருத்துவ முகாம்களும் எங்கள் கிராமத்தில் உண்மையான மாற்றத்தை ஏற்படுத்தியுள்ளன. நாங்கள் விழிப்புணர்வும் ஆதரவும் பெற்று எதிர்காலத்தின் மீது நம்பிக்கை கொண்டுள்ளோம்.",
      author: "Meena",
      role: "Community Member",
      roleTa: "கிராமத்துப் பெண்மணி",
      image: "/assets/images/community-meena.jpg",
    },
    {
      quote:
        "When our family faced severe illness and income loss, the emergency ration kits and medical guidance from the trust kept our children safe and in school.",
      quoteTa:
        "எங்கள் குடும்பம் கடும் நோயினாலும் வருமான இழப்பினாலும் தவித்தபோது, அறக்கட்டளை வழங்கிய அவசரகால உணவுப் பெட்டகமும் மருத்துவ வழிகாட்டலும் எங்கள் குழந்தைகளைப் பாதுகாத்து பள்ளிப் படிப்பைத் தொடர வைத்தது.",
      author: "Murugan",
      role: "Daily-Wage Earner, Peri-Urban Chennai",
      roleTa: "தினக்கூலி தொழிலாளி, சென்னை புறநகர்",
      image: "/assets/images/story-student-boy.jpg",
    },
    {
      quote:
        "The women empowerment and tailoring workshops gave twelve mothers in our settlement the confidence to earn an independent monthly income.",
      quoteTa:
        "மகளிர் மேம்பாடு மற்றும் தையல் பயிற்சிப் பட்டறைகள் எங்கள் பகுதியில் உள்ள பன்னிரண்டு தாய்மார்களுக்கு சுயமாக மாத வருமானம் ஈட்டும் தன்னம்பிக்கையைத் தந்தது.",
      author: "Selvi",
      role: "Self-Help Group Leader",
      roleTa: "சுயஉதவிக் குழு தலைவி",
      image: "/assets/images/team-ms-priya.jpg",
    },
  ];

  const handlePrevStory = () => {
    setActiveStoryIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextStory = () => {
    setActiveStoryIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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
                  {trans("Community Outreach", "சமுதாய நலம்")}
                </span>
              </div>

              {/* Tag / Pill */}
              <div>
                <span className="inline-block bg-[#FED467] text-amber-950 px-3.5 py-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider rounded-full shadow-2xs">
                  {trans("Community Outreach Program", "சமுதாய நலம் & ஆதரவுத் திட்டம்")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.12]">
                {trans("Stronger Communities", "வலிமையான சமுதாயம்")} <br />
                <span className="text-[#F59E0B]">
                  {trans("Brighter Futures", "ஒளிமயமான எதிர்காலம்")}
                </span>
              </h1>

              {/* Subtitle description */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                {trans(
                  "We work hand-in-hand with underserved communities to create opportunities, awareness and support — because real change happens when communities grow together.",
                  "எளிய கிராம மற்றும் நகர்ப்புற மக்களுடன் இணைந்து வாய்ப்புகள், விழிப்புணர்வு மற்றும் ஆதரவை உருவாக்குகிறோம் — சமுதாயம் ஒன்றாக இணையும் போதே உண்மையான மாற்றம் நிகழ்கிறது."
                )}
              </p>

              {/* 4 Feature Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>{trans("People First", "மக்கள் நலன் முதன்மை")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                  <span>{trans("Inclusive Growth", "அனைவரையும் உள்ளடக்கிய வளர்ச்சி")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  <span>{trans("Sustainable Communities", "நிலையான சமூக மேம்பாடு")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>{trans("Lasting Impact", "நீடித்த நற்பலன்")}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition (Cols: 6) */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src="/assets/images/prog-community-hero.jpg"
                    alt="Elder grandmother, children, and volunteer reading happily together in Tamil Nadu village"
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
                    <div>{trans("Stronger", "வலிமையான")}</div>
                    <div className="flex items-center justify-end gap-1.5">
                      <span>{trans("Communities", "சமுதாயம்")}</span>
                      <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline-block" />
                    </div>
                    <div>{trans("Brighter", "பிரகாசமான")}</div>
                    <div className="text-slate-950 font-black">{trans("Tomorrows", "எதிர்காலம்")}</div>
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

      {/* 2. PROGRAM OVERVIEW & KEY FOCUS AREAS */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
            {/* Left Column: Program Overview (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-4">
              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2.5" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                  {trans("Program Overview", "திட்டத்தின் கண்ணோட்டம்")}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {trans(
                    "Our Community Outreach Program focuses on reaching underserved and rural communities to create awareness, provide essential support and build sustainable opportunities. We believe that strong communities are the foundation for lasting change.",
                    "எங்கள் சமுதாய நலம் மற்றும் விழிப்புணர்வுத் திட்டம், பின்தங்கிய மற்றும் கிராமப்புறப் பகுதிகளைச் சென்றடைந்து விழிப்புணர்வை ஏற்படுத்தவும், அத்தியாவசிய உதவிகளை வழங்கவும், நிலையான வாழ்வாதார வாய்ப்புகளை உருவாக்கவும் செயல்படுகிறது."
                  )}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsApproachModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FED467] hover:bg-[#F5B82E] text-slate-950 font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 group"
                >
                  <span>{trans("Our Approach", "எங்கள் அணுகுமுறை")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Key Focus Areas (lg:col-span-8) */}
            <div className="lg:col-span-8">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {trans("Key Focus Areas", "முக்கியக் களங்கள்")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5 h-full">
                {/* 1. Awareness & Education */}
                <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src="/assets/images/prog-community-awareness.jpg"
                        alt="Community awareness meeting"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative -mt-4.5 ml-2 w-9 h-9 rounded-full bg-[#FF3366] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      <Megaphone className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2 px-1">
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Awareness & Education", "விழிப்புணர்வு & கல்வி")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Community awareness on health, education, child development and rights.",
                          "சுகாதாரம், கல்வி, குழந்தைகள் வளர்ச்சி மற்றும் உரிமைகள் குறித்த விழிப்புணர்வு."
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Health & Well-being */}
                <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src="/assets/images/prog-healthcare.jpg"
                        alt="Community health camp"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative -mt-4.5 ml-2 w-9 h-9 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      <Stethoscope className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2 px-1">
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Health & Well-being", "உடல்நலம் & நல்வாழ்வு")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Health camps, nutrition awareness and access to basic healthcare.",
                          "மருத்துவ முகாம்கள், ஊட்டச்சத்து வழிகாட்டல் மற்றும் அடிப்படை மருத்துவ உதவி."
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Livelihood Support */}
                <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src="/assets/images/prog-livelihood.jpg"
                        alt="Livelihood skill training"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative -mt-4.5 ml-2 w-9 h-9 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      <Cog className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2 px-1">
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Livelihood Support", "வாழ்வாதார உதவி")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Skill development and income-generating opportunities for families.",
                          "குடும்பங்களுக்கான தொழிற்திறன் பயிற்சி மற்றும் சுயவருமான வாய்ப்புகள்."
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Clean & Safe Communities */}
                <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src="/assets/images/tree-planting.jpg"
                        alt="Cleanliness and environmental care"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative -mt-4.5 ml-2 w-9 h-9 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      <Sprout className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2 px-1">
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Clean & Safe Communities", "தூய்மை & பாதுகாப்பு")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Environmental awareness, cleanliness drives and hygiene initiatives.",
                          "சுற்றுச்சூழல் விழிப்புணர்வு, தூய்மைப் பணிகள் மற்றும் சுகாதாரப் பாதுகாப்பு."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. OUR COMMUNITY ACTIVITIES */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="bg-[#FEFBF4] border border-amber-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              {trans("Our Community Activities", "எங்கள் சமுதாயப் பணிகள்")}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: 8 Circular Icon Items */}
              <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-4 text-center">
                {/* Activity 1 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#FFE4EE] text-[#E11D74] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Megaphone className="w-6 h-6 text-[#E11D74]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Awareness Campaigns", "விழிப்புணர்வு பிரச்சாரங்கள்")}
                  </span>
                </div>

                {/* Activity 2 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Stethoscope className="w-6 h-6 text-[#059669]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Health Camps & Checkups", "மருத்துவ முகாம்கள்")}
                  </span>
                </div>

                {/* Activity 3 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Users className="w-6 h-6 text-[#0284C7]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Parent & Family Support", "குடும்ப வழிகாட்டல்")}
                  </span>
                </div>

                {/* Activity 4 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <BookOpen className="w-6 h-6 text-[#D97706]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Community Learning", "சமூகக் கற்றல் மையங்கள்")}
                  </span>
                </div>

                {/* Activity 5 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <HeartHandshake className="w-6 h-6 text-[#9333EA]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Women Empowerment", "மகளிர் மேம்பாடு")}
                  </span>
                </div>

                {/* Activity 6 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Sprout className="w-6 h-6 text-[#059669]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Cleanliness & Environment", "தூய்மைப் பணி & மரம் நடுதல்")}
                  </span>
                </div>

                {/* Activity 7 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#FFE4EE] text-[#E11D74] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Heart className="w-6 h-6 text-[#E11D74] fill-[#E11D74]/30" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Emergency Support", "அவசரகால நிவாரணம்")}
                  </span>
                </div>

                {/* Activity 8 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Home className="w-6 h-6 text-[#0284C7]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Rural Development", "கிராமப்புற வளர்ச்சி")}
                  </span>
                </div>
              </div>

              {/* Right: Village Photo & Sticker Badge */}
              <div className="lg:col-span-3 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md border-2 border-white">
                  <Image
                    src="/assets/images/prog-community-hut.jpg"
                    alt="Traditional South Indian rural village thatched cottage"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-4 -right-2 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 rotate-2 select-none">
                  <div className="font-serif italic text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                    <div>{trans("Communities", "சமுதாயம்")}</div>
                    <div className="text-emerald-700">{trans("Grow", "மலரும்")}</div>
                    <div>{trans("When People", "மக்கள்")}</div>
                    <div className="text-amber-600 font-black">{trans("Come Together", "ஒன்றிணையும் போது")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. BOTTOM 3-CARD ROW */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* 1. Our Impact */}
            <div className="bg-[#F0FAF4] border border-emerald-100/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2" />
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                  {trans("Our Impact", "எங்கள் தாக்கம்")}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1 mb-5">
                  {trans("Real support. Real progress. Real stronger communities.", "உண்மையான ஆதரவு. உறுதியான முன்னேற்றம். வலிமையான சமுதாயம்.")}
                </p>
              </div>

              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-2">
                    <Users className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    2,000+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Community Members Reached", "பயனடைந்த பொதுமக்கள்")}
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    50+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Health Camps Conducted", "மருத்துவ முகாம்கள்")}
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2">
                    <Sparkles className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    30+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Awareness Programs", "விழிப்புணர்வு நிகழ்வுகள்")}
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                    <Home className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    15+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Rural Areas Supported", "ஆதரவளித்த பகுதிகள்")}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Voices from the Community */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs relative">
              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2" />
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight mb-4">
                  {trans("Voices from the Community", "சமூக மக்களின் குரல்")}
                </h2>

                <div className="flex items-center gap-2 sm:gap-3 my-2">
                  <button
                    type="button"
                    onClick={handlePrevStory}
                    className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0 p-1"
                    aria-label="Previous community story"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-xs border border-slate-100">
                    <Image
                      src={testimonials[activeStoryIndex].image}
                      alt={testimonials[activeStoryIndex].author}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 pr-1">
                    <span className="text-xl sm:text-2xl text-emerald-600 font-serif leading-none block -mb-0.5 font-bold">
                      &ldquo;&ldquo;
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-4">
                      {trans(testimonials[activeStoryIndex].quote, testimonials[activeStoryIndex].quoteTa)}
                    </p>
                    <div className="mt-2 text-xs font-bold text-slate-900">
                      — {testimonials[activeStoryIndex].author}
                      <span className="text-slate-500 font-normal ml-1">
                        ({trans(testimonials[activeStoryIndex].role, testimonials[activeStoryIndex].roleTa)})
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStory}
                    className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0 p-1"
                    aria-label="Next community story"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center gap-1.5 pt-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      activeStoryIndex === idx
                        ? "w-4 bg-emerald-600"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* 3. Get Involved */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between shadow-xs overflow-hidden">
              <div className="absolute -bottom-6 -right-6 text-emerald-100 pointer-events-none opacity-40 select-none">
                <svg className="w-36 h-36" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0C50 30 20 50 0 50C20 50 50 70 50 100C50 70 80 50 100 50C80 50 50 30 50 0Z" />
                </svg>
              </div>

              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2" />
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  {trans("Get Involved", "இணைந்திடுங்கள்")}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {trans(
                    "Be a part of stronger, healthier and more self-reliant communities. Your support helps us reach more families and create lasting change.",
                    "வலிமையான, ஆரோக்கியமான மற்றும் தன்னிறைவு பெற்ற சமுதாயத்தை உருவாக்க நீங்களும் இணையுங்கள். உங்கள் ஆதரவு எளிய குடும்பங்களின் வாழ்வில் மறுமலர்ச்சியை ஏற்படுத்தும்."
                  )}
                </p>
              </div>

              <div className="space-y-3 pt-2 relative z-10">
                <Link
                  href="/sponsor"
                  className="w-full py-3 px-4 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow active:scale-95 text-sm"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{trans("Donate Now", "நன்கொடை வழங்குக")}</span>
                </Link>

                <Link
                  href="/volunteer"
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold flex items-center justify-center gap-2 border border-slate-300 shadow-2xs transition-all active:scale-95 text-sm"
                >
                  <Users className="w-4 h-4 text-slate-700" />
                  <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                </Link>
              </div>
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
          aria-labelledby="approach-modal-title"
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
              <span>{trans("Outreach Methodology", "களப்பணி அணுகுமுறை")}</span>
            </div>

            <h3 id="approach-modal-title" className="font-serif text-2xl font-bold text-slate-900 mb-3">
              {trans("Dignity-First Community Engagement", "சுயமரியாதையுடன் கூடிய சமுதாயப் பங்களிப்பு")}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              {trans(
                "Our grassroots framework ensures that assistance empowers families rather than creating dependency, respecting the autonomy and privacy of every household.",
                "குடும்பங்களை பிறரைச் சார்ந்திராமல் சுயமாக இயங்க வைப்பதும், ஒவ்வொரு குடும்பத்தின் கண்ணியத்தையும் தனியுரிமையையும் பாதுகாப்பதுமே எங்கள் அடித்தளக் கொள்கையாகும்."
              )}
            </p>

            <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed mb-6">
              <div className="flex items-start gap-3 p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Needs Assessment with Local Leaders:", "உள்ளூர் தலைவர்களுடன் கள ஆய்வு:")}</strong>{" "}
                  {trans(
                    "We engage village panchayats and school teachers to identify families facing acute shocks.",
                    "கிராமப் பஞ்சாயத்துகள் மற்றும் ஆசிரியர்களுடன் இணைந்து மிகவும் பின்தங்கிய குடும்பங்களை நேரடியாகக் கண்டறிகிறோம்."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Preventing Educational Discontinuation:", "பள்ளி இடைநிற்றலைத் தடுத்தல்:")}</strong>{" "}
                  {trans(
                    "Direct ration and school subsidies remove the economic pressure to pull children out of classrooms.",
                    "நேரடி உணவு மற்றும் பள்ளி உதவிகள் மூலம் குழந்தைகள் கூலி வேலைக்கு அனுப்பப்படுவதைத் தடுக்கிறோம்."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Self-Reliance & Skill Development:", "சுயசார்பு & தொழிற்திறன் பயிற்சி:")}</strong>{" "}
                  {trans(
                    "Connecting women and youth with vocational tailoring, digital literacy, and craft cooperatives.",
                    "தையல், கணினிப் பயிற்சி மற்றும் கைவினைப் பணிகள் மூலம் பெண்களுக்கு சுயவருமான வாய்ப்புகளை ஏற்படுத்துகிறோம்."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Zero Poverty Tourism Policy:", "வறுமையைக் காட்சிப்படுத்தா கொள்கை:")}</strong>{" "}
                  {trans(
                    "Relief is distributed privately with full dignity. We do not expose vulnerable families on public media.",
                    "உதவிகள் சுயமரியாதையுடன் தனிப்பட்ட முறையில் வழங்கப்படுகின்றன. குடும்பங்களின் வறுமையை ஊடகங்களில் காட்சிப்படுத்துவதில்லை."
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
                {trans("Join as a Volunteer", "தன்னார்வலராக இணையுங்கள்")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
