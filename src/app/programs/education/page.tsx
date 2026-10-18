import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  Clock,
  Heart,
  CheckCircle2,
  AlertCircle,
  FileText,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Education & Tuition Support",
  description:
    "Providing completely free daily evening tuition, learning kits, and school fee assistance for underprivileged students in Chennai.",
};

export default function EducationProgramPage() {
  const breadcrumbItems = [
    { label: "Programmes", href: "/programs" },
    { label: "Free Education" },
  ];

  const operationalPillars = [
    {
      title: "Daily Academic Mentorship",
      description:
        "Evening tutoring sessions focusing on core subjects (Mathematics, Science, Tamil, and English) to help students keep pace with grade-level competencies.",
      icon: <BookOpen className="w-5 h-5 text-brand-navy" />,
    },
    {
      title: "School-Fee & Kit Sponsorship",
      description:
        "Providing essential textbooks, stationery kits, school bags, and direct tuition fee assistance for students at imminent risk of dropping out.",
      icon: <Heart className="w-5 h-5 text-brand-terracotta" />,
    },
    {
      title: "Dedicated Study Space",
      description:
        "A safe, lit, and quiet environment under the local library where children can study without home overcrowding or domestic interruptions.",
      icon: <MapPin className="w-5 h-5 text-brand-amber" />,
    },
  ];

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      caption: "Interactive classroom study sessions focusing on foundational arithmetic and science concepts.",
      isPlaceholder: true,
    },
    {
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      caption: "Annual educational supply kits provided to students before the start of the academic year.",
      isPlaceholder: true,
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      caption: "Mentors conducting one-on-one reading and spoken language exercises.",
      isPlaceholder: true,
    },
  ];

  return (
    <div className="bg-brand-canvas min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-brand-muted/70 border-b border-slate-200">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* Programme Hero Section */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="navy" size="md">
                Flagship Programme
              </Badge>
              <Badge variant="teal" size="md">
                Zero Cost to Beneficiary
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Free After-School Tuition & Student Sponsorship
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Ensuring that economic hardship never interrupts a child's education. We operate
              structured evening classes, provide textbooks, and sponsor school fees for
              underprivileged students in Chennai.
            </p>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Center Location</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Library Center, Chennai
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Schedule</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Mon – Fri (Evening Batches)
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Beneficiary Cost</span>
              <span className="font-heading text-sm font-bold text-emerald-800 block mt-0.5">
                100% Free of Charge
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Subjects Covered</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Math, Science, English, Tamil
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Body: 2-Column Editorial Layout */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Educational Need, Operation & Gallery (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Section 1: The Need Addressed */}
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  The Problem We Address
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Bridging the Educational Gap for First-Generation Learners
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  In many underserved communities in Chennai, children attend local government or
                  affordable private institutions but lack academic guidance at home. Parents who
                  work long hours as daily-wage earners or domestic workers often cannot assist with
                  complex homework or board exam preparations.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Without supportive intervention, students fall behind in foundational math and
                  languages, ultimately resulting in high dropout rates before completing 10th
                  standard. Our center provides the regular reinforcement, patience, and confidence
                  they need to stay in school.
                </p>
              </div>

              {/* Section 2: Who the Programme Serves */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Who We Support
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span>
                      <strong>Children of single-parent households:</strong> Where a sole earner
                      cannot afford private tuition fees.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span>
                      <strong>Students at risk of discontinuing school:</strong> Identifying
                      financial crises and stepping in with school-fee assistance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span>
                      <strong>First-generation school-goers:</strong> Providing structured
                      examination preparation and mentorship.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 3: How the Programme Operates */}
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-slate-900">
                  How the Tuition Center Operates
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {operationalPillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                          {pillar.icon}
                        </div>
                        <h4 className="font-heading text-base font-bold text-slate-900 mb-2">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Authentic Visual Gallery */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-2xl font-bold text-slate-900">
                    Learning in Action
                  </h2>
                  <span className="text-xs text-slate-400 italic">
                    Editorial Reference Gallery
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {galleryItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle group"
                    >
                      <div className="relative aspect-[4/3] w-full bg-slate-100">
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3.5">
                        <p className="text-xs text-slate-600 leading-snug line-clamp-3">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Honest Progress & Outcomes */}
              <div className="p-6 bg-brand-muted/70 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-brand-navy">
                  <FileText className="w-5 h-5 shrink-0" />
                  <h3 className="font-heading text-lg font-bold">
                    Measured Outcomes & Progress Tracking
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our tuition center measures success not through inflated numbers, but through
                  continuous student retention, attendance consistency, and progression into higher
                  grades. Standardized student registers are maintained at the library facility.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Zero Fee Policy Enforced
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Verified Regular Batches
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Annual Kit Disbursements
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sponsorship Action Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card variant="elevated" className="border-brand-terracotta/30 p-6 sm:p-7">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-terracotta bg-brand-terracotta-soft px-2.5 py-1 rounded-full mb-4">
                    <Heart className="w-3.5 h-3.5 fill-brand-terracotta" />
                    <span>Direct Impact</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                    Sponsor a Student's Education
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Your contribution directly provides school fees, notebook sets, geometry boxes,
                    and evening study materials for an enrolled student.
                  </p>

                  {/* Typical Cost Breakdown (Provisional Estimate) */}
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-200/80 mb-6 space-y-2 text-xs">
                    <span className="font-bold text-slate-900 block">Sponsorship Tiers:</span>
                    <div className="flex justify-between text-slate-600">
                      <span>Annual Study Kit & Bag</span>
                      <span className="font-semibold text-slate-900">₹1,500</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Term School Fee Assistance</span>
                      <span className="font-semibold text-slate-900">₹3,500</span>
                    </div>
                    <div className="flex justify-between text-slate-600 border-t border-slate-200 pt-1.5 font-bold">
                      <span>Full Year Student Support</span>
                      <span className="text-brand-terracotta font-bold">₹6,000 / year</span>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    href="/get-involved/sponsor"
                    className="w-full justify-center shadow-md shadow-brand-terracotta/20"
                  >
                    Pledge Student Support
                  </Button>

                  <p className="text-[11px] text-center text-slate-400 mt-3">
                    Inquiries are handled directly by trust coordinators. No automated online checkout.
                  </p>
                </Card>

                {/* Volunteer Callout Card */}
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-navy" />
                    <h4 className="font-heading text-base font-bold text-slate-900">
                      Teach or Mentor
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Have 2 hours to spare on weekends? Join our dedicated team of volunteer tutors
                    in Chennai.
                  </p>
                  <Link
                    href="/get-involved/volunteer"
                    className="text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors inline-flex items-center gap-1"
                  >
                    <span>Volunteer Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
