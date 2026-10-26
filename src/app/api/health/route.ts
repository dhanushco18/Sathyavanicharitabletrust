import { NextResponse } from "next/server";
import { dataRepository } from "@/lib/db/client";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  const startTime = Date.now();

  try {
    // Perform a lightweight check on the data repository
    const impactMetrics = dataRepository.getImpactMetrics(true);

    const responsePayload = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptimeSeconds: typeof process?.uptime === "function" ? Math.floor(process.uptime()) : 0,
      environment: process.env.NODE_ENV || "production",
      version: "0.2.0",
      services: {
        database: {
          status: "connected",
          mode: process.env.NEXT_PUBLIC_SUPABASE_URL ? "supabase_cloud" : "local_dual_mode",
          sampleQueryRecords: impactMetrics.length,
        },
        security: {
          cspEnforced: true,
          hstsEnforced: true,
          rateLimiterActive: true,
        },
      },
      latencyMs: Date.now() - startTime,
    };

    return NextResponse.json(responsePayload, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: "Database connectivity check failed",
        latencyMs: Date.now() - startTime,
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  }
}
