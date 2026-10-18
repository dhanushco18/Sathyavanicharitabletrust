"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle, ShieldCheck, UserCheck, Heart } from "lucide-react";
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
          <span>Submitting volunteer application...</span>
        </>
      ) : (
        <>
          <UserCheck className="w-4 h-4 text-brand-amber" />
          <span>Submit Volunteer Application</span>
        </>
      )}
    </button>
  );
}

export function VolunteerApplicationForm() {
  const [state, formAction] = useFormState(submitPublicInquiryAction, null);

  if (state?.success) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="font-heading font-bold text-slate-900 text-base">
          Volunteer Interest Registered!
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          Thank you for offering your time. Your volunteer application has been submitted to trust
          leadership. Our coordinator will contact you to schedule an informal orientation session.
        </p>
        <div className="inline-block px-3 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs font-mono font-bold text-emerald-800">
          Application Reference: {state.trackingId}
        </div>
        <p className="text-[11px] text-slate-500 italic pt-1">
          * Note: Form submission does not automatically grant volunteer status. A brief in-person
          orientation is conducted prior to classroom interaction to uphold child safeguarding.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4 text-xs">
      <input type="hidden" name="inquiryType" value="volunteer" />

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
          <label className="font-semibold text-slate-700">Mobile Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98400 00000"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>
      </div>

      {/* Email and Availability */}
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
          <label className="font-semibold text-slate-700">Preferred Availability *</label>
          <select
            name="availability"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          >
            <option value="Saturday Mornings">Saturday Mornings (Sports & Mentorship)</option>
            <option value="Saturday Evenings">Saturday Evenings (Academic Tuition)</option>
            <option value="Sunday Afternoons">Sunday Afternoons (Arts & English)</option>
            <option value="Weekday Evenings">Weekday Evenings (5:30 PM – 7:30 PM)</option>
            <option value="Flexible Seasonal">Flexible / Seasonal Drives Only</option>
          </select>
        </div>
      </div>

      {/* Primary Area of Interest */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">Primary Volunteer Focus *</label>
        <select
          name="areaOfInterest"
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        >
          <option value="Academic Subject Tutoring">Academic Subject Tutoring (Maths, Science, English, Tamil)</option>
          <option value="Sports & Physical Coaching">Weekend Sports & Fitness Coaching</option>
          <option value="Creative Arts & Mentorship">Creative Arts, Drawing & Public Speaking</option>
          <option value="Drive Logistics & Packaging">Festive Drive Logistics & Distribution Support</option>
          <option value="Environmental Sapling Drives">Environmental Tree-Planting Drives</option>
        </select>
      </div>

      {/* Message & Relevant Background */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">
          Briefly Tell Us About Your Background or Skills *
        </label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="e.g. B.Sc graduate; comfortable teaching 8th–10th Mathematics and Science in Tamil or English."
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        />
      </div>

      {/* Child Safeguarding Consent */}
      <div className="p-3 bg-brand-muted/70 rounded-xl border border-slate-200 flex items-start gap-2">
        <input
          id="safeguardConsent"
          type="checkbox"
          required
          className="mt-0.5 w-4 h-4 rounded text-brand-navy border-slate-300 focus:ring-brand-navy"
        />
        <label htmlFor="safeguardConsent" className="text-[11px] text-slate-600 leading-snug">
          I agree to adhere to Sathiyavani Charitable Trust's strict child safeguarding standards and
          understand that an initial orientation with trust leaders is required.
        </label>
      </div>

      <SubmitButton />
    </form>
  );
}
