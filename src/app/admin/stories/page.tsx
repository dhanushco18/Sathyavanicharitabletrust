import React from "react";
import { dataRepository } from "@/lib/db/client";
import { getServerAdminSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/rbac";
import { StoriesManager } from "./StoriesManager";

export const metadata = {
  title: "Stories & Testimonials — Sathiyavani Trust Admin",
};

export default async function AdminStoriesPage() {
  const session = await getServerAdminSession();
  if (!session) return null;

  const stories = dataRepository.getStories();
  const canManage = hasPermission(session.role, "manage_content");

  return <StoriesManager initialStories={stories} canManage={canManage} />;
}
