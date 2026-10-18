"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { ShieldCheck, Lock, Mail, AlertCircle, ArrowLeft, KeyRound } from "lucide-react";
import { loginAdminAction } from "../actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-xl transition-all shadow-subtle disabled:opacity-50 disabled:cursor-not-allowed text-sm"
    >
      {pending ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Verifying credentials...</span>
        </>
      ) : (
        <>
          <Lock className="w-4 h-4" />
          <span>Sign In to Dashboard</span>
        </>
      )}
    </button>
  );
}

export default function AdminLoginPage() {
  const [state, formAction] = useFormState(loginAdminAction, null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-canvas via-brand-muted/50 to-brand-canvas flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        {/* Return to Public Website */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-navy transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Public Website
          </Link>
        </div>

        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-subtle border border-slate-200/80 p-2 mx-auto">
            <Image
              src="/assets/brand/logo.png"
              alt="Sathiyavani Trust Emblem"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Administrative Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
            Sathiyavani Charitable Trust — Content Management & Governance System
          </p>
        </div>

        {/* Card Form */}
        <div className="mt-8 bg-white py-8 px-6 sm:px-10 shadow-elevated rounded-3xl border border-slate-200/80 space-y-6">
          {/* Security Alert Header */}
          <div className="p-3 bg-brand-muted/70 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-800 block">Restricted Access</span>
              This portal is strictly reserved for authorized trust leaders, coordinators, and inquiry managers.
            </div>
          </div>

          {/* Form Error Banner */}
          {state?.error && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
              <span>{state.error}</span>
            </div>
          )}

          <form action={formAction} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                Staff / Trustee Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  defaultValue="admin@sathiyavanitrust.org"
                  placeholder="admin@sathiyavanitrust.org"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xs font-semibold text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[11px] font-medium text-brand-navy hover:underline"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  defaultValue="TrustAdmin#2026"
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <SubmitButton />
            </div>
          </form>

          {/* Local Evaluation Credentials Helper */}
          <div className="pt-4 border-t border-slate-100 text-center">
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-left space-y-1">
              <span className="font-semibold text-amber-900 text-xs block">Local Evaluation Accounts:</span>
              <ul className="text-[11px] text-amber-800 space-y-0.5">
                <li>• <strong>Super Admin:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">admin@sathiyavanitrust.org</code></li>
                <li>• <strong>Content Lead:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">coordinator@sathiyavanitrust.org</code></li>
                <li>• <strong>Inquiry Desk:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">inquiries@sathiyavanitrust.org</code></li>
                <li>• <strong>Dev Password:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded">TrustAdmin#2026</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Sathiyavani Charitable Trust &copy; {new Date().getFullYear()}. All administrative actions are logged.
        </p>
      </div>
    </div>
  );
}
