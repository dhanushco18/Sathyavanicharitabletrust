import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  HelpCircle,
  CheckCircle2,
  Building,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us & Center Location — Sathiyavani Trust",
  description:
    "Direct contact details, telephone numbers, WhatsApp messaging, and visiting hours for Sathiyavani Charitable Trust in Chennai.",
};

export default function ContactPage() {
  const breadcrumbItems = [{ label: "Contact Us" }];

  const enquiryCategories = [
    {
      title: "Student Enrollment & Tuition Guidance",
      target: "For Parents & Guardians",
      description:
        "Learn how to enroll your child in our free evening tuition center classes (1st to 10th standard) or inquire about school fee assistance.",
    },
    {
      title: "Volunteer Tutor Applications",
      target: "For Educators & Youth Mentors",
      description:
        "Express your interest in volunteering for weekend academic coaching, sports training, or arts workshops at our center.",
    },
    {
      title: "Student & Kit Sponsorship",
      target: "For Individual Donors",
      description:
        "Pledge to cover annual school fees, notebook sets, or Diwali care packages with direct financial accountability.",
    },
    {
      title: "Corporate CSR & Institutional Collaboration",
      target: "For Companies & Civic Groups",
      description:
        "Propose joint community greening drives with Exnora or sponsor multi-student academic batches in Chennai.",
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
              <Badge variant="navy" size="md">
                Direct Contact
              </Badge>
              <Badge variant="amber" size="md">
                Chennai Headquarters
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Get in Touch with Our Trust Leadership
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you are a parent seeking free tuition for your child, a prospective volunteer,
              or a sponsor wishing to support our mission, we welcome your direct communication.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 Cols: Verified Channels & Hours */}
            <div className="lg:col-span-7 space-y-8">
              {/* Primary Contact Channels */}
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Official Communication
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Verified Contact Channels
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Our operations are coordinated directly by trust founder Mr. Raghu N. and our
                  dedicated center leads.
                </p>
              </div>

              {/* Direct Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${SITE_CONFIG.rawPhone}`}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-navy/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-navy-soft flex items-center justify-center text-brand-navy mb-4 group-hover:scale-105 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
                      Direct Telephone
                    </span>
                    <h3 className="font-heading text-xl font-extrabold text-slate-900 mt-1">
                      {SITE_CONFIG.phone}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2">
                      Tap to call directly from your mobile device.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 text-xs font-bold text-brand-navy flex items-center justify-between">
                    <span>One-Tap Dial</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card hover:border-[#25D366]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-6 h-6 fill-emerald-500" />
                    </div>
                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
                      Instant Messaging
                    </span>
                    <h3 className="font-heading text-xl font-extrabold text-slate-900 mt-1">
                      WhatsApp Chat
                    </h3>
                    <p className="text-xs text-slate-500 mt-2">
                      Message the coordinator with questions or inquiries.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 text-xs font-bold text-emerald-700 flex items-center justify-between">
                    <span>Open WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>

              {/* Center Location & Visiting Hours */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-amber" />
                  <span>Center Premises & Visiting Hours</span>
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    <strong>Facility Location:</strong> {SITE_CONFIG.centerLandmark}
                  </p>
                  <p>
                    <strong>Address:</strong> {SITE_CONFIG.location}
                  </p>
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-navy" />
                      Classroom Visiting Hours:
                    </span>
                    <p>Monday through Friday: 5:00 PM – 8:00 PM (During evening tuition batches)</p>
                    <p>Saturday & Sunday: By prior coordinator appointment for volunteer orientation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Enquiry Types Guide & Phase 5 Notice */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold text-brand-terracotta tracking-wider block">
                    Assistance Guide
                  </span>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mt-1">
                    Types of Enquiries Handled
                  </h3>
                </div>

                <div className="space-y-4">
                  {enquiryCategories.map((item, idx) => (
                    <div key={idx} className="p-4 bg-brand-canvas rounded-xl border border-slate-100 space-y-1">
                      <span className="text-[11px] font-bold uppercase text-brand-navy tracking-wider block">
                        {item.target}
                      </span>
                      <h4 className="font-heading text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Honest Digital Form Integration Disclosure */}
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-700">
                    <HelpCircle className="w-4 h-4 text-brand-amber shrink-0" />
                    <span>Technical Architecture Note (Phase 5):</span>
                  </div>
                  <p className="leading-relaxed">
                    Interactive web submission forms with automated database logging (Supabase)
                    and coordinator email alerts are scheduled for Phase 5. Direct telephone and
                    WhatsApp ensure zero lost messages today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
