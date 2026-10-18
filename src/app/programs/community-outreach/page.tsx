import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Users,
  Heart,
  Accessibility,
  Tent,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Community Outreach & Family Support — Sathiyavani Trust",
  description:
    "Providing dignity-first community welfare, emergency support for single-parent households, assistance for differently-abled neighbors, and tribal outreach.",
};

export default function CommunityOutreachPage() {
  const breadcrumbItems = [
    { label: "Programmes", href: "/programs" },
    { label: "Community Outreach" },
  ];

  const welfarePillars = [
    {
      icon: <Heart className="w-5 h-5 text-brand-terracotta" />,
      title: "Single-Parent Household Assistance",
      description:
        "Providing essential ration kits, educational subsidies, and emergency relief to widowed and abandoned mothers who shoulder sole financial responsibility for their children.",
      group: "Economic Vulnerability",
    },
    {
      icon: <Accessibility className="w-5 h-5 text-brand-navy" />,
      title: "Differently-Abled Inclusion & Dignity",
      description:
        "Facilitating mobility aids, specialized learning materials, and inclusive community participation so differently-abled neighbors are respected and supported without stigma.",
      group: "Inclusive Care",
    },
    {
      icon: <Tent className="w-5 h-5 text-brand-amber" />,
      title: "Tribal Settlement Outreach",
      description:
        "Extending educational awareness, basic healthcare camps, and festive clothing distributions to indigenous and tribal settlements around northern and peri-urban Tamil Nadu.",
      group: "Indigenous Support",
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
              <Badge variant="terracotta" size="md">
                Social Inclusion
              </Badge>
              <Badge variant="navy" size="md">
                Community Safety Net
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Community Outreach: Supporting Families Beyond the Classroom
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A child cannot learn effectively if their home is experiencing severe crisis. We extend
              humanitarian care, essential provisions, and social advocacy to single-parent
              families, differently-abled neighbors, and tribal communities in Tamil Nadu.
            </p>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Outreach Focus</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Vulnerable Households
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Key Support</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Rations & School Subsidies
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Ethical Policy</span>
              <span className="font-heading text-sm font-bold text-brand-navy block mt-0.5">
                Dignity-First Approach
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Geographic Reach</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Chennai & Peri-Urban Areas
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
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Comprehensive Family Welfare
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Protecting the Household Ecosystem
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  When a parent falls critically ill or an unexpected crisis hits a daily-wage family,
                  children are frequently pulled out of school to generate minor income or care for
                  infants. Our community outreach operates as an emergency cushion that prevents
                  temporary shocks from becoming permanent educational dropouts.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We maintain regular contact with community leaders and school teachers to identify
                  families requiring immediate assistance, ensuring aid reaches those who need it
                  most without bureaucracy or loss of personal dignity.
                </p>
              </div>

              {/* 3 Welfare Focus Areas */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Three Targeted Outreach Streams
                </h3>
                <div className="space-y-4">
                  {welfarePillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        {pillar.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                            {pillar.title}
                          </h4>
                          <Badge variant="terracotta" size="sm">
                            {pillar.group}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dignity & Privacy Safeguarding Standard */}
              <div className="p-6 bg-brand-muted/70 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-teal" />
                  <span>Dignity-First Assistance Standard</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We believe that poverty must never be sensationalized. Our outreach drives are
                  conducted with deep respect for beneficiary privacy. We do not distribute relief
                  under intrusive public cameras or display personal financial hardship records
                  online.
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Actions & Inquiries */}
            <div className="lg:col-span-4 space-y-6">
              <Card variant="elevated" className="p-6 sm:p-7 border-brand-terracotta/30">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-terracotta block mb-2">
                  Emergency Support
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                  Support a Vulnerable Family
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Contribute emergency dry ration kits, clothing, or essential medical assistance
                  for single mothers and families facing sudden economic crises.
                </p>
                <Button variant="primary" size="md" href="/sponsor" className="w-full justify-center">
                  Inquire About Family Sponsorship
                </Button>
              </Card>

              {/* Corporate CSR Connection */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <h4 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
                  <Building className="w-4 h-4 text-brand-navy" />
                  <span>Institutional Partnerships</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Companies seeking to direct CSR allocations toward social inclusion and community
                  relief can collaborate with us on measurable programs.
                </p>
                <Link
                  href="/partnerships"
                  className="text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>CSR Collaboration Inquiries</span>
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
