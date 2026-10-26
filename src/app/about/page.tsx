"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Check,
  Users,
  BookOpen,
  Activity,
  Sprout,
  ArrowRight,
  Heart,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { trans } = useLanguage();

  const foundationPillars = [
    {
      title: trans("Our Mission", "எங்கள் நோக்கம்"),
      description: trans(
        "To uplift underprivileged communities through quality education, healthcare, livelihood opportunities and holistic development.",
        "தரமான கல்வி, மருத்துவம், வாழ்வாதார வாய்ப்புகள் மற்றும் முழுமையான வளர்ச்சி மூலம் பின்தங்கிய சமூகங்களை மேம்படுத்துதல்."
      ),
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />,
      iconBg: "bg-rose-100",
    },
    {
      title: trans("Our Vision", "எங்கள் தொலைநோக்கு"),
      description: trans(
        "A society where every individual, regardless of background, has the opportunity to live a healthy, dignified and empowered life.",
        "பின்னணி பாராமல் ஒவ்வொரு நபரும் ஆரோக்கியமான, கண்ணியமான மற்றும் அதிகாரம் பெற்ற வாழ்க்கையை வாழும் ஒரு சமூகம்."
      ),
      icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />,
      iconBg: "bg-sky-100",
    },
    {
      title: trans("Our Values", "எங்கள் விழுமியங்கள்"),
      isValuesList: true,
      icon: (
        <span className="text-emerald-600 font-bold text-lg leading-none">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 fill-emerald-600/20" />
        </span>
      ),
      iconBg: "bg-emerald-100",
      valuesCol1: [
        trans("Compassion", "அன்பு"),
        trans("Integrity", "நேர்மை"),
        trans("Inclusivity", "அனைவரையும் உள்ளடக்குதல்"),
      ],
      valuesCol2: [
        trans("Empowerment", "அதிகாரமளித்தல்"),
        trans("Transparency", "வெளிப்படைத்தன்மை"),
        trans("Community First", "சமூகமே முதன்மை"),
      ],
    },
    {
      title: trans("Our Approach", "எங்கள் அணுகுமுறை"),
      description: trans(
        "We work with communities, government partners, volunteers and well-wishers to create sustainable and measurable change.",
        "நிலையான மற்றும் அளவிடக்கூடிய மாற்றத்தை உருவாக்க சமூகம், அரசு, தன்னார்வலர்கள் மற்றும் நலம் விரும்பிகளுடன் இணைந்து பணியாற்றுகிறோம்."
      ),
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
      iconBg: "bg-amber-100",
    },
  ];

  const journeyMilestones = [
    {
      year: "2015",
      badgeColor: "bg-rose-500",
      lineColor: "border-rose-300",
      title: trans("The Beginning", "ஆரம்பம்"),
      desc: trans(
        "Sathiyavani Charitable Trust was established with a vision to serve the community.",
        "சமூகத்திற்கு சேவை செய்யும் தொலைநோக்குடன் சத்தியவாணி அறக்கட்டளை தொடங்கப்பட்டது."
      ),
    },
    {
      year: "2017",
      badgeColor: "bg-sky-500",
      lineColor: "border-sky-300",
      title: trans("Expanding Reach", "சேவை விரிவாக்கம்"),
      desc: trans(
        "Launched education and healthcare initiatives in local communities.",
        "உள்ளூர் சமூகங்களில் கல்வி மற்றும் மருத்துவ முயற்சிகள் தொடங்கப்பட்டன."
      ),
    },
    {
      year: "2019",
      badgeColor: "bg-emerald-500",
      lineColor: "border-emerald-300",
      title: trans("Growing Impact", "வளரும் தாக்கம்"),
      desc: trans(
        "Introduced livelihood and skill development programs.",
        "வாழ்வாதார மற்றும் திறன் மேம்பாட்டுத் திட்டங்கள் அறிமுகப்படுத்தப்பட்டன."
      ),
    },
    {
      year: "2022",
      badgeColor: "bg-amber-500",
      lineColor: "border-amber-300",
      title: trans("Stronger Communities", "வலுவான சமூகங்கள்"),
      desc: trans(
        "Reached more beneficiaries through new partnerships.",
        "புதிய கூட்டாண்மைகள் மூலம் கூடுதல் பயனாளிகளை சென்றடைந்தது."
      ),
    },
    {
      year: "2024",
      badgeColor: "bg-blue-600",
      lineColor: "border-blue-300",
      title: trans("Towards a Brighter Tomorrow", "ஒளிரும் எதிர்காலத்தை நோக்கி"),
      desc: trans(
        "Continuing our mission with greater focus and wider reach.",
        "அதிக கவனத்துடனும் விரிவான நோக்கத்துடனும் எங்களது சேவையைத் தொடர்கிறோம்."
      ),
    },
  ];

  const impactStats = [
    {
      value: "2,500+",
      label: trans("Lives Touched", "பயனடைந்தோர்"),
      icon: <Users className="w-7 h-7 sm:w-8 sm:h-8 text-sky-600" />,
    },
    {
      value: "700+",
      label: trans("Children Educated", "கல்வி பயின்ற குழந்தைகள்"),
      icon: <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-rose-500" />,
    },
    {
      value: "1,200+",
      label: trans("Medical Support", "மருத்துவ ஆதரவு"),
      icon: <Activity className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />,
    },
    {
      value: "350+",
      label: trans("Families Empowered", "மேம்பட்ட குடும்பங்கள்"),
      icon: <Sprout className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />,
    },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* 1. Hero Section matching mockup */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-children.jpg"
            alt="Smiling Indian children at Sathiyavani Charitable Trust"
            fill
            priority
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
              {/* Breadcrumb matching mockup */}
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold mb-2">
                <Link
                  href="/"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  {trans("Home", "முகப்பு")}
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-white/70" />
                <span className="text-white">{trans("About Us", "எங்களை பற்றி")}</span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                  {trans("About", "எங்களை")}{" "}
                  <span className="text-amber-400 font-serif font-bold">
                    {trans("Us", "பற்றி")}
                  </span>
                </h1>
                <div className="w-16 h-1.5 bg-amber-400 rounded-full mt-2.5 shadow-xs" />
              </div>

              {/* Subtext */}
              <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed drop-shadow-sm pt-1">
                {trans(
                  "We are committed to creating a more inclusive, compassionate and empowered society through education, healthcare, livelihood and community support.",
                  "கல்வி, மருத்துவம், வாழ்வாதாரம் மற்றும் சமூக ஆதரவு மூலம் அனைவரையும் உள்ளடக்கிய, இரக்கமுள்ள மற்றும் வலுவான சமுதாயத்தை உருவாக்க நாங்கள் கடமைப்பட்டுள்ளோம்."
                )}
              </p>
            </div>

            {/* Right Badge: "People Education ♡ Better Tomorrow" */}
            <div className="hidden lg:flex lg:col-span-4 justify-end relative">
              <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="relative bg-[#FFFBF0] border-2 border-amber-200/90 shadow-2xl rounded-2xl px-6 py-5 text-center min-w-[220px] backdrop-blur-sm">
                  {/* Pin accent */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-amber-200/80 rounded-sm shadow-xs" />

                  <div className="font-handwriting text-3xl sm:text-4xl text-slate-900 font-bold leading-tight">
                    {trans("People", "மக்கள்")}<br />
                    {trans("Education", "கல்வி")} <span className="text-rose-500 font-sans inline-block align-middle">♡</span><br />
                    {trans("Better", "ஒளிரும்")}<br />
                    <span className="text-slate-900">{trans("Tomorrow", "எதிர்காலம்")}</span>
                  </div>

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

      {/* 2. Floating 4 Foundation Pillar Cards (Overlapping the Hero) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 lg:-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {foundationPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-elevated border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Circular Icon */}
                <div
                  className={`w-12 h-12 rounded-full ${pillar.iconBg} flex items-center justify-center mb-4 shadow-xs`}
                >
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>

                {/* Content */}
                {pillar.isValuesList ? (
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700 font-medium pt-1">
                    <div className="space-y-1.5">
                      {pillar.valuesCol1?.map((val) => (
                        <div key={val} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      {pillar.valuesCol2?.map((val) => (
                        <div key={val} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Middle Section: "Our Story" & "Our Journey" */}
      <section className="py-14 sm:py-20" id="our-journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Our Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {trans("Our", "எங்கள்")}{" "}
                  <span className="text-amber-500 font-serif font-bold">
                    {trans("Story", "கதை")}
                  </span>
                </h2>
                <div className="w-14 h-1.5 bg-amber-400 rounded-full mt-2 shadow-xs" />
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  {trans(
                    "Sathiyavani Charitable Trust was founded with a simple belief – that every individual deserves an opportunity to learn, grow and live with dignity. What started as a small initiative has now grown into a community-driven organization working across education, healthcare, livelihood and social welfare.",
                    "ஒவ்வொரு நபரும் கற்பதற்கும், வளர்வதற்கும், கண்ணியத்துடன் வாழ்வதற்கும் சமமான வாய்ப்பைப் பெற வேண்டும் என்ற எளிய நம்பிக்கையுடன் சத்தியவாணி அறக்கட்டளை தொடங்கப்பட்டது. ஒரு சிறிய முயற்சியாகத் தொடங்கியது இன்று கல்வி, மருத்துவம், வாழ்வாதாரம் மற்றும் சமூக நலனில் பணியாற்றும் மக்கள் இயக்கமாக வளர்ந்துள்ளது."
                  )}
                </p>
                <p>
                  {trans(
                    "Through the support of our donors, volunteers and partners, we continue to create meaningful impact in the lives of many.",
                    "எங்கள் நன்கொடையாளர்கள், தன்னார்வலர்கள் மற்றும் கூட்டாளர்களின் ஆதரவுடன், பலரின் வாழ்வில் அர்த்தமுள்ள தாக்கத்தை நாங்கள் தொடர்ந்து உருவாக்குகிறோம்."
                  )}
                </p>
              </div>

              <div>
                <a
                  href="#timeline"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>{trans("Our Journey", "எங்கள் பயணம்")}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Photo matching mockup */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-card border border-slate-200/80 bg-slate-100 mt-6">
                <Image
                  src="/assets/images/about-story-children.jpg"
                  alt="Children studying together at Sathiyavani Charitable Trust"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Our Journey (Timeline) (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100" id="timeline">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {trans("Our Journey", "எங்கள் பயணம்")}
                </h2>
                <div className="w-12 h-1.5 bg-amber-400 rounded-full mt-2 shadow-xs" />
              </div>

              {/* Vertical Timeline matching mockup */}
              <div className="relative mt-8 space-y-6 before:absolute before:inset-0 before:left-[19px] sm:before:left-[21px] before:w-[2px] before:bg-slate-200">
                {journeyMilestones.map((milestone, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    {/* Year Badge Node */}
                    <div
                      className={`relative z-10 w-10 sm:w-11 h-6 sm:h-7 rounded-full ${milestone.badgeColor} text-white font-bold text-[11px] sm:text-xs flex items-center justify-center shrink-0 shadow-xs mt-0.5`}
                    >
                      {milestone.year}
                    </div>

                    {/* Milestone Details */}
                    <div className="flex-1 pt-0.5">
                      <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 leading-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-1">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: "Our Impact So Far" & "Our Team" */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Card: Our Impact So Far (5 cols) */}
            <div className="lg:col-span-5 bg-[#EDF7F2] rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-card flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                  {trans("Our Impact So Far", "இதுவரையிலான எங்கள் தாக்கம்")}
                </h2>
                <div className="w-12 h-1.5 bg-amber-400 rounded-full mt-2 shadow-xs" />
              </div>

              {/* 4 Stats in 2x2 or 4-row layout */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {impactStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/80 rounded-xl p-3 border border-emerald-100 shadow-xs"
                  >
                    <div className="shrink-0">{stat.icon}</div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                        {stat.value}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-600 truncate mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/impact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <span>{trans("Explore Verified Social Audit Details", "உறுதிப்படுத்தப்பட்ட சமூக தணிக்கை விவரங்களைக் காண்க")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Card: Volunteer Team Image (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full rounded-3xl overflow-hidden shadow-card border border-slate-100 bg-slate-100 group">
              <Image
                src="/assets/images/volunteer-team-horizon.jpg"
                alt="Sathiyavani Charitable Trust Volunteer Team"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Banner: "Join Our Journey" */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden">
        {/* Background Photo: Hands holding sapling in soil */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/cta-hands-sapling.jpg"
            alt="Hands holding green sapling in soil"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 sm:bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline & CTAs (9 cols) */}
            <div className="lg:col-span-9 text-center lg:text-left space-y-3.5">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {trans("Join Our", "எங்கள் பயணத்தில்")}{" "}
                <span className="text-amber-400 font-serif font-bold">
                  {trans("Journey", "இணையுங்கள்")}
                </span>
              </h2>

              <p className="text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed">
                {trans(
                  "Together, we can build a stronger, more inclusive and compassionate society.",
                  "ஒன்றிணைந்து, நாம் ஒரு வலுவான, அனைவரையும் உள்ளடக்கிய மற்றும் அன்பான சமூகத்தை உருவாக்குவோம்."
                )}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
                <Link
                  href="/sponsor"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Heart className="w-4 h-4 fill-white text-white" aria-hidden="true" />
                  <span>{trans("Donate Now", "நன்கொடை அளியுங்கள்")}</span>
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

            {/* Right Script Accent Badge: "Small Actions Big Impact ♡" */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="text-center lg:text-right transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <span className="font-handwriting text-3xl sm:text-4xl text-amber-200 font-bold leading-tight drop-shadow-md block">
                  {trans("Small Actions", "சிறு முயற்சிகள்")}<br />
                  <span className="text-white">{trans("Big Impact", "பெரும் மாற்றம்")}</span> <span className="text-rose-400 font-sans inline-block align-middle">♡</span>
                </span>
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
