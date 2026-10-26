"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export function FounderSection() {
  const { t, trans } = useLanguage();

  const journeyMilestones = [
    {
      stage: "2020",
      title: t("stage2020Title"),
      description: t("stage2020Desc"),
    },
    {
      stage: "2021",
      title: t("stage2021Title"),
      description: t("stage2021Desc"),
    },
    {
      stage: "2022",
      title: t("stage2022Title"),
      description: t("stage2022Desc"),
    },
    {
      stage: "2023",
      title: t("stage2023Title"),
      description: t("stage2023Desc"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-muted/40 border-b border-slate-200/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Origin Badge (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden bg-white/95 backdrop-blur-md p-3.5 shadow-elevated border border-slate-200 card-glow-hover">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-navy-dark shadow-inner">
                  <Image
                    src="/assets/images/founder-raghu.jpg"
                    alt={`${SITE_CONFIG.founderName}, Founder of Sathiyavani Charitable Trust`}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Leader Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] uppercase font-bold text-brand-amber tracking-wider block drop-shadow-xs">
                      {t("founderTag")}
                    </span>
                    <h3 className="font-heading text-2xl font-extrabold text-white mt-0.5 drop-shadow-xs">
                      {trans(SITE_CONFIG.founderName, "திரு. ரகு N.")}
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      {trans(
                        "Grassroots Educator & Social Reformer • Chennai",
                        "சமூக செயற்பாட்டாளர் & ஆசிரியர் • சென்னை"
                      )}
                    </p>
                  </div>
                </div>

                <div className="p-3 text-center">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {trans(
                      '"Every child has the potential to lead when supported with dignity."',
                      '"அன்போடும் கண்ணியத்தோடும் வழிநடத்தப்படும் ஒவ்வொரு குழந்தையாலும் சிறந்து விளங்க முடியும்."'
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Milestones (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              category={t("founderHeading")}
              categoryVariant="amber"
              title={t("founderSubhead")}
              description={trans(
                "When the pandemic shuttered schools, Mr. Raghu saw neighborhood children falling dangerously behind on Chennai's streets. Armed only with a blackboard and compassion, he started teaching them on the pavement.",
                "கொரோனா பொதுமுடக்கத்தால் பள்ளிகள் மூடப்பட்டபோது, ஏழை எளிய குடும்பங்களைச் சேர்ந்த குழந்தைகள் கல்வி கற்க வழியின்றி தவித்தனர். அப்போது ஒரு கரும்பலகையோடு சாலையோர நடைமேடையிலேயே இலவச மாலை வகுப்புகளை தொடங்கி வைத்தார் திரு. ரகு அவர்கள்."
              )}
              className="mb-0"
            />

            {/* Founder Quote Callout */}
            <blockquote className="p-5 rounded-2xl bg-white border-l-4 border-brand-amber shadow-subtle text-slate-800 my-4">
              <Quote className="w-6 h-6 text-brand-amber/50 mb-2" aria-hidden="true" />
              <p className="font-heading text-base sm:text-lg font-bold italic text-brand-navy leading-snug">
                "{t("founderQuote")}"
              </p>
              <cite className="text-xs text-slate-500 font-semibold mt-2 block not-italic">
                — {trans(SITE_CONFIG.founderName, "திரு. ரகு N.")}
              </cite>
            </blockquote>

            {/* Progression Stepper */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {trans("Milestones of Growth", "வளர்ச்சியின் மைல்கற்கள்")}
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
                <span>{t("founderReadStory")}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
