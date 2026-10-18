import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Building2,
  Handshake,
  FileCheck2,
  TreePine,
  GraduationCap,
  Sparkles,
  Phone,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";
import { PartnershipInquiryForm } from "@/components/forms/PartnershipInquiryForm";

export const metadata: Metadata = {
  title: "Corporate CSR & Institutional Partnerships | Sathiyavani Trust",
  description:
    "Partner with Sathiyavani Charitable Trust in Chennai on verifiable CSR education initiatives, biodiversity tree planting drives, and community welfare programs.",
};

export default function PartnershipsPage() {
  const breadcrumbItems = [
    { label: "Get Involved", href: "/get-involved" },
    { label: "Corporate Partnerships" },
  ];

  const partnershipAreas = [
    {
      title: "Learning Center & Tuition Expansion",
      focus: "Education & Literacy",
      badgeVariant: "navy" as const,
      description:
        "Support annual operating costs, volunteer teacher honorariums, and digital literacy infrastructure for daily after-school tuition center batches in Chennai.",
      deliverable: "Quarterly attendance and student progression reports.",
      icon: <GraduationCap className="w-6 h-6 text-brand-navy" />,
    },
    {
      title: "Urban Tree Greening & Biodiversity with Exnora",
      focus: "Environmental Sustainability",
      badgeVariant: "teal" as const,
      description:
        "Fund large-scale sapling procurement, tree guards, and neighborhood clean-up drives conducted in formal collaboration with Exnora Organization.",
      deliverable: "GPS-tagged plantation ledgers and survival audits.",
      icon: <TreePine className="w-6 h-6 text-brand-teal" />,
    },
    {
      title: "Annual Diwali Joy Festive Drives",
      focus: "Community Social Inclusion",
      badgeVariant: "amber" as const,
      description:
        "Corporate employee giving matching programs to sponsor batches of 50, 100, or 250 festive care packages (new clothing, sweets, and educational kits).",
      deliverable: "Audited physical distribution handover ledgers.",
      icon: <Sparkles className="w-6 h-6 text-brand-amber" />,
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
              <Badge variant="teal" size="md">
                Institutional Partnerships
              </Badge>
              <Badge variant="navy" size="md">
                Measurable Social Impact
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Strategic CSR & Institutional Collaboration
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We collaborate with forward-thinking corporations, foundations, and civic bodies to
              deliver measurable, high-integrity community impact in Chennai, backed by transparent
              documentation and ethical governance.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Partnership Scope & Standards */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Collaborative Value
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Why Partner with Sathiyavani Charitable Trust?
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Corporate social responsibility is most powerful when it connects directly with
                  unfiltered community reality. We offer corporate partners direct grassroots
                  access without administrative bloat. Every rupee contributed translates into
                  tangible student classroom seats, distributed books, or nurtured saplings.
                </p>
              </div>

              {/* Three Partnership Areas */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Core Collaboration Areas
                </h3>
                <div className="space-y-4">
                  {partnershipAreas.map((area, idx) => (
                    <Card key={idx} variant="elevated" className="p-6 sm:p-7 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                            {area.icon}
                          </div>
                          <div>
                            <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                              {area.title}
                            </h4>
                            <span className="text-xs text-slate-500 font-medium">
                              Scope: {area.focus}
                            </span>
                          </div>
                        </div>
                        <Badge variant={area.badgeVariant} size="sm">
                          {area.focus}
                        </Badge>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {area.description}
                      </p>

                      <div className="p-3 bg-brand-canvas rounded-xl text-xs text-slate-600 flex items-center gap-2">
                        <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>
                          <strong>Verification Deliverable:</strong> {area.deliverable}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Due Diligence & CSR Governance Transparency Note */}
              <div className="p-6 sm:p-8 bg-brand-muted/70 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-brand-teal" />
                  <span>Institutional Compliance & CSR-1 Status</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  Documented Organizational Transparency
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sathiyavani Charitable Trust operates as a registered public charitable trust in
                  Tamil Nadu (Registered 2023). Formal MCA CSR-1 registration filing and 80G order
                  documentation are being compiled for regulatory archiving. We welcome corporate CSR
                  compliance teams to request formal deed copies, banking credentials, and physical
                  register verifications.
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Corporate Contact Card */}
            <div className="lg:col-span-4 space-y-6">
              <Card variant="elevated" className="p-6 sm:p-7 border-brand-teal/40 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal block mb-1">
                    Institutional Inquiries
                  </span>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    Request a Project Proposal
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Submit your CSR interest directly to trust leadership.
                  </p>
                </div>

                <PartnershipInquiryForm />
              </Card>

              {/* Direct Instant Action Option */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Prefer Direct Executive Contact?
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Call or WhatsApp our managing trustees directly to arrange an introductory meeting:
                </p>
                <div className="space-y-2 pt-1">
                  <a
                    href={`tel:${SITE_CONFIG.rawPhone}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {SITE_CONFIG.phone}</span>
                  </a>

                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#20BD5A] transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                    <span>WhatsApp Trust Leadership</span>
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-2">
                <h4 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-brand-amber" />
                  <span>Center Inspection Visits</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We encourage corporate partners to visit our evening tuition center in session
                  at the Library Learning Center facility in Chennai to witness our work directly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
