"use client";

import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
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
          <span>Sending enquiry...</span>
        </>
      ) : (
        <>
          <Send className="w-3.5 h-3.5" />
          <span>Submit Direct Enquiry</span>
        </>
      )}
    </button>
  );
}

export function ContactInquiryForm() {
  const [state, formAction] = useFormState(submitPublicInquiryAction, null);

  if (state?.success) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="font-heading font-bold text-slate-900 text-base">
          Enquiry Successfully Received
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          Thank you. Your message has been logged directly in our coordinator queue. A trust lead will
          connect via phone within 24 to 48 hours.
        </p>
        <div className="inline-block px-3 py-1 bg-white border border-emerald-300 rounded-lg text-xs font-mono font-bold text-emerald-800">
          Tracking ID: {state.trackingId}
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4 text-xs">
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
            placeholder="+91 98414 00000"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>
      </div>

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
          <label className="font-semibold text-slate-700">Enquiry Category</label>
          <select
            name="inquiryType"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          >
            <option value="general">General Community Contact</option>
            <option value="volunteer">Volunteer Interest</option>
            <option value="sponsorship">Student Tuition Sponsorship</option>
            <option value="partnership">Corporate CSR / Institution</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="font-semibold text-slate-700">Your Message *</label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="How can we assist you or how would you like to contribute?"
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
        <span>Your contact details are encrypted and never shared with third parties.</span>
      </div>

      <SubmitButton />
    </form>
  );
}
