"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export function PrivacyClient() {
  const { trans } = useLanguage();

  const breadcrumbItems = [
    { label: trans("Privacy & Child Safeguarding", "தனியுரிமை & குழந்தை பாதுகாப்பு") },
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
                {trans("Policy Document", "கொள்கை ஆவணம்")}
              </Badge>
              <Badge variant="teal" size="md">
                {trans("DPDP Act 2023 Principles", "DPDP சட்டம் 2023 வழிகாட்டுதல்கள்")}
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {trans(
                "Privacy Notice & Child Safeguarding Standards",
                "தனியுரிமை அறிவிப்பு & குழந்தை பாதுகாப்பு நெறிமுறைகள்"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {trans(
                "Sathiyavani Charitable Trust is committed to ethical data management, complete personal privacy, and the absolute protection and dignity of every minor in our programmes.",
                "சத்தியவாணி அறக்கட்டளை நன்னெறி தரவு மேலாண்மை, தனிநபர் தகவல் பாதுகாப்பு மற்றும் குழந்தைகளுக்கான முழுமையான பாதுகாப்பு மற்றும் கண்ணியத்தை உறுதி செய்கிறது."
              )}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Policy Content */}
      <section className="py-12 sm:py-20">
        <Container size="narrow">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-subtle space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Legal Notice Header */}
            <div className="p-4 bg-brand-muted/70 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">
                {trans("Document Status:", "ஆவணத்தின் நிலை:")}
              </span>
              <p>
                {trans(
                  "Draft Policy Framework for Phase 3 Public Prototype. Subject to final review and ratification by the Board of Trustees of Sathiyavani Charitable Trust. Last updated: October 2026.",
                  "சத்தியவாணி அறக்கட்டளையின் அறங்காவலர் குழுவின் ஒப்புதலுக்கு உட்பட்ட கொள்கை வழிகாட்டு வரைவு. கடைசியாக புதுப்பிக்கப்பட்டது: அக்டோபர் 2026."
                )}
              </p>
            </div>

            {/* 1. Information Collected */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                {trans("1. Information We Collect", "1. நாங்கள் சேகரிக்கும் தகவல்கள்")}
              </h2>
              <p>
                {trans(
                  "As a public charitable organization, we practice strict data minimization. When you contact us via telephone, WhatsApp, or future web inquiry forms, we may collect:",
                  "ஒரு பொது தொண்டு நிறுவனமாக, குறைந்தபட்ச தேவையான தகவல்களை மட்டுமே நாங்கள் பெறுகிறோம். தொலைபேசி, வாட்ஸ்அப் அல்லது இணைய படிவங்கள் மூலம் நீங்கள் எங்களை தொடர்பு கொள்ளும்போது:"
                )}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li>{trans("Your name and contact phone number.", "உங்கள் பெயர் மற்றும் தொடர்பு தொலைபேசி எண்.")}</li>
                <li>{trans("Your city or neighborhood in Chennai.", "உங்கள் வசிப்பிடம் அல்லது பகுதி (சென்னை).")}</li>
                <li>
                  {trans(
                    "Your stated area of inquiry (e.g., student sponsorship, tutoring volunteerism, CSR).",
                    "உங்கள் வினவல் பகுதி (எ.கா. மாணவர் கல்வி உதவி, தன்னார்வ கற்பித்தல், நிறுவன சமூக பங்களிப்பு)."
                  )}
                </li>
              </ul>
              <p className="text-sm">
                {trans(
                  "We do not collect Aadhaar numbers, biometric data, credit card information, or unnecessary personal identifiers through this website.",
                  "இந்த வலைத்தளத்தின் மூலம் ஆதார் எண், பயோமெட்ரிக் தரவு, வங்கி அட்டை விவரங்கள் போன்ற தேவையற்ற தனிநபர் தகவல்களை நாங்கள் சேகரிப்பதில்லை."
                )}
              </p>
            </div>

            {/* 2. Purpose of Collection */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                {trans("2. Purpose of Information Use", "2. தகவல் பயன்பாட்டின் நோக்கம்")}
              </h2>
              <p>
                {trans(
                  "Information collected is used strictly and exclusively for:",
                  "சேகரிக்கப்படும் தகவல்கள் பின்வரும் நோக்கங்களுக்காக மட்டுமே பயன்படுத்தப்படுகின்றன:"
                )}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li>
                  {trans(
                    "Directly answering your queries regarding tuition enrollment or community welfare.",
                    "மாணவர் சேர்க்கை அல்லது சமூக நலப்பணிகள் குறித்த உங்கள் கேள்விகளுக்கு நேரடியாகப் பதிலளிக்க."
                  )}
                </li>
                <li>
                  {trans(
                    "Coordinating volunteer tutoring schedules and classroom orientations.",
                    "தன்னார்வலர்களின் கற்பித்தல் நேரங்கள் மற்றும் வகுப்பறை வழிகாட்டல்களை ஒருங்கிணைக்க."
                  )}
                </li>
                <li>
                  {trans(
                    "Providing bank transfer instructions and official trust receipts for educational sponsorships.",
                    "கல்வி உதவிக்கான நேரடி வங்கி பரிவர்த்தனை விவரங்கள் மற்றும் அதிகாரப்பூர்வ அறக்கட்டளை ரசீதுகளை வழங்க."
                  )}
                </li>
              </ul>
              <p className="font-semibold text-slate-800 text-sm">
                {trans(
                  "We never sell, rent, monetize, or disclose contact details to commercial third-party marketing companies.",
                  "தொடர்பு விவரங்களை வணிக நிறுவனங்கள் அல்லது விளம்பர முகமைகளுக்கு நாங்கள் விற்பனை செய்வதோ, பகிர்வதோ ஒருபோதும் இல்லை."
                )}
              </p>
            </div>

            {/* 3. Child Safeguarding Policy */}
            <div className="p-6 bg-brand-canvas rounded-2xl border border-slate-200 space-y-3">
              <h2 className="font-heading text-lg font-bold text-brand-navy flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-teal" />
                <span>
                  {trans(
                    "3. Child Protection & Media Safeguarding Policy",
                    "3. குழந்தை பாதுகாப்பு & ஊடக நெறிமுறைக் கொள்கை"
                  )}
                </span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {trans(
                  "As an organization working directly with minor children and vulnerable households, we strictly enforce the following protective measures:",
                  "சிறுவர், சிறுமியர் மற்றும் விளிம்புநிலை குடும்பங்களுடன் நேரடியாகப் பணியாற்றும் அமைப்பாக, பின்வரும் பாதுகாப்பு நடவடிக்கைகளை நாங்கள் கண்டிப்புடன் கடைப்பிடிக்கிறோம்:"
                )}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                <li>
                  <strong>{trans("Parental / Guardian Consent:", "பெற்றோர் / பாதுகாவலர் ஒப்புதல்:")}</strong>{" "}
                  {trans(
                    "No photograph or video of any enrolled student is published without written consent from their parent or legal guardian.",
                    "பெற்றோரின் அல்லது பாதுகாவலரின் ஒப்புதல் இன்றி எந்தவொரு மாணவரின் புகைப்படமோ அல்லது வீடியோவோ வெளியிடப்படுவதில்லை."
                  )}
                </li>
                <li>
                  <strong>{trans("Dignified Representation:", "கண்ணியமான சித்தரிப்பு:")}</strong>{" "}
                  {trans(
                    "We strictly prohibit portraying children in degrading, unkempt, or pity-driven imagery. All depictions reflect joyful learning, sports, and healthy childhood growth.",
                    "குழந்தைகளை பரிதாபத்திற்குரியவர்களாகவோ அல்லது இழிவாகவோ சித்தரிப்பதை நாங்கள் முற்றிலும் தடைசெய்கிறோம். அனைத்துப் பதிவுகளும் மகிழ்ச்சியான கற்றல், விளையாட்டு மற்றும் ஆரோக்கியமான வளர்ச்சியை மட்டுமே வெளிப்படுத்துகின்றன."
                  )}
                </li>
                <li>
                  <strong>{trans("Identity Protection:", "அடையாளப் பாதுகாப்பு:")}</strong>{" "}
                  {trans(
                    "Children's full family names, home street addresses, or personal vulnerability records are never disclosed on public channels.",
                    "குழந்தைகளின் முழு குடும்பப் பெயர், வீட்டு முகவரி அல்லது தனிப்பட்ட குடும்பப் பின்னணி போன்ற விவரங்கள் பொதுவெளியில் பகிரப்படுவதில்லை."
                  )}
                </li>
                <li>
                  <strong>{trans("Right to Deletion:", "நீக்குவதற்கான உரிமை:")}</strong>{" "}
                  {trans(
                    "Parents may request the immediate removal of any media asset featuring their child by notifying the trust coordinator.",
                    "தங்கள் குழந்தையின் புகைப்படம் அல்லது வீடியோவை நீக்க விரும்பும் பெற்றோர் அறக்கட்டளை ஒருங்கிணைப்பாளரைத் தொடர்புகொண்டு உடனடியாக நீக்கக் கோரலாம்."
                  )}
                </li>
              </ul>
            </div>

            {/* 4. Data Retention & Security */}
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                {trans("4. Data Retention and Security", "4. தரவு பாதுகாப்பு மற்றும் சேமிப்பு")}
              </h2>
              <p className="text-sm text-slate-600">
                {trans(
                  "We maintain appropriate physical and administrative safeguards to protect communications. Inquiries that have been closed or resolved are periodically archived and expunged to prevent unauthorized retention.",
                  "தகவல் பரிமாற்றங்களைப் பாதுகாக்க முறையான நிர்வாகப் பாதுகாப்பு நடைமுறைகளைப் பின்பற்றுகிறோம். முடிவடைந்த வினவல்கள் தேவையற்ற சேமிப்பைத் தவிர்க்க குறிப்பிட்ட காலத்திற்குப் பின் நீக்கப்படுகின்றன."
                )}
              </p>
            </div>

            {/* 5. Contact for Privacy Inquiries */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                {trans("5. Contact the Trust Leadership", "5. அறக்கட்டளை நிர்வாகத்தைத் தொடர்பு கொள்ள")}
              </h2>
              <p className="text-sm text-slate-600">
                {trans(
                  "If you have questions regarding this privacy notice or wish to request data correction or media removal, contact:",
                  "இந்த தனியுரிமை அறிவிப்பு குறித்து ஏதேனும் கேள்விகள் இருந்தாலோ அல்லது தகவல் திருத்தம் கோர விரும்பினாலோ தொடர்பு கொள்ளவும்:"
                )}
              </p>
              <div className="p-4 bg-brand-canvas rounded-xl text-xs sm:text-sm text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 block">{SITE_CONFIG.name}</span>
                <p>
                  {trans("Coordinator Phone:", "ஒருங்கிணைப்பாளர் தொலைபேசி:")} {SITE_CONFIG.phone}
                </p>
                <p>
                  {trans("Premises:", "இருப்பிடம்:")} {SITE_CONFIG.centerLandmark}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
