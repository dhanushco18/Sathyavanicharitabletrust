"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  FileText,
  Calendar,
  Inbox,
  Image as ImageIcon,
  Users,
  ShieldAlert,
  Menu,
  X,
  ExternalLink,
  LineChart,
} from "lucide-react";
import { AdminSession } from "@/lib/auth/session";
import { hasPermission, formatRoleTitle } from "@/lib/auth/rbac";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  session: AdminSession;
}

export function AdminSidebar({ session }: AdminSidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // If on login page, don't show sidebar
  if (pathname === "/admin/login") {
    return null;
  }

  const navItems = [
    {
      label: "Overview",
      href: "/admin",
      icon: LayoutDashboard,
      exact: true,
      allowed: true,
    },
    {
      label: "Programs",
      href: "/admin/programs",
      icon: BookOpen,
      allowed: hasPermission(session.role, "manage_content"),
    },
    {
      label: "Impact Metrics",
      href: "/admin/impact",
      icon: BarChart3,
      allowed: true,
      badge: "Governance",
    },
    {
      label: "Analytics & Usage",
      href: "/admin/analytics",
      icon: LineChart,
      allowed: hasPermission(session.role, "view_analytics"),
      badge: "Privacy",
    },
    {
      label: "Stories & News",
      href: "/admin/stories",
      icon: FileText,
      allowed: hasPermission(session.role, "manage_content"),
    },
    {
      label: "Events",
      href: "/admin/events",
      icon: Calendar,
      allowed: hasPermission(session.role, "manage_content"),
    },
    {
      label: "Inquiries",
      href: "/admin/enquiries",
      icon: Inbox,
      allowed: hasPermission(session.role, "manage_inquiries"),
      badge: "Confidential",
    },
    {
      label: "Media Library",
      href: "/admin/media",
      icon: ImageIcon,
      allowed: hasPermission(session.role, "manage_media"),
    },
    {
      label: "Admins & Roles",
      href: "/admin/users",
      icon: Users,
      allowed: hasPermission(session.role, "manage_admins"),
    },
    {
      label: "Audit Trail",
      href: "/admin/audit",
      icon: ShieldAlert,
      allowed: session.role === "super_admin",
    },
  ];

  const visibleItems = navItems.filter((i) => i.allowed);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 text-slate-300 w-64 border-r border-slate-800">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800 flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-sm">
            <Image
              src="/assets/brand/logo.png"
              alt="Logo"
              width={34}
              height={34}
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-heading font-bold text-white text-sm block tracking-tight">
              Sathiyavani Trust
            </span>
            <span className="text-[11px] text-brand-amber font-medium">Admin Control</span>
          </div>
        </Link>

        {/* Mobile Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden text-slate-400 hover:text-white p-1"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Admin Session Identity Callout */}
      <div className="p-4 bg-slate-800/60 border-b border-slate-800 text-xs space-y-1">
        <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">
          Current Session
        </span>
        <div className="font-semibold text-white truncate">{session.fullName}</div>
        <div className="text-slate-400 text-[11px] truncate">{session.email}</div>
        <div className="pt-1">
          <Badge variant={session.role === "super_admin" ? "amber" : "teal"} size="sm">
            {formatRoleTitle(session.role)}
          </Badge>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {visibleItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all",
                isActive
                  ? "bg-brand-navy text-white shadow-sm"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className={cn("w-4 h-4", isActive ? "text-brand-amber" : "text-slate-400")} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                    item.badge === "Confidential"
                      ? "bg-rose-500/20 text-rose-300"
                      : "bg-amber-500/20 text-amber-300"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Return Link */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/40">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <span>View Public Website</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:block shrink-0 sticky top-0 h-screen">{sidebarContent}</aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full">{sidebarContent}</div>
        </div>
      )}

      {/* Mobile Toggle Bar */}
      <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between text-white sticky top-0 z-30">
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white p-1"
          aria-label="Open navigation sidebar"
        >
          <Menu className="w-5 h-5" />
          <span>Admin Menu</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-white truncate max-w-[150px]">
            {session.fullName}
          </span>
          <Badge variant={session.role === "super_admin" ? "amber" : "teal"} size="sm">
            {session.role}
          </Badge>
        </div>
      </div>
    </>
  );
}
