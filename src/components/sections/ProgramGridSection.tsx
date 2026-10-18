import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { PROGRAMMES_LIST } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function ProgramGridSection() {
  return (
    <section className="py-16 sm:py-24 bg-brand-canvas border-b border-slate-200/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            category="Structured Initiatives"
            categoryVariant="navy"
            title="Our Core Programmes"
            description="Focused interventions in education, child wellbeing, vulnerable community support, and environmental responsibility."
            className="mb-0"
          />

          <Link
            href="/programs"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-brand-terracotta transition-colors group shrink-0 pb-1"
          >
            <span>View All Detailed Programmes</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROGRAMMES_LIST.map((prog, index) => (
            <ProgramCard
              key={prog.id}
              program={prog}
              className={index === 0 ? "lg:col-span-2 bg-gradient-to-br from-white to-brand-navy-soft/30" : ""}
            />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-brand-terracotta"
          >
            <span>View All Detailed Programmes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
