"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Smile,
  Users,
  Sprout,
  Gift,
  Search,
  ArrowRight,
  Play,
  Star,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Calendar,
  X,
  Share2,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

interface Story {
  id: string;
  title: string;
  titleTa?: string;
  category: "Education" | "Child Development" | "Community Outreach" | "Environment" | "Festival Support";
  desc: string;
  descTa?: string;
  image: string;
  date: string;
  readTime: string;
  fullStory: string;
  fullStoryTa?: string;
  author: string;
  authorTa?: string;
  likes: number;
}

const ALL_STORIES: Story[] = [
  {
    id: "story-kavya",
    title: "From Dreams to Classrooms",
    titleTa: "கனவுகளிலிருந்து வகுப்பறைக்கு",
    category: "Education",
    desc: "How support helped Kavya continue her education and discover her passion for teaching.",
    descTa: "காவ்யா தனது படிப்பைத் தொடரவும், ஆசிரியராகும் விருப்பத்தை அடையவும் அறக்கட்டளை எவ்வாறு உதவியது.",
    image: "/assets/images/community-meena.jpg",
    date: "October 2024",
    readTime: "3 min read",
    author: "Learning Center Coordinator",
    authorTa: "கல்வி மைய ஒருங்கிணைப்பாளர்",
    likes: 42,
    fullStory:
      "When Kavya's family faced unexpected economic hardships, she was on the verge of discontinuing her 9th standard schooling. Sathiyavani Charitable Trust stepped in with full academic sponsorship covering her tuition fees, state textbooks, notebook sets, and school uniform. Today, Kavya attends daily evening classes at the Library Learning Center, mentors younger children in mathematics, and dreams of becoming a government school teacher.",
    fullStoryTa:
      "பொருளாதார நெருக்கடியால் காவ்யாவின் குடும்பம் தவித்தபோது, 9-ம் வகுப்புடன் பள்ளிப் படிப்பை நிறுத்தும் சூழல் ஏற்பட்டது. சத்தியவாணி அறக்கட்டளை அவரது கல்விச் செலவு, பாடப்புத்தகங்கள், நோட்டுப் புத்தகங்கள் மற்றும் சீருடைகளை ஏற்றுக்கொண்டது. இன்று அவர் நூலகக் கல்வி மையத்தில் பயின்று பிற மாணவர்களுக்கும் வழிகாட்டுகிறார்.",
  },
  {
    id: "story-arjun",
    title: "A Brighter Start for Arjun",
    category: "Child Development",
    desc: "Early learning support helped Arjun grow with confidence and joy in our child center.",
    image: "/assets/images/child-birthday.jpg",
    date: "September 2024",
    readTime: "2 min read",
    author: "Early Childhood Mentor",
    likes: 38,
    fullStory:
      "Arjun joined our center timid and shy, struggling with basic language expression. Through structured playful learning, daily nutritional snacks, and patient mentorship by our volunteer educators, Arjun developed strong cognitive and social skills. When he recently celebrated his birthday with his classmates at the center, his mother remarked that his confidence and smile have brought happiness to their entire household.",
  },
  {
    id: "story-community",
    title: "Stronger Together",
    category: "Community Outreach",
    desc: "A healthier and happier community through awareness drives, free health camps and elder care.",
    image: "/assets/images/prog-community-awareness.jpg",
    date: "August 2024",
    readTime: "4 min read",
    author: "Community Health Lead",
    likes: 56,
    fullStory:
      "In underserved neighborhoods across Chennai, access to preventive health checkups is often neglected due to daily wage dependencies. Sathiyavani Trust mobilized qualified doctors, general physicians, and volunteer nurses to conduct specialized weekend health camps. Over 500 residents received eye screenings, diabetic screenings, general consultations, and free prescribed medicines, establishing a lasting culture of community well-being.",
  },
  {
    id: "story-diwali",
    title: "A Festival of Smiles",
    category: "Festival Support",
    desc: "How festival support brought joy and essentials to over 1,000 families in need across Chennai.",
    image: "/assets/images/prog-festival-distribution.jpg",
    date: "October 2024",
    readTime: "3 min read",
    author: "Field Operations Volunteer",
    likes: 64,
    fullStory:
      "Festivals should be a time of warmth and dignity for every single child, regardless of economic background. During our annual Diwali Joy Drive, volunteers packed and hand-distributed 1,000 festive hampers containing new traditional clothing, festive sweets, and complete school stationery sets. Seeing the pure joy on children's faces as they received their new clothes remains the heartbeat of our trust's mission.",
  },
  {
    id: "story-greener",
    title: "Growing a Greener Tomorrow",
    category: "Environment",
    desc: "Students and volunteers come together for tree planting drives, clean-up initiatives and eco-clubs.",
    image: "/assets/images/prog-environment-sapling.jpg",
    date: "July 2024",
    readTime: "3 min read",
    author: "Student Green Ambassador",
    likes: 49,
    fullStory:
      "In formal collaboration with the Exnora Organization, Sathiyavani Trust students took charge of urban greening in Chennai. Over 10,000 saplings of native shade and fruit trees have been planted across school grounds, neighborhood verges, and civic parks. Each student adopts a sapling, monitoring its weekly watering and growth, instilling lifelong environmental stewardship in the next generation.",
  },
  {
    id: "story-tuition",
    title: "Lighting the Path to State Exams",
    category: "Education",
    desc: "Dedicated volunteer teachers preparing first-generation high-schoolers for board success.",
    image: "/assets/images/tuition-learning.jpg",
    date: "November 2024",
    readTime: "3 min read",
    author: "Head Tutor",
    likes: 51,
    fullStory:
      "First-generation learners often lack academic reinforcement at home when tackling tough high school subjects. Our evening study sessions bridge this gap through structured practice sheets, concept clearing, and mock board tests. In the 2024 academic year, 100% of our 10th standard student cohort passed their state examinations with distinction.",
  },
];

// Featured Story Data
const FEATURED_STORY = {
  title: "A New Chapter for Meera",
  category: "Education & Mentorship",
  desc: "Watch how education and mentorship changed Meera's life and inspired her to dream bigger.",
  image: "/assets/images/community-meena.jpg",
  duration: "03:45",
  quote:
    "With the support from Sathiyavani Trust, I was able to continue my studies. Today, I believe I can achieve my dreams and also help other children in my community.",
  author: "Meera, Student Beneficiary",
  fullText:
    "Meera joined the Sathiyavani Learning Center in 2022 when her family could no longer afford school expenses. Through comprehensive sponsorship, free textbooks, and daily mentorship, Meera transitioned from near-dropout to top of her class in science. Her story demonstrates how timely community support can rewrite a young life's trajectory from vulnerability into leadership.",
};

export function StoriesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Stories");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [likedStories, setLikedStories] = useState<Record<string, boolean>>({});
  const [activeStoryModal, setActiveStoryModal] = useState<Story | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null);
  const { t, trans, isTamil } = useLanguage();

  const breadcrumbItems = [
    { label: t("navHome"), href: "/" },
    { label: t("navStories") },
  ];

  const handleToggleLike = (storyId: string) => {
    setLikedStories((prev) => ({
      ...prev,
      [storyId]: !prev[storyId],
    }));
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

  // Filtered stories logic
  const filteredStories = useMemo(() => {
    return ALL_STORIES.filter((story) => {
      const matchesCategory =
        selectedCategory === "All Stories" || story.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (story.titleTa && story.titleTa.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (story.descTa && story.descTa.toLowerCase().includes(searchQuery.toLowerCase())) ||
        story.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 selection:bg-amber-100 selection:text-amber-900 font-sans">
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
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-amber-100/40 via-rose-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-sky-50/40 via-amber-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center">
                <span className="bg-[#E59819] text-[#0F2942] font-black uppercase text-[11px] sm:text-xs tracking-wider px-3.5 py-1.5 rounded-full shadow-2xs">
                  {trans("OUR STORIES", "களக்கதைகள்")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.12]">
                <span className="text-[#0F2942] block">
                  {trans("Real Stories", "உண்மையான கதைகள்")}
                </span>
                <span className="text-[#E59819] block mt-1">
                  {trans("Real Change", "நேரடி சமூக மாற்றம்")}
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t("storiesHeroSubtitle")}
              </p>

              {/* 4 Feature Badges in Horizontal Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* 1. Real People */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-rose-100 shadow-2xs hover:border-rose-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                    <Heart className="w-3 h-3 fill-white/80" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Real People", "உண்மையான மனிதர்கள்")}
                  </span>
                </div>

                {/* 2. Real Journeys */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-100 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Sprout className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Real Journeys", "உண்மையான களப்பயணம்")}
                  </span>
                </div>

                {/* 3. Real Impact */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-amber-100 shadow-2xs hover:border-amber-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#E59819] text-white flex items-center justify-center shrink-0">
                    <Users className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Real Impact", "நேரடி சமூக தாக்கம்")}
                  </span>
                </div>

                {/* 4. Brighter Tomorrows */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-sky-100 shadow-2xs hover:border-sky-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 fill-white/80" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Brighter Tomorrows", "ஒளிமயமான எதிர்காலம்")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Background decorative soft glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/30 via-rose-100/30 to-sky-100/30 rounded-3xl blur-xl" />

                {/* Main Hero Card Frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-white">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/assets/images/hero-children.jpg"
                      alt="Smiling Indian school girl with braids looking upward happily in outdoor classroom"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Subtle warm vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top-Right Handwritten Doodle Note: "Different Stories, A Brighter Tomorrow ♡" */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-amber-100/80 -rotate-2 transform hover:rotate-0 transition-transform">
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#0F2942] leading-tight flex items-center gap-1.5">
                        <span>{trans("Different Stories,", "மாறுபட்ட களக்கதைகள்,")}</span>
                        <span className="text-rose-500 font-sans not-italic text-sm">♡</span>
                      </p>
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#E59819] mt-0.5">
                        {trans("A Brighter Tomorrow", "ஒளிரும் எதிர்காலம்")}
                      </p>
                    </div>

                    {/* Bottom-right interactive story counter label */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-[11px] font-medium border border-white/20 shadow-md">
                      <span className="text-amber-400">✨</span>
                      <span>{trans("100+ Stories of Grassroots Hope", "100+ எளிய மக்களின் நல்வாழ்வு கதைகள்")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          FILTER & SEARCH BAR (Horizontal Pills & Search Input)
          ========================================================================= */}
      <section className="relative z-10 -mt-2 sm:-mt-4 mb-8">
        <Container>
          <div className="bg-white rounded-3xl border border-amber-100/80 shadow-xs p-3 sm:p-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
                {/* All Stories */}
                <button
                  onClick={() => setSelectedCategory("All Stories")}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shrink-0 inline-flex items-center gap-1.5 ${
                    selectedCategory === "All Stories"
                      ? "bg-[#0F2942] text-white shadow-xs"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{trans("All Stories", "அனைத்து கதைகள்")}</span>
                </button>

                {/* Education */}
                <button
                  onClick={() => setSelectedCategory("Education")}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shrink-0 inline-flex items-center gap-1.5 ${
                    selectedCategory === "Education"
                      ? "bg-rose-600 text-white shadow-xs"
                      : "bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-100"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{trans("Education", "இலவச கல்வி")}</span>
                </button>

                {/* Child Development */}
                <button
                  onClick={() => setSelectedCategory("Child Development")}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shrink-0 inline-flex items-center gap-1.5 ${
                    selectedCategory === "Child Development"
                      ? "bg-sky-600 text-white shadow-xs"
                      : "bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-100"
                  }`}
                >
                  <Smile className="w-3.5 h-3.5" />
                  <span>{trans("Child Development", "குழந்தை வளர்ச்சி")}</span>
                </button>

                {/* Community Outreach */}
                <button
                  onClick={() => setSelectedCategory("Community Outreach")}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shrink-0 inline-flex items-center gap-1.5 ${
                    selectedCategory === "Community Outreach"
                      ? "bg-[#E59819] text-white shadow-xs"
                      : "bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-100"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>{trans("Community Outreach", "சமூக உதவி")}</span>
                </button>

                {/* Environment */}
                <button
                  onClick={() => setSelectedCategory("Environment")}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shrink-0 inline-flex items-center gap-1.5 ${
                    selectedCategory === "Environment"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100"
                  }`}
                >
                  <Sprout className="w-3.5 h-3.5" />
                  <span>{trans("Environment", "சுற்றுச்சூழல்")}</span>
                </button>

                {/* Festival Support */}
                <button
                  onClick={() => setSelectedCategory("Festival Support")}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shrink-0 inline-flex items-center gap-1.5 ${
                    selectedCategory === "Festival Support"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-100"
                  }`}
                >
                  <Gift className="w-3.5 h-3.5" />
                  <span>{trans("Festival Support", "பண்டிகை உதவி")}</span>
                </button>
              </div>

              {/* Search Bar on Right */}
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("storiesSearchPlaceholder")}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          LATEST STORIES GRID & FEATURED STORY SECTION
          Left (~72%): 5 Latest Stories in a row / responsive grid
          Right (~28%): Featured Story Card with Video Play Overlay
          ========================================================================= */}
      <section className="py-6 sm:py-10 bg-white border-y border-amber-100/70 shadow-xs">
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            {/* Left 8.5 Columns: Latest Stories Grid */}
            <div className="xl:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2942]">
                    {trans("Latest Stories", "சமீபத்திய களக்கதைகள்")}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {filteredStories.length} {trans("documented stories from our programs and centers.", "எங்கள் மையங்களின் ஆவணப்படுத்தப்பட்ட சமூக மாற்றங்கள்.")}
                  </p>
                </div>
                {selectedCategory !== "All Stories" && (
                  <button
                    onClick={() => setSelectedCategory("All Stories")}
                    className="text-xs font-bold text-amber-700 hover:underline"
                  >
                    {trans("View All Stories →", "அனைத்து கதைகள் →")}
                  </button>
                )}
              </div>

              {/* 5 Cards Row (Responsive Grid: 1 col mobile, 2 tablet, 5 large desktop) */}
              {filteredStories.length === 0 ? (
                <div className="p-12 text-center bg-[#FAF9F5] rounded-3xl border border-dashed border-slate-200">
                  <p className="text-sm text-slate-500">
                    {trans("No stories found matching your filter.", "தேடலுக்குரிய கதைகள் எதுவும் கிடைக்கவில்லை.")}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All Stories");
                      setSearchQuery("");
                    }}
                    className="mt-2 text-xs font-bold text-[#0F2942] underline"
                  >
                    {trans("Reset filters", "வடிகட்டியை மீட்டமைக்க")}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 pt-2">
                  {filteredStories.slice(0, 5).map((story) => {
                    const isLiked = likedStories[story.id];
                    const displayTitle = isTamil && story.titleTa ? story.titleTa : story.title;
                    const displayDesc = isTamil && story.descTa ? story.descTa : story.desc;
                    return (
                      <div
                        key={story.id}
                        className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col group justify-between"
                      >
                        <div>
                          {/* Image Thumbnail */}
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                            <Image
                              src={story.image}
                              alt={displayTitle}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 50vw, 20vw"
                            />
                            {/* Category Badge Pill on Image Top */}
                            <div className="absolute top-2 left-2 z-10">
                              <span
                                className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs ${
                                  story.category === "Education"
                                    ? "bg-rose-50 text-rose-700 border border-rose-200"
                                    : story.category === "Child Development"
                                    ? "bg-sky-50 text-sky-700 border border-sky-200"
                                    : story.category === "Community Outreach"
                                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                                    : story.category === "Environment"
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : "bg-purple-50 text-purple-700 border border-purple-200"
                                }`}
                              >
                                {story.category}
                              </span>
                            </div>
                          </div>

                          {/* Content Body */}
                          <div className="p-3 space-y-1.5">
                            <h3 className="font-heading text-xs font-bold text-slate-900 group-hover:text-[#0F2942] line-clamp-2 leading-snug">
                              {displayTitle}
                            </h3>
                            <p className="text-[10px] text-slate-600 leading-snug line-clamp-3">
                              {displayDesc}
                            </p>
                          </div>
                        </div>

                        {/* Card Footer: Read Story & Heart Like */}
                        <div className="p-3 pt-0 flex items-center justify-between border-t border-slate-200/50 mt-2">
                          <button
                            onClick={() => setActiveStoryModal(story)}
                            className="text-[11px] font-bold text-[#0F2942] hover:text-[#E59819] inline-flex items-center gap-1 transition-colors"
                          >
                            <span>{t("storiesReadFull")}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>

                          <button
                            onClick={() => handleToggleLike(story.id)}
                            className={`p-1 rounded-full hover:bg-white transition-colors ${
                              isLiked ? "text-rose-500" : "text-slate-400 hover:text-rose-500"
                            }`}
                            aria-label="Like story"
                          >
                            <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-500" : ""}`} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right 3.5 Columns: Featured Story Card with Video Overlay */}
            <div className="xl:col-span-4 bg-[#FAF9F5] rounded-3xl border border-amber-200/80 p-5 shadow-sm flex flex-col justify-between">
              <div>
                {/* Top Badge */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Featured Story
                  </span>
                </div>

                {/* Large Video / Image Card */}
                <div
                  onClick={() => setIsVideoModalOpen(true)}
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xs group cursor-pointer"
                >
                  <Image
                    src={FEATURED_STORY.image}
                    alt={FEATURED_STORY.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/20 transition-colors" />

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#0F2942] shadow-xl flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-[#0F2942]" />
                    </div>
                  </div>

                  {/* Timestamp Badge Bottom-Right */}
                  <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded shadow">
                    {FEATURED_STORY.duration}
                  </div>
                </div>

                {/* Featured Story Text */}
                <div className="mt-4 space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-[#0F2942]">
                    {FEATURED_STORY.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {FEATURED_STORY.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="flex-1 py-2 px-3 bg-[#0F2942] hover:bg-[#1E3A5F] text-white text-xs font-bold rounded-xl shadow-xs transition-colors inline-flex items-center justify-center gap-1.5 mr-2"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Watch Her Story</span>
                </button>
                <button
                  onClick={() => handleToggleLike("featured")}
                  className={`p-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors ${
                    likedStories["featured"] ? "text-rose-500" : "text-slate-400"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likedStories["featured"] ? "fill-rose-500" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MIDDLE ROW:
          Left (2/3): Testimonial Quote Card with Sprout Illustration
          Right (1/3): "Stories by the Numbers"
          ========================================================================= */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 8 Cols: Inspiring Testimonial Card */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
              {/* Left Profile Avatar & Quote */}
              <div className="flex items-start gap-4 flex-1">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-200 shadow-2xs">
                  <Image
                    src="/assets/images/community-meena.jpg"
                    alt="Meera, Student Beneficiary"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1.5">
                  <span className="font-serif text-3xl text-sky-600 leading-none block -mb-2">
                    “
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {FEATURED_STORY.quote}
                  </p>
                  <div className="pt-1">
                    <span className="text-xs font-bold text-slate-900 block">
                      — {FEATURED_STORY.author}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Doodle Illustration */}
              <div className="shrink-0 flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl shadow-2xs">
                  🌱
                </div>
                <div>
                  <p className="font-serif italic font-bold text-xs text-[#0F2942] leading-tight">
                    Stories of today,
                  </p>
                  <p className="font-serif italic font-bold text-xs text-[#E59819]">
                    A brighter tomorrow
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Stories by the Numbers */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0F2942]">
                  Stories by the Numbers
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  The cumulative impact behind our community stories.
                </p>

                {/* 3 Metrics Row */}
                <div className="grid grid-cols-3 gap-2 pt-5">
                  {/* Metric 1 */}
                  <div className="text-center p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-1">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-serif text-base font-black text-slate-900">
                      100+
                    </div>
                    <div className="text-[9px] text-slate-500 font-medium">
                      Stories Shared
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="text-center p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1">
                      <Heart className="w-3.5 h-3.5 fill-emerald-500/20" />
                    </div>
                    <div className="font-serif text-base font-black text-slate-900">
                      5,000+
                    </div>
                    <div className="text-[9px] text-slate-500 font-medium">
                      Lives Impacted
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="text-center p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-amber-50 text-[#E59819] flex items-center justify-center mx-auto mb-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                    </div>
                    <div className="font-serif text-base font-black text-slate-900">
                      Many
                    </div>
                    <div className="text-[9px] text-slate-500 font-medium">
                      More to Come
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 text-center">
                Documented with child safeguarding consent.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BOTTOM HORIZON PANORAMIC CTA STRIP
          "Different Stories, Stronger Communities, Brighter Tomorrows ♡"
          ========================================================================= */}
      <section className="py-6 sm:py-10 pb-16">
        <Container>
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[160px] sm:min-h-[180px] flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 gap-6">
            {/* Background Panorama Image */}
            <Image
              src="/assets/images/sponsor-students-horizon.jpg"
              alt="School children looking across horizon"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark contrast gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/85" />

            {/* Left Cursive Script */}
            <div className="relative z-10 max-w-md text-center md:text-left">
              <p className="font-serif italic font-bold text-lg sm:text-2xl text-amber-200 drop-shadow leading-tight">
                Different Stories, <br />
                <span className="text-white">Stronger Communities, Brighter Tomorrows</span>{" "}
                <span className="text-rose-400 not-italic">♡</span>
              </p>
            </div>

            {/* Right Floating White CTA Card */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/60 text-slate-900 max-w-sm w-full space-y-3">
              <div>
                <h4 className="font-serif text-sm font-bold text-[#0F2942]">
                  Be a Part of More Stories
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Your support can create many more stories of hope and change.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                <button
                  onClick={() => setIsBankModalOpen(true)}
                  className="w-full sm:w-auto flex-1 py-2 px-3 bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9F1239] text-white text-xs font-bold rounded-xl shadow-xs transition-transform hover:scale-[1.02] inline-flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-white/20" />
                  <span>Donate Now →</span>
                </button>

                <Link
                  href="/volunteer"
                  className="w-full sm:w-auto flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors inline-flex items-center justify-center gap-1.5 text-center"
                >
                  <Users className="w-3.5 h-3.5 text-slate-600" />
                  <span>Become a Volunteer →</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MODAL: FULL STORY READER
          ========================================================================= */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div
            className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-[#0F2942] to-[#1E3A5F] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">
                  {activeStoryModal.category}
                </span>
                <h3 className="font-serif text-lg font-bold">
                  {activeStoryModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveStoryModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close story"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xs">
                <Image
                  src={activeStoryModal.image}
                  alt={activeStoryModal.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
                <span>By {activeStoryModal.author}</span>
                <span>{activeStoryModal.readTime}</span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {activeStoryModal.fullStory}
              </p>

              {/* Action Box */}
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-amber-950 block text-xs">
                    Inspired by this story?
                  </span>
                  <span className="text-[11px] text-amber-800">
                    Sponsor a student or volunteer with our educational centers.
                  </span>
                </div>
                <Link
                  href="/sponsor"
                  className="px-3.5 py-1.5 bg-[#0F2942] text-white text-xs font-bold rounded-xl hover:bg-[#1E3A5F] transition-colors shadow-2xs"
                >
                  Sponsor a Student
                </Link>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Child safeguarding & identity protected
              </span>
              <button
                onClick={() => setActiveStoryModal(null)}
                className="font-bold text-slate-700 hover:text-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: FEATURED VIDEO STORY
          ========================================================================= */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div
            className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="px-6 py-4 bg-[#0F2942] text-white flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold">
                {FEATURED_STORY.title}
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                <Image
                  src={FEATURED_STORY.image}
                  alt={FEATURED_STORY.title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white space-y-2 p-4">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#0F2942] mx-auto flex items-center justify-center pl-1 shadow-lg">
                      <Play className="w-6 h-6 fill-[#0F2942]" />
                    </div>
                    <p className="text-xs font-medium">Video Documentary</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-slate-900 block text-sm">
                  Documentary Overview
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {FEATURED_STORY.fullText}
                </p>
              </div>
            </div>

            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500">Sathiyavani Trust Documentaries</span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="font-bold text-slate-700 hover:text-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: DIRECT DONATION BANK DETAILS
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
                  Support a student's education or community program directly. No commission deductions.
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
