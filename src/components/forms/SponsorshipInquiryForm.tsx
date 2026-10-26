"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle, Heart, ShieldCheck } from "lucide-react";
import { submitPublicInquiryAction } from "@/app/actions/inquiry";
import { useLanguage } from "@/context/LanguageContext";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { trans } = useLanguage();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-terracotta hover:bg-brand-terracotta-hover text-white font-semibold rounded-xl text-xs transition-all shadow-subtle disabled:opacity-50"
    >
      {pending ? (
        <>
          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>{trans("Submitting pledge inquiry...", "உறுதிமொழி சமர்ப்பிக்கப்படுகிறது...")}</span>
        </>
      ) : (
        <>
          <Heart className="w-4 h-4 fill-white/20" />
          <span>{trans("Submit Sponsorship Inquiry", "மாணவர் கல்வி ஆதரவு விண்ணப்பிக்கவும்")}</span>
        </>
      )}
    </button>
  );
}

export function SponsorshipInquiryForm({ initialTier }: { initialTier?: string }) {
  const [state, formAction] = useFormState(submitPublicInquiryAction, null);
  const { trans } = useLanguage();

  if (state?.success) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="font-heading font-bold text-slate-900 text-base">
          {trans("Sponsorship Pledge Received!", "உங்கள் ஆதரவு உறுதிமொழி பெறப்பட்டது!")}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          {trans(
            "Thank you for choosing to support a student. Your pledge enquiry has been transmitted directly to trust founder Mr. Raghu N. We will contact you with specific student grade profiles and trust account transfer details.",
            "மாணவருக்கு கல்வி ஆதரவளிக்க முன்வந்தமைக்கு நெஞ்சார்ந்த நன்றிகள். உங்கள் உறுதிமொழி அறக்கட்டளை நிறுவனர் திரு. ரகு என். அவர்களுக்கு நேரடியாகச் சென்றுள்ளது. குறிப்பிட்ட மாணவரின் வகுப்பு விவரங்கள் மற்றும் அறக்கட்டளை வங்கி கணக்கு தகவல்களுடன் உங்களை விரைவில் தொடர்புகொள்வோம்."
          )}
        </p>
        <div className="inline-block px-3 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs font-mono font-bold text-emerald-800">
          {trans("Pledge Reference:", "குறிப்பு எண்:")} {state.trackingId}
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4 text-xs">
      <input type="hidden" name="inquiryType" value="sponsorship" />

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

      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="font-semibold text-slate-700">
            {trans("Full Name *", "முழுப் பெயர் *")}
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder={trans("Your name", "உங்கள் பெயர்")}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">
            {trans("Phone Number *", "தொலைபேசி எண் *")}
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98400 00000"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>
      </div>

      {/* Email and Sponsorship Tier */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="font-semibold text-slate-700">
            {trans("Email Address (Optional)", "மின்னஞ்சல் முகவரி (விருப்பத்தேர்வு)")}
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">
            {trans("Intended Support Tier *", "தேர்ந்தெடுக்கப்பட்ட ஆதரவுத் திட்டம் *")}
          </label>
          <select
            name="sponsorshipTier"
            defaultValue={initialTier || "Full Sponsorship (₹12,000/year)"}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          >
            <option value="Full Sponsorship (₹12,000/year)">
              {trans("Full Sponsorship (₹12,000 / year)", "முழு நிதியுதவி (₹12,000 / ஆண்டு)")}
            </option>
            <option value="Partial Sponsorship (₹6,000/year)">
              {trans("Partial Sponsorship (₹6,000 / year)", "பகுதி நிதியுதவி (₹6,000 / ஆண்டு)")}
            </option>
            <option value="Custom Support (Any Amount)">
              {trans("Custom Support (Any Amount)", "விருப்பத் தொகை உதவி (எந்தத் தொகையும்)")}
            </option>
            <option value="Educational Kit (₹1,500/year)">
              {trans("Educational Kit (₹1,500 / year)", "கல்வி உபகரணப் பெட்டகம் (₹1,500 / ஆண்டு)")}
            </option>
            <option value="School Fee Assistance (₹3,500/term)">
              {trans("School Fee Assistance (₹3,500 / term)", "பள்ளிக் கட்டண உதவி (₹3,500 / பருவம்)")}
            </option>
            <option value="Multiple Students / Flexible">
              {trans("Multiple Students / Custom Grant", "பல மாணவர்கள் / சிறப்பு நிதியுதவி")}
            </option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">
          {trans("Special Notes or Questions *", "குறிப்புகள் அல்லது சந்தேகங்கள் *")}
        </label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder={trans(
            "e.g. Interested in sponsoring a female student in 9th standard; would like term fee receipts.",
            "உதா: 9ஆம் வகுப்பு படிக்கும் மாணவிக்கு நிதியுதவி அளிக்க விரும்புகிறேன்; கட்டண ரசீது பெற விரும்புகிறேன்."
          )}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        />
      </div>

      {/* Financial Transparency Disclosure */}
      <div className="p-3 bg-brand-muted/70 rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-snug">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-teal inline mr-1" />
        {trans(
          "Contributions are deposited directly into the registered Trust Current Bank Account. We do not collect debit/credit card details online.",
          "நன்கொடைகள் அனைத்தும் அறக்கட்டளையின் பதிவுசெய்யப்பட்ட நடப்புக் கணக்கில் நேரடியாகச் செலுத்தப்படுகின்றன. ஆன்லைனில் டெபிட்/கிரெடிட் கார்டு தகவல்கள் எதுவும் பெறப்படுவதில்லை."
        )}
      </div>

      <SubmitButton />
    </form>
  );
}

