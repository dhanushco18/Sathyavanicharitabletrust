"use client";

import React from "react";
import Link from "next/link";
import { Shield, FileCheck, Lock, HelpCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function TransparencySection() {
  const { t, trans } = useLanguage();

  const compliancePillars = [
    {
      icon: <Shield className="w-5 h-5 text-brand-navy" />,
      title: trans("Public Charitable Trust", "பொது தொண்டு அறக்கட்டளை"),
      description: trans(
        "Formally registered trust structure in Tamil Nadu with dedicated board oversight and non-profit governance.",
        "தமிழ்நாட்டில் பதிவு செய்யப்பட்ட அறக்கட்டளை அமைப்பு, வெளிப்படையான வரவு-செலவு மற்றும் தணிக்கை நடைமுறைகள்."
      ),
      status: trans("Registered Entity (2023)", "பதிவு செய்யப்பட்ட அமைப்பு (2023)"),
    },
    {
      icon: <FileCheck className="w-5 h-5 text-brand-amber" />,
      title: trans("Documented Distribution Ledgers", "நேரடி கள விநியோக பதிவேடுகள்"),
      description: trans(
        "Every festive kit and scholarship fee disbursement is recorded in physical registers maintained at the center.",
        "ஒவ்வொரு கல்வி கட்டண உதவியும் தீபாவளி புத்தாடைகளும் மையத்தில் உள்ள கள பதிவேடுகளில் முறையாக பதிவு செய்யப்படுகின்றன."
      ),
      status: trans("Physical Register Audit", "கள பதிவேடு தணிக்கை"),
    },
    {
      icon: <Lock className="w-5 h-5 text-brand-teal" />,
      title: trans("Child Safeguarding Standards", "குழந்தைகள் பாதுகாப்பு நெறிமுறைகள்"),
      description: trans(
        "Strict adherence to minor privacy, parental consent for media, and safe classroom environments.",
        "குழந்தைகளின் கண்ணியம், தனியுரிமை மற்றும் பெற்றோர் ஒப்புதலுடன் கூடிய பாதுகாப்பான வகுப்பறை சூழல்."
      ),
      status: trans("Zero Exploitation Policy", "சுரண்டலற்ற தூய பணி"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Subtle Ambient Radial Wash */}
          <div
            className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-amber/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block mb-2">
              {trans("Institutional Governance", "நம்பகமான நிர்வாகம்")}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {t("transparencyHeading")}
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {t("transparencySubhead")}
            </p>
          </div>

          {/* 3 Governance Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {compliancePillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-brand-amber/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-card"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-4 border border-white/20 shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-white/15 text-xs font-semibold text-brand-amber flex items-center justify-between">
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="mt-10 pt-6 border-t border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-brand-amber shrink-0" aria-hidden="true" />
              <span>
                {trans(
                  "Official Trust Deed copies, registration filings, and annual utilization certificates are verified by board trustees.",
                  "அறக்கட்டளை ஆவணங்கள், பதிவு நகல்கள் மற்றும் ஆண்டு அறிக்கை நிர்வாக அறங்காவலர்களால் சரிபார்க்கப்படுகின்றன."
                )}
              </span>
            </div>
            <Link
              href="/about"
              className="text-xs font-bold text-white hover:text-brand-amber transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>{trans("View Trust Governance", "அறக்கட்டளை நிர்வாகம்")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
