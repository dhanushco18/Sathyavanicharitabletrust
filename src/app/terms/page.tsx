import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileText, ShieldAlert, CheckCircle2, Scale, AlertCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use & Operational Disclaimers — Sathiyavani Trust",
  description:
    "Terms and conditions governing the informational use, intellectual property, community integrity, and non-profit disclaimers for Sathiyavani Charitable Trust.",
};

export default function TermsPage() {
  const breadcrumbItems = [{ label: "Terms of Use" }];

  return (
    <div className="bg-brand-canvas min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-brand-muted/70 border-b border-slate-200">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="navy" size="md">
                Legal & Operational
              </Badge>
              <Badge variant="amber" size="md">
                Awaiting Legal Review
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Terms of Use & Operational Disclaimers
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              These terms outline the rules and guidelines governing the use of the Sathiyavani
              Charitable Trust public informational website and its associated community communication
              channels.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <Container size="narrow">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-subtle space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Legal Notice Header */}
            <div className="p-4 bg-brand-muted/70 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">Governance Note:</span>
              <p>
                This document serves as an operational draft for Phase 3. It will undergo formal
                legal and trustee review prior to the activation of online financial transactions
                in subsequent development phases.
              </p>
              <p className="text-slate-500 pt-1">Last Updated: October 2026 | Jurisdiction: Chennai, Tamil Nadu, India</p>
            </div>

            {/* Section 1: Informational Purpose */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-navy" />
                1. Informational & Non-Commercial Purpose
              </h2>
              <p>
                The Sathiyavani Charitable Trust public website is published exclusively to provide
                authentic, verified information regarding the trust’s non-profit social missions,
                free education programmes, child welfare drives, and community outreach in Chennai,
                Tamil Nadu.
              </p>
              <p>
                Access to this website is provided on a goodwill informational basis. We strive for
                rigorous accuracy; however, field schedules, tuition timings, and drive logistics may
                evolve based on ground realities and academic calendars.
              </p>
            </div>

            {/* Section 2: Intellectual Property & Visual Identity */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-brand-amber" />
                2. Intellectual Property & Emblem Protection
              </h2>
              <p>
                All graphic elements, original written documentation, photographic documentation of
                trust events, and the official Sathiyavani Charitable Trust circular logo emblem
                are the intellectual property of Sathiyavani Charitable Trust.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>
                  No individual, company, or institution may use the trust’s name, logo, or founder’s
                  identity to solicit unauthorised funds, endorsements, or commercial affiliations.
                </li>
                <li>
                  Photographs of children and youth participating in tuition centres may not be
                  downloaded, repurposed, or republished in any commercial or defamatory context.
                </li>
                <li>
                  Fair use for legitimate news reporting or educational citations requires prior written
                  approval and clear attribution to Sathiyavani Charitable Trust.
                </li>
              </ul>
            </div>

            {/* Section 3: Donations & Financial Disclaimer */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-brand-terracotta" />
                3. Financial Transactions & No Online Checkout Notice
              </h2>
              <p>
                In compliance with our ethical transparency framework and Phase 3 specifications:
              </p>
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                <div className="flex items-start gap-2 text-amber-900 font-semibold text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                  <span>Important Financial Transparency Notice</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  This website does NOT currently process payment card transactions, UPI payments, or
                  automated payment gateway checkouts online. Any online donation gateway is strictly
                  scheduled for later integration following complete legal and statutory onboarding.
                </p>
              </div>
              <p>
                Interested patrons, institutional CSR partners, or student sponsors should exclusively
                interact through official trust coordinators via{" "}
                <Link href="/contact" className="text-brand-navy underline font-medium">
                  our verified contact channels
                </Link>{" "}
                or phone at <span className="font-semibold">{SITE_CONFIG.phone}</span>. The trust is
                never responsible for funds remitted to unauthorised third-party bank accounts or
                intermediaries.
              </p>
            </div>

            {/* Section 4: Child Dignity & Photo Protocol */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                4. Child Safeguarding & Community Integrity
              </h2>
              <p>
                Visitors to our community centres, volunteer applicants, and website users agree to
                adhere strictly to child safeguarding norms:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>
                  Volunteers may not capture personal, unchaperoned photographs or collect private
                  residential details of beneficiary children.
                </li>
                <li>
                  Interactions with students in trust tuition programmes must remain within official
                  class schedules and public trust venues under approved supervisor presence.
                </li>
                <li>
                  Any suspected violation of child protection or inappropriate conduct will result in
                  immediate disqualification from volunteer participation and referral to competent
                  authorities under Indian law.
                </li>
              </ul>
            </div>

            {/* Section 5: Limitation of Liability */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                5. Limitation of Liability
              </h2>
              <p>
                While Sathiyavani Charitable Trust makes reasonable efforts to maintain continuous
                availability and updated information on this website, the trust disclaims liability
                for any direct, indirect, incidental, or consequential damages arising from the use or
                inability to use the website, temporary technical downtime, or errors in third-party
                telecom networks.
              </p>
            </div>

            {/* Section 6: Governing Law & Jurisdiction */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                6. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of
                the Republic of India. Any disputes arising in connection with the website or trust
                operations shall be subject to the exclusive jurisdiction of the competent courts in
                Chennai, Tamil Nadu.
              </p>
            </div>

            {/* Section 7: Enquiries & Trustee Contact */}
            <div className="pt-6 border-t border-slate-200">
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Questions Regarding Website Terms or Governance?
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  For legal enquiries, corporate CSR queries, or official governance verifications,
                  please contact the founder and managing trustees directly.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-amber text-slate-950 font-semibold rounded-lg hover:bg-brand-amber/90 transition-colors text-sm"
                  >
                    Contact Trustees
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors text-sm"
                  >
                    View Privacy Notice
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
