import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  BookOpen,
  Award,
  Users2,
  TrendingUp,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Our Vision — Building a Better Future for Every Child",
  description:
    "Our vision for a future where educational equity, childhood dignity, and strong community support are accessible to every family in Chennai.",
};

export default function VisionPage() {
  const breadcrumbItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Vision" },
  ];

  const visionPillars = [
    {
      title: "Universal Educational Equity",
      description:
        "A future where no student discontinues schooling due to unpaid fees or lack of study support. Ensuring equal access to learning tools and digital literacy.",
      icon: <BookOpen className="w-6 h-6 text-brand-navy" />,
    },
    {
      title: "Confidence & Character Growth",
      description:
        "Fostering creativity, emotional wellbeing, sportsmanship, and leadership so children develop into resilient, proactive citizens.",
      icon: <Award className="w-6 h-6 text-brand-amber" />,
    },
    {
      title: "Resilient & Empowered Communities",
      description:
        "Building strong community safety nets that protect single-parent households, support differently-abled neighbors, and uplift tribal groups.",
      icon: <Users2 className="w-6 h-6 text-brand-terracotta" />,
    },
    {
      title: "Sustainable Social Transformation",
      description:
        "Encouraging civic and environmental responsibility through student tree plantation ambassador programs and community clean-up drives.",
      icon: <TrendingUp className="w-6 h-6 text-brand-teal" />,
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
              <Badge variant="amber" size="md">
                Long-Term Vision
              </Badge>
              <Badge variant="navy" size="md">
                Social Transformation
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Building a Better, More Equitable Future for Every Child
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We envision an inclusive society where financial barriers no longer dictate a child’s
              potential, and where every community possesses the dignity, tools, and solidarity to
              thrive.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision Statement Banner */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white text-center shadow-elevated relative overflow-hidden">
              <Sparkles className="w-12 h-12 text-brand-amber mx-auto mb-4" aria-hidden="true" />
              <span className="text-xs uppercase font-bold tracking-widest text-brand-amber block mb-2">
                Vision Statement
              </span>
              <p className="font-heading text-2xl sm:text-3xl font-extrabold leading-snug max-w-2xl mx-auto">
                "To build a society where every child, regardless of background, has equal
                opportunities to learn, grow, and succeed."
              </p>
            </div>

            {/* The 4 Vision Pillars */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Strategic Horizon
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Four Pillars of Our Long-term Vision
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visionPillars.map((pillar, idx) => (
                  <Card key={idx} variant="elevated" className="p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                        {pillar.icon}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Looking Ahead Callout */}
            <div className="p-8 bg-brand-muted/70 rounded-3xl border border-slate-200 space-y-4">
              <span className="text-xs uppercase font-bold text-brand-amber tracking-wider block">
                Looking Ahead
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Expanding Our Reach Across Chennai Communities
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                As we advance into the future, our goal is to scale after-school mentorship to more
                neighborhood centers, increase our annual student scholarship capacity, and deepen our
                environmental clean-up campaigns with Exnora Organization.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button variant="primary" size="md" href="/sponsor">
                  Help Realize This Vision
                </Button>
                <Button variant="outline" size="md" href="/volunteer">
                  Join as a Volunteer Tutor
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
