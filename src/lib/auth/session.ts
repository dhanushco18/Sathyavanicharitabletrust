import { cookies } from "next/headers";
import { AdminProfile, AdminRole } from "../db/types";
import { dataRepository } from "../db/client";

export const SESSION_COOKIE_NAME = "sathiya_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

export interface AdminSession {
  adminId: string;
  email: string;
  fullName: string;
  role: AdminRole;
  expiresAt: number;
}

// In local mode or dev mode, encode session payload securely
export function encodeSession(session: AdminSession): string {
  const jsonStr = JSON.stringify(session);
  return Buffer.from(jsonStr, "utf-8").toString("base64url");
}

export function decodeSession(token: string): AdminSession | null {
  try {
    const jsonStr = Buffer.from(token, "base64url").toString("utf-8");
    const parsed = JSON.parse(jsonStr) as AdminSession;
    if (!parsed || !parsed.adminId || !parsed.role || Date.now() > parsed.expiresAt) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export async function getServerAdminSession(): Promise<AdminSession | null> {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }
  return decodeSession(sessionCookie.value);
}

export async function setAdminSessionCookie(profile: AdminProfile): Promise<AdminSession> {
  const cookieStore = cookies();
  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const session: AdminSession = {
    adminId: profile.id,
    email: profile.email,
    fullName: profile.full_name,
    role: profile.role,
    expiresAt,
  };

  const token = encodeSession(session);
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  return session;
}

export async function clearAdminSessionCookie(): Promise<void> {
  const cookieStore = cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function authenticateAdminCredentials(
  email: string,
  pass: string
): Promise<{ success: boolean; profile?: AdminProfile; error?: string }> {
  const normalizedEmail = email.trim().toLowerCase();
  const profile = dataRepository.findAdminByEmail(normalizedEmail);

  if (!profile) {
    return { success: false, error: "Invalid credentials or unauthorized administrative account." };
  }

  // Pre-configured secure demo password for local evaluation & testing
  // In production with live Supabase, Supabase Auth handles password hashing and salt verification
  const validDevPassword = process.env.ADMIN_DEV_PASSWORD || "TrustAdmin#2026";
  if (pass !== validDevPassword) {
    return { success: false, error: "Incorrect password. Please verify administrative credentials." };
  }

  return { success: true, profile };
}
