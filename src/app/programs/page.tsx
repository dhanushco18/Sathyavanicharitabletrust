"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Heart,
  Sprout,
  Users,
  Search,
  Check,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Award,
  Target,
  Handshake,
  LayoutGrid,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProgramsPage() {
  const { trans, isTamil } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "all",
      label: trans("All Programs", "அனைத்து திட்டங்கள்"),
      icon: <LayoutGrid className="w-3.5 h-3.5" />,
      activeClasses: "bg-[#FED467] text-slate-900 shadow-xs ring-1 ring-amber-400/90 font-bold",
      inactiveClasses: "bg-slate-50 hover:bg-amber-50/60 text-slate-700 hover:text-slate-900 border border-slate-200/70",
    },
    {
      id: "education",
      label: trans("Education", "கல்வி"),
      icon: <GraduationCap className="w-3.5 h-3.5 text-sky-600" />,
      activeClasses: "bg-sky-500 text-white shadow-xs font-bold ring-1 ring-sky-600",
      inactiveClasses: "bg-sky-50/60 hover:bg-sky-100/80 text-slate-700 hover:text-sky-900 border border-sky-100",
    },
    {
      id: "healthcare",
      label: trans("Healthcare", "மருத்துவம்"),
      icon: <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />,
      activeClasses: "bg-rose-500 text-white shadow-xs font-bold ring-1 ring-rose-600",
      inactiveClasses: "bg-rose-50/60 hover:bg-rose-100/80 text-slate-700 hover:text-rose-900 border border-rose-100",
    },
    {
      id: "livelihood",
      label: trans("Livelihood", "வாழ்வாதாரம்"),
      icon: <Sprout className="w-3.5 h-3.5 text-emerald-600" />,
      activeClasses: "bg-emerald-600 text-white shadow-xs font-bold ring-1 ring-emerald-700",
      inactiveClasses: "bg-emerald-50/60 hover:bg-emerald-100/80 text-slate-700 hover:text-emerald-900 border border-emerald-100",
    },
    {
      id: "community",
      label: trans("Community Support", "சமூக உதவி"),
      icon: <Users className="w-3.5 h-3.5 text-amber-600" />,
      activeClasses: "bg-amber-500 text-white shadow-xs font-bold ring-1 ring-amber-600",
      inactiveClasses: "bg-amber-50/60 hover:bg-amber-100/80 text-slate-700 hover:text-amber-900 border border-amber-100",
    },
  ];

  const allPrograms = [
    {
      id: "education",
      category: "education",
      categoryName: trans("Education", "கல்வி"),
      title: trans("Education Program", "கல்வி உதவி திட்டம்"),
      description: trans(
        "Quality education for underprivileged children to build a brighter future.",
        "விளிம்புநிலை குழந்தைகளின் பிரகாசமான எதிர்காலத்திற்காக தரமான இலவச கல்வி உதவி."
      ),
      bullets: [
        trans("School support and tuition assistance", "பள்ளி கட்டண ஆதரவு மற்றும் மாலை நேர கல்வி பயிற்சி"),
        trans("Learning materials and infrastructure", "கல்வி உபகரணங்கள் மற்றும் சீருடைகள் வழங்குதல்"),
        trans("Mentorship and career guidance", "வழிகாட்டுதல் மற்றும் எதிர்கால கல்வி ஆலோசனை"),
      ],
      stat: {
        value: "700+",
        label: trans("Children Educated", "பயனடைந்த மாணவர்கள்"),
        icon: <BookOpen className="w-5 h-5 text-sky-600" />,
        boxBg: "bg-sky-50/70 border-sky-100",
        arrowColor: "text-sky-600 bg-sky-100/70",
      },
      image: "/assets/images/prog-education.jpg",
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
      iconBg: "bg-sky-100",
      btnColor: "bg-sky-600 hover:bg-sky-700",
      href: "/programs/education",
    },
    {
      id: "healthcare",
      category: "healthcare",
      categoryName: trans("Healthcare", "மருத்துவம்"),
      title: trans("Healthcare Program", "மருத்துவ நல்வாழ்வு திட்டம்"),
      description: trans(
        "Better health and wellness for children and communities.",
        "குழந்தைகள் மற்றும் எளிய குடும்பங்களின் உடல்நலனைப் பாதுகாக்கும் மருத்துவ உதவிகள்."
      ),
      bullets: [
        trans("Health camps and medical checkups", "இலவச மருத்துவ முகாம்கள் மற்றும் முழு உடல் பரிசோதனை"),
        trans("Nutrition support and awareness", "ஊட்டச்சத்து உணவு விநியோகம் மற்றும் விழிப்புணர்வு"),
        trans("Maternal and child health care", "தாய்-சேய் நலன் மற்றும் அத்தியாவசிய மருந்துகள்"),
      ],
      stat: {
        value: "1,200+",
        label: trans("Medical Support", "மருத்துவ ஆதரவு பெற்றோர்"),
        icon: <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />,
        boxBg: "bg-rose-50/70 border-rose-100",
        arrowColor: "text-rose-500 bg-rose-100/70",
      },
      image: "/assets/images/prog-healthcare.jpg",
      icon: <Heart className="w-6 h-6 text-rose-500 fill-rose-500/20" />,
      iconBg: "bg-rose-100",
      btnColor: "bg-rose-500 hover:bg-rose-600",
      href: "/programs/child-development",
    },
    {
      id: "livelihood",
      category: "livelihood",
      categoryName: trans("Livelihood", "வாழ்வாதாரம்"),
      title: trans("Livelihood Program", "சுயதொழில் மற்றும் வாழ்வாதார திட்டம்"),
      description: trans(
        "Skills training and employment opportunities for self-reliance.",
        "குடும்பங்களின் தன்னிறைவுக்கான தொழில் திறன் பயிற்சி மற்றும் வேலைவாய்ப்பு ஆதரவு."
      ),
      bullets: [
        trans("Vocational training and skill development", "தையல் மற்றும் கைவினை தொழிற்பயிற்சிகள்"),
        trans("Women empowerment initiatives", "மகளிர் சுயதொழில் தொடங்குவதற்கான வழிகாட்டல்"),
        trans("Support for small-scale entrepreneurship", "சிறு வணிகம் மற்றும் வாழ்வாதார உபகரணங்கள் உதவி"),
      ],
      stat: {
        value: "350+",
        label: trans("Families Empowered", "பயனடைந்த குடும்பங்கள்"),
        icon: <Users className="w-5 h-5 text-emerald-600" />,
        boxBg: "bg-emerald-50/70 border-emerald-100",
        arrowColor: "text-emerald-600 bg-emerald-100/70",
      },
      image: "/assets/images/prog-livelihood.jpg",
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      btnColor: "bg-emerald-600 hover:bg-emerald-700",
      href: "/programs/community-outreach",
    },
    {
      id: "community",
      category: "community",
      categoryName: trans("Community Support", "சமூக உதவி"),
      title: trans("Community Support", "சமூக நலப்பணி திட்டம்"),
      description: trans(
        "Building stronger, healthier and more inclusive communities.",
        "ஒற்றுமையும் சமத்துவமும் கொண்ட வலிமையான சமூகத்தை உருவாக்குதல்."
      ),
      bullets: [
        trans("Food and essential supplies", "உணவு பொருட்கள் மற்றும் அத்தியாவசிய நிவாரணங்கள்"),
        trans("Awareness programs and outreach", "சமூக விழிப்புணர்வு மற்றும் களப்பணிகள்"),
        trans("Support during emergencies", "பேரிடர் கால உடனடி நிவாரண உதவிகள்"),
      ],
      stat: {
        value: "2,500+",
        label: trans("Lives Touched", "பயனடைந்த பொதுமக்கள்"),
        icon: <Users className="w-5 h-5 text-amber-600" />,
        boxBg: "bg-amber-50/70 border-amber-100",
        arrowColor: "text-amber-600 bg-amber-100/70",
      },
      image: "/assets/images/diwali-distribution.jpg",
      icon: <Users className="w-6 h-6 text-amber-600" />,
      iconBg: "bg-amber-100",
      btnColor: "bg-amber-500 hover:bg-amber-600",
      href: "/programs/community-outreach",
    },
  ];

  const highlights = [
    {
      title: trans("Sustainable Impact", "நிலையான மாற்றம்"),
      description: trans("Long-term change through community-driven initiatives.", "சமூகப் பங்கேற்புடன் கூடிய நீண்டகால அளவிலான நேர்மறை மாற்றங்கள்."),
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />,
      iconBg: "bg-rose-100",
    },
    {
      title: trans("Focused Approach", "இலக்கு நோக்கிய அணுகுமுறை"),
      description: trans("Programs designed based on real community needs.", "மக்களின் நேரடி தேவைகளை ஆராய்ந்து வடிவமைக்கப்படும் திட்டங்கள்."),
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
      iconBg: "bg-emerald-100",
    },
    {
      title: trans("Collaborative Efforts", "கூட்டு நற்பணி"),
      description: trans("Working with local partners, volunteers and stakeholders.", "அர்ப்பணிப்புள்ள தன்னார்வலர்கள் மற்றும் நல்மனங்களுடன் இணைந்து செயல்பாடு."),
      icon: <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />,
      iconBg: "bg-sky-100",
    },
  ];

  // Filtering logic
  const filteredPrograms = allPrograms.filter((prog) => {
    const matchesCategory =
      selectedCategory === "all" || prog.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.bullets.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* 1. Hero Section matching mockup */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-children.jpg"
            alt="Smiling Indian schoolchildren at Sathiyavani Charitable Trust"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center sm:object-[center_35%]"
          />
          {/* Gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 text-left space-y-4">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold mb-2">
                <Link
                  href="/"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  {trans("Home", "முகப்பு")}
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-white/70" />
                <span className="text-white">{trans("Programs", "திட்டங்கள்")}</span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                  {trans("Our", "எங்கள்")}{" "}
                  <span className="text-amber-400 font-serif font-bold">
                    {trans("Programs", "திட்டங்கள்")}
                  </span>
                </h1>
                <div className="w-16 h-1.5 bg-amber-400 rounded-full mt-2.5 shadow-xs" />
              </div>

              {/* Subtext */}
              <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed drop-shadow-sm pt-1">
                {trans(
                  "Focused initiatives for a stronger, more inclusive tomorrow.",
                  "வலிமையான மற்றும் சமத்துவமான எதிர்காலத்தை உருவாக்கும் மக்கள் நலத்திட்டங்கள்."
                )}
              </p>
            </div>

            {/* Right Badge: "Education Healthcare ♡ Livelihood Stronger Communities" */}
            <div className="hidden lg:flex lg:col-span-4 justify-end relative">
              <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="relative bg-[#FFFBF0] border-2 border-amber-200/90 shadow-2xl rounded-2xl px-6 py-5 text-center min-w-[220px] backdrop-blur-sm">
                  {/* Pin accent */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-amber-200/80 rounded-sm shadow-xs" />

                  {isTamil ? (
                    <div className="font-heading text-xl sm:text-2xl text-slate-900 font-bold leading-tight">
                      கல்வி<br />
                      மருத்துவம் <span className="text-rose-500 font-sans inline-block align-middle text-xl">♡</span><br />
                      வாழ்வாதாரம்<br />
                      வலிமையான<br />
                      <span className="text-slate-900">சமூகம்</span>
                    </div>
                  ) : (
                    <div className="font-handwriting text-2xl sm:text-3xl text-slate-900 font-bold leading-tight">
                      Education<br />
                      Healthcare <span className="text-rose-500 font-sans inline-block align-middle text-xl">♡</span><br />
                      Livelihood<br />
                      Stronger<br />
                      <span className="text-slate-900">Communities</span>
                    </div>
                  )}

                  {/* Golden curved scribble underline */}
                  <svg
                    className="w-24 h-3 mx-auto mt-2 text-amber-500 stroke-current"
                    viewBox="0 0 100 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7C25 2 70 2 98 8"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating Filter & Search Bar (Overlapping Hero Bottom) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-7">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-sm hover:shadow border border-slate-200/80 flex flex-col xl:flex-row items-center justify-between gap-2.5 sm:gap-3 transition-shadow">
          {/* Left: Category Filter Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar w-full xl:w-auto py-0.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                    isActive ? cat.activeClasses : cat.inactiveClasses
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Search Input */}
          <div className="flex items-center gap-2 w-full xl:w-auto shrink-0 justify-end">
            <div className="relative w-full sm:w-60 md:w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder={trans("Search programs...", "திட்டங்களை தேடுங்கள்...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 bg-slate-50 border border-slate-200/90 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1.5 focus:ring-amber-400 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. 4 Main Program Cards Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
              <p className="text-slate-600 font-medium text-base mb-3">
                {trans("No programs found matching", "எந்த திட்டமும் பொருந்தவில்லை")} "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-slate-900 font-bold text-xs hover:bg-amber-500 transition-colors"
              >
                {trans("Reset Filters", "வடிகட்டிகளை மீட்டமைக்கவும்")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated border border-slate-100 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Top: Photo & Floating Badge + Details */}
                  <div className="flex flex-col flex-1">
                    {/* Relative wrapper for photo & floating icon */}
                    <div className="relative">
                      {/* Photo Container with rounded top and overflow-hidden */}
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                        <Image
                          src={prog.image}
                          alt={prog.title}
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      </div>

                      {/* Floating Circle Icon - NOT clipped by overflow-hidden! */}
                      <div className="absolute -bottom-6 left-5 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-white flex items-center justify-center z-10 p-0.5">
                        <div className={`w-full h-full rounded-full ${prog.iconBg} flex items-center justify-center shadow-inner`}>
                          {prog.icon}
                        </div>
                      </div>
                    </div>

                    {/* Card Content with consistent baselines */}
                    <div className="p-5 sm:p-6 pt-9 flex-1 flex flex-col">
                      <h3 className="font-heading text-lg font-bold text-slate-900 mb-1.5 min-h-[1.75rem] sm:min-h-[3rem] flex items-center">
                        {prog.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4 min-h-[2.5rem] line-clamp-2">
                        {prog.description}
                      </p>

                      {/* 3 Bullet Checklist */}
                      <div className="space-y-2.5 mb-5 flex-1">
                        {prog.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span className="text-xs text-slate-700 font-medium leading-snug line-clamp-2">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Area: Stat Box & Learn More Button */}
                  <div className="p-5 sm:p-6 pt-0 mt-auto">
                    {/* Stat Box matching mockup */}
                    <Link
                      href={prog.href}
                      className={`flex items-center justify-between p-2.5 rounded-xl border ${prog.stat.boxBg} mb-3.5 group/stat hover:border-slate-300 transition-colors`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="shrink-0">{prog.stat.icon}</div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-heading text-base font-extrabold text-slate-900 leading-tight">
                            {prog.stat.value}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 truncate">
                            {prog.stat.label}
                          </span>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full ${prog.stat.arrowColor} flex items-center justify-center shadow-xs shrink-0 transition-transform group-hover/stat:translate-x-0.5`}>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </Link>

                    {/* Full-width Learn More Button */}
                    <Link
                      href={prog.href}
                      className={`w-full py-2.5 px-4 rounded-xl text-white font-bold text-xs sm:text-sm text-center shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-[0.99] ${prog.btnColor}`}
                    >
                      <span>{trans("Learn More", "மேலும் அறிய")}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. "Program Highlights" Section */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Title: Program Highlights */}
              <div className="lg:col-span-3 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  {trans("Program", "திட்டங்களின்")}{" "}
                  <span className="text-amber-500 font-serif font-bold">
                    {trans("Highlights", "சிறப்பம்சங்கள்")}
                  </span>
                </h2>
                <div className="w-12 h-1 bg-amber-400 rounded-full mt-2 shadow-xs" />
              </div>

              {/* 3 Highlight Cards */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Banner: "Be a Part of Our Programs" */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden">
        {/* Background Photo: Hands holding sapling in soil */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/cta-hands-sapling.jpg"
            alt="Hands holding green sapling in soil"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Refined gradient overlay for clear sapling visibility and crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/75" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline & CTAs (9 cols) */}
            <div className="lg:col-span-9 text-center lg:text-left space-y-3.5">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {trans("Be a Part of", "இணைந்திடுங்கள்")}{" "}
                <span className="text-amber-400 font-serif font-bold">
                  {trans("Our Programs", "எங்கள் திட்டங்களில்")}
                </span>
              </h2>

              <p className="text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed">
                {trans(
                  "Your time, skills or support can help us reach more people and create a lasting impact.",
                  "உங்கள் நேரம், திறன்கள் அல்லது நிதி ஆதரவு பல எளிய உயிர்களுக்கு ஒளிமயமான எதிர்காலத்தை உருவாக்கும்."
                )}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
                <Link
                  href="/sponsor"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Heart className="w-4 h-4 fill-white text-white" aria-hidden="true" />
                  <span>{trans("Donate Now", "இப்போதே நிதியுதவி செய்யுங்கள்")}</span>
                </Link>

                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-black/45 hover:bg-black/65 border border-white/40 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Users className="w-4 h-4 text-white" aria-hidden="true" />
                  <span>{trans("Become a Volunteer", "தன்னார்வலராக இணையுங்கள்")}</span>
                </Link>
              </div>
            </div>

            {/* Right Script Accent Badge: "Together for a Better ♡ Tomorrow" */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="text-center lg:text-right transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                {isTamil ? (
                  <span className="font-heading text-2xl sm:text-3xl text-amber-200 font-bold leading-tight drop-shadow-md block">
                    ஒன்றிணைவோம்<br />
                    ஒரு சிறந்த <span className="text-rose-400 font-sans inline-block align-middle">♡</span><br />
                    <span className="text-amber-100">நாளைக்காக</span>
                  </span>
                ) : (
                  <span className="font-handwriting text-3xl sm:text-4xl text-amber-200 font-bold leading-tight drop-shadow-md block">
                    Together<br />
                    for a Better <span className="text-rose-400 font-sans inline-block align-middle">♡</span><br />
                    <span className="text-amber-100">Tomorrow</span>
                  </span>
                )}
                {/* Golden curved doodle underline */}
                <svg
                  className="w-24 h-3 ml-auto mr-auto lg:mr-0 mt-2 text-amber-400 stroke-current"
                  viewBox="0 0 100 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7C25 2 70 2 98 8"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
