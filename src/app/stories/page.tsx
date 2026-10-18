import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Tag, ArrowRight, BookOpen, Sparkles, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Field Stories & Updates — Sathiyavani Charitable Trust",
  description:
    "Documented field reports, student milestones, and community updates from our learning center and outreach drives in Chennai.",
};

export default function StoriesPage() {
  const breadcrumbItems = [{ label: "Stories & Updates" }];

  const stories = [
    {
      id: "story-1",
      slug: "evening-tuition-board-exams",
      title: "Evening Tuition Classes: Preparing 10th Standard Students for State Board Examinations",
      excerpt:
        "How volunteer tutors provide focused science and math reinforcement to ensure first-generation learners overcome exam anxiety and complete high school.",
      date: "Academic Year 2024–25",
      category: "Education",
      badgeVariant: "navy" as const,
      image: "/assets/images/tuition-learning.jpg",
      readTime: "3 min read",
      author: "Center Coordinator",
    },
    {
      id: "story-2",
      slug: "diwali-joy-2024-distribution",
      title: "Diwali Joy 2024: Delivering 1,000 Festive Clothing & Sweet Kits",
      excerpt:
        "Documenting our annual festival distribution drive ensuring children and families across roadside settlements and tribal communities celebrate Diwali with joy and dignity.",
      date: "October 2024",
      category: "Festival Support",
      badgeVariant: "amber" as const,
      image: "/assets/images/diwali-distribution.jpg",
      readTime: "4 min read",
      author: "Field Operations Team",
    },
    {
      id: "story-3",
      slug: "biodiversity-drive-exnora",
      title: "Student Tree Ambassadors: Biodiversity Workshop in Partnership with Exnora",
      excerpt:
        "Tuition center students participated in sapling plantation drives and urban biodiversity workshops to foster civic responsibility and climate consciousness.",
      date: "Recent Field Drive",
      category: "Environment",
      badgeVariant: "teal" as const,
      image: "/assets/images/tree-planting.jpg",
      readTime: "3 min read",
      author: "Green Ambassador Lead",
    },
    {
      id: "story-4",
      slug: "birthday-celebrations-joy",
      title: "The Joy of a First Birthday Cake: Nurturing Dignity and Self-Worth",
      excerpt:
        "Why our monthly student birthday celebrations represent far more than cake: it is a conscious declaration that every single child is recognized and loved.",
      date: "Ongoing Milestone",
      category: "Child Development",
      badgeVariant: "terracotta" as const,
      image: "/assets/images/child-birthday.jpg",
      readTime: "2 min read",
      author: "Volunteer Mentor",
    },
  ];

  return (
    <div className="bg-brand-canvas min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-brand-muted/70 border-b border-slate-200">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="navy" size="md">
                Field Reports
              </Badge>
              <Badge variant="amber" size="md">
                Grassroots Stories
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Real Stories from Our Learning Centers and Communities
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Transparent chronicles documenting real classroom milestones, festive distributions,
              and community achievements across Chennai.
            </p>
          </div>
        </Container>
      </section>

      {/* Stories Grid */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <Card
                key={story.id}
                variant="elevated"
                className="flex flex-col h-full group overflow-hidden"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={story.badgeVariant} size="sm">
                      {story.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {story.date}
                      </span>
                      <span>•</span>
                      <span>{story.readTime}</span>
                    </div>

                    <h2 className="font-heading text-xl font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-3 leading-snug">
                      {story.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>By {story.author}</span>
                    <span className="font-bold text-brand-navy group-hover:text-brand-terracotta inline-flex items-center gap-1 transition-colors">
                      Documented Milestone <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Submission / Volunteer Callout */}
          <div className="mt-16 p-8 bg-brand-muted/70 rounded-3xl border border-slate-200 text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-slate-900">
              Contribute to the Next Story
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every student who stays in school, passes an exam, or plants a tree is a story of
              collective perseverance. Sponsor a child or join our weekend teaching team.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button variant="primary" size="md" href="/sponsor">
                Sponsor a Student
              </Button>
              <Button variant="outline" size="md" href="/volunteer">
                Volunteer as a Tutor
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
