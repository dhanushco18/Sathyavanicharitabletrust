"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  GraduationCap,
  Users,
  TreePine,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";

export function MissionClient() {
  const { trans } = useLanguage();

  const breadcrumbItems = [
    { label: trans("About Us", "எங்களை பற்றி"), href: "/about" },
    { label: trans("Our Mission", "எங்கள் நோக்கம்") },
  ];

  const missionPillars = [
    {
      title: trans("Education for All", "அனைவருக்கும் கல்வி"),
      description: trans(
        "Ensuring that every child receives quality after-school tuition and learning materials regardless of their socioeconomic or family background.",
        "குடும்பப் பின்னணியைப் பொருட்படுத்தாமல் ஒவ்வொரு குழந்தைக்கும் தரமான மாலைநேரக் கல்வி மற்றும் கற்றல் பொருட்கள் கிடைப்பதை உறுதி செய்தல்."
      ),
      icon: <GraduationCap className="w-6 h-6 text-brand-navy" />,
      link: "/programs/education",
      linkText: trans("View Tuition Program", "கல்வித் திட்டத்தை காண்க"),
    },
    {
      title: trans("Community Social Support", "சமூக ஆதரவு"),
      description: trans(
        "Providing direct humanitarian assistance and relief to single-parent families, differently-abled neighbors, and vulnerable tribal households.",
        "ஒற்றைப் பெற்றோர் குடும்பங்கள், மாற்றுத்திறனாளிகள் மற்றும் எளிய பழங்குடியின குடும்பங்களுக்கு நேரடி நிவாரண உதவிகள் வழங்குதல்."
      ),
      icon: <Users className="w-6 h-6 text-brand-terracotta" />,
      link: "/programs/community-outreach",
      linkText: trans("View Outreach Program", "சமூக உதவித் திட்டத்தை காண்க"),
    },
    {
      title: trans("Sustainable Environmental Growth", "நிலையான சுற்றுச்சூழல் வளர்ச்சி"),
      description: trans(
        "Promoting long-term ecological balance through student-led tree plantation drives, environmental awareness, and clean-up campaigns with Exnora.",
        "மாணவர்கள் மூலம் மரக்கன்றுகள் நடும் திட்டங்கள், சுற்றுச்சூழல் விழிப்புணர்வு மற்றும் எக்ஸ்னோராவுடன் தூய்மைப் பணிகள் மூலம் சூழல் சமநிலையை பேணல்."
      ),
      icon: <TreePine className="w-6 h-6 text-brand-teal" />,
      link: "/programs/environment",
      linkText: trans("View Green Initiatives", "சுற்றுச்சூழல் திட்டங்களை காண்க"),
    },
    {
      title: trans("Inclusivity & Dignity", "சமத்துவம் & கண்ணியம்"),
      description: trans(
        "Creating equitable opportunities for personal growth, arts, and childhood celebrations for every child without discrimination.",
        "எந்தவொரு பாகுபாடும் இன்றி ஒவ்வொரு குழந்தையின் தனித்திறன் வளர்ச்சி, கலை மற்றும் குழந்தைப்பருவ கொண்டாட்டங்களுக்கான சம வாய்ப்புகளை உருவாக்குதல்."
      ),
      icon: <HeartHandshake className="w-6 h-6 text-brand-amber" />,
      link: "/programs/child-development",
      linkText: trans("View Child Development", "குழந்தை வளர்ச்சித் திட்டத்தை காண்க"),
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
                {trans("Mission Statement", "நோக்க அறிக்கை")}
              </Badge>
              <Badge variant="teal" size="md">
                {trans("Guiding Principles", "வழிகாட்டும் கோட்பாடுகள்")}
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {trans(
                "Creating Equal Opportunities Through Education & Compassionate Care",
                "கல்வி மற்றும் அன்பான ஆதரவு மூலம் சம வாய்ப்புகளை உருவாக்குதல்"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {trans(
                "Our daily mission is practical and grounded: to eliminate barriers that force children out of classrooms and to extend dignified welfare support to vulnerable families across Chennai.",
                "எங்கள் அன்றாட பணி எதார்த்தமானது: குழந்தைகள் கல்வியை கைவிடுவதற்கான தடைகளை நீக்குவதும், சென்னையில் உள்ள எளிய குடும்பங்களுக்கு கண்ணியமான சமூக நல ஆதரவை வழங்குவதும் ஆகும்."
              )}
            </p>
          </div>
        </Container>
      </section>

      {/* Core Mission Declaration Card */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-brand-navy text-white text-center shadow-elevated relative overflow-hidden">
              <Compass className="w-12 h-12 text-brand-amber mx-auto mb-4" aria-hidden="true" />
              <span className="text-xs uppercase font-bold tracking-widest text-brand-amber block mb-2">
                {trans("Official Declaration", "அதிகாரப்பூர்வ அறிக்கை")}
              </span>
              <p className="font-heading text-2xl sm:text-3xl font-extrabold leading-snug max-w-2xl mx-auto">
                {trans(
                  '"To provide free and accessible education while supporting underprivileged communities through care, inclusivity, and sustainable development."',
                  '"பின்தங்கிய சமூகங்களுக்கு அன்பு, சமத்துவம் மற்றும் நிலையான வளர்ச்சி மூலம் ஆதரவளித்து, முற்றிலும் இலவச மற்றும் சமமான கல்வியை வழங்குவது."'
                )}
              </p>
            </div>

            {/* The 4 Operational Commitments */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  {trans("Translating Purpose into Action", "நோக்கத்தை செயலாக மாற்றுதல்")}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {trans("Four Core Operational Commitments", "நான்கு முக்கிய செயல்பாட்டு உறுதிமொழிகள்")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missionPillars.map((pillar, idx) => (
                  <Card key={idx} variant="elevated" className="p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                        {pillar.icon}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors">
                      <Link href={pillar.link} className="inline-flex items-center gap-1">
                        <span>{pillar.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center space-y-4">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                {trans(
                  "Explore How Our Mission Evolves into Our Long-term Vision",
                  "எங்கள் நோக்கம் எவ்வாறு தொலைநோக்குப் பார்வையாக உருவெடுக்கிறது என்பதை அறியுங்கள்"
                )}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {trans(
                  "See our long-term goals for student retention, academic growth, and community resilience.",
                  "மாணவர் சேர்க்கை, கல்வி வளர்ச்சி மற்றும் சமூக முன்னேற்றத்திற்கான எங்கள் நீண்ட கால இலக்குகளைக் காண்க."
                )}
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button variant="primary" size="md" href="/vision">
                  {trans("Explore Our Vision", "எங்கள் தொலைநோக்கைக் காண்க")}
                </Button>
                <Button variant="outline" size="md" href="/programs">
                  {trans("View All Programmes", "அனைத்து திட்டங்களையும் காண்க")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
