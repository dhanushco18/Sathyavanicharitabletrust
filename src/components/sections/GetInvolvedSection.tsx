import React from "react";
import Link from "next/link";
import { UserCheck, Heart, Building2, Gift, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function GetInvolvedSection() {
  const pathways = [
    {
      icon: <Heart className="w-6 h-6 text-brand-terracotta" />,
      title: "Sponsor a Student",
      description:
        "Fund school fees, textbooks, uniforms, and learning kits for children whose families face financial distress.",
      actionText: "Explore Sponsorship",
      href: "/sponsor",
      variant: "primary" as const,
      popular: true,
    },
    {
      icon: <UserCheck className="w-6 h-6 text-brand-navy" />,
      title: "Volunteer as a Tutor",
      description:
        "Dedicate weekend hours to mentor students in math, science, English, or extracurricular sports and arts.",
      actionText: "Apply as Volunteer",
      href: "/volunteer",
      variant: "secondary" as const,
      popular: false,
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-teal" />,
      title: "Corporate CSR Partnerships",
      description:
        "Collaborate with our trust on measurable education and biodiversity programs backed by verifiable reporting.",
      actionText: "Partner With Us",
      href: "/partnerships",
      variant: "secondary" as const,
      popular: false,
    },
    {
      icon: <Gift className="w-6 h-6 text-brand-amber" />,
      title: "Support Festive Drives",
      description:
        "Contribute new clothing, sweets, and stationery kits for our annual Diwali Joy distribution across Chennai.",
      actionText: "Support Festival Joy",
      href: "/programs/festival-support",
      variant: "secondary" as const,
      popular: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-canvas border-b border-slate-200/60">
      <Container>
        <SectionHeading
          category="Join Our Mission"
          categoryVariant="terracotta"
          title="Meaningful Ways to Create Impact"
          description="Whether through your time, sponsorship, or institutional collaboration, your support ensures another child remains in school."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 card-glow-hover ${
                item.popular
                  ? "bg-gradient-to-b from-brand-amber-soft/50 via-white to-white border-brand-amber/50 shadow-card ring-2 ring-brand-amber/20"
                  : "bg-white border-slate-200/90 shadow-subtle"
              }`}
            >
              <div>
                {item.popular && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-amber-hover bg-brand-amber-soft px-3 py-0.5 rounded-full mb-3.5 border border-brand-amber/30 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse" />
                    Most Immediate Need
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border shadow-xs transition-transform duration-300 group-hover:scale-105 ${
                    item.popular
                      ? "bg-brand-amber-soft border-brand-amber/20"
                      : "bg-slate-50 border-slate-100"
                  }`}
                >
                  {item.icon}
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-auto">
                <Button
                  variant={item.variant}
                  size="sm"
                  href={item.href}
                  className="w-full justify-center shadow-xs"
                >
                  {item.actionText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
