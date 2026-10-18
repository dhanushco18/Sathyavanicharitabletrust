import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  HeartHandshake,
  Cake,
  Trophy,
  Palette,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Holistic Child Development — Sports, Arts & Celebrations",
  description:
    "Building confidence, joy, and character through milestone birthday celebrations, weekend sports, and artistic exploration in Chennai.",
};

export default function ChildDevelopmentPage() {
  const breadcrumbItems = [
    { label: "Programmes", href: "/programs" },
    { label: "Child Development" },
  ];

  const pillars = [
    {
      icon: <Cake className="w-5 h-5 text-brand-amber" />,
      title: "Milestone Birthday Celebrations",
      description:
        "Many children from daily-wage households have never experienced a birthday celebration. We make their special day memorable with personalized cakes, cards, and community joy to ensure every child feels seen, loved, and valued.",
    },
    {
      icon: <Trophy className="w-5 h-5 text-brand-navy" />,
      title: "Sports Coaching & Physical Fitness",
      description:
        "Organizing weekend sports meets, athletics, carrom, and football drills that develop teamwork, physical resilience, discipline, and healthy peer companionship.",
    },
    {
      icon: <Palette className="w-5 h-5 text-brand-terracotta" />,
      title: "Arts, Drawing & Talent Discovery",
      description:
        "Encouraging self-expression through color drawing workshops, clay modeling, public speaking, and cultural festival performances that uncover hidden creative talents.",
    },
  ];

  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80",
      caption: "Creative arts and drawing workshops where children explore visual storytelling.",
      isPlaceholder: true,
    },
    {
      src: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
      caption: "Weekend athletics and team sports fostering physical fitness and leadership.",
      isPlaceholder: true,
    },
    {
      src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80",
      caption: "Community milestone celebrations recognizing every enrolled child's birthday.",
      isPlaceholder: true,
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
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="amber" size="md">
                Wellbeing & Character
              </Badge>
              <Badge variant="navy" size="md">
                Beyond Academics
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Holistic Child Development: Building Confidence, Character & Joy
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              True education extends beyond textbooks. We nurture well-rounded, emotionally resilient
              children by celebrating birthdays, fostering physical fitness through sports, and
              unleashing creative self-expression.
            </p>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Key Focus</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Emotional & Physical Care
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Weekend Activities</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Sports, Arts & Games
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Birthday Celebrations</span>
              <span className="font-heading text-sm font-bold text-brand-amber block mt-0.5">
                100% Enrolled Children
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Safeguarding Standard</span>
              <span className="font-heading text-sm font-bold text-emerald-800 block mt-0.5">
                Consent Verified
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Editorial Content */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-12">
              {/* Purpose Narrative */}
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Why Holistic Care Matters
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Every Child Deserves to Experience the Joy of Childhood
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Children growing up in economically distressed homes often carry adult burdens
                  too early. Sibling care, domestic chores, and financial worries crowd out the
                  simple innocence of playing, drawing, and celebrating personal milestones.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our child development programme ensures our learning center is a sanctuary of
                  happiness. When a child blows out a candle on their very first birthday cake or
                  crosses the finish line in a weekend race, their sense of self-worth is transformed.
                </p>
              </div>

              {/* Three Core Pillars */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Three Core Development Areas
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        {pillar.icon}
                      </div>
                      <div>
                        <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Gallery */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    Activities & Celebrations Gallery
                  </h3>
                  <span className="text-xs text-slate-400 italic">Contextual Preview</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {gallery.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle">
                      <div className="relative aspect-[4/3] w-full bg-slate-100">
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3.5">
                        <p className="text-xs text-slate-600 line-clamp-3 leading-snug">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Child Safeguarding Commitment */}
              <div className="p-6 bg-brand-muted/70 rounded-2xl border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-0.5">
                    Child Safeguarding & Parental Consent
                  </span>
                  We respect the absolute privacy and dignity of every minor in our programmes.
                  Photographs are displayed only with written guardian consent, and full names or
                  personal vulnerability records are strictly withheld from public channels.
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Actions & Volunteer Call */}
            <div className="lg:col-span-4 space-y-6">
              <Card variant="elevated" className="p-6 sm:p-7 border-brand-amber/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber block mb-2">
                  Volunteer Opportunity
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                  Host an Arts or Sports Workshop
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Are you an artist, dancer, athlete, or story-teller? Spend a Saturday afternoon
                  sharing your passion with the children at our center.
                </p>
                <Button variant="primary" size="md" href="/volunteer" className="w-full justify-center">
                  Volunteer on Weekends
                </Button>
              </Card>

              {/* Sponsor a Birthday Card */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <h4 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
                  <Cake className="w-4 h-4 text-brand-amber" />
                  <span>Sponsor a Birthday Smile</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Help cover the cost of a birthday cake, greeting card, and small gift kit for a
                  child whose family cannot afford a celebration.
                </p>
                <Link
                  href="/sponsor"
                  className="text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>Inquire About Birthday Sponsorship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
