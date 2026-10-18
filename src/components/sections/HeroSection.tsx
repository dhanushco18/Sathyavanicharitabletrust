import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, MapPin, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-mesh-gradient pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-200/70">
      {/* Subtle Background Pattern & Ambient Glows */}
      <div
        className="absolute inset-0 hero-dot-pattern opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-24 w-[32rem] h-[32rem] rounded-full bg-brand-amber/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 w-[30rem] h-[30rem] rounded-full bg-brand-navy/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Mission Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-soft/80 border border-brand-navy/20 text-brand-navy text-xs font-bold tracking-wide shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-brand-navy shrink-0" aria-hidden="true" />
                <span>Grassroots Community Initiative • Chennai</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-navy animate-pulse" />
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Every child deserves an{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-terracotta bg-clip-text text-transparent">
                  unbroken path
                </span>
                <span
                  className="absolute left-0 -bottom-1.5 w-full h-2.5 bg-brand-amber/25 rounded-full -z-10"
                  aria-hidden="true"
                />
              </span>{" "}
              to learning and dignity.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From teaching children on roadside platforms during the pandemic to running a
              dedicated after-school tuition center, Sathiyavani Charitable Trust provides free
              academic guidance, student sponsorships, and community care for underserved families.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="/programs"
                icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                iconPosition="right"
                className="w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore Our Programmes
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/get-involved"
                className="w-full sm:w-auto border-slate-300/80 hover:bg-slate-50 transition-all duration-300"
              >
                Get Involved & Sponsor
              </Button>
            </div>

            {/* Verification & Trust Micro-Badges */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200/80">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span className="font-semibold">100% Free Tuition for Children</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-lg border border-amber-200/80">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span className="font-semibold">Active Service Since 2020</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Visual Card with Glassmorphic Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md p-3.5 shadow-elevated border border-slate-200/90 card-glow-hover">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-navy-dark shadow-inner">
                  {/* High Quality Local Imagery */}
                  <Image
                    src="/assets/images/tuition-learning.jpg"
                    alt="Schoolchildren studying with notebooks and pencils at the Sathiyavani Tuition Center in Chennai"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />

                  {/* Top-Right Floating Live Indicator Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-2 border border-white/20 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Center • 5:30 – 8:00 PM</span>
                  </div>

                  {/* Caption badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber block drop-shadow-xs">
                      Core Mission
                    </span>
                    <p className="text-sm font-semibold leading-snug text-white mt-0.5 drop-shadow-xs">
                      "No child should be denied education due to financial hardship."
                    </p>
                    <span className="text-xs text-slate-300 block mt-1 font-medium">
                      — {SITE_CONFIG.founderName}, Founder
                    </span>
                  </div>
                </div>

                {/* Sub-card snippet with center detail */}
                <div className="p-4 bg-gradient-to-r from-brand-canvas to-white rounded-xl mt-3 flex items-center justify-between border border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy-soft flex items-center justify-center shrink-0 border border-brand-navy/10 shadow-xs">
                      <Image
                        src="/assets/brand/logo.png"
                        alt="Sathiyavani Trust Emblem"
                        width={26}
                        height={26}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        Library Learning Center
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        Evening classes Monday – Friday
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/programs/education"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors group"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Verified Trust Statement */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500 mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Chennai Community Learning Center • 100% Grassroots Volunteer Driven</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

