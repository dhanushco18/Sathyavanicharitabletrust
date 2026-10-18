import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag, ArrowRight, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function StoriesSection() {
  // Editorial format demonstrating reusable story pattern with clear provisional labels
  const sampleStories = [
    {
      id: "story-1",
      title: "Evening Tuition Classes: Preparing 10th Standard Students for Board Exams",
      excerpt:
        "How volunteer teachers provide specialized math and science coaching to ensure first-generation learners pass board examinations with confidence.",
      date: "Academic Year 2024–25",
      category: "Education",
      badgeVariant: "navy" as const,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "story-2",
      title: "Diwali Joy 2024: Delivering 1,000 Festive Kits Across Community Centers",
      excerpt:
        "Documenting the annual festival distribution ensuring children and families celebrate Diwali with new clothing, sweets, and dignity.",
      date: "October 2024",
      category: "Community Welfare",
      badgeVariant: "amber" as const,
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "story-3",
      title: "Biodiversity & Sapling Drive in Partnership with Exnora Organization",
      excerpt:
        "Students participate in tree-planting campaigns and biodiversity workshops to foster environmental stewardship and civic responsibility.",
      date: "Recent Initiative",
      category: "Environment",
      badgeVariant: "teal" as const,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
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
            description="Documenting real moments of learning, joy, and community transformation across our centers."
            className="mb-0"
          />

          <div className="flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 self-start md:self-auto">
            <span>ℹ️ Editorial Preview Template</span>
          </div>
        </div>

        {/* 3-Card Reusable Story Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleStories.map((story) => (
            <Card key={story.id} variant="elevated" className="flex flex-col h-full group">
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={story.badgeVariant} size="sm">
                    {story.category}
                  </Badge>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{story.date}</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-2.5 line-clamp-2">
                  {story.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                  {story.excerpt}
                </p>

                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-brand-navy group-hover:text-brand-terracotta transition-colors flex items-center justify-between">
                  <span>Read Field Update</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
