import React from "react";
import { dataRepository } from "@/lib/db/client";
import { getServerAdminSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/rbac";
import { EventsManager } from "./EventsManager";

export const metadata = {
  title: "Events & Drives — Sathiyavani Trust Admin",
};

export default async function AdminEventsPage() {
  const session = await getServerAdminSession();
  if (!session) return null;

  const events = dataRepository.getEvents();
  const canManage = hasPermission(session.role, "manage_content");

  return <EventsManager initialEvents={events} canManage={canManage} />;
}
