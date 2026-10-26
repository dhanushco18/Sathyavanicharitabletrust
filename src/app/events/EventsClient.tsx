"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
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
import { useLanguage } from "@/context/LanguageContext";

export function EventsClient() {
  const { trans } = useLanguage();

  const breadcrumbItems = [
    { label: trans("Events & Activities", "நிகழ்வுகள் & செயல்பாடுகள்") },
  ];

  const events = [
    {
      id: "event-1",
      title: trans(
        "Diwali Joy Distribution Drive 2024",
        "தீபாவளி மகிழ்ச்சி விநியோக இயக்கம் 2024"
      ),
      date: trans("October 2024", "அக்டோபர் 2024"),
      status: trans("Completed & Audited", "நிறைவுற்றது & தணிக்கை செய்யப்பட்டது"),
      statusVariant: "teal" as const,
      location: trans(
        "Library Learning Center & Partner Localities, Chennai",
        "நூலகக் கற்றல் மையம் & களப்பகுதிகள், சென்னை"
      ),
      programme: trans("Festival Support", "பண்டிகைக்கால உதவி"),
      programmeLink: "/programs/festival-support",
      icon: <Gift className="w-5 h-5 text-brand-amber" />,
      description: trans(
        "Successfully distributed 1,000 festive clothing sets, traditional sweet boxes, and school stationery kits to children and families across roadside settlements and tribal communities.",
        "சாலையோர மற்றும் விளிம்புநிலை குடும்பங்களின் 1,000 குழந்தைகளுக்கு புத்தாடைகள், இனிப்புப் பெட்டிகள் மற்றும் கல்வி உபகரணங்கள் வழங்கப்பட்டன."
      ),
    },
    {
      id: "event-2",
      title: trans(
        "Annual Student Sports & Athletics Day",
        "ஆண்டு மாணவர் விளையாட்டு & தடகள விழா"
      ),
      date: trans("December 2024", "டிசம்பர் 2024"),
      status: trans("Completed", "நிறைவுற்றது"),
      statusVariant: "navy" as const,
      location: trans(
        "Community Ground Facility, Chennai",
        "சமுதாய விளையாட்டு மைதானம், சென்னை"
      ),
      programme: trans("Child Development", "குழந்தைகள் மேம்பாடு"),
      programmeLink: "/programs/child-development",
      icon: <Sparkles className="w-5 h-5 text-brand-navy" />,
      description: trans(
        "Organized athletics races, carrom tournaments, and team games for tuition center students, celebrating sportsmanship and awarding academic encouragement prizes.",
        "மாணவர்களின் விளையாட்டுத் திறனை ஊக்குவிக்கும் தடகள ஓட்டங்கள், கேரம் போட்டிகள் மற்றும் ஊக்கப் பரிசுகள் வழங்கும் நிகழ்வு."
      ),
    },
    {
      id: "event-3",
      title: trans(
        "Urban Tree Plantation Drive with Exnora",
        "எக்ஸ்னோரா அமைப்போடு இணைந்த மரக்கன்று நடும் இயக்கம்"
      ),
      date: trans("August 2024", "ஆகஸ்ட் 2024"),
      status: trans("Completed", "நிறைவுற்றது"),
      statusVariant: "teal" as const,
      location: trans(
        "Public Park & School Perimeter, Chennai",
        "பொது பூங்கா & பள்ளி வளாகம், சென்னை"
      ),
      programme: trans("Environmental Protection", "சுற்றுச்சூழல் பாதுகாப்பு"),
      programmeLink: "/programs/environment",
      icon: <TreePine className="w-5 h-5 text-brand-teal" />,
      description: trans(
        "Collaborative biodiversity drive planting native shade and fruit-bearing saplings with student green ambassadors taking charge of post-planting nurturing.",
        "பல்லுயிர் சூழலைப் பாதுகாக்கும் வகையில் மாணவர் பசுமைத் தூதுவர்களுடன் இணைந்து நிழல்தரும் மரக்கன்றுகள் நடப்பட்டன."
      ),
    },
    {
      id: "event-4",
      title: trans(
        "Daily After-School Tuition Batches",
        "தினசரி மாலைநேர இலவசக் கல்வி வகுப்புகள்"
      ),
      date: trans("Monday – Friday (Ongoing)", "திங்கள் – வெள்ளி (தொடர் நிகழ்வு)"),
      status: trans("Active Daily Schedule", "தொடரும் தினசரி வகுப்புகள்"),
      statusVariant: "amber" as const,
      location: trans(
        "Library Learning Center, Chennai",
        "நூலகக் கற்றல் மையம், சென்னை"
      ),
      programme: trans("Free Education", "இலவசக் கல்வி"),
      programmeLink: "/programs/education",
      icon: <GraduationCap className="w-5 h-5 text-brand-terracotta" />,
      description: trans(
        "Structured evening academic assistance for 1st through 10th standard students in Mathematics, Science, and Languages to reinforce school learning.",
        "1 முதல் 10-ஆம் வகுப்பு வரையிலான மாணவர்களுக்கு கணிதம், அறிவியல் மற்றும் மொழிப் பாடங்களில் மாலைநேர சிறப்புப் பயிற்சி."
      ),
    },
    {
      id: "event-5",
      title: trans(
        "Diwali Joy Initiative 2025: Volunteer & Kit Mobilization",
        "தீபாவளி மகிழ்ச்சி இயக்கம் 2025: தன்னார்வலர் & தொகுப்பு ஒருங்கிணைப்பு"
      ),
      date: trans(
        "October 2025 (Upcoming Drive)",
        "அக்டோபர் 2025 (எதிர்வரும் இயக்கம்)"
      ),
      status: trans("In Planning & Mobilization", "திட்டமிடல் & நிதி திரட்டல் நிலையில்"),
      statusVariant: "provisional" as const,
      location: trans(
        "Chennai Communities (Planning Underway)",
        "சென்னை களப்பகுதிகள் (திட்டமிடலில் உள்ளது)"
      ),
      programme: trans("Festival Support", "பண்டிகைக்கால உதவி"),
      programmeLink: "/programs/festival-support",
      icon: <Gift className="w-5 h-5 text-brand-amber" />,
      description: trans(
        "Advance community collection and sponsor coordination targeting the distribution of 1,500 festive care packages to underserved households.",
        "1,500 ஏழைக் குடும்பங்களுக்கு பண்டிகைக் காலப் பரிசுத் தொகுப்புகளை வழங்க தன்னார்வலர்கள் மற்றும் ஆதரவாளர்களை ஒருங்கிணைக்கும் முயற்சி."
      ),
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
                {trans("Field Activities", "களப் பணிகள்")}
              </Badge>
              <Badge variant="teal" size="md">
                {trans("Documented Calendar", "ஆவணப்படுத்தப்பட்ட நாட்காட்டி")}
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {trans(
                "Documented Events & Ongoing Community Schedules",
                "ஆவணப்படுத்தப்பட்ட நிகழ்வுகள் & தொடர் சமுதாய நற்பணிகள்"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {trans(
                "Tracking our daily learning sessions, seasonal green drives, and annual festival distributions. Documented with verified dates and accurate status classifications.",
                "எங்களின் தினசரி மாலைநேர வகுப்புகள், பருவக்கால பசுமை இயக்கங்கள் மற்றும் பண்டிகைக்கால உதவி விநியோகங்களின் தொகுப்பு."
              )}
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
                        {trans("Programme", "திட்டம்")}: {event.programme} →
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
                {trans(
                  "Want to Sponsor or Host an Activity?",
                  "ஒரு நிகழ்வை நடத்த அல்லது நிதியுதவி அளிக்க விரும்புகிறீர்களா?"
                )}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {trans(
                  "Organizations, colleges, and community groups can coordinate weekend workshops, health check-ups, or tree drives with our trust.",
                  "நிறுவனங்கள், கல்லூரிகள் மற்றும் சமூகக் குழுக்கள் வார இறுதிப் பயிலரங்குகள், மருத்துவ முகாம்கள் அல்லது மரக்கன்று நடும் இயக்கங்களை எங்களுடன் இணைந்து ஒருங்கிணைக்கலாம்."
                )}
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button variant="primary" size="md" href="/partnerships">
                  {trans("Propose an Institutional Event", "நிறுவன நிகழ்வை முன்மொழியுங்கள்")}
                </Button>
                <Button variant="outline" size="md" href="/contact">
                  {trans("Contact Center Coordinators", "மைய ஒருங்கிணைப்பாளர்களைத் தொடர்பு கொள்ளுங்கள்")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
