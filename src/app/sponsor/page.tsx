import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Heart,
  BookOpen,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";
import { SponsorshipInquiryForm } from "@/components/forms/SponsorshipInquiryForm";

export const metadata: Metadata = {
  title: "Sponsor a Student's Education — Sathiyavani Charitable Trust",
  description:
    "Directly sponsor school fees, textbooks, geometry kits, and evening study materials for underprivileged children in Chennai.",
};

export default function SponsorPage() {
  const breadcrumbItems = [
    { label: "Get Involved", href: "/get-involved" },
    { label: "Sponsor a Student" },
  ];

  const sponsorshipTiers = [
    {
      title: "Annual Educational Kit",
      estimate: "₹1,500 / student / year",
      badge: "Essential Supplies",
      badgeVariant: "amber" as const,
      description:
        "Provides a sturdy school backpack, notebooks, geometry sets, pens, drawing pads, and daily evening study materials.",
    },
    {
      title: "School-Fee & Exam Assistance",
      estimate: "₹3,500 / term",
      badge: "Dropout Prevention",
      badgeVariant: "terracotta" as const,
      description:
        "Directly covers school tuition fees and state examination fees for promising high-school students at risk of dropouts.",
    },
    {
      title: "Comprehensive Student Sponsorship",
      estimate: "₹6,000 / full academic year",
      badge: "Full Annual Care",
      badgeVariant: "navy" as const,
      description:
        "Covers complete annual school fees, all educational kits, uniforms, and daily after-school tuition center mentorship.",
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
                Direct Child Sponsorship
              </Badge>
              <Badge variant="navy" size="md">
                Dignity-First Care
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Sponsor a Student: Keep a Child in School
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              When families face severe economic crises, school fees and supplies are often the first
              expenses cut. Your sponsorship directly removes that financial burden, allowing a child
              to focus on learning with dignity.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Sponsorship Framework */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  How Sponsorship Operates
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Transparent, Direct, and Accountable
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  At Sathiyavani Charitable Trust, student sponsorship is grounded in direct personal
                  accountability. We do not use third-party intermediaries. Every rupee pledged is
                  allocated directly toward the designated student's institutional fee receipt or
                  essential educational supplies.
                </p>
              </div>

              {/* Sponsorship Tiers Grid */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Provisional Sponsorship Tiers (Cost Estimates)
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {sponsorshipTiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1 max-w-md">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={tier.badgeVariant} size="sm">
                            {tier.badge}
                          </Badge>
                          <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                            {tier.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {tier.description}
                        </p>
                      </div>

                      <div className="sm:text-right shrink-0">
                        <span className="text-xs text-slate-500 font-semibold block uppercase">
                          Estimated Cost
                        </span>
                        <span className="font-heading text-xl font-extrabold text-brand-navy block mt-0.5">
                          {tier.estimate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Sponsors Receive & Child Safeguarding */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  What Information Sponsors Receive
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  In compliance with our Child Safeguarding guidelines, we protect student identity:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 pt-2">
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Periodic Progress Reports:</strong> General updates on academic attendance,
                      grade progression, and center participation.
                    </span>
                  </div>
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Institutional Receipts:</strong> Official fee vouchers and supply
                      disbursement acknowledgments for complete financial clarity.
                    </span>
                  </div>
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-100 flex items-start gap-2.5 sm:col-span-2">
                    <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Protection:</strong> We never publicly post sensitive family
                      debt records, full minor home addresses, or intrusive photographs.
                    </span>
                  </div>
                </div>
              </div>

              {/* 80G Tax Exemption Status Transparency Note */}
              <div className="p-6 bg-brand-muted/70 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <HelpCircle className="w-4 h-4 text-brand-amber" />
                  <span>Tax Exemption Transparency Notice</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sathiyavani Charitable Trust is a registered public charitable trust in Tamil Nadu.
                  Formal 80G tax-deductibility orders from the Income Tax Department are under
                  procedural review. We do not make unverified claims of automatic tax exemption
                  until official government certificates are granted and published on our
                  transparency portal.
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Pledge Action & Contact Card */}
            <div className="lg:col-span-4 space-y-6">
              <Card variant="elevated" className="p-6 sm:p-7 border-brand-terracotta/40 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-terracotta block mb-1">
                    Direct Sponsorship Pledge
                  </span>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    Pledge Student Support
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Your pledge is routed directly to the managing trustees.
                  </p>
                </div>

                <SponsorshipInquiryForm />
              </Card>

              {/* Direct Telephone / WhatsApp Option */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Direct Bank & Account Enquiries
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To request official trust bank transfer details (RTGS/NEFT/IMPS) directly from the
                  president:
                </p>
                <div className="space-y-2 pt-1">
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#20BD5A] transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                    <span>WhatsApp Trust Coordinator</span>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.rawPhone}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {SITE_CONFIG.phone}</span>
                  </a>
                </div>
              </div>

              {/* Transparency Link */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-2">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Governance & Compliance
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Review our registration timeline, safeguarding policies, and verified beneficiary
                  records on the transparency hub.
                </p>
                <Link
                  href="/impact"
                  className="text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>Explore Verified Impact Data</span>
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
