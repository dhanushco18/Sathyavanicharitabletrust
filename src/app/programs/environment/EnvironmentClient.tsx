"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Users,
  Leaf,
  Globe,
  Trash2,
  Droplets,
  Recycle,
  Lightbulb,
  Building,
  Heart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  X,
  ShieldCheck,
  TreePine,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function EnvironmentClient() {
  const { trans } = useLanguage();
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isApproachModalOpen, setIsApproachModalOpen] = useState(false);

  const testimonials = [
    {
      quote:
        "The tree plantation drive in our village has made our surroundings cleaner and greener. I am happy to be a part of this initiative.",
      quoteTa:
        "எங்கள் கிராமத்தில் நடத்தப்பட்ட மரக்கன்று நடும் இயக்கம் எங்கள் சுற்றுப்புறத்தை தூய்மையாகவும் பசுமையாகவும் மாற்றியுள்ளது. இதில் பங்கேற்றதில் நான் மகிழ்ச்சியடைகிறேன்.",
      author: "Arjun",
      role: "Student",
      roleTa: "மாணவர்",
      image: "/assets/images/environment-arjun.jpg",
    },
    {
      quote:
        "Our school's Eco Club has taught us practical composting and segregation. We have now eliminated single-use plastic water bottles across the entire campus.",
      quoteTa:
        "எங்கள் பள்ளியின் சுற்றுச்சூழல் மன்றம் எங்களுக்கு உரம் தயாரித்தல் மற்றும் கழிவு பிரித்தலை நடைமுறையில் கற்பித்தது. இப்போது வளாகம் முழுவதும் நெகிழி பயன்பாட்டை தவிர்த்துள்ளோம்.",
      author: "Kavitha",
      role: "Eco Club Leader, Govt High School",
      roleTa: "சுற்றுச்சூழல் மன்ற தலைவர், அரசு உயர்நிலைப் பள்ளி",
      image: "/assets/images/story-student-boy.jpg",
    },
    {
      quote:
        "The saplings planted along our street three years ago have grown into beautiful shade-giving trees. The whole neighborhood takes turns watering them.",
      quoteTa:
        "மூன்று ஆண்டுகளுக்கு முன்பு எங்கள் தெருவில் நடப்பட்ட கன்றுகள் இப்போது நல்ல நிழல் தரும் மரங்களாக வளர்ந்துள்ளன. ஊர் மக்கள் அனைவரும் முறை வைத்து நீர் ஊற்றுகிறோம்.",
      author: "Venkatesh",
      role: "Community Elder & Volunteer",
      roleTa: "ஊர் பெரியவர் & தன்னார்வலர்",
      image: "/assets/images/team-mr-kumar.jpg",
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
                <span className="text-slate-700 font-medium">{trans("Environment", "சுற்றுச்சூழல்")}</span>
              </div>

              {/* Tag / Pill */}
              <div>
                <span className="inline-block bg-[#FED467] text-amber-950 px-3.5 py-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider rounded-full shadow-2xs">
                  {trans("Environment Program", "சுற்றுச்சூழல் திட்டம்")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.12]">
                {trans("Greener Communities", "பசுமையான சமுதாயங்கள்")} <br />
                <span className="text-[#F59E0B]">{trans("Brighter Tomorrows", "பிரகாசமான எதிர்காலம்")}</span>
              </h1>

              {/* Subtitle description */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                {trans(
                  "We work towards a cleaner, healthier and more sustainable environment for present and future generations. Our environment program creates awareness, promotes eco-friendly practices and engages communities in protecting nature.",
                  "இன்றைய மற்றும் எதிர்கால தலைமுறையினருக்காக தூய்மையான, ஆரோக்கியமான, பசுமையான சூழலை உருவாக்க நாங்கள் பாடுபடுகிறோம். எங்கள் சுற்றுச்சூழல் திட்டம் விழிப்புணர்வை ஏற்படுத்தி, இயற்கையைப் பாதுகாப்பதில் சமுதாய மக்களை ஒருங்கிணைக்கிறது."
                )}
              </p>

              {/* 4 Feature Badges in a horizontal row */}
              <div className="pt-2 flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 lg:gap-x-3.5 xl:gap-x-4 gap-y-2 text-xs sm:text-sm font-bold text-slate-800">
                <div className="flex items-center gap-1.5">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  <span>{trans("Cleaner Surroundings", "தூய்மையான சுற்றுப்புறம்")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>{trans("Community Participation", "மக்கள் பங்களிப்பு")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>{trans("Sustainable Living", "நிலைத்த வாழ்வியல்")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-sky-600" />
                  <span>{trans("A Healthier Tomorrow", "ஆரோக்கியமான எதிர்காலம்")}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition (Cols: 6) */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Hero Photograph */}
                <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src="/assets/images/prog-environment-hero.jpg"
                    alt="Indian school children planting a green sapling together in garden soil with watering cans"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-center hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Tilted Sticker: Healthy Environment Happier Communities */}
                <div className="absolute -top-4 sm:-top-6 right-0 sm:right-3 bg-white px-5 py-4 rounded-2xl shadow-xl border border-slate-100 rotate-6 transform hover:rotate-0 transition-transform duration-300 select-none z-20">
                  <div className="font-serif italic text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-wide text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <span>{trans("Healthy", "ஆரோக்கியமான")}</span>
                      <Leaf className="w-4 h-4 text-emerald-600 fill-emerald-600/30 inline-block" />
                    </div>
                    <div>{trans("Environment", "சூழல்")}</div>
                    <div>{trans("Happier", "மகிழ்ச்சியான")}</div>
                    <div className="text-slate-950 font-black">{trans("Communities", "சமுதாயம்")}</div>
                  </div>
                  {/* Amber curved brush stroke underline */}
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
            <div className="lg:col-span-4 bg-[#F9FAF8] border border-emerald-100/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs relative overflow-hidden">
              {/* Botanical Leaf Illustration in bottom right corner */}
              <div className="absolute -bottom-3 -right-3 text-emerald-200/80 pointer-events-none select-none">
                <svg className="w-24 h-24" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 10 C30 30 20 60 45 90 C70 60 60 30 50 10 Z" />
                  <path d="M45 40 C20 45 10 70 35 85 C50 65 40 45 45 40 Z" opacity="0.7" />
                  <path d="M55 40 C80 45 90 70 65 85 C50 65 60 45 55 40 Z" opacity="0.7" />
                </svg>
              </div>

              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2.5" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                  {trans("Program Overview", "திட்டத்தின் கண்ணோட்டம்")}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal relative z-10">
                  {trans(
                    "Our Environment Program focuses on creating a cleaner, greener and healthier world through awareness, action and community participation. We believe that a sustainable environment leads to healthier lives, stronger communities and a brighter future for the next generation.",
                    "எங்கள் சுற்றுச்சூழல் திட்டம் விழிப்புணர்வு, செயல் மற்றும் மக்கள் பங்களிப்பின் மூலம் பசுமையான மற்றும் ஆரோக்கியமான உலகை உருவாக்குவதில் கவனம் செலுத்துகிறது. சுற்றுச்சூழல் பாதுகாப்பு ஆரோக்கியமான வாழ்வுக்கும் அடுத்த தலைமுறையின் நலனுக்கும் வழிவகுக்கிறது என நம்புகிறோம்."
                  )}
                </p>
              </div>

              <div className="relative z-10">
                <button
                  type="button"
                  onClick={() => setIsApproachModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FED467] hover:bg-[#F5B82E] text-slate-950 font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 group cursor-pointer"
                >
                  <span>{trans("Our Approach", "எங்கள் அணுகுமுறை")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Key Focus Areas (lg:col-span-8) */}
            <div className="lg:col-span-8">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {trans("Key Focus Areas", "முக்கிய கவனக்குவிப்புகள்")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5 h-full">
                {/* 1. Tree Plantation */}
                <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src="/assets/images/cta-hands-sapling.jpg"
                        alt="Hands planting sapling in soil"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Overlapping icon badge */}
                    <div className="relative -mt-4.5 ml-2 w-9 h-9 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      <Sprout className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2 px-1">
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Tree Plantation", "மரக்கன்றுகள் நடுதல்")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Planting trees for a greener, healthier and more resilient environment.",
                          "பசுமையான, தூய்மையான மற்றும் ஆரோக்கியமான சூழலுக்காக மரக்கன்றுகளை நடுதல்."
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Clean Communities */}
                <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src="/assets/images/prog-environment-cleanup.jpg"
                        alt="Students conducting clean community drive"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Overlapping icon badge */}
                    <div className="relative -mt-4.5 ml-2 w-9 h-9 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      <Trash2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2 px-1">
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Clean Communities", "தூய்மையான சமுதாயங்கள்")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Waste management and cleanliness drives in schools and local areas.",
                          "பள்ளிகள் மற்றும் சுற்றுப்புறப் பகுதிகளில் கழிவு மேலாண்மை மற்றும் தூய்மைப் பணிகள்."
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Environmental Education */}
                <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src="/assets/images/prog-environment-education.jpg"
                        alt="School girl holding potted plant"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Overlapping icon badge */}
                    <div className="relative -mt-4.5 ml-2 w-9 h-9 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2 px-1">
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Environmental Education", "சுற்றுச்சூழல் கல்வி")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Creating awareness about nature conservation and sustainable living.",
                          "இயற்கை பாதுகாப்பு மற்றும் சூழல்சார் வாழ்வியல் குறித்த விழிப்புணர்வை உருவாக்குதல்."
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Sustainable Practices */}
                <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src="/assets/images/prog-environment-globe.jpg"
                        alt="Hands holding green planet Earth globe in forest"
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Overlapping icon badge */}
                    <div className="relative -mt-4.5 ml-2 w-9 h-9 rounded-full bg-[#059669] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div className="pt-2 px-1">
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Sustainable Practices", "நிலையான நடைமுறைகள்")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Promoting eco-friendly habits like reducing plastic, conserving water and energy.",
                          "நெகிழி குறைப்பு, நீர் பாதுகாப்பு, ஆற்றல் சேமிப்பு போன்ற சூழல்சார் பழக்கங்களை ஊக்குவித்தல்."
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

      {/* 3. OUR ENVIRONMENT ACTIVITIES */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="bg-[#FEFBF4] border border-amber-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              {trans("Our Environment Activities", "எங்கள் சுற்றுச்சூழல் செயல்பாடுகள்")}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: 8 Circular Icon Items (lg:col-span-9) */}
              <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-4 text-center">
                {/* Activity 1 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Sprout className="w-6 h-6 text-[#059669]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Tree Plantation Drives", "மரக்கன்று நடும் இயக்கம்")}
                  </span>
                </div>

                {/* Activity 2 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#CCFBF1] text-[#0F766E] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Trash2 className="w-6 h-6 text-[#0F766E]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Clean-Up Campaigns", "தூய்மைப் பணி முகாம்கள்")}
                  </span>
                </div>

                {/* Activity 3 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Droplets className="w-6 h-6 text-[#0284C7]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Water Conservation Initiatives", "நீர் சேமிப்பு முயற்சிகள்")}
                  </span>
                </div>

                {/* Activity 4 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Leaf className="w-6 h-6 text-[#059669]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Awareness Programs", "விழிப்புணர்வு நிகழ்ச்சிகள்")}
                  </span>
                </div>

                {/* Activity 5 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Recycle className="w-6 h-6 text-[#059669]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Plastic Reduction Campaigns", "நெகிழி ஒழிப்பு பிரச்சாரம்")}
                  </span>
                </div>

                {/* Activity 6 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#E0E7FF] text-[#4338CA] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Lightbulb className="w-6 h-6 text-[#4338CA]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Eco Clubs in Schools", "பள்ளி சுற்றுச்சூழல் மன்றங்கள்")}
                  </span>
                </div>

                {/* Activity 7 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Users className="w-6 h-6 text-[#0284C7]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Community Engagement", "சமுதாய ஈடுபாடு")}
                  </span>
                </div>

                {/* Activity 8 */}
                <div className="flex flex-col items-center group">
                  <div className="w-13 h-13 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                    <Building className="w-6 h-6 text-[#D97706]" />
                  </div>
                  <span className="font-bold text-xs text-slate-800 leading-snug">
                    {trans("Green Village Initiatives", "பசுமை கிராம முயற்சிகள்")}
                  </span>
                </div>
              </div>

              {/* Right: Sapling in Soil Photo & Sticker Badge (lg:col-span-3) */}
              <div className="lg:col-span-3 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md border-2 border-white">
                  <Image
                    src="/assets/images/prog-environment-sapling.jpg"
                    alt="Fresh green sapling sprout growing out of dark fertile soil"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Script Sticker Badge */}
                <div className="absolute -bottom-4 -right-2 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 rotate-2 select-none">
                  <div className="font-serif italic text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                    <div className="flex items-center gap-1">
                      <span>{trans("Small", "சிறு")}</span>
                      <Leaf className="w-4 h-4 text-emerald-600 fill-emerald-600/30 inline-block" />
                    </div>
                    <div className="text-emerald-700">{trans("Actions", "செயல்கள்")}</div>
                    <div className="text-amber-600 font-black">{trans("Big Change", "பெரும் மாற்றம்")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. BOTTOM 3-CARD ROW: Our Impact | Voices for a Greener Tomorrow | Get Involved */}
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
                  {trans(
                    "Real actions. Real progress. A greener and healthier tomorrow.",
                    "உண்மையான செயல்கள். நிலையான முன்னேற்றம். பசுமையான நல்வாழ்வு."
                  )}
                </p>
              </div>

              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Metric 1 */}
                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                    <TreePine className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    5,000+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Trees Planted", "நடப்பட்ட மரக்கன்றுகள்")}
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                    <Trash2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    50+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Clean-Up Drives Conducted", "தூய்மைப் பணி முகாம்கள்")}
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2">
                    <Droplets className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    10,000+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("People Reached Through Awareness", "விழிப்புணர்வு பெற்ற மக்கள்")}
                  </span>
                </div>

                {/* Metric 4 */}
                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                    <Sprout className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    30+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-0.5 leading-tight">
                    {trans("Schools & Communities Engaged", "இணைக்கப்பட்ட பள்ளிகள் & பகுதிகள்")}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Voices for a Greener Tomorrow */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs relative">
              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2" />
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight mb-4">
                  {trans("Voices for a Greener Tomorrow", "பசுமை எதிர்காலத்திற்கான குரல்கள்")}
                </h2>

                <div className="flex items-center gap-2 sm:gap-3 my-2">
                  {/* Left Carousel Arrow */}
                  <button
                    type="button"
                    onClick={handlePrevStory}
                    className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0 p-1"
                    aria-label="Previous community story"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Photo of Arjun */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-xs border border-slate-100">
                    <Image
                      src={testimonials[activeStoryIndex].image}
                      alt={testimonials[activeStoryIndex].author}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  {/* Quote & Author */}
                  <div className="flex-1 min-w-0 pr-1">
                    <span className="text-xl sm:text-2xl text-emerald-600 font-serif leading-none block -mb-0.5 font-bold">
                      &ldquo;&ldquo;
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-4">
                      {trans(
                        testimonials[activeStoryIndex].quote,
                        testimonials[activeStoryIndex].quoteTa
                      )}
                    </p>
                    <div className="mt-2 text-xs font-bold text-slate-900">
                      — {testimonials[activeStoryIndex].author}
                      <span className="text-slate-500 font-normal ml-1">
                        {trans(
                          testimonials[activeStoryIndex].role,
                          testimonials[activeStoryIndex].roleTa
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Right Carousel Arrow */}
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
              {/* Botanical Leaf Watermark SVG in bottom right */}
              <div className="absolute -bottom-6 -right-6 text-emerald-100 pointer-events-none opacity-40 select-none">
                <svg className="w-36 h-36" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0C50 30 20 50 0 50C20 50 50 70 50 100C50 70 80 50 100 50C80 50 50 30 50 0Z" />
                </svg>
              </div>

              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2" />
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  {trans("Get Involved", "எங்களுடன் இணையுங்கள்")}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {trans(
                    "Be a part of our mission to create a cleaner, greener and healthier environment. Your support helps us reach more communities and make a lasting impact.",
                    "தூய்மையான, பசுமையான உலகை உருவாக்கும் எங்கள் பணியில் இணையுங்கள். உங்களின் ஆதரவு மேலும் பல பகுதிகளுக்கு நிலையான மாற்றத்தைக் கொண்டு சேர்க்கும்."
                  )}
                </p>
              </div>

              <div className="space-y-3 pt-2 relative z-10">
                {/* Donate Now Button (Pink) */}
                <Link
                  href="/sponsor"
                  className="w-full py-3 px-4 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow active:scale-95 text-sm"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{trans("Donate Now", "நன்கொடை அளியுங்கள்")}</span>
                </Link>

                {/* Become a Volunteer Button (White) */}
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

      {/* 5. APPROACH & ENVIRONMENT PROTOCOL MODAL */}
      {isApproachModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="environment-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-150">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsApproachModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{trans("Environmental Framework", "சுற்றுச்சூழல் வழிகாட்டு நெறிமுறை")}</span>
            </div>

            <h3 id="environment-modal-title" className="font-serif text-2xl font-bold text-slate-900 mb-3">
              {trans("Grassroots Ecological Action & Conservation", "களமட்ட சுற்றுச்சூழல் செயல்பாடும் பாதுகாப்பும்")}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              {trans(
                "Our environment initiatives combine student-led tree planting, civic clean-up drives, and sustainable living education to foster lifelong environmental stewardship.",
                "மாணவர்கள் வழிநடத்தும் மரக்கன்றுகள் நடுதல், தூய்மைப் பணிகள் மற்றும் சூழல் வாழ்வியல் கல்வி மூலம் எதிர்கால தலைமுறையை உருவாக்குகிறோம்."
              )}
            </p>

            <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed mb-6">
              <div className="flex items-start gap-3 p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Native Species Sapling Selection:", "பாரம்பரிய மர இனங்கள் தேர்வு:")}</strong>{" "}
                  {trans(
                    "We plant climate-resilient native trees like Neem, Pungan, Peepal, and Jamun that support local urban biodiversity.",
                    "வேம்பு, புங்கன், அரச மரம், நாவல் போன்ற காலநிலைக்கேற்ற, பல்லுயிர் சூழலைப் பாதுகாக்கும் மரங்களை நடுகிறோம்."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Student Adoption & Long-Term Care:", "மாணவர் தத்தெடுப்பு & தொடர் பராமரிப்பு:")}</strong>{" "}
                  {trans(
                    "Each enrolled student adopts a planted sapling and takes responsibility for watering and tracking its growth.",
                    "நடப்பட்ட மரக்கன்றுகளை மாணவர்கள் தத்தெடுத்து, நீர் ஊற்றி அவற்றின் வளர்ச்சியைப் பொறுப்புடன் கவனிக்கின்றனர்."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Zero-Plastic School Campuses:", "நெகிழி இல்லா பள்ளி வளாகங்கள்:")}</strong>{" "}
                  {trans(
                    "Engaging eco-clubs to replace single-use plastic with steel tiffin boxes, cloth bags, and refillable water bottles.",
                    "ஒருமுறை பயன்படுத்தும் நெகிழிக்குப் பதிலாக எவர்சில்வர் பாத்திரங்கள், துணிப்பைகள், குடிநீர் குடுவைகளை பயன்படுத்த ஊக்கப்படுத்துகிறோம்."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Partnership with Civic Bodies:", "உள்ளாட்சி அமைப்புகளுடன் கூட்டிணைவு:")}</strong>{" "}
                  {trans(
                    "Collaborating with neighborhood panchayats, local resident associations, and eco-organizations for sustainable waste disposal.",
                    "முறையான கழிவு மேலாண்மைக்காக கிராம ஊராட்சிகள், குடியிருப்போர் சங்கங்கள் மற்றும் அமைப்புகளுடன் இணைந்து செயல்படுகிறோம்."
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
                {trans("Join Tree Plantation Drive", "மரக்கன்று நடும் இயக்கத்தில் சேருங்கள்")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
