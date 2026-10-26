"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";

export function StoriesSection() {
  const { trans } = useLanguage();

  const sampleStories = [
    {
      id: "story-1",
      title: trans(
        "Evening Tuition Classes: Preparing 10th Standard Students for Board Exams",
        "மாலை நேர கல்வி வகுப்புகள்: 10-ஆம் வகுப்பு பொதுத்தேர்வுக்கு மாணவர்களை தயார்படுத்துதல்"
      ),
      excerpt: trans(
        "How volunteer teachers provide specialized math and science coaching to ensure first-generation learners pass board examinations with confidence and dignity.",
        "தன்னார்வ ஆசிரியர்கள் சிறப்பு கணித மற்றும் அறிவியல் பயிற்சியளித்து, முதல் தலைமுறை மாணவர்கள் பொதுத்தேர்வில் வெற்றி பெற எவ்வாறு உதவுகிறார்கள்."
      ),
      date: trans("Academic Year 2024–25", "கல்வியாண்டு 2024–25"),
      category: trans("Education", "கல்வி"),
      badgeVariant: "navy" as const,
      image: "/assets/images/tuition-learning.jpg",
      href: "/programs/education",
    },
    {
      id: "story-2",
      title: trans(
        "Diwali Joy 2024: Delivering 1,000 Festive Kits Across Community Centers",
        "தீபாவளி மகிழ்ச்சி 2024: சமூக மையங்களில் 1,000 திருவிழா தொகுப்புகள் வழங்கல்"
      ),
      excerpt: trans(
        "Documenting the annual festival distribution ensuring children and families celebrate Diwali with new clothing, traditional sweets, stationery, and pride.",
        "புத்தாடைகள், பாரம்பரிய இனிப்புகள் மற்றும் எழுதுபொருட்களுடன் குழந்தைகள் தீபாவளியை மகிழ்ச்சியுடன் கொண்டாட உதவும் வருடாந்திர திட்டம்."
      ),
      date: trans("October 2024", "அக்டோபர் 2024"),
      category: trans("Community Welfare", "சமூக நலம்"),
      badgeVariant: "amber" as const,
      image: "/assets/images/diwali-distribution.jpg",
      href: "/programs/festival-support",
    },
    {
      id: "story-3",
      title: trans(
        "Biodiversity & Sapling Drive in Partnership with Exnora Organization",
        "எக்ஸ்னோரா அமைப்புடன் இணைந்து பல்லுயிர் பாதுகாப்பு மற்றும் மரக்கன்றுகள் நடும் திட்டம்"
      ),
      excerpt: trans(
        "Students participate in tree-planting campaigns and biodiversity workshops across Chennai to foster environmental stewardship and civic responsibility.",
        "மாணவர்கள் சென்னையில் மரக்கன்றுகள் நடும் பிரச்சாரங்கள் மற்றும் சுற்றுச்சூழல் பட்டறைகளில் பங்கேற்று விழிப்புணர்வை ஏற்படுத்துகின்றனர்."
      ),
      date: trans("Recent Initiative", "சமீபத்திய திட்டம்"),
      category: trans("Environment", "சுற்றுச்சூழல்"),
      badgeVariant: "teal" as const,
      image: "/assets/images/tree-planting.jpg",
      href: "/programs/environment",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            category={trans("Field Reports & Updates", "கள அறிக்கைகள் & நிகழ்வுகள்")}
            categoryVariant="terracotta"
            title={trans("Stories from Our Centers", "எங்கள் மையங்களின் களக்கதைகள்")}
            description={trans(
              "Documenting real moments of learning, joy, and community transformation across our centers in Chennai.",
              "சென்னையில் உள்ள எங்கள் மையங்களில் நிகழும் கற்றல், மகிழ்ச்சி மற்றும் சமூக மாற்றத்தின் உண்மையான தருணங்கள்."
            )}
            className="mb-0"
          />

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/90 self-start md:self-auto shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{trans("Verified Community Initiatives", "உறுதிப்படுத்தப்பட்ட சமூக முயற்சிகள்")}</span>
          </div>
        </div>

        {/* 3-Card Reusable Story Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleStories.map((story) => (
            <Card key={story.id} variant="elevated" className="flex flex-col h-full group card-glow-hover border-slate-200/90 overflow-hidden">
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3.5 left-3.5">
                  <Badge variant={story.badgeVariant} size="sm" className="shadow-xs">
                    {story.category}
                  </Badge>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 flex flex-col flex-1 bg-white">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                  <span>{story.date}</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-2.5 line-clamp-2 leading-snug">
                  <Link href={story.href}>
                    {story.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3 flex-1">
                  {story.excerpt}
                </p>

                <div className="pt-3.5 border-t border-slate-100 text-xs font-bold text-brand-navy group-hover:text-brand-terracotta transition-colors flex items-center justify-between">
                  <Link href={story.href} className="inline-flex items-center gap-1">
                    <span>{trans("Read Field Update", "முழு விவரம் காண்க")}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-normal">{trans("Chennai", "சென்னை")}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

