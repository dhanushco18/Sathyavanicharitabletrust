import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PrototypePlaceholderProps {
  title: string;
  category?: string;
  description: string;
  phaseScheduled?: string;
  breadcrumbLabel: string;
}

export function PrototypePlaceholder({
  title,
  category = "Planned Section",
  description,
  phaseScheduled = "Phase 3 (Public Website Implementation)",
  breadcrumbLabel,
}: PrototypePlaceholderProps) {
  return (
    <div className="bg-brand-canvas min-h-[75vh] flex flex-col justify-between">
      <div className="bg-brand-muted/70 border-b border-slate-200">
        <Container>
          <Breadcrumbs items={[{ label: breadcrumbLabel }]} />
        </Container>
      </div>

      <Container size="narrow" className="py-16 sm:py-24 text-center my-auto">
        <div className="inline-flex items-center gap-2 mb-4">
          <Badge variant="amber" size="md">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            Phase 2 Prototype Stage
          </Badge>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          {title}
        </h1>

        <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto mb-8">
          {description}
        </p>

        <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle max-w-md mx-auto mb-8 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Implementation Roadmap Status</span>
          </div>
          <p className="text-sm font-semibold text-brand-navy">
            Scheduled for {phaseScheduled}
          </p>
          <p className="text-xs text-slate-500 leading-normal">
            Phase 2 focuses strictly on validating the visual language, design system,
            Homepage, and the representative Education Programme detail page.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="primary" href="/programs/education" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Inspect Education Prototype
          </Button>
          <Button variant="outline" href="/" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </div>
      </Container>

      <div className="py-4 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        Sathiyavani Charitable Trust • Phase 2 Prototype Testing Environment
      </div>
    </div>
  );
}
