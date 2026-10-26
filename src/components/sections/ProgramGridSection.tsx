"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Heart, Sprout, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ProgramGridSection() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const { t, trans } = useLanguage();

  const programs = [
    {
      id: "education",
      title: t("heroPillarEducationTitle"),
      description: t("heroPillarEducationDesc"),
      image: "/assets/images/prog-education.jpg",
      icon: <GraduationCap className="w-3.5 h-3.5 text-sky-600" />,
      iconBg: "bg-sky-100",
      href: "/programs/education",
    },
    {
      id: "healthcare",
      title: t("heroPillarHealthcareTitle"),
      description: t("heroPillarHealthcareDesc"),
      image: "/assets/images/prog-healthcare.jpg",
      icon: <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />,
      iconBg: "bg-rose-100",
      href: "/programs/child-development",
    },
    {
      id: "livelihood",
      title: t("heroPillarLivelihoodTitle"),
      description: t("heroPillarLivelihoodDesc"),
      image: "/assets/images/prog-livelihood.jpg",
      icon: <Sprout className="w-3.5 h-3.5 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      href: "/programs/community-outreach",
    },
    {
      id: "community",
      title: t("heroPillarCommunityTitle"),
      description: t("heroPillarCommunityDesc"),
      image: "/assets/images/prog-community.jpg",
      icon: <Users className="w-3.5 h-3.5 text-amber-600" />,
      iconBg: "bg-amber-100",
      href: "/programs/community-outreach",
    },
  ];

  const stories = [
    {
      quote: trans(
        "Sathiyavani Trust helped me continue my education. Now I can dream bigger.",
        "சத்தியவாணி அறக்கட்டளை எனது படிப்பைத் தொடர உதவியது. இப்போது நான் எனது எதிர்காலத்தை நம்பிக்கையோடு எதிர்கொள்கிறேன்."
      ),
      author: trans("Student Beneficiary", "பயனடைந்த மாணவர்"),
      image: "/assets/images/story-student-boy.jpg",
    },
    {
      quote: trans(
        "Evening tuition and dedicated guidance gave my daughter confidence to top her 10th standard exams.",
        "தினசரி மாலை நேர பயிற்சியும் ஆசிரியர்களின் அர்ப்பணிப்பும் எனது மகளுக்கு பத்தாம் வகுப்பில் சிறந்த மதிப்பெண் பெற உதவியது."
      ),
      author: trans("Parent, Community Center", "மாணவரின் தாய், சென்னை"),
      image: "/assets/images/story-student-boy.jpg",
    },
    {
      quote: trans(
        "Vocational tailoring skills gave me independence to support my two children with dignity.",
        "தையல் பயிற்சி மூலம் கிடைத்த சுயதொழில் வாய்ப்பு எனது இரண்டு குழந்தைகளையும் கண்ணியத்துடன் வளர்க்க உதவுகிறது."
      ),
      author: trans("Women's Livelihood Beneficiary", "மகளிர் வாழ்வாதாரப் பயனாளினி"),
      image: "/assets/images/story-student-boy.jpg",
    },
    {
      quote: trans(
        "Volunteering every weekend with these bright young minds is the most fulfilling part of my week.",
        "வாரந்தோறும் இந்த சுட்டி மாணவர்களுக்கு பாடம் சொல்லித் தருவது எனக்கு அளவில்லா மனநிறைவைத் தருகிறது."
      ),
      author: trans("Volunteer Mentor", "தன்னார்வ வழிகாட்டி"),
      image: "/assets/images/story-student-boy.jpg",
    },
    {
      quote: trans(
        "The annual Diwali gift distribution brought pure joy and brand new clothes to our tribal hamlet.",
        "தீபாவளி பண்டிகை காலத்தில் வழங்கப்பட்ட புத்தாடைகளும் இனிப்புகளும் எங்கள் கிராமத்து குழந்தைகளுக்கு பெரும் மகிழ்ச்சியைத் தந்தது."
      ),
      author: trans("Village Elder, Outreach", "கிராம பெரியவர்"),
      image: "/assets/images/story-student-boy.jpg",
    },
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t("progGridHeading")}
            </h2>
            <div className="w-14 h-1.5 bg-amber-400 rounded-full mt-1.5 shadow-xs" />
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors group"
          >
            <span>{trans("View All Programs", "அனைத்து திட்டங்கள்")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* 4 Program Photo Cards (8 Columns on lg/xl screens) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
            {programs.map((prog) => (
              <Link
                key={prog.id}
                href={prog.href}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4.2] sm:aspect-[4/5.2] bg-slate-900 shadow-card hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 block"
              >
                {/* Photo */}
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-slate-100 flex items-center justify-between gap-2 transition-all duration-200 group-hover:bg-white">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <div
                      className={`w-6 h-6 rounded-full ${prog.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {prog.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-xs font-bold text-slate-900 leading-tight">
                        {prog.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 leading-snug truncate mt-0.5" title={prog.description}>
                        {prog.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-teal-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* Real Stories Real Change Card */}
          <div className="lg:col-span-4 bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-card flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {trans("Real Stories", "உண்மையான கதைகள்")}
              </h3>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {trans("Real Change", "நேரடி சமூக மாற்றம்")}
              </h3>
            </div>

            {/* Quote + Polaroid Photo Section */}
            <div className="flex items-center gap-3.5 my-4 sm:my-5">
              <div className="flex-1 min-w-0">
                <blockquote className="font-serif text-xs sm:text-[13px] text-slate-700 italic leading-relaxed">
                  "{stories[currentStoryIndex].quote}"
                </blockquote>
                <p className="text-[11px] font-semibold text-slate-500 mt-2">
                  - {stories[currentStoryIndex].author}
                </p>
              </div>

              <div className="relative w-22 h-26 sm:w-26 sm:h-30 bg-white p-1 pb-3 rounded-lg shadow-md border border-slate-200 rotate-2 shrink-0">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-amber-300/90 rounded-xs shadow-xs z-10 -rotate-2" />

                <div className="relative w-20 h-22 sm:w-24 sm:h-24 rounded overflow-hidden bg-slate-100">
                  <Image
                    src={stories[currentStoryIndex].image}
                    alt={stories[currentStoryIndex].author}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/80">
              <button
                type="button"
                onClick={prevStory}
                aria-label="Previous story"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-300 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-xs transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {stories.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrentStoryIndex(dotIdx)}
                    aria-label={`Go to story ${dotIdx + 1}`}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      dotIdx === currentStoryIndex
                        ? "w-4 sm:w-5 bg-amber-500"
                        : "w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextStory}
                aria-label="Next story"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-300 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-xs transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
