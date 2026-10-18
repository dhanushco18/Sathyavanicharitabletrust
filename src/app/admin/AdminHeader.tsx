"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ExternalLink, ShieldCheck, Database } from "lucide-react";
import { AdminSession } from "@/lib/auth/session";
import { logoutAdminAction } from "./actions";
import { isSupabaseConfigured } from "@/lib/db/client";

interface AdminHeaderProps {
  session: AdminSession;
}

export function AdminHeader({ session }: AdminHeaderProps) {
  const pathname = usePathname();

  // If on login page, don't show header
  if (pathname === "/admin/login") {
    return null;
  }

  // Generate dynamic title from path
  const getHeaderTitle = () => {
    if (pathname === "/admin") return "Overview & Metrics Dashboard";
    if (pathname.startsWith("/admin/programs")) return "Programs & Initiatives Management";
    if (pathname.startsWith("/admin/impact")) return "Impact Metrics & Multi-Stage Governance";
    if (pathname.startsWith("/admin/stories")) return "Stories & Child Safeguarding";
    if (pathname.startsWith("/admin/events")) return "Events & Drive Calendar";
    if (pathname.startsWith("/admin/enquiries")) return "Confidential Inbound Inquiries";
    if (pathname.startsWith("/admin/media")) return "Media Library & Consent Assets";
    if (pathname.startsWith("/admin/users")) return "Authorized Administrators & RBAC";
    if (pathname.startsWith("/admin/audit")) return "System Audit Trail & Security Logs";
    return "Administrative Control";
  };

  return (
    <header className="hidden md:flex h-16 bg-white border-b border-slate-200/80 px-6 sm:px-8 items-center justify-between sticky top-0 z-20 shadow-subtle">
      {/* Title & Database Status */}
      <div className="flex items-center gap-4">
        <h1 className="font-heading font-bold text-slate-900 text-lg tracking-tight">
          {getHeaderTitle()}
        </h1>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
          <Database className="w-3 h-3 text-brand-teal" />
          <span>{isSupabaseConfigured ? "Live Supabase DB" : "Local Data Repository"}</span>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-brand-navy hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors"
        >
          <span>Live Site</span>
          <ExternalLink className="w-3 h-3" />
        </Link>

        {/* Sign Out Form */}
        <form action={logoutAdminAction}>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors"
            title="End administrative session"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </form>
      </div>
    </header>
  );
}
