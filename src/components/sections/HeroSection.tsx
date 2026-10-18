import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-muted/80 via-white to-brand-canvas pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-slate-200/60">
      {/* Subtle Ambient Background Watermark */}
      <div
        className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-amber/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 bottom-0 w-96 h-96 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Mission Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="navy" size="md">
                <MapPin className="w-3.5 h-3.5 text-brand-navy" aria-hidden="true" />
                Grassroots Community Initiative • Chennai
              </Badge>
            </div>

            {/* Display Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Every child deserves an{" "}
              <span className="text-brand-navy relative inline-block">
                unbroken path
                <span
                  className="absolute left-0 -bottom-1 w-full h-2 bg-brand-amber/30 rounded-full -z-10"
                  aria-hidden="true"
                />
              </span>{" "}
              to learning and dignity.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From teaching children on roadside platforms during the pandemic to running a
              dedicated after-school tuition center, Sathiyavani Charitable Trust provides free
              academic guidance, student sponsorships, and community care for underserved families.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="/programs"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Explore Our Programmes
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/get-involved"
                className="w-full sm:w-auto"
              >
                Get Involved & Sponsor
              </Button>
            </div>

            {/* Verification & Trust Micro-Badges */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0" aria-hidden="true" />
                <span>100% Free Tuition for Children</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-amber shrink-0" aria-hidden="true" />
                <span>Active Grassroots Service Since 2020</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Visual Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-elevated border border-slate-200/80">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-navy-dark">
                  {/* Contextual Photography */}
                  <Image
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80"
                    alt="Books and educational materials representing the tuition center learning environment"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Caption badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-amber block">
                      Core Mission
                    </span>
                    <p className="text-sm font-medium leading-snug text-slate-100 mt-0.5">
                      "No child should be denied education due to financial hardship."
                    </p>
                    <span className="text-xs text-slate-300 block mt-1">
                      — {SITE_CONFIG.founderName}, Founder
                    </span>
                  </div>
                </div>

                {/* Sub-card snippet with center detail */}
                <div className="p-4 bg-brand-canvas rounded-xl mt-3 flex items-center justify-between border border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy-soft flex items-center justify-center shrink-0">
                      <Image
                        src="/assets/brand/logo.png"
                        alt=""
                        width={24}
                        height={24}
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
                    className="text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </div>

              {/* Attribution / Asset Note */}
              <p className="text-[11px] text-center text-slate-400 mt-2.5">
                Note: Visual placeholder shown. Organization tuition center photo shoot scheduled.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
