import React from "react";
import { dataRepository } from "@/lib/db/client";
import { getServerAdminSession } from "@/lib/auth/session";
import { ImpactMetricsManager } from "./ImpactMetricsManager";

export const metadata = {
  title: "Impact Metrics Governance — Sathiyavani Trust Admin",
};

export default async function AdminImpactPage() {
  const session = await getServerAdminSession();
  if (!session) return null;

  const metrics = dataRepository.getImpactMetrics();
  const isSuperAdmin = session.role === "super_admin";

  return <ImpactMetricsManager initialMetrics={metrics} isSuperAdmin={isSuperAdmin} />;
}
