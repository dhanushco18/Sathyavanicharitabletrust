"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle, ShieldCheck, UserCheck, Heart } from "lucide-react";
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
          <span>{trans("Submitting volunteer application...", "விண்ணப்பம் அனுப்பப்படுகிறது...")}</span>
        </>
      ) : (
        <>
          <UserCheck className="w-4 h-4 text-brand-amber" />
          <span>{trans("Submit Volunteer Application", "தன்னார்வ விண்ணப்பத்தை சமர்ப்பிக்கவும்")}</span>
        </>
      )}
    </button>
  );
}

export function VolunteerApplicationForm() {
  const [state, formAction] = useFormState(submitPublicInquiryAction, null);
  const { trans } = useLanguage();

  if (state?.success) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="font-heading font-bold text-slate-900 text-base">
          {trans("Volunteer Interest Registered!", "தன்னார்வ ஆர்வம் பதிவு செய்யப்பட்டது!")}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          {trans(
            "Thank you for offering your time. Your volunteer application has been submitted to trust leadership. Our coordinator will contact you to schedule an informal orientation session.",
            "உங்கள் நேரத்தை அர்ப்பணிக்க முன்வந்ததற்கு நன்றி. உங்கள் விண்ணப்பம் பெறப்பட்டுள்ளது. எங்கள் ஒருங்கிணைப்பாளர் உங்களை தொடர்பு கொண்டு வழிகாட்டுதல் அமர்வை ஏற்பாடு செய்வார்."
          )}
        </p>
        <div className="inline-block px-3 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs font-mono font-bold text-emerald-800">
          {trans("Application Reference:", "விண்ணப்ப குறிப்பு எண்:")} {state.trackingId}
        </div>
        <p className="text-[11px] text-slate-500 italic pt-1">
          {trans(
            "* Note: Form submission does not automatically grant volunteer status. A brief in-person orientation is conducted prior to classroom interaction to uphold child safeguarding.",
            "* குறிப்பு: குழந்தைகளின் பாதுகாப்பை உறுதி செய்ய, வகுப்பறை செயல்பாடுகளில் ஈடுபடுவதற்கு முன் சிறிய வழிகாட்டுதல் நேர்காணல் நடத்தப்படும்."
          )}
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
          <label className="font-semibold text-slate-700">{trans("Full Name *", "முழு பெயர் *")}</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder={trans("Your name", "உங்கள் பெயர்")}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">{trans("Mobile Phone Number *", "கைபேசி எண் *")}</label>
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
          <label className="font-semibold text-slate-700">{trans("Email Address (Optional)", "மின்னஞ்சல் முகவரி (விருப்பத்தேர்வு)")}</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-slate-700">{trans("Preferred Availability *", "வரக்கூடிய நேரம் / நாட்கள் *")}</label>
          <select
            name="availability"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
          >
            <option value="Saturday Mornings">{trans("Saturday Mornings (Sports & Mentorship)", "சனிக்கிழமை காலை (விளையாட்டு & வழிகாட்டல்)")}</option>
            <option value="Saturday Evenings">{trans("Saturday Evenings (Academic Tuition)", "சனிக்கிழமை மாலை (கல்வி பயிற்சி)")}</option>
            <option value="Sunday Afternoons">{trans("Sunday Afternoons (Arts & English)", "ஞாயிறு பிற்பகல் (கலை & ஆங்கிலம்)")}</option>
            <option value="Weekday Evenings">{trans("Weekday Evenings (5:30 PM – 7:30 PM)", "வார நாட்கள் மாலை (5:30 PM – 7:30 PM)")}</option>
            <option value="Flexible Seasonal">{trans("Flexible / Seasonal Drives Only", "நெகிழ்வான / பண்டிகை கால நிகழ்வுகள் மட்டும்")}</option>
          </select>
        </div>
      </div>

      {/* Primary Area of Interest */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">{trans("Primary Volunteer Focus *", "முதன்மை தன்னார்வ களம் *")}</label>
        <select
          name="areaOfInterest"
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-navy/20 focus:outline-none"
        >
          <option value="Academic Subject Tutoring">{trans("Academic Subject Tutoring (Maths, Science, English, Tamil)", "பாடக் கல்வி பயிற்சி (கணிதம், அறிவியல், ஆங்கிலம், தமிழ்)")}</option>
          <option value="Sports & Physical Coaching">{trans("Weekend Sports & Fitness Coaching", "வார இறுதி விளையாட்டு & உடற்பயிற்சி")}</option>
          <option value="Creative Arts & Mentorship">{trans("Creative Arts, Drawing & Public Speaking", "ஓவியம், கலை & பேச்சுத்திறன் பயிற்சி")}</option>
          <option value="Drive Logistics & Packaging">{trans("Festive Drive Logistics & Distribution Support", "பண்டிகை கால உதவி & விநியோக பணிகள்")}</option>
          <option value="Environmental Sapling Drives">{trans("Environmental Tree-Planting Drives", "மரக்கன்றுகள் நடுதல் & சுற்றுச்சூழல் களம்")}</option>
        </select>
      </div>

      {/* Message & Relevant Background */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700">
          {trans("Briefly Tell Us About Your Background or Skills *", "உங்கள் கல்வி / பின்னணி / திறன்கள் *")}
        </label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder={trans("e.g. B.Sc graduate; comfortable teaching 8th–10th Mathematics and Science in Tamil or English.", "உதா: பட்டதாரி; 8-10 ஆம் வகுப்பு மாணவர்களுக்கு கணிதம் மற்றும் அறிவியல் கற்பிக்க இயலும்.")}
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
          {trans(
            "I agree to adhere to Sathiyavani Charitable Trust's strict child safeguarding standards and understand that an initial orientation with trust leaders is required.",
            "சத்தியவாணி அறக்கட்டளையின் குழந்தை பாதுகாப்பு நெறிமுறைகளைப் பின்பற்றுவதற்கும், வழிகாட்டுதல் அமர்வில் கலந்துகொள்வதற்கும் ஒப்புக்கொள்கிறேன்."
          )}
        </label>
      </div>

      <SubmitButton />
    </form>
  );
}
