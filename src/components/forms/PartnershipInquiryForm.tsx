"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle, Building2, ShieldCheck, Handshake } from "lucide-react";
import { submitPublicInquiryAction } from "@/app/actions/inquiry";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl text-xs transition-all shadow-subtle disabled:opacity-50"
    >
      {pending ? (
        <>
          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Submitting partnership proposal...</span>
        </>
      ) : (
        <>
          <Handshake className="w-4 h-4 text-brand-amber" />
          <span>Submit Partnership Enquiry</span>
        </>
      )}
    </button>
  );
}

export function PartnershipInquiryForm() {
  const [state, formAction] = useFormState(submitPublicInquiryAction, null);

  if (state?.success) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="font-heading font-bold text-slate-900 text-base">
          Partnership Enquiry Transmitted!
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          Thank you for exploring an institutional partnership. Your proposal has been delivered to
          the managing trustees. We will review your organization's focus and arrange an introductory
          discussion.
        </p>
        <div className="inline-block px-3 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs font-mono font-bold text-emerald-800">
          Proposal Reference: {state.trackingId}
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
          <label className="font-semibold text-slate-700">Representative Contact Name *</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Authorized person name"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">Company / Organization *</label>
          <input
            type="text"
            name="organizationName"
            required
            placeholder="e.g. Acme Technologies India Pvt Ltd"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="font-semibold text-slate-700">Corporate Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="corporate.csr@company.com"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">Official Contact Number *</label>
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
        <label className="font-semibold text-slate-700">Partnership Focus Area *</label>
        <select
          name="partnershipCategory"
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        >
          <option value="Learning Center Infrastructure">Learning Center Operating Costs & Digital Hardware</option>
          <option value="Urban Tree Greening (Exnora)">Urban Tree Greening & Biodiversity Drive with Exnora</option>
          <option value="Diwali Care Packages Sponsorship">Annual Diwali Festive Kits Matching Drive</option>
          <option value="Employee Skills Volunteering">Employee Skills Mentorship & Weekend Workshops</option>
          <option value="Other Institutional CSR">Other Custom CSR Engagement</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">Brief Scope or Proposal Details *</label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="e.g. Exploring CSR support for supplying 10 desktop workstations for the study center."
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        />
      </div>

      <div className="p-3 bg-brand-muted/70 rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-snug">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-teal inline mr-1" />
        We provide project activity reports and physical beneficiary registers for all institutional CSR engagements.
      </div>

      <SubmitButton />
    </form>
  );
}
