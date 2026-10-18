import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Heart, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, PROGRAMMES_LIST } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-slate-300 mt-auto border-t border-slate-800">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-white/10 bg-brand-navy">
        <Container className="py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs uppercase font-semibold text-brand-amber tracking-wider">
                Grassroots Community Movement
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                Every child deserves an unbroken path to learning and dignity.
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/sponsor"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-terracotta text-white font-semibold text-sm hover:bg-brand-terracotta-hover transition-colors shadow-sm"
              >
                <Heart className="w-4 h-4 fill-white/20" aria-hidden="true" />
                <span>Sponsor a Student</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
              >
                <span>Visit Our Center</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand & Narrative */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0 bg-white rounded-lg p-1">
                <Image
                  src="/assets/brand/logo.png"
                  alt="Sathiyavani Trust"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white block leading-tight">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-xs text-brand-amber font-medium">
                  Chennai, Tamil Nadu
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              From roadside platform classes during the pandemic to a structured community
              learning movement. Dedicated to free tuition, child wellbeing, and social dignity.
            </p>

            {/* Verified Contact Details */}
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-amber shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${SITE_CONFIG.rawPhone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-amber shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.centerLandmark}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Programmes */}
          <div>
            <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-4">
              Our Programmes
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PROGRAMMES_LIST.map((prog) => (
                <li key={prog.slug}>
                  <Link
                    href={prog.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-300"
                  >
                    <span>{prog.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: About & Organisation */}
          <div>
            <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-4">
              Organisation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Trust
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-white transition-colors">
                  Founder's Story
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:text-white transition-colors">
                  Mission Statement
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-white transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">
                  Impact & Verification
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-white transition-colors">
                  Field Stories & Updates
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events & Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Get Involved */}
          <div>
            <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/volunteer"
                  className="hover:text-white transition-colors"
                >
                  Volunteer as a Tutor
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsor"
                  className="hover:text-white transition-colors text-brand-amber font-medium"
                >
                  Sponsor a Student
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="hover:text-white transition-colors"
                >
                  Corporate CSR Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>WhatsApp Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Registered Public Charitable Trust (2023). Grassroots Non-Profit Organization in Tamil Nadu, India.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy & Safeguarding Notice
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
