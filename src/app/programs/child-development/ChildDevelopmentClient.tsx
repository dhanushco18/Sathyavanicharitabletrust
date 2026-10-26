"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Sprout,
  Users,
  Star,
  Brain,
  HeartPulse,
  Palette,
  Sparkles,
  BookOpen,
  Apple,
  BriefcaseMedical,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Activity,
  Smile,
  X,
  CheckCircle2,
  Calendar,
  Cake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function ChildDevelopmentClient() {
  const { trans } = useLanguage();
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isApproachModalOpen, setIsApproachModalOpen] = useState(false);

  const stories = [
    {
      quote:
        "My daughter is now more confident and active. She loves the learning activities and looks forward to coming every day. Thank you for creating such a caring environment for children.",
      quoteTa:
        "என் மகள் இப்போது மிகுந்த தன்னம்பிக்கையுடனும் சுறுசுறுப்பாகவும் இருக்கிறாள். அவள் கற்றல் செயல்பாடுகளை விரும்பி தினமும் மையத்திற்கு ஆர்வமாக வருகிறாள். குழந்தைகளுக்கு இத்தகைய அன்பான சூழலை உருவாக்கியமைக்கு நன்றி.",
      author: "Lakshmi",
      role: "Parent",
      roleTa: "பெற்றோர்",
      image: "/assets/images/story-student-boy.jpg",
    },
    {
      quote:
        "Celebrating my birthday with my classmates and getting my own cake and card made me so happy. I never had a birthday party before joining the center.",
      quoteTa:
        "என் பிறந்தநாளை நண்பர்களுடன் கொண்டாடி, எனக்கென பிரத்யேக கேக் மற்றும் வாழ்த்து அட்டை கிடைத்தது மிகுந்த மகிழ்ச்சியைத் தந்தது. இந்த மையத்தில் சேருவதற்கு முன் எனக்கு பிறந்தநாள் கொண்டாட்டமே நடந்ததில்லை.",
      author: "Praveen",
      role: "Class 5 Student",
      roleTa: "5ஆம் வகுப்பு மாணவன்",
      image: "/assets/images/child-birthday.jpg",
    },
    {
      quote:
        "The weekend arts and sports sessions gave my son a safe space to play. His teachers noticed a big improvement in his focus and friendliness at school.",
      quoteTa:
        "வார இறுதி கலை மற்றும் விளையாட்டு வகுப்புகள் என் மகனுக்கு பாதுகாப்பான விளையாட்டு களத்தை அளித்தன. பள்ளியிலும் அவனது படிப்புக் கவனம் மற்றும் நற்பண்புகளில் பெரிய முன்னேற்றம் ஏற்பட்டுள்ளது.",
      author: "Anbarasan",
      role: "Father & Daily-Wage Worker",
      roleTa: "தந்தை, தினக்கூலி தொழிலாளி",
      image: "/assets/images/about-story-children.jpg",
    },
  ];

  const handlePrevStory = () => {
    setActiveStoryIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNextStory = () => {
    setActiveStoryIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 lg:pt-10 lg:pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content (Cols: 6) */}
            <div className="lg:col-span-6 space-y-5 relative z-10">
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
                  {trans("Free Child Development", "இலவச குழந்தைகள் வளர்ச்சி")}
                </span>
              </div>

              {/* Tag / Pill */}
              <div className="pt-1">
                <span className="inline-block bg-[#FED467] text-amber-950 px-3.5 py-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider rounded-full shadow-2xs">
                  {trans("Free Child Development Program", "இலவச குழந்தைகள் வளர்ச்சித் திட்டம்")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                {trans("Nurturing", "வளர்ப்போம்")} <br />
                <span className="text-[#F59E0B]">
                  {trans("Brighter Futures", "பிரகாசமான எதிர்காலம்")}
                </span>
              </h1>

              {/* Subtitle description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {trans(
                  "We support the overall development of children through education, health, nutrition, play, and life skills — helping them grow into confident, happy and capable individuals.",
                  "கல்வி, உடல்நலம், ஊட்டச்சத்து, விளையாட்டு மற்றும் வாழ்க்கைத் திறன்கள் மூலம் குழந்தைகளின் முழுமையான வளர்ச்சிக்கு ஆதரவளித்து, அவர்களை தன்னம்பிக்கையும் மகிழ்ச்சியும் கொண்டவர்களாக உருவாக்குகிறோம்."
                )}
              </p>

              {/* 4 Feature Badges / Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-800">
                <div className="flex items-center gap-1.5">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  <span>{trans("Holistic Growth", "முழுமையான வளர்ச்சி")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                  <span>{trans("Healthy Children", "ஆரோக்கியக் குழந்தைகள்")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-500" />
                  <span>{trans("Supportive Environment", "ஆதரவான சூழல்")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>{trans("Better Tomorrow", "சிறந்த எதிர்காலம்")}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition (Cols: 6) */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Hero Photograph */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src="/assets/images/child-birthday.jpg"
                    alt="Children happily celebrating and learning together at Sathiyavani Trust"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-[center_35%] hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Tilted Sticker */}
                <div className="absolute -top-5 sm:-top-7 -left-2 sm:-left-5 bg-[#FFFDF8] px-5 py-3.5 rounded-2xl shadow-2xl border-2 border-amber-200/90 -rotate-3 sm:-rotate-6 transform hover:rotate-0 transition-transform duration-300 select-none z-20">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-amber-200/90 rounded-sm shadow-2xs" />
                  <div className="font-handwriting text-2xl sm:text-3xl font-bold text-slate-900 leading-snug tracking-wide text-left">
                    <div>{trans("Happy", "மகிழ்ச்சியான")}</div>
                    <div>{trans("Children", "குழந்தைகள்")}</div>
                    <div>{trans("Stronger", "வலிமையான")}</div>
                    <div className="flex items-center gap-1.5">
                      <span>{trans("Communities", "சமுதாயம்")}</span>
                      <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline-block" />
                    </div>
                  </div>
                  <svg className="w-28 h-3 text-amber-400 mr-auto mt-0.5" viewBox="0 0 100 12" fill="none">
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

      {/* 2. PROGRAM OVERVIEW */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Overview narrative & Approach CTA (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3.5 tracking-tight">
                  {trans("Program Overview", "திட்டத்தின் கண்ணோட்டம்")}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {trans(
                    "Our Free Child Development Program focuses on the physical, cognitive, emotional, social and creative development of children, especially from underprivileged communities. We create safe, supportive and stimulating environments where every child can learn, play, grow and reach their full potential.",
                    "எங்கள் இலவச குழந்தைகள் வளர்ச்சித் திட்டம், எளிய குடும்பங்களைச் சேர்ந்த குழந்தைகளின் உடல்நலம், அறிவுத்திறன், உணர்வுசார் நிலை, சமூகப் பழக்கங்கள் மற்றும் படைப்பாற்றல் வளர்ச்சியில் கவனம் செலுத்துகிறது. பாதுகாப்பான, அன்பான சூழலில் ஒவ்வொரு குழந்தையும் தன் முழுத் திறனை அடைய வழிகாட்டுகிறோம்."
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

            {/* Right Column: 4 Pastel Pillar Cards (lg:col-span-8) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 h-full">
                {/* 1. Early Learning */}
                <div className="bg-[#FFF0F4] border border-pink-100/90 rounded-2xl p-4 flex flex-col justify-between transition-all hover:shadow-xs group">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Brain className="w-5 h-5 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1.5 leading-snug">
                      {trans("Early Learning", "ஆரம்பக் கல்வி")}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {trans(
                        "Build strong foundations through age-appropriate education and activities.",
                        "வயதிற்கு ஏற்ற கல்வி மற்றும் பயிற்சிகள் மூலம் வலுவான அடித்தளத்தை உருவாக்குதல்."
                      )}
                    </p>
                  </div>
                </div>

                {/* 2. Health & Nutrition */}
                <div className="bg-[#EAFBF1] border border-emerald-100/90 rounded-2xl p-4 flex flex-col justify-between transition-all hover:shadow-xs group">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Activity className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1.5 leading-snug">
                      {trans("Health & Nutrition", "உடல்நலம் & ஊட்டச்சத்து")}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {trans(
                        "Support healthy growth through nutrition awareness and health checkups.",
                        "ஊட்டச்சத்து விழிப்புணர்வு மற்றும் மருத்துவப் பரிசோதனைகள் மூலம் ஆரோக்கிய வளர்ச்சி."
                      )}
                    </p>
                  </div>
                </div>

                {/* 3. Social & Emotional Development */}
                <div className="bg-[#F0F7FF] border border-sky-100/90 rounded-2xl p-4 flex flex-col justify-between transition-all hover:shadow-xs group">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Users className="w-5 h-5 text-sky-600" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1.5 leading-snug">
                      {trans("Social & Emotional Development", "சமூக & உணர்வு வளர்ச்சி")}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {trans(
                        "Build confidence, self-esteem and positive social skills.",
                        "தன்னம்பிக்கை, சுயமரியாதை மற்றும் நற்பண்புகளை வளர்த்தல்."
                      )}
                    </p>
                  </div>
                </div>

                {/* 4. Creative & Play-Based Learning */}
                <div className="bg-[#F6F0FD] border border-purple-100/90 rounded-2xl p-4 flex flex-col justify-between transition-all hover:shadow-xs group">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Palette className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1.5 leading-snug">
                      {trans("Creative & Play Learning", "படைப்பாற்றல் & விளையாட்டு")}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {trans(
                        "Encourage creativity, curiosity and problem-solving through play.",
                        "விளையாட்டு வழியே சிந்தனைத் திறன், ஆக்கப்பூர்வ ஆர்வம் மற்றும் புத்துணர்ச்சி."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. KEY AREAS OF CHILD DEVELOPMENT */}
      <section id="key-areas" className="py-12 sm:py-16">
        <Container>
          <div className="bg-[#FEFAF3] border border-amber-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            {/* Section Header with Accent Bar */}
            <div className="mb-6">
              <div className="w-8 h-1 bg-amber-400 rounded-full mb-2" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {trans("Key Areas of Child Development", "குழந்தைகள் வளர்ச்சியின் முக்கிய களங்கள்")}
              </h2>
            </div>

            {/* 4 Photographic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Card 1: Cognitive Development */}
              <div className="bg-white rounded-2xl p-3 border border-amber-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                    <Image
                      src="/assets/images/tuition-learning.jpg"
                      alt="Cognitive development activities"
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Brain className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Cognitive Development", "அறிவுசார் வளர்ச்சி")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Activities that improve thinking, learning and problem-solving skills.",
                          "சிந்தனை, கற்றல் மற்றும் தீர்வு காணும் திறன்களை மேம்படுத்தும் பயிற்சிகள்."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Physical Development */}
              <div className="bg-white rounded-2xl p-3 border border-amber-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                    <Image
                      src="/assets/images/tree-planting.jpg"
                      alt="Physical sports and outdoor activities"
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Activity className="w-4 h-4 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Physical Development", "உடல் வளர்ச்சி")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Play, sports and nutrition support for healthy growth.",
                          "ஆரோக்கியமான உடற்கட்டிற்கு விளையாட்டு, உடற்பயிற்சி மற்றும் ஊட்டச்சத்து உதவி."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Emotional Development */}
              <div className="bg-white rounded-2xl p-3 border border-amber-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                    <Image
                      src="/assets/images/child-birthday.jpg"
                      alt="Emotional support and milestone celebrations"
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Heart className="w-4 h-4 text-pink-600 fill-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Emotional Development", "உணர்வுசார் வளர்ச்சி")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Guidance, care and a safe space to express feelings.",
                          "வழிகாட்டல், அன்பான கவனிப்பு மற்றும் உணர்வுகளைப் பகிர்ந்துகொள்ளும் பாதுகாப்பு."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Social Development */}
              <div className="bg-white rounded-2xl p-3 border border-amber-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                    <Image
                      src="/assets/images/about-story-children.jpg"
                      alt="Social bonding and team camaraderie"
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {trans("Social Development", "சமூக வளர்ச்சி")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {trans(
                          "Building friendships, teamwork and positive behavior.",
                          "நட்பு, குழுவாக இணைந்து பணியாற்றுதல் மற்றும் நல்லொழுக்கப் பண்புகள்."
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

      {/* 4. ACTIVITIES WE CONDUCT */}
      <section className="py-10 sm:py-14 bg-white border-y border-slate-100">
        <Container>
          <div className="text-center sm:text-left mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {trans("Activities We Conduct", "நாம் நடத்தும் செயல்பாடுகள்")}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 text-center">
            {/* Activity 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                <BookOpen className="w-6 h-6 text-sky-600" />
              </div>
              <span className="font-bold text-xs text-slate-800 leading-snug">
                {trans("Early Learning Sessions", "ஆரம்பக் கல்வி வகுப்புகள்")}
              </span>
            </div>

            {/* Activity 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                <Activity className="w-6 h-6 text-sky-600" />
              </div>
              <span className="font-bold text-xs text-slate-800 leading-snug">
                {trans("Sports & Outdoor Activities", "விளையாட்டு & உடற்பயிற்சி")}
              </span>
            </div>

            {/* Activity 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                <Apple className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="font-bold text-xs text-slate-800 leading-snug">
                {trans("Nutrition & Healthy Meals", "ஊட்டச்சத்து & சிற்றுண்டி")}
              </span>
            </div>

            {/* Activity 4 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                <BriefcaseMedical className="w-6 h-6 text-sky-600" />
              </div>
              <span className="font-bold text-xs text-slate-800 leading-snug">
                {trans("Health Checkups & Camps", "மருத்துவப் பரிசோதனைகள்")}
              </span>
            </div>

            {/* Activity 5 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                <Palette className="w-6 h-6 text-amber-600" />
              </div>
              <span className="font-bold text-xs text-slate-800 leading-snug">
                {trans("Art, Music & Creativity", "கலை, ஓவியம் & இசை")}
              </span>
            </div>

            {/* Activity 6 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                <Sprout className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="font-bold text-xs text-slate-800 leading-snug">
                {trans("Life Skills Development", "வாழ்க்கைத் திறன் பயிற்சி")}
              </span>
            </div>

            {/* Activity 7 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                <Users className="w-6 h-6 text-sky-600" />
              </div>
              <span className="font-bold text-xs text-slate-800 leading-snug">
                {trans("Parent Guidance Sessions", "பெற்றோர் வழிகாட்டல்")}
              </span>
            </div>

            {/* Activity 8 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-2xs">
                <ShieldCheck className="w-6 h-6 text-pink-600" />
              </div>
              <span className="font-bold text-xs text-slate-800 leading-snug">
                {trans("Safe & Caring Environment", "பாதுகாப்பான அன்பான சூழல்")}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. OUR IMPACT */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="bg-[#F0FAF4] border border-emerald-100/90 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
            {/* Left Narrative */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {trans("Our Impact", "எங்கள் தாக்கம்")}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
                {trans("Real support. Real progress. Real brighter futures.", "உண்மையான ஆதரவு. உறுதியான முன்னேற்றம். ஒளிமயமான எதிர்காலம்.")}
              </p>
            </div>

            {/* Right Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto">
              {/* Stat 1 */}
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-emerald-100/80 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    700+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block">
                    {trans("Children Supported", "ஆதரவு பெற்ற குழந்தைகள்")}
                  </span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-emerald-100/80 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Apple className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    500+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block">
                    {trans("Nutrition Support", "ஊட்டச்சத்து உதவி")}
                  </span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-emerald-100/80 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    350+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block">
                    {trans("Health Checkups", "மருத்துவப் பரிசோதனைகள்")}
                  </span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-emerald-100/80 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 block leading-tight">
                    200+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 block">
                    {trans("Early Learning", "ஆரம்பக் கல்விப் பயன்")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. STORIES OF GROWTH */}
      <section className="py-10 sm:py-14 bg-white border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header & Carousel Controls */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <div className="w-8 h-1 bg-amber-400 rounded-full mb-2" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {trans("Stories of Growth", "வளர்ச்சிக் கதைகள்")}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  {trans(
                    "Every child has a story. Here are a few from our child development program.",
                    "ஒவ்வொரு குழந்தைக்கும் ஒரு கதை உண்டு. எங்கள் குழந்தைகள் வளர்ச்சித் திட்டத்தின் சில அனுபவங்கள்."
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/stories"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-2xs transition-all active:scale-95 group"
                >
                  <span>{trans("Read More Stories", "மேலும் கதைகளைப் படிக்க")}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {/* Carousel Arrows */}
                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    type="button"
                    onClick={handlePrevStory}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStory}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Center: Active Testimonial Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center gap-5 transition-all">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-inner">
                  <Image
                    src={stories[activeStoryIndex].image}
                    alt={stories[activeStoryIndex].author}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl text-emerald-600 font-serif leading-none block -mb-2">
                    &ldquo;
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    {trans(stories[activeStoryIndex].quote, stories[activeStoryIndex].quoteTa)}
                  </p>
                  <div className="mt-2 text-xs font-bold text-slate-900">
                    — {stories[activeStoryIndex].author}
                    <span className="text-slate-400 font-normal ml-1">
                      ({trans(stories[activeStoryIndex].role, stories[activeStoryIndex].roleTa)})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Tilted Pastel Badge */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="bg-[#FFF0F4] border border-pink-200/80 rounded-2xl px-6 py-5 -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-sm text-center select-none">
                <div className="font-handwriting text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  <div className="flex items-center justify-center gap-1.5">
                    <span>{trans("Small", "சிறு")}</span>
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline" />
                  </div>
                  <div>{trans("Steps", "படிகள்")}</div>
                  <div className="text-slate-950 font-extrabold mt-0.5">
                    {trans("Big Futures", "பெரு எதிர்காலம்")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. BOTTOM DARK PHOTOGRAPHIC BANNER */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/images/cta-hands-sapling.jpg"
            alt="Hands holding soil and growing sapling"
            fill
            unoptimized
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/90" />
        </div>

        <Container className="relative z-10 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Left Heading & Text */}
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {trans("Help Us Nurture", "குழந்தைகளை வளர்த்தெடுக்க உதவுங்கள்")} <br />
                <span className="text-[#F5B82E]">
                  {trans("Brighter Futures", "ஒளிமயமான எதிர்காலம்")}
                </span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                {trans(
                  "Your support can help us reach more children and give them the care, opportunities and guidance they deserve.",
                  "உங்கள் ஆதரவு மேலும் பல குழந்தைகளைச் சென்றடையவும், அவர்களுக்குத் தகுதியான கவனிப்பு, வாய்ப்புகள் மற்றும் வழிகாட்டலை வழங்கவும் உதவும்."
                )}
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Link
                href="/sponsor"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E11D74] hover:bg-[#C91865] text-white font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105 active:scale-95 group"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{trans("Donate Now", "நன்கொடை வழங்குக")}</span>
              </Link>

              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-all active:scale-95 group"
              >
                <Users className="w-4 h-4 text-white" />
                <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. APPROACH & METHODOLOGY MODAL */}
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
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{trans("Program Methodology", "திட்ட அணுகுமுறை")}</span>
            </div>

            <h3 id="approach-modal-title" className="font-serif text-2xl font-bold text-slate-900 mb-3">
              {trans("Our 5-Pillar Holistic Approach", "எங்கள் 5-அம்ச முழுமையான அணுகுமுறை")}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              {trans(
                "How we create a nurturing, secure environment where every child can flourish emotionally, academically, and physically.",
                "ஒவ்வொரு குழந்தையும் உணர்வுபூர்வமாகவும், கல்வியிலும், உடலளவிலும் சிறந்து விளங்க பாதுகாப்பான சூழலை உருவாக்குவது எவ்வாறு."
              )}
            </p>

            <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed mb-6">
              <div className="flex items-start gap-3 p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Safe Sanctuary:", "பாதுகாப்பான சூழல்:")}</strong>{" "}
                  {trans(
                    "Our center operates with vetted volunteers and strict child safeguarding guidelines.",
                    "சரிபார்க்கப்பட்ட தன்னார்வலர்கள் மற்றும் கடுமையான குழந்தைகள் பாதுகாப்பு வழிகாட்டுதல்களுடன் எங்கள் மையம் இயங்குகிறது."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Nutrition & Health Monitoring:", "ஊட்டச்சத்து & மருத்துவக் கண்காணிப்பு:")}</strong>{" "}
                  {trans(
                    "Nutritious evening snacks, clean drinking water, and regular height-weight checkups.",
                    "சத்தான மாலை சிற்றுண்டி, சுத்தமான குடிநீர் மற்றும் முறையான உடல் வளர்ச்சிப் பரிசோதனைகள்."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Creative Expression:", "படைப்பாற்றல் வெளிப்பாடு:")}</strong>{" "}
                  {trans(
                    "Weekend talent shows, painting workshops, storytelling circles, and friendly athletics.",
                    "வார இறுதி திறமை வெளிப்பாடுகள், ஓவியப் பட்டறைகள், கதை சொல்லும் நிகழ்வுகள் மற்றும் விளையாட்டுப் போட்டிகள்."
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{trans("Milestone Celebrations:", "பிறந்தநாள் கொண்டாட்டங்கள்:")}</strong>{" "}
                  {trans(
                    "Honoring every child's birthday with personalized cards and joyful recognition.",
                    "ஒவ்வொரு குழந்தையின் பிறந்தநாளையும் வாழ்த்து அட்டைகள், இனிப்புகளுடன் சிறப்பித்துக் கொண்டாடுதல்."
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsApproachModalOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
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
