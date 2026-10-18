import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Heart,
  UserCheck,
  Building2,
  Gift,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Involved — Volunteer, Sponsor & Partner | Sathiyavani Trust",
  description:
    "Discover how you can support underprivileged children and families in Chennai through student sponsorships, volunteer teaching, and corporate CSR partnerships.",
};

export default function GetInvolvedPage() {
  const breadcrumbItems = [{ label: "Get Involved" }];

  const pathways = [
    {
      title: "Sponsor a Student's Education",
      badge: "Highest Priority",
      badgeVariant: "terracotta" as const,
      description:
        "Fund school fees, textbooks, school uniforms, and evening study supplies for children whose families face severe financial distress.",
      benefits: [
        "Prevents school dropouts in high school",
        "Direct provision of study materials",
        "Handled directly through trust coordinators",
      ],
      href: "/sponsor",
      cta: "Explore Student Sponsorship",
      popular: true,
    },
    {
      title: "Volunteer as a Tutor or Mentor",
      badge: "Weekend Opportunities",
      badgeVariant: "navy" as const,
      description:
        "Dedicate 2–3 hours on weekends to teach foundational mathematics, science, spoken English, or conduct sports and arts workshops.",
      benefits: [
        "Mentorship at the Library Learning Center",
        "Weekend flexible teaching schedules",
        "Volunteer orientation and certificate",
      ],
      href: "/volunteer",
      cta: "Apply to Volunteer",
      popular: false,
    },
    {
      title: "Corporate CSR Partnerships",
      badge: "Institutional Giving",
      badgeVariant: "teal" as const,
      description:
        "Collaborate with our trust on measurable educational reinforcement and biodiversity initiatives with clear social accountability.",
      benefits: [
        "Tailored project proposals & milestones",
        "Documented physical distribution ledgers",
        "Field visit and audit coordination",
      ],
      href: "/partnerships",
      cta: "CSR Collaboration Details",
      popular: false,
    },
    {
      title: "Festive Joy & Welfare Drives",
      badge: "Seasonal Campaign",
      badgeVariant: "amber" as const,
      description:
        "Support our annual Diwali Gift Initiative providing new clothes, sweets, and educational kits to 1,000+ vulnerable children.",
      benefits: [
        "Brings festive light and equality to homes",
        "Package sponsorship (approx. ₹1,000/kit)",
        "Group and employee giving drives",
      ],
      href: "/programs/festival-support",
      cta: "Support Festival Joy",
      popular: false,
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
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="terracotta" size="md">
                Engagement Pathways
              </Badge>
              <Badge variant="navy" size="md">
                Direct Grassroots Benefit
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Meaningful Ways to Support Children & Families in Chennai
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every volunteer hour, student sponsorship, and corporate partnership directly sustains
              a child in school. Explore our transparent contribution pathways below.
            </p>
          </div>
        </Container>
      </section>

      {/* 4 Pathways Grid */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pathways.map((path, idx) => (
              <Card
                key={idx}
                variant="elevated"
                className={`p-6 sm:p-8 flex flex-col justify-between ${
                  path.popular ? "border-brand-terracotta/40 ring-1 ring-brand-terracotta/20" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant={path.badgeVariant} size="sm">
                      {path.badge}
                    </Badge>
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {path.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {path.description}
                  </p>

                  <div className="space-y-2 mb-8 bg-brand-canvas p-4 rounded-xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    {path.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-navy shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button
                    variant={path.popular ? "primary" : "secondary"}
                    size="md"
                    href={path.href}
                    className="w-full justify-center"
                  >
                    {path.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Honest Financial Processing Notice */}
          <div className="mt-16 p-6 sm:p-8 bg-brand-muted/70 rounded-3xl border border-slate-200 max-w-3xl mx-auto text-center space-y-3">
            <h3 className="font-heading text-base font-bold text-slate-900">
              Direct Coordinator Inquiries • No Automated Online Gateway
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              In accordance with our financial transparency policy, all sponsorships and donations
              are coordinated directly through our authorized bank account and trust coordinators.
              We do not operate automated third-party commercial payment gateways on this site.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.rawPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-brand-navy hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-navy" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-emerald-800 hover:bg-slate-50 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
