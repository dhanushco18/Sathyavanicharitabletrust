"use client";

import React from "react";
import Link from "next/link";
import { FileText, ShieldAlert, CheckCircle2, Scale, AlertCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export function TermsClient() {
  const { trans } = useLanguage();

  const breadcrumbItems = [
    { label: trans("Terms of Use", "பயன்பாட்டு விதிமுறைகள்") },
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
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="navy" size="md">
                {trans("Legal & Operational", "சட்ட & நிர்வாக நெறிமுறைகள்")}
              </Badge>
              <Badge variant="amber" size="md">
                {trans("Awaiting Legal Review", "சட்ட ஒப்புதலுக்கு உட்பட்டது")}
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {trans(
                "Terms of Use & Operational Disclaimers",
                "பயன்பாட்டு விதிமுறைகள் & செயல்பாட்டு நிபந்தனைகள்"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {trans(
                "These terms outline the rules and guidelines governing the use of the Sathiyavani Charitable Trust public informational website and its associated community communication channels.",
                "இந்த விதிமுறைகள் சத்தியவாணி அறக்கட்டளையின் பொது வலைத்தளம் மற்றும் சமூக தகவல் தொடர்பு வழிகளைப் பயன்படுத்துவதற்கான நெறிமுறைகளை வரையறுக்கின்றன."
              )}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <Container size="narrow">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-subtle space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Legal Notice Header */}
            <div className="p-4 bg-brand-muted/70 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">
                {trans("Governance Note:", "நிர்வாகக் குறிப்பு:")}
              </span>
              <p>
                {trans(
                  "This document serves as an operational draft for Phase 3. It will undergo formal legal and trustee review prior to the activation of online financial transactions in subsequent development phases.",
                  "இந்த ஆவணம் முதற்கட்ட செயல்பாட்டு வரைவாக உள்ளது. இணைய நிதிப் பரிவர்த்தனைகள் செயல்படுத்தப்படும் முன் முழுமையான சட்ட தணிக்கைக்கு உட்படுத்தப்படும்."
                )}
              </p>
              <p className="text-slate-500 pt-1">
                {trans(
                  "Last Updated: October 2026 | Jurisdiction: Chennai, Tamil Nadu, India",
                  "கடைசியாக புதுப்பிக்கப்பட்டது: அக்டோபர் 2026 | சட்ட அதிகார வரம்பு: சென்னை, தமிழ்நாடு, இந்தியா"
                )}
              </p>
            </div>

            {/* Section 1: Informational Purpose */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-navy" />
                <span>{trans("1. Informational & Non-Commercial Purpose", "1. தகவல் நோக்கம் மற்றும் வணிகமற்ற பயன்பாடு")}</span>
              </h2>
              <p>
                {trans(
                  "The Sathiyavani Charitable Trust public website is published exclusively to provide authentic, verified information regarding the trust’s non-profit social missions, free education programmes, child welfare drives, and community outreach in Chennai, Tamil Nadu.",
                  "சத்தியவாணி அறக்கட்டளையின் வலைத்தளம் அறக்கட்டளையின் லாப நோக்கற்ற நற்பணிகள், இலவசக் கல்வி திட்டங்கள், குழந்தைகள் நலப் பணிகள் மற்றும் சமுதாய நற்பணிகள் பற்றிய உண்மையான தகவல்களை வழங்க மட்டுமே வெளியிடப்பட்டுள்ளது."
                )}
              </p>
              <p>
                {trans(
                  "Access to this website is provided on a goodwill informational basis. We strive for rigorous accuracy; however, field schedules, tuition timings, and drive logistics may evolve based on ground realities and academic calendars.",
                  "இந்த வலைத்தள அணுகல் பொதுநல நோக்கோடு வழங்கப்படுகிறது. கள நிலவரங்கள் மற்றும் கல்வி நாட்காட்டியின்படி வகுப்பறை நேரங்கள் அல்லது திட்ட விவரங்களில் மாற்றங்கள் ஏற்படலாம்."
                )}
              </p>
            </div>

            {/* Section 2: Intellectual Property & Visual Identity */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-brand-amber" />
                <span>{trans("2. Intellectual Property & Emblem Protection", "2. அறிவுசார் சொத்துரிமை & இலச்சினை பாதுகாப்பு")}</span>
              </h2>
              <p>
                {trans(
                  "All graphic elements, original written documentation, photographic documentation of trust events, and the official Sathiyavani Charitable Trust circular logo emblem are the intellectual property of Sathiyavani Charitable Trust.",
                  "அனைத்து வரைகலை வடிவமைப்பு கூறுகள், ஆவணங்கள், நிகழ்வு புகைப்படங்கள் மற்றும் சத்தியவாணி அறக்கட்டளையின் அதிகாரப்பூர்வ முத்திரை ஆகியவை அறக்கட்டளையின் அறிவுசார் சொத்தாகும்."
                )}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>
                  {trans(
                    "No individual, company, or institution may use the trust’s name, logo, or founder’s identity to solicit unauthorised funds, endorsements, or commercial affiliations.",
                    "அனுமதியின்றி நிதி திரட்டவோ, விளம்பரம் செய்யவோ அல்லது வணிகத் தொடர்புகளைக் கோரவோ அறக்கட்டளையின் பெயர், இலச்சினை அல்லது நிறுவனரின் பெயரை எவரும் பயன்படுத்தக் கூடாது."
                  )}
                </li>
                <li>
                  {trans(
                    "Photographs of children and youth participating in tuition centres may not be downloaded, repurposed, or republished in any commercial or defamatory context.",
                    "கல்வி மையங்களில் பயிலும் குழந்தைகளின் புகைப்படங்களை வணிக ரீதியாகவோ அல்லது தவறான நோக்கங்களுக்காகவோ பதிவிறக்கம் செய்து மறுவெளியீடு செய்யக்கூடாது."
                  )}
                </li>
                <li>
                  {trans(
                    "Fair use for legitimate news reporting or educational citations requires prior written approval and clear attribution to Sathiyavani Charitable Trust.",
                    "செய்தி ஊடகங்கள் அல்லது கல்வி ஆய்வு மேற்கோள்களுக்கு அறக்கட்டளையின் முன் அனுமதியும் முறையான அங்கீகாரமும் பெறப்பட வேண்டும்."
                  )}
                </li>
              </ul>
            </div>

            {/* Section 3: Donations & Financial Disclaimer */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-brand-terracotta" />
                <span>{trans("3. Financial Transactions & No Online Checkout Notice", "3. நிதிப் பரிவர்த்தனைகள் & இணைய கட்டணமில்லா அறிவிப்பு")}</span>
              </h2>
              <p>
                {trans(
                  "In compliance with our ethical transparency framework and Phase 3 specifications:",
                  "எங்கள் நிதி வெளிப்படைத்தன்மை மற்றும் நெறிமுறை வழிகாட்டுதலின்படி:"
                )}
              </p>
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                <div className="flex items-start gap-2 text-amber-900 font-semibold text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                  <span>{trans("Important Financial Transparency Notice", "முக்கிய நிதி வெளிப்படைத்தன்மை அறிவிப்பு")}</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  {trans(
                    "This website does NOT currently process payment card transactions, UPI payments, or automated payment gateway checkouts online. Any online donation gateway is strictly scheduled for later integration following complete legal and statutory onboarding.",
                    "இந்த வலைத்தளம் தற்போது எந்தவொரு இணைய வங்கி அட்டை அல்லது தானியங்கி பரிவர்த்தனை வாயில்களையும் நேரடியாகக் கையாள்வதில்லை. அனைத்து சட்ட விதிகளும் பூர்த்தியான பிறகே இணைய நிதி வழிகள் பின்னர் இணைக்கப்படும்."
                  )}
                </p>
              </div>
              <p>
                {trans(
                  "Interested patrons, institutional CSR partners, or student sponsors should exclusively interact through official trust coordinators via our verified contact channels or phone at",
                  "ஆர்வமுள்ள நல்மனங்கள், நிறுவன பங்களிப்பாளர்கள் அல்லது கல்வி ஆர்வலர்கள் அதிகாரப்பூர்வ தொலைபேசி எண் மூலமாகவோ அல்லது தொடர்பு வழிகள் வழியாகவோ ஒருங்கிணைப்பாளர்களைத் தொடர்பு கொள்ளலாம்:"
                )}{" "}
                <Link href="/contact" className="text-brand-navy underline font-medium">
                  {trans("our verified contact channels", "எங்கள் அதிகாரப்பூர்வ தொடர்பு வழிகள்")}
                </Link>{" "}
                ({SITE_CONFIG.phone}).{" "}
                {trans(
                  "The trust is never responsible for funds remitted to unauthorised third-party bank accounts or intermediaries.",
                  "அங்கீகரிக்கப்படாத மூன்றாம் நபர் வங்கிக் கணக்குகளுக்கு அனுப்பப்படும் நிதிகளுக்கு அறக்கட்டளை எந்த வகையிலும் பொறுப்பாகாது."
                )}
              </p>
            </div>

            {/* Section 4: Child Dignity & Photo Protocol */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                <span>{trans("4. Child Safeguarding & Community Integrity", "4. குழந்தை பாதுகாப்பு & சமுதாய நற்பண்பு நெறிமுறைகள்")}</span>
              </h2>
              <p>
                {trans(
                  "Visitors to our community centres, volunteer applicants, and website users agree to adhere strictly to child safeguarding norms:",
                  "எங்கள் மையங்களுக்கு வருகை தருவோர், தன்னார்வலர்கள் மற்றும் வலைத்தளப் பயனர்கள் குழந்தை பாதுகாப்பு நெறிமுறைகளை உறுதியாகப் பின்பற்ற ஒப்புக்கொள்கிறார்கள்:"
                )}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>
                  {trans(
                    "Volunteers may not capture personal, unchaperoned photographs or collect private residential details of beneficiary children.",
                    "தன்னார்வலர்கள் மையக் குழந்தைகளின் தனிப்பட்ட வீட்டு விவரங்களை சேகரிக்கவோ அல்லது தனிப்பட்ட முறையில் புகைப்படங்கள் எடுக்கவோ கூடாது."
                  )}
                </li>
                <li>
                  {trans(
                    "Interactions with students in trust tuition programmes must remain within official class schedules and public trust venues under approved supervisor presence.",
                    "மாணவர்களுடனான அனைத்து கலந்துரையாடல்களும் கல்வி மையத்தின் அதிகாரப்பூர்வ நேரத்திற்குள்ளும் பொறுப்பாளரின் முன்னிலையிலும் மட்டுமே நடைபெற வேண்டும்."
                  )}
                </li>
                <li>
                  {trans(
                    "Any suspected violation of child protection or inappropriate conduct will result in immediate disqualification from volunteer participation and referral to competent authorities under Indian law.",
                    "குழந்தை பாதுகாப்பு விதிகளை மீறும் எந்தவொரு நடவடிக்கையும் தன்னார்வப் பொறுப்பிலிருந்து உடனடி நீக்கம் மற்றும் சட்ட ரீதியான நடவடிக்கைக்கு உள்ளாக்கப்படும்."
                  )}
                </li>
              </ul>
            </div>

            {/* Section 5: Limitation of Liability */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                {trans("5. Limitation of Liability", "5. பொறுப்பு வரம்பு")}
              </h2>
              <p>
                {trans(
                  "While Sathiyavani Charitable Trust makes reasonable efforts to maintain continuous availability and updated information on this website, the trust disclaims liability for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website, temporary technical downtime, or errors in third-party telecom networks.",
                  "வலைத்தளத்தின் தொடர் செயல்பாட்டிற்கும் துல்லியமான தகவல்களுக்கும் அறக்கட்டளை முயல்கிறது. இருப்பினும், எதிர்பாராத தொழில்நுட்பக் கோளாறுகள் அல்லது தொலைத்தொடர்பு பிழைகளால் ஏற்படும் நேரடி அல்லது மறைமுக இழப்புகளுக்கு அறக்கட்டளை பொறுப்பாகாது."
                )}
              </p>
            </div>

            {/* Section 6: Governing Law & Jurisdiction */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                {trans("6. Governing Law & Dispute Resolution", "6. ஆளுகைச் சட்டம் & பிணக்குத் தீர்வு")}
              </h2>
              <p>
                {trans(
                  "These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with the website or trust operations shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu.",
                  "இந்த பயன்பாட்டு விதிமுறைகள் இந்தியக் குடியரசின் சட்டங்களுக்கு உட்பட்டவை. அறக்கட்டளை செயல்பாடுகள் அல்லது வலைத்தளம் தொடர்பான அனைத்து பிணக்குகளும் சென்னை, தமிழ்நாடு நீதிமன்றங்களின் சட்ட அதிகார வரம்பிற்கு உட்பட்டவை."
                )}
              </p>
            </div>

            {/* Section 7: Enquiries & Trustee Contact */}
            <div className="pt-6 border-t border-slate-200">
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  {trans(
                    "Questions Regarding Website Terms or Governance?",
                    "வலைத்தள விதிமுறைகள் அல்லது நிர்வாகம் குறித்த கேள்விகள் உள்ளதா?"
                  )}
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {trans(
                    "For legal enquiries, corporate CSR queries, or official governance verifications, please contact the founder and managing trustees directly.",
                    "சட்ட வினவல்கள், நிறுவனங்களின் சமூகப் பங்களிப்பு (CSR) அல்லது அதிகாரப்பூர்வ நிர்வாகச் சரிபார்ப்புகளுக்கு நிறுவனரையும் அறங்காவலர்களையும் நேரடியாகத் தொடர்பு கொள்ளவும்."
                  )}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-amber text-slate-950 font-semibold rounded-lg hover:bg-brand-amber/90 transition-colors text-sm"
                  >
                    {trans("Contact Trustees", "அறங்காவலர்களைத் தொடர்பு கொள்ள")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors text-sm"
                  >
                    {trans("View Privacy Notice", "தனியுரிமை அறிவிப்பைப் பார்க்க")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
