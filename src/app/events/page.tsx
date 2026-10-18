import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  TreePine,
  Gift,
  GraduationCap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events & Community Drives — Sathiyavani Charitable Trust",
  description:
    "View documented community events, past festival distribution drives, tree plantation campaigns, and upcoming academic sessions in Chennai.",
};

export default function EventsPage() {
  const breadcrumbItems = [{ label: "Events & Activities" }];

  const events = [
    {
      id: "event-1",
      title: "Diwali Joy Distribution Drive 2024",
      date: "October 2024",
      status: "Completed & Audited",
      statusVariant: "teal" as const,
      location: "Library Learning Center & Partner Localities, Chennai",
      programme: "Festival Support",
      programmeLink: "/programs/festival-support",
      icon: <Gift className="w-5 h-5 text-brand-amber" />,
      description:
        "Successfully distributed 1,000 festive clothing sets, traditional sweet boxes, and school stationery kits to children and families across roadside settlements and tribal communities.",
    },
    {
      id: "event-2",
      title: "Annual Student Sports & Athletics Day",
      date: "December 2024",
      status: "Completed",
      statusVariant: "navy" as const,
      location: "Community Ground Facility, Chennai",
      programme: "Child Development",
      programmeLink: "/programs/child-development",
      icon: <Sparkles className="w-5 h-5 text-brand-navy" />,
      description:
        "Organized athletics races, carrom tournaments, and team games for tuition center students, celebrating sportsmanship and awarding academic encouragement prizes.",
    },
    {
      id: "event-3",
      title: "Urban Tree Plantation Drive with Exnora",
      date: "August 2024",
      status: "Completed",
      statusVariant: "teal" as const,
      location: "Public Park & School Perimeter, Chennai",
      programme: "Environmental Protection",
      programmeLink: "/programs/environment",
      icon: <TreePine className="w-5 h-5 text-brand-teal" />,
      description:
        "Collaborative biodiversity drive planting native shade and fruit-bearing saplings with student green ambassadors taking charge of post-planting nurturing.",
    },
    {
      id: "event-4",
      title: "Daily After-School Tuition Batches",
      date: "Monday – Friday (Ongoing)",
      status: "Active Daily Schedule",
      statusVariant: "amber" as const,
      location: "Library Learning Center, Chennai",
      programme: "Free Education",
      programmeLink: "/programs/education",
      icon: <GraduationCap className="w-5 h-5 text-brand-terracotta" />,
      description:
        "Structured evening academic assistance for 1st through 10th standard students in Mathematics, Science, and Languages to reinforce school learning.",
    },
    {
      id: "event-5",
      title: "Diwali Joy Initiative 2025: Volunteer & Kit Mobilization",
      date: "October 2025 (Upcoming Drive)",
      status: "In Planning & Mobilization",
      statusVariant: "provisional" as const,
      location: "Chennai Communities (Planning Underway)",
      programme: "Festival Support",
      programmeLink: "/programs/festival-support",
      icon: <Gift className="w-5 h-5 text-brand-amber" />,
      description:
        "Advance community collection and sponsor coordination targeting the distribution of 1,500 festive care packages to underserved households.",
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
                Field Activities
              </Badge>
              <Badge variant="teal" size="md">
                Documented Calendar
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Documented Events & Ongoing Community Schedules
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tracking our daily learning sessions, seasonal green drives, and annual festival
              distributions. Documented with verified dates and accurate status classifications.
            </p>
          </div>
        </Container>
      </section>

      {/* Events Listing */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="space-y-6 max-w-4xl mx-auto">
            {events.map((event) => (
              <Card
                key={event.id}
                variant="default"
                className="p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-card transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      {event.icon}
                    </div>
                    <div>
                      <h2 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                        {event.title}
                      </h2>
                      <Link
                        href={event.programmeLink}
                        className="text-xs font-semibold text-brand-navy hover:text-brand-terracotta transition-colors"
                      >
                        Programme: {event.programme} →
                      </Link>
                    </div>
                  </div>

                  <Badge variant={event.statusVariant} size="sm">
                    {event.status}
                  </Badge>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-navy" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-amber" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </Card>
            ))}

            {/* Event Proposal CTA */}
            <div className="p-8 bg-brand-muted/70 rounded-3xl border border-slate-200 text-center space-y-4 mt-12">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Want to Sponsor or Host an Activity?
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Organizations, colleges, and community groups can coordinate weekend workshops,
                health check-ups, or tree drives with our trust.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button variant="primary" size="md" href="/partnerships">
                  Propose an Institutional Event
                </Button>
                <Button variant="outline" size="md" href="/contact">
                  Contact Center Coordinators
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
