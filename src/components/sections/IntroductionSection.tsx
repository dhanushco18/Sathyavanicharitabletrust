import React from "react";
import Link from "next/link";
import { BookOpen, Heart, Users, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

export function IntroductionSection() {
  const pillars = [
    {
      icon: <BookOpen className="w-5 h-5 text-brand-navy" />,
      title: "Daily Educational Mentorship",
      description:
        "Free after-school tuition bridging the academic gap for children in government and low-income schools.",
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-amber" />,
      title: "Holistic Character & Joy",
      description:
        "Celebrating student birthdays, supporting sports activities, and fostering confidence through extracurricular arts.",
    },
    {
      icon: <Users className="w-5 h-5 text-brand-terracotta" />,
      title: "Community Social Security",
      description:
        "Direct assistance for single mothers, differently-abled neighbors, and annual festive distributions for tribal families.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Purpose Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              category="Who We Are"
              categoryVariant="navy"
              title="A community movement born from a simple act of roadside care."
              description="Founded by Mr. Raghu N. during the COVID-19 pandemic, Sathiyavani Charitable Trust began when school closures left platform children without learning support. What started with street-side tutoring has grown into an organized community ecosystem."
              className="mb-0"
            />

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We operate on the firm belief that no child's future should be constrained by
              household poverty. By offering consistent after-school mentoring, learning kits, and
              direct fee sponsorships, we create a safe, supportive environment where every student
              is valued.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-terracotta transition-colors group"
              >
                <span>Read About Our History & Leadership</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Three Core Commitments (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-brand-canvas border border-slate-200/80 hover:border-brand-navy/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-subtle border border-slate-200/60">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
