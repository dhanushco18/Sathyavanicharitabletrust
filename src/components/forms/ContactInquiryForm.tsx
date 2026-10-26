"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitPublicInquiryAction } from "@/app/actions/inquiry";
import { useLanguage } from "@/context/LanguageContext";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9F1239] text-white font-bold rounded-xl text-xs transition-all shadow-xs hover:shadow disabled:opacity-50"
    >
      {pending ? (
        <>
          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>{t("formSubmitting")}</span>
        </>
      ) : (
        <>
          <Send className="w-3.5 h-3.5" />
          <span>{t("formSubmit")} →</span>
        </>
      )}
    </button>
  );
}

export function ContactInquiryForm() {
  const [state, formAction] = useFormState(submitPublicInquiryAction, null);
  const { t, trans } = useLanguage();

  if (state?.success) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="font-heading font-bold text-slate-900 text-base">
          {t("formSuccessHeading")}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          {t("formSuccessDesc")}
        </p>
        <div className="inline-block px-3 py-1 bg-white border border-emerald-300 rounded-lg text-xs font-mono font-bold text-emerald-800">
          {trans("Tracking ID:", "குறிப்பு எண்:")} {state.trackingId}
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-3.5 text-xs">
      {state?.error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{state.error}</span>
        </div>
      )}

      {/* Honeypot anti-bot hidden input */}
      <input
        type="text"
        name="website_bot_check"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Full Name */}
      <div className="space-y-1">
        <div className="relative">
          <input
            type="text"
            name="fullName"
            required
            placeholder={`${t("formFullName")} *`}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400/30 focus:border-rose-300 focus:outline-none text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="space-y-1">
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            placeholder={`${t("formEmail")} *`}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400/30 focus:border-rose-300 focus:outline-none text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="space-y-1">
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder={t("formPhone")}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400/30 focus:border-rose-300 focus:outline-none text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Interest Dropdown */}
      <div className="space-y-1">
        <label className="text-[11px] text-slate-500 font-medium block">
          {t("formSubject")}
        </label>
        <select
          name="inquiryType"
          defaultValue="general"
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400/30 focus:border-rose-300 focus:outline-none text-slate-700"
        >
          <option value="general">{trans("Select an Option", "விருப்பத்தேர்வு செய்க")}</option>
          <option value="volunteer">{t("navVolunteer")}</option>
          <option value="sponsorship">{t("navSponsor")}</option>
          <option value="partnership">{t("navPartnerships")}</option>
          <option value="donation">{trans("Donation & Account Enquiries", "நிதி உதவி & வங்கி விவரங்கள்")}</option>
        </select>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1">
        <textarea
          name="message"
          required
          rows={4}
          placeholder={`${t("formMessage")} *`}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400/30 focus:border-rose-300 focus:outline-none text-slate-800 placeholder-slate-400 resize-none"
        />
      </div>

      <SubmitButton />
    </form>
  );
}
