"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle, Building2, ShieldCheck, Handshake } from "lucide-react";
import { submitPublicInquiryAction } from "@/app/actions/inquiry";
import { useLanguage } from "@/context/LanguageContext";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { trans } = useLanguage();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl text-xs transition-all shadow-subtle disabled:opacity-50"
    >
      {pending ? (
        <>
          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>{trans("Submitting partnership proposal...", "கூட்டுறவு விவரங்கள் அனுப்பப்படுகின்றன...")}</span>
        </>
      ) : (
        <>
          <Handshake className="w-4 h-4 text-brand-amber" />
          <span>{trans("Submit Partnership Enquiry", "கூட்டுறவு கோரிக்கையை சமர்ப்பிக்கவும்")}</span>
        </>
      )}
    </button>
  );
}

export function PartnershipInquiryForm({ initialFocus }: { initialFocus?: string }) {
  const [state, formAction] = useFormState(submitPublicInquiryAction, null);
  const { trans } = useLanguage();

  if (state?.success) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="font-heading font-bold text-slate-900 text-base">
          {trans("Partnership Enquiry Transmitted!", "கூட்டுறவு கோரிக்கை வெற்றிகரமாக பெறப்பட்டது!")}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          {trans(
            "Thank you for exploring an institutional partnership. Your proposal has been delivered to the managing trustees. We will review your organization's focus and arrange an introductory discussion.",
            "நிறுவனக் கூட்டுறவை பரிசீலித்தமைக்கு நன்றி. உங்கள் திட்டம் அறக்கட்டளை நிர்வாகிகளிடம் சமர்ப்பிக்கப்பட்டுள்ளது. உங்கள் நிறுவனத்தின் விவரங்களை பரிசீலித்து விரைவில் தொடர்பு கொள்வோம்."
          )}
        </p>
        <div className="inline-block px-3 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs font-mono font-bold text-emerald-800">
          {trans("Proposal Reference:", "கோரிக்கை குறிப்பு எண்:")} {state.trackingId}
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4 text-xs">
      <input type="hidden" name="inquiryType" value="partnership" />

      {/* Anti-spam honeypot */}
      <input
        type="text"
        name="website_bot_check"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {state?.error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{state.error}</span>
        </div>
      )}

      {/* Contact Name & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="font-semibold text-slate-700">{trans("Representative Contact Name *", "பொறுப்பாளர் பெயர் *")}</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder={trans("Authorized person name", "அங்கீகரிக்கப்பட்ட நபர் பெயர்")}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">{trans("Company / Organization *", "நிறுவனம் / அமைப்பு *")}</label>
          <input
            type="text"
            name="organizationName"
            required
            placeholder={trans("e.g. Acme Technologies India Pvt Ltd", "உதா: உங்கள் நிறுவனத்தின் பெயர்")}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="font-semibold text-slate-700">{trans("Corporate Email Address *", "அலுவலக மின்னஞ்சல் முகவரி *")}</label>
          <input
            type="email"
            name="email"
            required
            placeholder="corporate.csr@company.com"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">{trans("Official Contact Number *", "தொடர்பு தொலைபேசி எண் *")}</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 94440 00000"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>
      </div>

      {/* Partnership Focus Area */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">{trans("Partnership Focus Area *", "கூட்டுறவு களம் *")}</label>
        <select
          name="partnershipCategory"
          defaultValue={initialFocus || "CSR Partnership"}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        >
          <option value="Program Sponsorship">{trans("Program Sponsorship (Complete Program)", "முழு திட்ட ஆதரவு (முழுமையான திட்டம்)")}</option>
          <option value="Project Sponsorship">{trans("Project Sponsorship (Specific Activity / Drive)", "குறிப்பிட்ட திட்ட ஆதரவு (குறிப்பிட்ட பணி)")}</option>
          <option value="CSR Partnership">{trans("CSR Partnership (Long-term Impact)", "CSR கூட்டுறவு (நீண்டகால தாக்கம்)")}</option>
          <option value="In-kind Support">{trans("In-kind Support (Goods, Tech & Resources)", "பொருளுதவி மற்றும் வளங்கள் (பொருட்கள் / கணினிகள்)")}</option>
          <option value="Learning Center Infrastructure">{trans("Learning Center Operating Costs & Digital Hardware", "கல்வி மைய கட்டமைப்பு & டிஜிட்டல் சாதனங்கள்")}</option>
          <option value="Urban Tree Greening (Exnora)">{trans("Urban Tree Greening & Biodiversity Drive with Exnora", "மரக்கன்றுகள் நடுதல் & சுற்றுச்சூழல் களம்")}</option>
          <option value="Diwali Care Packages Sponsorship">{trans("Annual Diwali Festive Kits Matching Drive", "தீபாவளி புத்தாடைகள் & இனிப்புகள் ஆதரவு")}</option>
          <option value="Employee Skills Volunteering">{trans("Employee Skills Mentorship & Weekend Workshops", "பணியாளர் திறன் வழிகாட்டல் & பயிற்சி")}</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">{trans("Brief Scope or Proposal Details *", "திட்ட விவரங்கள் / கருத்துக்கள் *")}</label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder={trans("e.g. Exploring CSR support for supplying 10 desktop workstations for the study center.", "உதா: கல்வி மையத்திற்கு 10 கணினிகள் வழங்க CSR ஆதரவை பரிசீலிக்கிறோம்.")}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        />
      </div>

      <div className="p-3 bg-brand-muted/70 rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-snug">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-teal inline mr-1" />
        {trans("We provide project activity reports and physical beneficiary registers for all institutional CSR engagements.", "அனைத்து நிறுவன CSR பங்களிப்புகளுக்கும் திட்ட அறிக்கை மற்றும் பயனாளிகள் பதிவேடு முறையாக வழங்கப்படும்.")}
      </div>

      <SubmitButton />
    </form>
  );
}
