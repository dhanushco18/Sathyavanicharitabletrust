import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function StoriesSection() {
  const sampleStories = [
    {
      id: "story-1",
      title: "Evening Tuition Classes: Preparing 10th Standard Students for Board Exams",
      excerpt:
        "How volunteer teachers provide specialized math and science coaching to ensure first-generation learners pass board examinations with confidence and dignity.",
      date: "Academic Year 2024–25",
      category: "Education",
      badgeVariant: "navy" as const,
      image: "/assets/images/tuition-learning.jpg",
      href: "/programs/education",
    },
    {
      id: "story-2",
      title: "Diwali Joy 2024: Delivering 1,000 Festive Kits Across Community Centers",
      excerpt:
        "Documenting the annual festival distribution ensuring children and families celebrate Diwali with new clothing, traditional sweets, stationery, and pride.",
      date: "October 2024",
      category: "Community Welfare",
      badgeVariant: "amber" as const,
      image: "/assets/images/diwali-distribution.jpg",
      href: "/programs/festival-support",
    },
    {
      id: "story-3",
      title: "Biodiversity & Sapling Drive in Partnership with Exnora Organization",
      excerpt:
        "Students participate in tree-planting campaigns and biodiversity workshops across Chennai to foster environmental stewardship and civic responsibility.",
      date: "Recent Initiative",
      category: "Environment",
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
            category="Field Reports & Updates"
            categoryVariant="terracotta"
            title="Stories from Our Centers"
            description="Documenting real moments of learning, joy, and community transformation across our centers in Chennai."
            className="mb-0"
          />

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/90 self-start md:self-auto shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Community Initiatives</span>
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
                    <span>Read Field Update</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-normal">Chennai</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

