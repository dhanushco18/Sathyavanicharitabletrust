import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  UserCheck,
  BookOpen,
  Trophy,
  Palette,
  Clock,
  MapPin,
  CheckCircle2,
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
import { VolunteerApplicationForm } from "@/components/forms/VolunteerApplicationForm";

export const metadata: Metadata = {
  title: "Volunteer With Us — Teach, Mentor & Lead | Sathiyavani Trust",
  description:
    "Share your knowledge and mentor underprivileged children in Chennai. Volunteer opportunities for academic tutoring, weekend sports, and arts coaching.",
};

export default function VolunteerPage() {
  const breadcrumbItems = [
    { label: "Get Involved", href: "/get-involved" },
    { label: "Volunteer" },
  ];

  const volunteerRoles = [
    {
      icon: <BookOpen className="w-6 h-6 text-brand-navy" />,
      title: "Academic Subject Tutor",
      commitment: "2 hours on Saturday or Sunday",
      subjects: "Mathematics, Science, English, or Tamil",
      description:
        "Help 6th through 10th standard students clarify complex syllabus concepts, complete homework assignments, and prepare for state board examinations.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-brand-amber" />,
      title: "Weekend Sports & Fitness Coach",
      commitment: "Saturday Mornings (Monthly or Bi-weekly)",
      subjects: "Athletics, Football, Carrom, Yoga",
      description:
        "Coach students in team sports, fitness drills, and cooperative games that instill discipline, sportsmanship, and physical wellbeing.",
    },
    {
      icon: <Palette className="w-6 h-6 text-brand-terracotta" />,
      title: "Creative Arts & Soft-Skills Mentor",
      commitment: "Sunday Afternoons (Flexible)",
      subjects: "Drawing, Public Speaking, Spoken English",
      description:
        "Guide students in discovering hidden artistic talents, building conversational English confidence, and preparing for school cultural events.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-brand-teal" />,
      title: "Event & Campaign Coordinator",
      commitment: "Seasonal Drives (Diwali, Tree Drives)",
      subjects: "Logistics, Kit Packaging, Sapling Care",
      description:
        "Assist in packaging Diwali joy kits, distributing school bags, and coordinating urban tree planting drives alongside community leaders.",
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
                Volunteer Opportunities
              </Badge>
              <Badge variant="amber" size="md">
                Weekend Mentorship
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Share Your Knowledge, Transform a Child's Future
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              You do not need to be a certified educator to make an impact. If you can dedicate
              two hours on a weekend to guide a child with patience and kindness, you can change the
              course of their academic journey.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Volunteer Roles & Expectations */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  How You Can Contribute
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Four Volunteer Roles at Our Center
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Volunteering at Sathiyavani Charitable Trust is hands-on and grassroots. Our
                  tuition sessions take place at the Library Learning Center facility in Chennai.
                  Explore the key volunteer tracks below.
                </p>
              </div>

              {/* Roles Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {volunteerRoles.map((role, idx) => (
                  <Card key={idx} variant="elevated" className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                        {role.icon}
                      </div>

                      <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                        {role.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {role.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-brand-amber" />
                          <span>{role.commitment}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                          <span>Focus: {role.subjects}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* What Volunteers Can Expect */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  What You Can Expect as a Volunteer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">
                      1. Simple Orientation
                    </span>
                    A 30-minute orientation with Mr. Raghu on the classroom environment, student
                    backgrounds, and child safeguarding standards.
                  </div>
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">
                      2. Respectful Setting
                    </span>
                    A dedicated, safe, lit learning center space with established study batches
                    grouped by academic grade level.
                  </div>
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">
                      3. Service Certificate
                    </span>
                    Formal letters of volunteer service and certificates acknowledging your
                    community contributions in Chennai.
                  </div>
                </div>
              </div>

              {/* Child Safeguarding Commitment */}
              <div className="p-6 bg-brand-muted/70 rounded-2xl border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-0.5">
                    Child Safeguarding Policy
                  </span>
                  All volunteers agree to adhere strictly to our non-exploitation and child
                  safeguarding guidelines. We ensure an encouraging, violence-free, and respectful
                  classroom environment at all times.
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Application & Contact Card */}
            <div className="lg:col-span-4 space-y-6">
              <Card variant="elevated" className="p-6 sm:p-7 border-brand-navy/30 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy block mb-1">
                    Direct Volunteer Application
                  </span>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    Apply to Volunteer
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Your application is transmitted directly to our coordinator desk.
                  </p>
                </div>

                <VolunteerApplicationForm />
              </Card>

              {/* Direct Instant Action Option */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Prefer Direct Discussion?
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Call or WhatsApp our team directly to discuss specific volunteering schedules:
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

              {/* Location Reference */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-2">
                <h4 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-amber" />
                  <span>Center Premises</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Classes are conducted at the Library Learning Center facility in Chennai. Exact
                  directions will be shared upon coordinator confirmation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
