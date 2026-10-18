import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/constants";

export function FounderSection() {
  const journeyMilestones = [
    {
      stage: "2020",
      title: "Roadside Platform Classes",
      description: "Began teaching local children on open pavement platforms during COVID-19 school shutdowns.",
    },
    {
      stage: "2021",
      title: "Temple Premises",
      description: "Expanded classes into covered temple grounds to shelter students from weather extremes.",
    },
    {
      stage: "2022",
      title: "Home-Based Learning",
      description: "Dedicated personal living space to house daily study batches, books, and study lamps.",
    },
    {
      stage: "2023",
      title: "Library Learning Center",
      description: "Local authorities recognized the service, providing a permanent space under a local library.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-muted/40 border-b border-slate-200/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Origin Badge (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Outer decorative border */}
              <div className="relative rounded-3xl overflow-hidden bg-white/95 backdrop-blur-md p-3.5 shadow-elevated border border-slate-200 card-glow-hover">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-navy-dark shadow-inner">
                  <Image
                    src="/assets/images/founder-raghu.jpg"
                    alt={`${SITE_CONFIG.founderName}, Founder of Sathiyavani Charitable Trust standing in the community library`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Leader Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] uppercase font-bold text-brand-amber tracking-wider block drop-shadow-xs">
                      Founder & Managing Trustee
                    </span>
                    <h3 className="font-heading text-2xl font-extrabold text-white mt-0.5 drop-shadow-xs">
                      {SITE_CONFIG.founderName}
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Grassroots Educator & Social Reformer • Chennai
                    </p>
                  </div>
                </div>

                <div className="p-3 text-center">
                  <span className="text-[11px] text-slate-500 font-medium">
                    "Every child has the potential to lead when supported with dignity."
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Milestones (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              category="The Founder's Journey"
              categoryVariant="amber"
              title="Transforming hardship into a lifelong mission for children."
              description="When the pandemic shuttered schools, Mr. Raghu saw neighborhood children falling dangerously behind on Chennai's streets. Armed only with a blackboard and compassion, he started teaching them on the pavement."
              className="mb-0"
            />

            {/* Founder Quote Callout */}
            <blockquote className="p-5 rounded-2xl bg-white border-l-4 border-brand-amber shadow-subtle text-slate-800 my-4">
              <Quote className="w-6 h-6 text-brand-amber/50 mb-2" aria-hidden="true" />
              <p className="font-heading text-base sm:text-lg font-bold italic text-brand-navy leading-snug">
                "No child should be denied education due to financial hardship."
              </p>
              <cite className="text-xs text-slate-500 font-semibold mt-2 block not-italic">
                — {SITE_CONFIG.founderName}
              </cite>
            </blockquote>

            {/* Progression Stepper */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Milestones of Growth
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {journeyMilestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="navy" size="sm">
                        {milestone.stage}
                      </Badge>
                      <span className="text-xs font-bold text-slate-900">
                        {milestone.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-normal">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/founder"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-terracotta transition-colors group"
              >
                <span>Read the Complete Founder's Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
