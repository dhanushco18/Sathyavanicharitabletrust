import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Quote,
  MapPin,
  Calendar,
  GraduationCap,
  Heart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Founder Story — Mr. Raghu N. | Sathiyavani Charitable Trust",
  description:
    "The journey of Mr. Raghu N., from teaching underprivileged children on roadside platforms during the COVID-19 pandemic to establishing the library learning center in Chennai.",
};

export default function FounderPage() {
  const breadcrumbItems = [
    { label: "About Us", href: "/about" },
    { label: "Founder Story" },
  ];

  const journeySteps = [
    {
      title: "The Roadside Platform",
      period: "2020 • Pandemic Initiation",
      description:
        "During the peak of the COVID-19 pandemic in Chennai, schools shuttered and shifted to online classes. While privileged families adapted with smartphones and laptops, children of street vendors and roadside families had no access to learning. Seeing children idle and losing literacy skills, Mr. Raghu sat down with them on open pavement platforms, armed with slate, chalk, and notebooks.",
      highlight: "Classes began with just a few children on open street platforms.",
    },
    {
      title: "The Temple Premises",
      period: "2021 • Sheltered Expansion",
      description:
        "As word spread through the locality, more children joined the daily sessions. To provide shelter from Chennai's scorching sun and seasonal rains, Mr. Raghu arranged permission to hold evening batches inside local temple premises. Community volunteers began offering support with teaching basic mathematics and Tamil reading.",
      highlight: "Transitioned from open streets to covered community grounds.",
    },
    {
      title: "Home-Based Learning Batches",
      period: "2022 • Consistent Mentorship",
      description:
        "To ensure students received uninterrupted guidance regardless of public space availability, Mr. Raghu converted his personal living space into a dedicated learning area. Evening study batches, book lending, and homework assistance were organized daily with zero fees.",
      highlight: "Personal residence served as daily classroom and study center.",
    },
    {
      title: "Library Learning Center",
      period: "2023 – Present • Structured Institution",
      description:
        "Recognizing his dedicated, honest service to neighborhood children, local police authorities stepped forward to provide a safe, permanent space located under a community library facility. The initiative was formally registered as Sathiyavani Charitable Trust in 2023 to secure sustainable donor sponsorships and volunteer backing.",
      highlight: "Official municipal and community recognition.",
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 8 Cols: Introduction */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <Badge variant="amber" size="md">
                  Leadership & Origins
                </Badge>
                <Badge variant="navy" size="md">
                  {SITE_CONFIG.founderRole}
                </Badge>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Mr. Raghu N. — The Journey of a Grassroots Educator
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                How an individual's refusal to let children lose their future during the pandemic
                evolved from roadside platform tutoring into an organized movement serving hundreds
                of students and families in Chennai.
              </p>
            </div>

            {/* Right 4 Cols: Portrait Card */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-elevated border border-slate-200 max-w-sm mx-auto">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-navy-dark">
                  <Image
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="Contextual portrait representing founder Mr. Raghu N."
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber block">
                      Founder Profile
                    </span>
                    <h2 className="font-heading text-xl font-extrabold text-white">
                      {SITE_CONFIG.founderName}
                    </h2>
                    <span className="text-xs text-slate-300 block">
                      President, Sathiyavani Charitable Trust
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-center text-slate-400 mt-2 italic">
                  Note: Contextual editorial photo shown. Official center leadership portrait scheduled.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Narrative & Milestone Progression */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Guiding Conviction */}
            <blockquote className="p-6 sm:p-8 rounded-3xl bg-white border-l-4 border-brand-amber shadow-subtle text-slate-800">
              <Quote className="w-8 h-8 text-brand-amber/40 mb-3" aria-hidden="true" />
              <p className="font-heading text-xl sm:text-2xl font-bold italic text-brand-navy leading-snug">
                "No child should be denied education due to financial hardship."
              </p>
              <cite className="text-xs text-slate-500 font-semibold mt-3 block not-italic">
                — {SITE_CONFIG.founderName}, Founder & President
              </cite>
            </blockquote>

            {/* The Narrative */}
            <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                The Beginning: Teaching in Open Spaces
              </h2>
              <p>
                The story of Sathiyavani Charitable Trust is fundamentally human. When the COVID-19
                pandemic hit Chennai in 2020, marginalized communities faced immediate economic and
                educational collapse. With daily wages vanishing, books and stationery were distant
                luxuries.
              </p>
              <p>
                Rather than waiting for institutional relief to trickle down, Mr. Raghu began
                gathering children who spent their days on roadside platforms and started teaching
                them arithmetic and reading. For months, open pavement curbstones were the desks, and
                a portable blackboard was the school wall.
              </p>
            </div>

            {/* Step-by-Step Evolution */}
            <div className="space-y-6 pt-4">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Four Stages of Growth
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
                  From Roadside to Permanent Learning Center
                </h3>
              </div>

              <div className="space-y-6">
                {journeySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-brand-navy-soft text-brand-navy font-heading font-extrabold flex items-center justify-center text-sm shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="font-heading text-lg font-bold text-slate-900">
                          {step.title}
                        </h4>
                      </div>
                      <Badge variant="navy" size="sm">
                        {step.period}
                      </Badge>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                      <span>{step.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuing the Mission Today */}
            <div className="p-8 bg-brand-muted/70 rounded-3xl border border-slate-200/80 space-y-4">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Continuing the Mission Today
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Today, the tuition center operates successfully at the library premises, providing
                daily free classes, student mentorship, and school-fee support. Mr. Raghu continues
                to actively supervise daily sessions, personally mentor children, and coordinate
                volunteer tutors.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="primary" size="md" href="/programs/education">
                  Explore Our Tuition Centre
                </Button>
                <Button variant="outline" size="md" href="/sponsor">
                  Support a Student
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
