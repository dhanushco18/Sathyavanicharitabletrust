import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  GraduationCap,
  HeartHandshake,
  Users,
  Sparkles,
  TreePine,
  ArrowRight,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { getPublicPrograms } from "@/lib/db/public-queries";

export const metadata: Metadata = {
  title: "Our Programmes — Education, Child Development & Welfare",
  description:
    "Explore the 5 core community initiatives of Sathiyavani Charitable Trust in Chennai: Free Tuition, Child Development, Community Outreach, Festival Joy, and Environmental Care.",
};

export default async function ProgramsHubPage() {
  const breadcrumbItems = [{ label: "Programmes" }];
  const dbPrograms = await getPublicPrograms();

  const colors: ("navy" | "amber" | "terracotta" | "teal")[] = ["navy", "teal", "amber", "terracotta"];

  const displayPrograms = dbPrograms.map((p, idx) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    summary: p.short_description,
    category: p.category,
    iconName: "GraduationCap",
    accentColor: colors[idx % colors.length],
    badgeText: idx === 0 ? "Flagship Initiative" : "Active Initiative",
    href: `/programs/${p.slug}`,
    statsPlaceholder: p.location,
  }));

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
                Structured Initiatives
              </Badge>
              <Badge variant="amber" size="md">
                5 Active Pillars
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Targeted Interventions Grounded in Dignity and Consistency
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our programmes are built on direct grassroots contact in Chennai communities.
              From daily evening tuition to annual festival joy distributions and urban tree planting,
              every initiative addresses a concrete human need.
            </p>
          </div>
        </Container>
      </section>

      {/* Programme Cards Grid */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPrograms.map((prog, index) => (
              <ProgramCard
                key={prog.id}
                program={prog}
                className={index === 0 ? "lg:col-span-2 bg-gradient-to-br from-white to-brand-navy-soft/30" : ""}
              />
            ))}
          </div>

          {/* Bottom Callout: Holistic Service Model */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-brand-navy text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-amber block">
                Holistic Support
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Support a Specific Initiative
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you wish to sponsor a child's tuition fees, volunteer as a weekend teacher,
                or contribute to our festive drives, your partnership creates lasting change.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              <Button variant="primary" size="lg" href="/sponsor">
                Sponsor a Student
              </Button>
              <Button variant="secondary" size="lg" href="/volunteer">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
