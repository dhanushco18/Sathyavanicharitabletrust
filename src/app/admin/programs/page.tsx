import React from "react";
import { dataRepository } from "@/lib/db/client";
import { getServerAdminSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/rbac";
import { ProgramsManager } from "./ProgramsManager";

export const metadata = {
  title: "Programs Management — Sathiyavani Trust Admin",
};

export default async function AdminProgramsPage() {
  const session = await getServerAdminSession();
  if (!session) return null;

  const programs = dataRepository.getPrograms();
  const canManage = hasPermission(session.role, "manage_content");

  return <ProgramsManager initialPrograms={programs} canManage={canManage} />;
}
