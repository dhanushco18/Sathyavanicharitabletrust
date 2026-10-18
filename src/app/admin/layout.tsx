import React from "react";
import { getServerAdminSession } from "@/lib/auth/session";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAdminSession();

  // If there's no session, let the children render (e.g. login page handles itself, or middleware redirects)
  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row text-slate-800">
      {/* Sidebar Navigation */}
      <AdminSidebar session={session} />

      {/* Main Administrative Container */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <AdminHeader session={session} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
