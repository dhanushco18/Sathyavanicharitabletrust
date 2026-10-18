import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Heart,
  BookOpen,
  Calendar,
  Users,
  Compass,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG, PROGRAMMES_LIST } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About the Trust — History, Purpose & Community Roots",
  description:
    "Learn about Sathiyavani Charitable Trust, our grassroots origins during the COVID-19 pandemic, and our mission to provide free education and community welfare in Chennai.",
};

export default function AboutPage() {
  const breadcrumbItems = [{ label: "About Us" }];

  const timelineMilestones = [
    {
      year: "2020",
      title: "Pandemic Roadside Initiative",
      desc: "When pandemic lockdowns closed schools, Mr. Raghu N. noticed children living on roadside platforms falling behind without access to digital classrooms. He began daily informal tutoring sessions on the pavement.",
      tag: "Grassroots Inception",
    },
    {
      year: "2021",
      title: "Temple & Community Shelter",
      desc: "To protect students from weather extremes and monsoon rains, classes moved into covered local temple spaces with volunteer support from neighborhood youth.",
      tag: "Expanded Sheltered Learning",
    },
    {
      year: "2022",
      title: "Home Tutoring & Study Center",
      desc: "Mr. Raghu dedicated personal living space to house daily study batches, books, notebook banks, and evening study lamps for first-generation learners.",
      tag: "Academic Consistency",
    },
    {
      year: "2023",
      title: "Formal Trust Registration & Library Facility",
      desc: "Sathiyavani Charitable Trust was formally registered as a public charitable trust in Tamil Nadu. Local police authorities recognized the community service, providing space under a local library.",
      tag: "Formal Trust Establishment",
    },
    {
      year: "2024–Present",
      title: "Multi-Pillar Community Movement",
      desc: "Operating 5 continuous community programs: Free Tuition, Holistic Child Development, Single-Parent Support, Annual Diwali Joy distributions (1,000+ recipients), and Environmental Tree Drives.",
      tag: "Current Active Outreach",
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
                About Sathiyavani Trust
              </Badge>
              <Badge variant="amber" size="md">
                Grassroots Since 2020
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empowering Underprivileged Communities Through Education, Care, and Dignity
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Sathiyavani Charitable Trust is a non-profit organization rooted in Chennai,
              dedicated to creating lasting social change by providing free educational opportunities,
              childhood joy, and social security for underserved families.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Detailed Narrative */}
            <div className="lg:col-span-8 space-y-12">
              {/* Who We Are & Purpose */}
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Our Identity & Purpose
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Building Equal Opportunities for Every Child
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We believe that every child deserves access to education, dignity, care, and
                  development regardless of their family’s financial circumstances. Through dedicated
                  volunteers, individual sponsors, and community partnerships, we work on the ground
                  to ensure no student is forced to drop out due to poverty.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our service model is human-centered and dignity-first. We do not view community
                  members as passive aid recipients, but as active partners in their own growth and
                  self-reliance.
                </p>
              </div>

              {/* The Social Need We Address */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  The Challenges We Address in Chennai
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-200/70">
                    <h4 className="font-heading text-sm font-bold text-brand-navy mb-1">
                      First-Generation Learning Hurdles
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Children of daily-wage workers often lack academic reinforcement at home,
                      causing them to fall behind in foundational mathematics and literacy.
                    </p>
                  </div>
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-200/70">
                    <h4 className="font-heading text-sm font-bold text-brand-terracotta mb-1">
                      Secondary School Dropout Risks
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Financial shocks, sudden school-fee hikes, or family illness frequently force
                      promising high-school students to abandon their education prematurely.
                    </p>
                  </div>
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-200/70">
                    <h4 className="font-heading text-sm font-bold text-brand-amber mb-1">
                      Vulnerable Single-Parent Homes
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Single mothers and widowed breadwinners face extreme economic stress balancing
                      subsistence wages with their children's schooling and nutritional needs.
                    </p>
                  </div>
                  <div className="p-4 bg-brand-canvas rounded-xl border border-slate-200/70">
                    <h4 className="font-heading text-sm font-bold text-brand-teal mb-1">
                      Social Isolation of Tribal & Disabled Neighbors
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Differently-abled individuals and tribal settlements frequently experience
                      exclusion from mainstream festive celebrations and civic welfare schemes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Documented History & Milestones */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                    Our Operational History
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-slate-900 mt-1">
                    Timeline of Grassroots Growth
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Tracing our journey from an emergency roadside tutoring effort during the
                    lockdown to a structured non-profit organization.
                  </p>
                </div>

                <div className="space-y-4">
                  {timelineMilestones.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start gap-4"
                    >
                      <div className="flex sm:flex-col items-center gap-2 sm:gap-1 shrink-0">
                        <span className="font-heading text-xl font-extrabold text-brand-navy">
                          {item.year}
                        </span>
                        <Badge variant="navy" size="sm">
                          {item.tag}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-base font-bold text-slate-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach to Community Engagement */}
              <div className="p-6 bg-brand-navy text-white rounded-2xl space-y-3">
                <h3 className="font-heading text-lg font-bold text-brand-amber">
                  Our Guiding Ethical Code
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  We never photograph or portray children in degrading conditions for publicity.
                  Every volunteer undergoes basic safeguarding orientation, and all student records
                  remain strictly confidential to protect child dignity.
                </p>
                <div className="pt-2">
                  <Link
                    href="/privacy"
                    className="text-xs font-semibold text-white hover:text-brand-amber underline inline-flex items-center gap-1"
                  >
                    <span>Read Our Child Safeguarding & Privacy Policy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Quick Navigation & Leadership Spotlight */}
            <div className="lg:col-span-4 space-y-6">
              {/* Founder Profile Card */}
              <Card variant="elevated" className="p-6 sm:p-7">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber block mb-2">
                  Leadership
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  {SITE_CONFIG.founderName}
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-4">
                  Founder & President
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  "No child should be denied education due to financial hardship." A dedicated
                  social worker who turned personal conviction into an enduring community movement.
                </p>
                <Button variant="secondary" size="sm" href="/founder" className="w-full justify-center">
                  Read Full Founder Story
                </Button>
              </Card>

              {/* Mission & Vision Quick Links */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Guiding Declarations
                </h4>
                <div className="space-y-2">
                  <Link
                    href="/mission"
                    className="flex items-center justify-between p-3 rounded-xl bg-brand-canvas hover:bg-brand-navy-soft text-slate-800 hover:text-brand-navy text-sm font-semibold transition-colors"
                  >
                    <span>Our Stated Mission</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link
                    href="/vision"
                    className="flex items-center justify-between p-3 rounded-xl bg-brand-canvas hover:bg-brand-navy-soft text-slate-800 hover:text-brand-navy text-sm font-semibold transition-colors"
                  >
                    <span>Our Long-term Vision</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link
                    href="/impact"
                    className="flex items-center justify-between p-3 rounded-xl bg-brand-canvas hover:bg-brand-navy-soft text-slate-800 hover:text-brand-navy text-sm font-semibold transition-colors"
                  >
                    <span>Verified Impact Metrics</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Get Involved Action Card */}
              <Card variant="flat" className="p-6 text-center space-y-4">
                <Heart className="w-8 h-8 text-brand-terracotta mx-auto" />
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  Join Our Grassroots Effort
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Support a child's school fees or volunteer your time on weekends at our Chennai
                  tuition center.
                </p>
                <div className="pt-1 flex flex-col gap-2">
                  <Button variant="primary" size="sm" href="/sponsor" className="w-full justify-center">
                    Sponsor a Student
                  </Button>
                  <Button variant="outline" size="sm" href="/volunteer" className="w-full justify-center">
                    Volunteer as a Tutor
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
