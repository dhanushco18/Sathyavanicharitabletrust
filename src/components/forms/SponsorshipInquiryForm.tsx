"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle, Heart, ShieldCheck } from "lucide-react";
import { submitPublicInquiryAction } from "@/app/actions/inquiry";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-terracotta hover:bg-brand-terracotta-hover text-white font-semibold rounded-xl text-xs transition-all shadow-subtle disabled:opacity-50"
    >
      {pending ? (
        <>
          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Submitting pledge inquiry...</span>
        </>
      ) : (
        <>
          <Heart className="w-4 h-4 fill-white/20" />
          <span>Submit Sponsorship Inquiry</span>
        </>
      )}
    </button>
  );
}

export function SponsorshipInquiryForm() {
  const [state, formAction] = useFormState(submitPublicInquiryAction, null);

  if (state?.success) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="font-heading font-bold text-slate-900 text-base">
          Sponsorship Pledge Received!
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          Thank you for choosing to support a student. Your pledge enquiry has been transmitted directly
          to trust founder Mr. Raghu N. We will contact you with specific student grade profiles and
          trust account transfer details.
        </p>
        <div className="inline-block px-3 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs font-mono font-bold text-emerald-800">
          Pledge Reference: {state.trackingId}
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
          <label className="font-semibold text-slate-700">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Your name"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">Phone Number *</label>
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
          <label className="font-semibold text-slate-700">Email Address (Optional)</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">Intended Support Tier *</label>
          <select
            name="sponsorshipTier"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          >
            <option value="Educational Kit (₹1,500/year)">Educational Kit (₹1,500 / year)</option>
            <option value="School Fee Assistance (₹3,500/term)">School Fee Assistance (₹3,500 / term)</option>
            <option value="Full Comprehensive Care (₹6,000/year)">Full Annual Care (₹6,000 / year)</option>
            <option value="Multiple Students / Flexible">Multiple Students / Custom Grant</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">Special Notes or Questions *</label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="e.g. Interested in sponsoring a female student in 9th standard; would like term fee receipts."
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        />
      </div>

      {/* Financial Transparency Disclosure */}
      <div className="p-3 bg-brand-muted/70 rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-snug">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-teal inline mr-1" />
        Contributions are deposited directly into the registered Trust Current Bank Account. We do
        not collect debit/credit card details online.
      </div>

      <SubmitButton />
    </form>
  );
}
