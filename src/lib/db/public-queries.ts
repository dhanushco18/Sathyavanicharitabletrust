import { dataRepository } from "./client";
import { ProgramRecord, StoryRecord, EventRecord, ImpactMetricRecord } from "./types";
import { PROGRAMMES_LIST, VERIFIED_IMPACT_BASELINE } from "@/lib/constants";
import { ImpactMetric } from "@/lib/types";

export async function getPublicPrograms(): Promise<ProgramRecord[]> {
  try {
    const published = dataRepository.getPrograms(true);
    if (published.length > 0) {
      return published;
    }
  } catch (err) {
    console.error("Error fetching public programs:", err);
  }

  // Fallback to constants
  return PROGRAMMES_LIST.map((p, idx) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    category: p.category,
    short_description: p.summary,
    full_description: p.summary,
    featured_image: null,
    location: "Library Learning Center, Chennai",
    status: "published" as const,
    sort_order: idx + 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));
}

export async function getPublicStories(): Promise<StoryRecord[]> {
  try {
    // Only published stories with verified consent
    return dataRepository.getStories(true);
  } catch (err) {
    console.error("Error fetching public stories:", err);
    return [];
  }
}

export async function getPublicEvents(): Promise<EventRecord[]> {
  try {
    return dataRepository.getEvents(true);
  } catch (err) {
    console.error("Error fetching public events:", err);
    return [];
  }
}

export async function getPublicImpactMetrics(): Promise<ImpactMetricRecord[]> {
  try {
    const published = dataRepository.getImpactMetrics(true);
    if (published.length > 0) {
      return published;
    }
  } catch (err) {
    console.error("Error fetching public impact metrics:", err);
  }

  // Fallback to verified baseline metrics from Phase 3
  return VERIFIED_IMPACT_BASELINE.map((m: ImpactMetric) => ({
    id: m.key,
    metric_key: m.key,
    title: m.label,
    numeric_value: m.value,
    display_suffix: m.suffix || "+",
    unit: "Beneficiaries",
    reporting_period: m.period,
    description: m.label,
    methodology: "Documented physical ledger audit",
    verification_source: m.verificationSource,
    status: "published" as const,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));
}
