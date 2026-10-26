"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Award,
  Users2,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";

export function VisionClient() {
  const { trans } = useLanguage();

  const breadcrumbItems = [
    { label: trans("About Us", "எங்களை பற்றி"), href: "/about" },
    { label: trans("Our Vision", "எங்கள் தொலைநோக்கு") },
  ];

  const visionPillars = [
    {
      title: trans("Universal Educational Equity", "அனைவருக்கும் சமமான கல்வி"),
      description: trans(
        "A future where no student discontinues schooling due to unpaid fees or lack of study support. Ensuring equal access to learning tools and digital literacy.",
        "கட்டணப் பற்றாக்குறை அல்லது வழிகாட்டல் இன்மையால் எந்தவொரு மாணவரும் படிப்பை கைவிடாத எதிர்காலம். கல்வி உபகரணங்கள் மற்றும் டிஜிட்டல் கல்வியறிவை அனைவருக்கும் உறுதி செய்தல்."
      ),
      icon: <BookOpen className="w-6 h-6 text-brand-navy" />,
    },
    {
      title: trans("Confidence & Character Growth", "தன்னம்பிக்கை & நற்பண்பு வளர்ச்சி"),
      description: trans(
        "Fostering creativity, emotional wellbeing, sportsmanship, and leadership so children develop into resilient, proactive citizens.",
        "படைப்பாற்றல், மன நலம், விளையாட்டு மற்றும் தலைமைத்துவத்தை வளர்த்து, குழந்தைகளை சிறந்த எதிர்கால குடிமக்களாக உருவாக்குதல்."
      ),
      icon: <Award className="w-6 h-6 text-brand-amber" />,
    },
    {
      title: trans("Resilient & Empowered Communities", "வலுவான & விழிப்புணர்வுள்ள சமூகங்கள்"),
      description: trans(
        "Building strong community safety nets that protect single-parent households, support differently-abled neighbors, and uplift tribal groups.",
        "ஒற்றைப் பெற்றோர், மாற்றுத்திறனாளிகள் மற்றும் எளிய மக்களைப் பாதுகாத்து சமூகப் பாதுகாப்பு வளையங்களை உருவாக்குதல்."
      ),
      icon: <Users2 className="w-6 h-6 text-brand-terracotta" />,
    },
    {
      title: trans("Sustainable Social Transformation", "நிலையான சமூக மாற்றம்"),
      description: trans(
        "Encouraging civic and environmental responsibility through student tree plantation ambassador programs and community clean-up drives.",
        "மாணவர் தூதர்கள் மூலம் மரம் நடுதல் மற்றும் தூய்மைப் பணிகள் வாயிலாக சுற்றுச்சூழல் விழிப்புணர்வை ஏற்படுத்துதல்."
      ),
      icon: <TrendingUp className="w-6 h-6 text-brand-teal" />,
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
              <Badge variant="amber" size="md">
                {trans("Long-Term Vision", "நீண்டகால தொலைநோக்கு")}
              </Badge>
              <Badge variant="navy" size="md">
                {trans("Social Transformation", "சமூக மாற்றம்")}
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {trans(
                "Building a Better, More Equitable Future for Every Child",
                "ஒவ்வொரு குழந்தைக்கும் சிறந்த, சமத்துவமான எதிர்காலத்தை உருவாக்குதல்"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {trans(
                "We envision an inclusive society where financial barriers no longer dictate a child’s potential, and where every community possesses the dignity, tools, and solidarity to thrive.",
                "பொருளாதாரத் தடைகள் குழந்தையின் எதிர்காலத்தை தீர்மானிக்காத, ஒவ்வொரு சமூகமும் கண்ணியத்துடனும் வளத்துடனும் வாழும் சமத்துவமான சமுதாயத்தை நாங்கள் நோக்கமாகக் கொண்டுள்ளோம்."
              )}
            </p>
          </div>
        </Container>
      </section>

      {/* Vision Statement Banner */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white text-center shadow-elevated relative overflow-hidden">
              <Sparkles className="w-12 h-12 text-brand-amber mx-auto mb-4" aria-hidden="true" />
              <span className="text-xs uppercase font-bold tracking-widest text-brand-amber block mb-2">
                {trans("Vision Statement", "தொலைநோக்கு அறிக்கை")}
              </span>
              <p className="font-heading text-2xl sm:text-3xl font-extrabold leading-snug max-w-2xl mx-auto">
                {trans(
                  '"To build a society where every child, regardless of background, has equal opportunities to learn, grow, and succeed."',
                  '"பின்னணி பாராமல் ஒவ்வொரு குழந்தைக்கும் கற்கவும், வளரவும், வெற்றி பெறவும் சம வாய்ப்புகள் உள்ள ஒரு சமுதாயத்தை உருவாக்குவது."'
                )}
              </p>
            </div>

            {/* The 4 Vision Pillars */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  {trans("Strategic Horizon", "செயல் உத்தி")}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {trans("Four Pillars of Our Long-term Vision", "எங்கள் தொலைநோக்கின் நான்கு தூண்கள்")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visionPillars.map((pillar, idx) => (
                  <Card key={idx} variant="elevated" className="p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                        {pillar.icon}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Looking Ahead Callout */}
            <div className="p-8 bg-brand-muted/70 rounded-3xl border border-slate-200 space-y-4">
              <span className="text-xs uppercase font-bold text-brand-amber tracking-wider block">
                {trans("Looking Ahead", "எதிர்காலப் பார்வை")}
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                {trans(
                  "Expanding Our Reach Across Chennai Communities",
                  "சென்னை முழுவதும் எங்கள் சேவைகளை விரிவுபடுத்துதல்"
                )}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {trans(
                  "As we advance into the future, our goal is to scale after-school mentorship to more neighborhood centers, increase our annual student scholarship capacity, and deepen our environmental clean-up campaigns with Exnora Organization.",
                  "எதிர்காலத்தில், கூடுதல் பகுதிகளில் மாலைநேர கல்வி மையங்களைத் தொடங்குவதும், ஆண்டுதோறும் அதிக மாணவர்களுக்கு கல்வி உதவித்தொகை வழங்குவதும், எக்ஸ்னோரா அமைப்புடன் சுற்றுச்சூழல் பணிகளை தீவிரப்படுத்துவதும் எங்கள் இலக்காகும்."
                )}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button variant="primary" size="md" href="/sponsor">
                  {trans("Help Realize This Vision", "இந்த நோக்கத்திற்கு உதவுங்கள்")}
                </Button>
                <Button variant="outline" size="md" href="/volunteer">
                  {trans("Join as a Volunteer Tutor", "தன்னார்வ ஆசிரியராக இணையுங்கள்")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
