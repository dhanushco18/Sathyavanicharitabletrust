"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Handshake,
  Heart,
  ChevronDown,
  ArrowRight,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactInquiryForm } from "@/components/forms/ContactInquiryForm";
import { useLanguage } from "@/context/LanguageContext";

export function ContactClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { t, trans } = useLanguage();

  const breadcrumbItems = [
    { label: t("navHome"), href: "/" },
    { label: t("navContact") },
  ];

  const faqItems = [
    {
      question: trans(
        "How can I volunteer with Sathiyavani Charitable Trust?",
        "சத்தியவாணி அறக்கட்டளையில் நான் எவ்வாறு தன்னார்வலராக இணையலாம்?"
      ),
      answer: trans(
        "You can sign up on our Volunteer page or contact our team directly. We have weekend academic tutoring, life skills workshops, civic tree plantation drives with Exnora, and festive distribution coordination suitable for students and working professionals.",
        "எங்கள் தன்னார்வலர் பக்கத்தில் பதிவு செய்யலாம் அல்லது எங்களை நேரடியாக தொடர்பு கொள்ளலாம். வார இறுதி மாலை நேர கற்பித்தல், எக்ஸ்னோராவுடன் இணைந்து மரக்கன்றுகள் நடுதல், மற்றும் பண்டிகை கால உதவிகள் போன்றவற்றில் பங்கேற்கலாம்."
      ),
    },
    {
      question: trans(
        "How can I donate or sponsor a student?",
        "நான் எவ்வாறு நிதி உதவி செய்ய முடியும் அல்லது ஒரு மாணவருக்கு ஆதரவளிக்க முடியும்?"
      ),
      answer: trans(
        "Donations can be made directly to our registered State Bank of India (SBI) Trust Current Account via NEFT, RTGS, IMPS or direct trust UPI. You can also sponsor individual student school fees or educational supply kits.",
        "எங்கள் பதிவு செய்யப்பட்ட பாரத ஸ்டேட் வங்கி (SBI) அறக்கட்டளை நடப்புக் கணக்கிற்கு NEFT, RTGS அல்லது நேரடி UPI மூலம் நிதி உதவி வழங்கலாம். மேலும் தனிப்பட்ட மாணவரின் கல்வி கட்டணம் மற்றும் புத்தகப் பைகளுக்கும் ஆதரவளிக்கலாம்."
      ),
    },
    {
      question: trans(
        "Can companies partner with Sathiyavani Trust for CSR?",
        "நிறுவனங்கள் CSR மூலம் அறக்கட்டளையுடன் கூட்டுறவு வைக்க முடியுமா?"
      ),
      answer: trans(
        "Yes! We welcome corporate CSR partnerships, matching grant programs, employee volunteer days, and in-kind resource donations. We provide formal MOUs, fund utilization ledgers, and audited beneficiary registers.",
        "நிச்சயமாக! நிறுவனங்களின் CSR திட்டங்கள், ஊழியர்களின் தன்னார்வப் பணிகள் மற்றும் பொருட்கள் நன்கொடைகளை வரவேற்கிறோம். முறையான ஒப்பந்தங்கள், செலவு விவரங்கள் மற்றும் பயனாளிகள் பதிவேடுகள் வழங்கப்படும்."
      ),
    },
    {
      question: trans(
        "How do you ensure transparency in the use of donations?",
        "நன்கொடைகள் வெளிப்படைத்தன்மையுடன் பயன்படுத்தப்படுவதை எவ்வாறு உறுதி செய்கிறீர்கள்?"
      ),
      answer: trans(
        "100% of designated contributions directly cover verified student tuition fees, school textbooks, notebooks, uniforms, tree saplings, and festive essentials. We do not deduct administrative commissions or third-party intermediary charges.",
        "100% நிதி உதவியும் இடைத்தரகர்கள் கட்டணமின்றி நேரடியாக மாணவர்களின் பள்ளி கட்டணம், பாடப்புத்தகங்கள், சீருடைகள், மரக்கன்றுகள் மற்றும் தீபாவளி புத்தாடைகளுக்கு மட்டுமே பயன்படுத்தப்படுகிறது."
      ),
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-800 selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* Sticky Breadcrumb Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-100/60 sticky top-16 z-20">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pb-20">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-amber-100/40 via-rose-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-sky-50/40 via-emerald-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center">
                <span className="bg-[#E59819] text-[#0F2942] font-black uppercase text-[11px] sm:text-xs tracking-wider px-3.5 py-1.5 rounded-full shadow-2xs">
                  {trans("CONTACT US", "தொடர்பு கொள்க")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.12]">
                <span className="text-[#0F2942] block">
                  {trans("Let's Create", "ஒன்றாக உருவாக்குவோம்")}
                </span>
                <span className="text-[#16A34A] block mt-1">
                  {trans("A Brighter Tomorrow", "ஒளிமயமான எதிர்காலம்")}
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t("contactHeroSubtitle")}
              </p>

              {/* 4 Feature Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-rose-100 shadow-2xs hover:border-rose-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3 h-3 fill-white/80" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Ask Questions", "கேள்விகள் கேட்க")}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-sky-100 shadow-2xs hover:border-sky-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <Users className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Explore Opportunities", "நல்வாய்ப்புகளை காண்க")}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-100 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Handshake className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Partner With Us", "எங்களுடன் இணையுங்கள்")}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-amber-100 shadow-2xs hover:border-amber-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#E59819] text-white flex items-center justify-center shrink-0">
                    <Heart className="w-3 h-3 fill-white/80" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {trans("Be a Part of Our Mission", "எங்கள் பணியில் இணையுங்கள்")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/30 via-emerald-100/30 to-sky-100/30 rounded-3xl blur-xl" />

                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-white">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/assets/images/about-story-children.jpg"
                      alt="Smiling Indian school children looking upward in outdoor classroom"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-amber-100/80 -rotate-2 transform hover:rotate-0 transition-transform">
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#0F2942] leading-tight flex items-center gap-1.5">
                        <span>{trans("Your Support", "உங்கள் ஆதரவு")}</span>
                        <span className="text-rose-500 font-sans not-italic text-sm">♡</span>
                      </p>
                      <p className="font-serif italic font-bold text-xs sm:text-sm text-[#0284C7] mt-0.5">
                        {trans("Helps Us Reach Further", "எங்களை மேலும் வளர்க்கிறது")}
                      </p>
                    </div>

                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-[11px] font-medium border border-white/20 shadow-md">
                      <span className="text-emerald-400">📞</span>
                      <span>{t("brandName")}: {SITE_CONFIG.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          MAIN CONTENT GRID (3 Columns)
          ========================================================================= */}
      <section className="py-6 sm:py-10 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* COLUMN 1: FORM CARD */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0F2942]">
                  {t("contactFormHeading")}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t("contactFormSub")}
                </p>
              </div>

              <ContactInquiryForm />
            </div>

            {/* COLUMN 2: CONTACT INFORMATION */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0F2942]">
                  {trans("Our Contact Information", "தொடர்பு விவரங்கள்")}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {trans(
                    "Reach out directly through our verified channels.",
                    "சரிபார்க்கப்பட்ட வழிகளில் எங்களை நேரடியாக தொடர்பு கொள்ளலாம்."
                  )}
                </p>
              </div>

              {/* 2x2 Grid of Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* 1. Call Us */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2 hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      {t("contactCardCall")}
                    </h3>
                    <div className="space-y-0.5 mt-1">
                      <a
                        href={`tel:${SITE_CONFIG.rawPhone}`}
                        className="text-xs font-bold text-slate-800 hover:text-emerald-700 block transition-colors"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2 block">
                      {t("contactHoursWeekdays")}
                    </span>
                  </div>
                </div>

                {/* 2. Email Us */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2 hover:border-rose-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      {t("contactCardEmail")}
                    </h3>
                    <div className="space-y-0.5 mt-1">
                      <a
                        href="mailto:info@sathiyavanitrust.org"
                        className="text-xs font-bold text-slate-800 hover:text-rose-600 block transition-colors break-all"
                      >
                        info@sathiyavanitrust.org
                      </a>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2 block">
                      {trans(
                        "We will respond within 24 working hours.",
                        "24 மணி நேரத்திற்குள் பதிலளிக்கிறோம்."
                      )}
                    </span>
                  </div>
                </div>

                {/* 3. Visit Us */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2 hover:border-sky-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      {t("contactCardVisit")}
                    </h3>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      {t("brandName")} {t("brandSubtitle")} <br />
                      {trans(SITE_CONFIG.provisionalAddress, "சமூக சேவை மையம், நூலக தரைதளம், சென்னை, தமிழ்நாடு – 600001")}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Chennai,+Tamil+Nadu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#0284C7] hover:underline mt-2 inline-flex items-center gap-1"
                    >
                      <span>{trans("Get Directions", "வரைபடத்தில் காண்க")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* 4. Follow Us */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2 hover:border-amber-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#E59819] text-white flex items-center justify-center shadow-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xs font-bold text-slate-900">
                      {trans("Follow Us", "இணைந்திருங்கள்")}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <a
                        href={SITE_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center text-xs font-bold transition-colors"
                        title="WhatsApp"
                      >
                        WA
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center text-xs font-bold transition-colors"
                        title="Facebook"
                      >
                        FB
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 flex items-center justify-center text-xs font-bold transition-colors"
                        title="Instagram"
                      >
                        IG
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-xs font-bold text-slate-900">
                    {t("contactCardHours")}
                  </h3>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pl-1">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <span>{trans("Monday – Saturday", "திங்கள் – சனி")}</span>
                    <span className="font-bold text-slate-800">9:00 AM – 7:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <span>{trans("Sunday Activities", "ஞாயிறு நற்பணிகள்")}</span>
                    <span className="font-bold text-slate-800">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-700 font-semibold pt-0.5">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{trans("Center Status", "மைய நிலை")}</span>
                    </span>
                    <span>{trans("Open to Visitors", "திறந்துள்ளது")}</span>
                  </div>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2.5">
                <h3 className="font-heading text-xs font-bold text-slate-900">
                  {trans("Quick Ways to Support", "விரைவு உதவி வழிகள்")}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    href="/volunteer"
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 font-semibold text-slate-800 flex items-center justify-between border border-slate-200/60 transition-colors"
                  >
                    <span>{t("navVolunteer")}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                  <Link
                    href="/sponsor"
                    className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 font-semibold text-amber-900 flex items-center justify-between border border-amber-200/60 transition-colors"
                  >
                    <span>{t("navSponsor")}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </Link>
                </div>
              </div>
            </div>

            {/* COLUMN 3: LOCATION & FAQ */}
            <div className="lg:col-span-4 space-y-4">
              {/* Location Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base font-bold text-[#0F2942]">
                    {trans("Find Us in Chennai", "எங்கள் சென்னை மையம்")}
                  </h3>
                  <a
                    href="https://maps.google.com/?q=Chennai,+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#0284C7] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>{trans("Open Maps", "வரைபடம்")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/80 shadow-inner group">
                  <Image
                    src="/assets/images/contact-map-chennai.jpg"
                    alt="Chennai city map location view"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-slate-200/80 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{t("brandName")} {t("brandSubtitle")}</span>
                    </div>
                    <p className="text-[9px] text-slate-500 leading-tight pl-5">
                      {trans(SITE_CONFIG.provisionalAddress, "சமூக சேவை மையம், நூலக தரைதளம், சென்னை, தமிழ்நாடு – 600001")}
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xs font-bold">
                      ?
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#0F2942]">
                      {t("faqHeading")}
                    </h3>
                  </div>
                  <span className="font-serif italic font-bold text-[11px] text-rose-500 hidden sm:inline">
                    {trans("We're Here to Help! ♡", "உங்களுக்கு உதவ நாங்கள் தயார்! ♡")}
                  </span>
                </div>

                <div className="space-y-2 pt-1 text-xs">
                  {faqItems.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200/80 overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-3 text-left font-bold text-slate-800 hover:text-slate-900 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-2 transition-colors"
                        >
                          <span className="text-[11px]">{item.question}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
                              isOpen ? "rotate-180 text-amber-600" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="p-3 bg-white text-[11px] text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BOTTOM HORIZON STRIP
          ========================================================================= */}
      <section className="py-6 sm:py-10 pb-16">
        <Container>
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[140px] sm:min-h-[160px] flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 gap-6">
            <Image
              src="/assets/images/sponsor-students-horizon.jpg"
              alt="School students facing sunrise horizon"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/85" />

            <div className="relative z-10 max-w-md text-center md:text-left">
              <p className="font-serif italic font-bold text-lg sm:text-2xl text-amber-200 drop-shadow leading-tight">
                {trans("Let's Build", "ஒன்றாக இணைவோம்")}<br />
                <span className="text-white">
                  {trans("Stronger Communities Together", "வலுவான சமுதாயத்தை உருவாக்குவோம்")}
                </span>{" "}
                <span className="text-rose-400 not-italic">♡</span>
              </p>
            </div>

            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/60 text-slate-900 max-w-sm w-full space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xs font-bold shrink-0">
                  ?
                </div>
                <div>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-[#0F2942]">
                    {trans("Need Quick Assistance?", "உடனடி உதவி தேவையா?")}
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    {trans("We are just a call or message away.", "எங்களை எப்போது வேண்டுமானாலும் அழைக்கலாம்.")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`tel:${SITE_CONFIG.rawPhone}`}
                  className="flex-1 py-2 px-3 bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9F1239] text-white text-xs font-bold rounded-xl shadow-xs transition-transform hover:scale-[1.02] inline-flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t("actionCallNow")}</span>
                </a>

                <a
                  href="mailto:info@sathiyavanitrust.org"
                  className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  <span>{trans("Email Us", "மின்னஞ்சல்")}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
