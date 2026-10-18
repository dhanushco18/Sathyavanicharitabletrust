import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  TreePine,
  Leaf,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Environmental Protection & Tree Planting — Sathiyavani Trust",
  description:
    "Student-led biodiversity awareness, tree planting drives, and urban clean-up campaigns conducted in partnership with Exnora Organization in Chennai.",
};

export default function EnvironmentProgramPage() {
  const breadcrumbItems = [
    { label: "Programmes", href: "/programs" },
    { label: "Environmental Initiatives" },
  ];

  const greenPillars = [
    {
      icon: <TreePine className="w-5 h-5 text-brand-teal" />,
      title: "Urban Tree Plantation Drives",
      description:
        "Planting native saplings in urban school yards, neighborhood parks, and residential roadsides, with students taking personal ownership of watering and nurturing them.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-brand-teal" />,
      title: "Biodiversity & Nature Workshops",
      description:
        "Educating students on indigenous plant species, bird watching, waste segregation, and water conservation to build environmentally conscious future citizens.",
    },
    {
      icon: <Users className="w-5 h-5 text-brand-navy" />,
      title: "Community Clean-Up Campaigns",
      description:
        "Organizing localized clean-up days in cooperation with civic volunteers, instilling civic pride and public hygiene consciousness in the neighborhood.",
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
              <Badge variant="teal" size="md">
                Sustainability & Nature
              </Badge>
              <Badge variant="navy" size="md">
                In Partnership with Exnora
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Environmental Stewardship: Growing a Greener Tomorrow
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We empower youth to become active caretakers of their local environment. Through
              hands-on tree planting, waste awareness, and biodiversity education conducted in
              collaboration with Exnora Organization, we nurture responsible green citizens.
            </p>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Key Collaboration</span>
              <span className="font-heading text-sm font-bold text-brand-teal block mt-0.5">
                Exnora Organization
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Focus Activities</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Tree Drives & Clean-ups
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Student Leadership</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Green Ambassador Model
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Geographic Scope</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Chennai Public Spaces
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Editorial Body */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-teal tracking-wider block">
                  Ecological Responsibility
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Building Environmental Consciousness in Young Minds
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Environmental degradation and urban heat islands disproportionately affect
                  densely populated low-income neighborhoods in Chennai. Lack of tree canopy and poor
                  waste disposal directly impact community health.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We engage tuition center students directly in practical, outdoor greening projects.
                  Rather than merely reading about climate change in textbooks, children plant
                  saplings with their own hands, monitor their growth week by week, and lead
                  neighborhood clean-up campaigns.
                </p>
              </div>

              {/* Three Core Streams */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Three Green Action Streams
                </h3>
                <div className="space-y-4">
                  {greenPillars.map((pillar, idx) => (
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

              {/* Partnership with Exnora Callout */}
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-900 text-white relative overflow-hidden space-y-3">
                <div className="flex items-center gap-2 text-brand-amber font-bold text-xs uppercase tracking-wider">
                  <Handshake className="w-4 h-4" />
                  <span>Institutional Collaboration</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Collaboration with Exnora Organization
                </h3>
                <p className="text-sm text-emerald-100 leading-relaxed">
                  In partnership with Exnora Organization — a pioneering environmental movement in
                  India — Sathiyavani Charitable Trust conducts joint awareness drives and tree
                  plantation programs that help cultivate environmentally responsible and socially
                  conscious youth leaders.
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Actions */}
            <div className="lg:col-span-4 space-y-6">
              <Card variant="elevated" className="p-6 sm:p-7 border-brand-teal/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal block mb-2">
                  Green Participation
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                  Sponsor a Sapling Drive
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Fund native tree saplings, tree guards, and watering supplies for upcoming school
                  greening drives in Chennai.
                </p>
                <Button variant="primary" size="md" href="/sponsor" className="w-full justify-center">
                  Inquire About Green Drives
                </Button>
              </Card>

              {/* Volunteer Weekend Green Team */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <h4 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-brand-teal" />
                  <span>Join the Green Volunteer Team</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Volunteer on weekend tree planting sessions and student environmental workshops.
                </p>
                <Link
                  href="/volunteer"
                  className="text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>Volunteer Sign-Up</span>
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
