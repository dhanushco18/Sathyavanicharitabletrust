import React from "react";
import { dataRepository } from "@/lib/db/client";
import { getServerAdminSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/rbac";
import { MediaManager } from "./MediaManager";

export const metadata = {
  title: "Media Library — Sathiyavani Trust Admin",
};

export default async function AdminMediaPage() {
  const session = await getServerAdminSession();
  if (!session) return null;

  if (!hasPermission(session.role, "manage_media")) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <h3 className="font-heading font-bold text-slate-900 text-lg">Permission Denied</h3>
        <p className="text-xs text-slate-500 mt-1">
          Your administrative role does not have authorization to manage media assets.
        </p>
      </div>
    );
  }

  const media = dataRepository.getMedia();
  return <MediaManager initialMedia={media} />;
}
