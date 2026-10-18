import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Notice & Child Safeguarding Policy — Sathiyavani Trust",
  description:
    "How Sathiyavani Charitable Trust handles personal data, child protection standards, parental photography consent, and information privacy in Chennai.",
};

export default function PrivacyPage() {
  const breadcrumbItems = [{ label: "Privacy & Child Safeguarding" }];

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
                Policy Document
              </Badge>
              <Badge variant="teal" size="md">
                DPDP Act 2023 Principles
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Privacy Notice & Child Safeguarding Standards
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Sathiyavani Charitable Trust is committed to ethical data management, complete personal
              privacy, and the absolute protection and dignity of every minor in our programmes.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Policy Content */}
      <section className="py-12 sm:py-20">
        <Container size="narrow">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-subtle space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Legal Notice Header */}
            <div className="p-4 bg-brand-muted/70 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">Document Status:</span>
              <p>
                Draft Policy Framework for Phase 3 Public Prototype. Subject to final review and
                ratification by the Board of Trustees of Sathiyavani Charitable Trust. Last updated:
                October 2026.
              </p>
            </div>

            {/* 1. Information Collected */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                1. Information We Collect
              </h2>
              <p>
                As a public charitable organization, we practice strict data minimization. When you
                contact us via telephone, WhatsApp, or future web inquiry forms, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li>Your name and contact phone number.</li>
                <li>Your city or neighborhood in Chennai.</li>
                <li>Your stated area of inquiry (e.g., student sponsorship, tutoring volunteerism, CSR).</li>
              </ul>
              <p className="text-sm">
                We do not collect Aadhaar numbers, biometric data, credit card information, or
                unnecessary personal identifiers through this website.
              </p>
            </div>

            {/* 2. Purpose of Collection */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                2. Purpose of Information Use
              </h2>
              <p>
                Information collected is used strictly and exclusively for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li>Directly answering your queries regarding tuition enrollment or community welfare.</li>
                <li>Coordinating volunteer tutoring schedules and classroom orientations.</li>
                <li>Providing bank transfer instructions and official trust receipts for educational sponsorships.</li>
              </ul>
              <p className="font-semibold text-slate-800 text-sm">
                We never sell, rent, monetize, or disclose contact details to commercial third-party marketing companies.
              </p>
            </div>

            {/* 3. Child Safeguarding Policy */}
            <div className="p-6 bg-brand-canvas rounded-2xl border border-slate-200 space-y-3">
              <h2 className="font-heading text-lg font-bold text-brand-navy flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-teal" />
                <span>3. Child Protection & Media Safeguarding Policy</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                As an organization working directly with minor children and vulnerable households, we
                strictly enforce the following protective measures:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                <li>
                  <strong>Parental / Guardian Consent:</strong> No photograph or video of any enrolled
                  student is published without written consent from their parent or legal guardian.
                </li>
                <li>
                  <strong>Dignified Representation:</strong> We strictly prohibit portraying children in
                  degrading, unkempt, or pity-driven imagery. All depictions reflect joyful learning,
                  sports, and healthy childhood growth.
                </li>
                <li>
                  <strong>Identity Protection:</strong> Children's full family names, home street
                  addresses, or personal vulnerability records are never disclosed on public channels.
                </li>
                <li>
                  <strong>Right to Deletion:</strong> Parents may request the immediate removal of any
                  media asset featuring their child by notifying the trust coordinator.
                </li>
              </ul>
            </div>

            {/* 4. Data Retention & Security */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                4. Data Retention and Security
              </h2>
              <p className="text-sm text-slate-600">
                We maintain appropriate physical and administrative safeguards to protect
                communications. Inquiries that have been closed or resolved are periodically archived
                and expunged to prevent unauthorized retention.
              </p>
            </div>

            {/* 5. Contact for Privacy Inquiries */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                5. Contact the Trust Leadership
              </h2>
              <p className="text-sm text-slate-600">
                If you have questions regarding this privacy notice or wish to request data correction
                or media removal, contact:
              </p>
              <div className="p-4 bg-brand-canvas rounded-xl text-xs sm:text-sm text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 block">{SITE_CONFIG.name}</span>
                <p>Coordinator Phone: {SITE_CONFIG.phone}</p>
                <p>Premises: {SITE_CONFIG.centerLandmark}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
