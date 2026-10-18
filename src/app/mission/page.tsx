import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  GraduationCap,
  Users,
  TreePine,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Our Mission — Sathiyavani Charitable Trust",
  description:
    "Our mission statement and four core operational commitments: Education for All, Community Support, Sustainable Development, and Inclusivity in Chennai.",
};

export default function MissionPage() {
  const breadcrumbItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Mission" },
  ];

  const missionPillars = [
    {
      title: "Education for All",
      description:
        "Ensuring that every child receives quality after-school tuition and learning materials regardless of their socioeconomic or family background.",
      icon: <GraduationCap className="w-6 h-6 text-brand-navy" />,
      link: "/programs/education",
      linkText: "View Tuition Program",
    },
    {
      title: "Community Social Support",
      description:
        "Providing direct humanitarian assistance and relief to single-parent families, differently-abled neighbors, and vulnerable tribal households.",
      icon: <Users className="w-6 h-6 text-brand-terracotta" />,
      link: "/programs/community-outreach",
      linkText: "View Outreach Program",
    },
    {
      title: "Sustainable Environmental Growth",
      description:
        "Promoting long-term ecological balance through student-led tree plantation drives, environmental awareness, and clean-up campaigns with Exnora.",
      icon: <TreePine className="w-6 h-6 text-brand-teal" />,
      link: "/programs/environment",
      linkText: "View Green Initiatives",
    },
    {
      title: "Inclusivity & Dignity",
      description:
        "Creating equitable opportunities for personal growth, arts, and childhood celebrations for every child without discrimination.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-amber" />,
      link: "/programs/child-development",
      linkText: "View Child Development",
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
                Mission Statement
              </Badge>
              <Badge variant="teal" size="md">
                Guiding Principles
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Creating Equal Opportunities Through Education & Compassionate Care
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our daily mission is practical and grounded: to eliminate barriers that force
              children out of classrooms and to extend dignified welfare support to vulnerable
              families across Chennai.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Mission Declaration Card */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-brand-navy text-white text-center shadow-elevated relative overflow-hidden">
              <Compass className="w-12 h-12 text-brand-amber mx-auto mb-4" aria-hidden="true" />
              <span className="text-xs uppercase font-bold tracking-widest text-brand-amber block mb-2">
                Official Declaration
              </span>
              <p className="font-heading text-2xl sm:text-3xl font-extrabold leading-snug max-w-2xl mx-auto">
                "To provide free and accessible education while supporting underprivileged
                communities through care, inclusivity, and sustainable development."
              </p>
            </div>

            {/* The 4 Operational Commitments */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Translating Purpose into Action
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Four Core Operational Commitments
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missionPillars.map((pillar, idx) => (
                  <Card key={idx} variant="elevated" className="p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                        {pillar.icon}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors">
                      <Link href={pillar.link} className="inline-flex items-center gap-1">
                        <span>{pillar.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center space-y-4">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Explore How Our Mission Evolves into Our Long-term Vision
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                See our long-term goals for student retention, academic growth, and community
                resilience.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button variant="primary" size="md" href="/vision">
                  Explore Our Vision
                </Button>
                <Button variant="outline" size="md" href="/programs">
                  View All Programmes
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
