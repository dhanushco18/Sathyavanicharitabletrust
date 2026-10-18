import { createClient, SupabaseClient } from "@supabase/supabase-js";
import {
  AdminProfile,
  ProgramRecord,
  PageContentRecord,
  StoryRecord,
  EventRecord,
  ImpactMetricRecord,
  InquiryRecord,
  MediaAssetRecord,
  AuditLogRecord,
} from "./types";
import { SITE_CONFIG } from "@/lib/constants";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseAnonKey && !supabaseUrl.includes("placeholder")
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

// ============================================================================
// VERIFIED LOCAL SEED DATA (Used when live Supabase is not yet configured)
// ============================================================================

const SEED_ADMINS: AdminProfile[] = [
  {
    id: "admin-raghu-001",
    email: "admin@sathiyavanitrust.org",
    full_name: `${SITE_CONFIG.founderName} (President)`,
    role: "super_admin",
    avatar_url: "/assets/brand/logo.png",
    last_sign_in_at: new Date().toISOString(),
    created_at: "2023-01-15T10:00:00Z",
    updated_at: new Date().toISOString(),
  },
  {
    id: "admin-coord-002",
    email: "coordinator@sathiyavanitrust.org",
    full_name: "Community Field Coordinator",
    role: "content_admin",
    avatar_url: null,
    last_sign_in_at: "2026-10-15T09:30:00Z",
    created_at: "2023-06-01T10:00:00Z",
    updated_at: new Date().toISOString(),
  },
  {
    id: "admin-desk-003",
    email: "inquiries@sathiyavanitrust.org",
    full_name: "Volunteer & Inquiries Manager",
    role: "enquiry_manager",
    avatar_url: null,
    last_sign_in_at: "2026-10-18T08:00:00Z",
    created_at: "2024-01-10T10:00:00Z",
    updated_at: new Date().toISOString(),
  },
];

const SEED_PROGRAMS: ProgramRecord[] = [
  {
    id: "prog-edu-01",
    slug: "education",
    title: "Free Education & Evening Tuition",
    category: "Education",
    short_description: "Daily after-school academic coaching, school-fee assistance, and textbook support.",
    full_description:
      "Daily evening classes run from 5:30 PM to 8:30 PM at the Library Learning Center facility, providing foundational literacy, math coaching, homework guidance, and examination preparation.",
    featured_image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    location: "Library Learning Center, Chennai",
    status: "published",
    sort_order: 1,
    created_at: "2023-01-15T10:00:00Z",
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "prog-child-02",
    slug: "child-development",
    title: "Holistic Child Development",
    category: "Child Welfare",
    short_description: "Weekend sports coaching, creative arts, and dignity-first student birthday celebrations.",
    full_description:
      "Nurturing every child's physical and emotional self-esteem through sports tournaments, drawing workshops, public speaking, and personalized birthday gifts for children who have never celebrated birthdays.",
    featured_image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    location: "Community Center Grounds, Chennai",
    status: "published",
    sort_order: 2,
    created_at: "2023-03-10T10:00:00Z",
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "prog-comm-03",
    slug: "community-outreach",
    title: "Community Outreach & Family Aid",
    category: "Welfare",
    short_description: "Essential grocery kits and emergency healthcare support for single-parent households.",
    full_description:
      "Direct nutritional and medical assistance delivered to vulnerable single-mother households, elderly residents with no family support, and daily-wage laborers during economic or climate distress.",
    featured_image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop",
    location: "Slum Resettlement Areas, Chennai",
    status: "published",
    sort_order: 3,
    created_at: "2023-05-12T10:00:00Z",
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "prog-fest-04",
    slug: "festival-support",
    title: "Diwali Gift Initiative & Festival Joy",
    category: "Seasonal",
    short_description: "Annual gift packages with new clothing, sweets, and crackers for underserved families.",
    full_description:
      "Ensuring no child feels excluded during major cultural celebrations. Each festival package includes quality brand new clothing, traditional festive sweets, and crackers distributed directly in community colonies.",
    featured_image:
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200&auto=format&fit=crop",
    location: "Greater Chennai Community Centers",
    status: "published",
    sort_order: 4,
    created_at: "2023-09-01T10:00:00Z",
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "prog-env-05",
    slug: "environment",
    title: "Environmental Care & Green Neighborhoods",
    category: "Environment",
    short_description: "Native sapling planting and cleanliness awareness in collaboration with Exnora.",
    full_description:
      "Organized weekend tree-planting drives and student-led environmental awareness workshops across North and Central Chennai, promoting biodiversity and community urban green cover.",
    featured_image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    location: "Public School & Park Perimeters, Chennai",
    status: "published",
    sort_order: 5,
    created_at: "2023-11-20T10:00:00Z",
    updated_at: "2026-10-18T10:00:00Z",
  },
];

const SEED_IMPACT_METRICS: ImpactMetricRecord[] = [
  {
    id: "metric-001",
    metric_key: "diwali_kits_2024",
    title: "Diwali 2024 Festive Packages",
    numeric_value: 1000,
    display_suffix: "+",
    unit: "Packages Delivered",
    reporting_period: "Diwali 2024 (Completed)",
    description: "Annual gift distributions comprising brand new festival attire, sweets, and crackers.",
    methodology: "Physical token-based distribution register cross-verified with community ward coordinators.",
    verification_source: "Diwali 2024 Physical Distribution Register #4",
    status: "published",
    approved_by: "admin-raghu-001",
    approved_at: "2024-11-05T12:00:00Z",
    reviewer_notes: "Physical register verified and confirmed by lead trustee.",
    created_at: "2024-11-01T10:00:00Z",
    updated_at: "2024-11-05T12:00:00Z",
  },
  {
    id: "metric-002",
    metric_key: "active_students_2024",
    title: "Active Students in Free Evening Tuition",
    numeric_value: 50,
    display_suffix: "+",
    unit: "Enrolled Students",
    reporting_period: "Academic Year 2024-2025",
    description: "Children attending daily coaching sessions across standards 1 to 10.",
    methodology: "Daily evening biometric and physical roll-call attendance registers.",
    verification_source: "Learning Center Attendance Log 2024-25",
    status: "published",
    approved_by: "admin-raghu-001",
    approved_at: "2024-09-01T10:00:00Z",
    reviewer_notes: "Daily attendance confirmed by volunteer teachers.",
    created_at: "2024-08-25T10:00:00Z",
    updated_at: "2024-09-01T10:00:00Z",
  },
  {
    id: "metric-003",
    metric_key: "trees_planted_exnora",
    title: "Native Saplings Planted",
    numeric_value: 200,
    display_suffix: "+",
    unit: "Saplings Sustained",
    reporting_period: "2023 - 2024 Drives",
    description: "Tree planting and neighborhood greening initiatives in collaboration with Exnora.",
    methodology: "Joint physical inspection log with Exnora field volunteers.",
    verification_source: "Exnora Joint Greening Certificate 2024",
    status: "published",
    approved_by: "admin-raghu-001",
    approved_at: "2024-06-15T10:00:00Z",
    reviewer_notes: "Survival rate verified at 85% after 6 months.",
    created_at: "2024-06-10T10:00:00Z",
    updated_at: "2024-06-15T10:00:00Z",
  },
  {
    id: "metric-004",
    metric_key: "target_beneficiaries_2025",
    title: "Diwali 2025 Planning Target",
    numeric_value: 1500,
    display_suffix: "+",
    unit: "Beneficiary Families",
    reporting_period: "Diwali 2025 (Target)",
    description: "Proposed scaling target for Diwali 2025 gift distribution across extended suburban areas.",
    methodology: "Community survey estimation pending donor pledge finalization.",
    verification_source: "Internal Trust 2025 Strategic Budget Draft",
    status: "submitted", // Pending review to demonstrate the approval workflow!
    reviewer_notes: "Awaiting final donor pledge confirmation before publishing.",
    created_at: "2026-09-10T10:00:00Z",
    updated_at: "2026-09-10T10:00:00Z",
  },
];

const SEED_STORIES: StoryRecord[] = [
  {
    id: "story-001",
    slug: "from-roadside-tutoring-to-learning-center",
    title: "From a Roadside Tree to a Thriving Community Learning Center",
    category: "Education Milestone",
    excerpt:
      "How an informal roadside tutoring effort during the 2020 pandemic lockdown grew into a dedicated evening tuition center serving over 50 students daily.",
    content_markdown: `During the strict school closures of 2020, children in dense urban settlements faced a near-total blackout of formal education. With neither smartphones nor internet access, learning came to a standstill. Mr. Raghu N. initiated blackboard sessions under open trees. Today, that small gathering has transitioned into an organized center with evening volunteer teachers, structured study materials, and nutritious snacks.`,
    cover_image_url:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    consent_verified: true,
    is_published: true,
    published_at: "2024-03-12T10:00:00Z",
    created_at: "2024-03-10T10:00:00Z",
    updated_at: "2024-03-12T10:00:00Z",
  },
  {
    id: "story-002",
    slug: "diwali-growth-20-to-1000",
    title: "The Growth of the Diwali Gift Initiative: 2019 to 2024",
    category: "Community Joy",
    excerpt:
      "Tracing the journey of our annual festive gift drive from just 20 gift packages in 2019 to over 1,000 packages distributed in October 2024.",
    content_markdown: `What began in 2019 as a modest personal contribution to provide new clothes for 20 neighborhood children has steadily expanded each year. Through transparent distribution and community goodwill, 1,000 families received quality festival kits in October 2024 without a single intermediary deduction.`,
    cover_image_url:
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200&auto=format&fit=crop",
    consent_verified: true,
    is_published: true,
    published_at: "2024-11-04T10:00:00Z",
    created_at: "2024-11-01T10:00:00Z",
    updated_at: "2024-11-04T10:00:00Z",
  },
];

const SEED_EVENTS: EventRecord[] = [
  {
    id: "event-001",
    slug: "daily-evening-tuition",
    title: "Daily Evening Tuition & Mentorship Classes",
    description: "Ongoing academic coaching for standards 1 to 10 covering Mathematics, Science, English, and Tamil.",
    event_date: new Date().toISOString(),
    location: "Library Learning Center, Ground Floor, Chennai",
    category: "Academic Coaching",
    status: "published",
    created_at: "2024-01-01T10:00:00Z",
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "event-002",
    slug: "annual-sports-day-2024",
    title: "Annual Children's Sports Day & Relay Challenge",
    description: "Friendly athletic competitions, relay races, and sports equipment distribution for students.",
    event_date: "2024-08-15T09:00:00Z",
    location: "Community Center Playgrounds, Chennai",
    category: "Sports & Health",
    status: "completed",
    created_at: "2024-08-01T10:00:00Z",
    updated_at: "2024-08-16T10:00:00Z",
  },
  {
    id: "event-003",
    slug: "diwali-distribution-drive-2025",
    title: "Diwali 2025 Community Gift Distribution Drive",
    description: "Upcoming distribution of festive gift kits, sweet boxes, and new attire for enrolled families.",
    event_date: "2025-10-18T10:00:00Z",
    location: "Community Gathering Hall, Chennai",
    category: "Festival Support",
    status: "draft",
    created_at: "2026-09-01T10:00:00Z",
    updated_at: "2026-09-01T10:00:00Z",
  },
];

const SEED_INQUIRIES: InquiryRecord[] = [
  {
    id: "inq-001",
    inquiry_type: "volunteer",
    full_name: "Karthik Subramanian",
    email: "karthik.subramanian@example.com",
    phone: "+91 98401 22334",
    organization_name: "Software Engineer (Volunteer)",
    message: "I would like to teach Mathematics and basic computer skills on Saturday evenings.",
    metadata_payload: { preferredDays: "Saturdays", subjects: ["Mathematics", "Computer Basics"] },
    status: "new",
    internal_notes: "Candidate has 5 years software experience, lives 3km from center. Schedule call.",
    created_at: "2026-10-17T14:30:00Z",
    updated_at: "2026-10-17T14:30:00Z",
  },
  {
    id: "inq-002",
    inquiry_type: "sponsorship",
    full_name: "Dr. Lakshmi Narayanan",
    email: "dr.lakshmi.n@example.org",
    phone: "+91 97890 54321",
    message: "Interested in sponsoring 3 students' annual school fees and books for the upcoming term.",
    metadata_payload: { sponsorTier: "Annual Academic Fees", studentCount: 3 },
    status: "in_progress",
    internal_notes: "Coordinator spoke on phone. Sharing school fee receipts.",
    assigned_to: "admin-raghu-001",
    created_at: "2026-10-15T11:00:00Z",
    updated_at: "2026-10-16T09:00:00Z",
  },
  {
    id: "inq-003",
    inquiry_type: "partnership",
    full_name: "Sundar Rajan",
    email: "sundar@technologies-corp.example.com",
    phone: "+91 94440 88990",
    organization_name: "Tech Solutions Pvt Ltd",
    message: "Exploring CSR partnership for providing 5 refurbished laptops for the study center.",
    metadata_payload: { csrDomain: "Digital Education", estimatedValue: "INR 1,20,000" },
    status: "responded",
    internal_notes: "Sent proposal draft. Awaiting CSR committee review.",
    assigned_to: "admin-raghu-001",
    created_at: "2026-10-12T16:00:00Z",
    updated_at: "2026-10-14T10:00:00Z",
  },
];

const SEED_MEDIA: MediaAssetRecord[] = [
  {
    id: "media-001",
    file_name: "trust-circular-logo.png",
    storage_path: "/assets/brand/logo.png",
    file_type: "image/png",
    file_size_bytes: 42100,
    alt_text: "Sathiyavani Charitable Trust official circular emblem",
    consent_on_file: true,
    created_at: "2023-01-01T00:00:00Z",
  },
  {
    id: "media-002",
    file_name: "tuition-center-reading.webp",
    storage_path: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200",
    file_type: "image/webp",
    file_size_bytes: 182000,
    alt_text: "Students reading textbooks during evening tuition coaching",
    consent_on_file: true,
    created_at: "2024-02-15T00:00:00Z",
  },
];

const SEED_AUDIT_LOGS: AuditLogRecord[] = [
  {
    id: "audit-001",
    admin_id: "admin-raghu-001",
    action_type: "SYSTEM_INITIALIZED",
    target_table: "system",
    details: { version: "Phase 4 Initial Release", mode: "Dual-Mode Repository" },
    created_at: "2026-10-18T00:00:00Z",
  },
  {
    id: "audit-002",
    admin_id: "admin-raghu-001",
    action_type: "METRIC_PUBLISHED",
    target_table: "impact_metrics",
    target_record_id: "metric-001",
    details: { metric_key: "diwali_kits_2024", verified_count: 1000 },
    created_at: "2024-11-05T12:00:00Z",
  },
];

// ============================================================================
// IN-MEMORY / LOCAL STORAGE DATA REPOSITORY
// ============================================================================

class LocalDataRepository {
  private admins: AdminProfile[] = [...SEED_ADMINS];
  private programs: ProgramRecord[] = [...SEED_PROGRAMS];
  private impactMetrics: ImpactMetricRecord[] = [...SEED_IMPACT_METRICS];
  private stories: StoryRecord[] = [...SEED_STORIES];
  private events: EventRecord[] = [...SEED_EVENTS];
  private inquiries: InquiryRecord[] = [...SEED_INQUIRIES];
  private media: MediaAssetRecord[] = [...SEED_MEDIA];
  private auditLogs: AuditLogRecord[] = [...SEED_AUDIT_LOGS];

  // --- Programs ---
  getPrograms(onlyPublished = false): ProgramRecord[] {
    if (onlyPublished) {
      return this.programs.filter((p) => p.status === "published");
    }
    return [...this.programs];
  }

  getProgramBySlug(slug: string): ProgramRecord | undefined {
    return this.programs.find((p) => p.slug === slug);
  }

  saveProgram(program: Omit<ProgramRecord, "id" | "created_at" | "updated_at"> & { id?: string }): ProgramRecord {
    const now = new Date().toISOString();
    if (program.id) {
      const idx = this.programs.findIndex((p) => p.id === program.id);
      if (idx !== -1) {
        const updated = { ...this.programs[idx], ...program, updated_at: now };
        this.programs[idx] = updated;
        return updated;
      }
    }
    const newRecord: ProgramRecord = {
      ...program,
      id: `prog-${Date.now()}`,
      created_at: now,
      updated_at: now,
    };
    this.programs.push(newRecord);
    return newRecord;
  }

  deleteProgram(id: string): boolean {
    const initialLen = this.programs.length;
    this.programs = this.programs.filter((p) => p.id !== id);
    return this.programs.length < initialLen;
  }

  // --- Impact Metrics ---
  getImpactMetrics(onlyPublished = false): ImpactMetricRecord[] {
    if (onlyPublished) {
      return this.impactMetrics.filter((m) => m.status === "published");
    }
    return [...this.impactMetrics];
  }

  saveImpactMetric(
    metric: Omit<ImpactMetricRecord, "id" | "created_at" | "updated_at"> & { id?: string }
  ): ImpactMetricRecord {
    const now = new Date().toISOString();
    if (metric.id) {
      const idx = this.impactMetrics.findIndex((m) => m.id === metric.id);
      if (idx !== -1) {
        const updated = { ...this.impactMetrics[idx], ...metric, updated_at: now };
        this.impactMetrics[idx] = updated;
        return updated;
      }
    }
    const newRecord: ImpactMetricRecord = {
      ...metric,
      id: `metric-${Date.now()}`,
      created_at: now,
      updated_at: now,
    };
    this.impactMetrics.push(newRecord);
    return newRecord;
  }

  updateMetricStatus(
    id: string,
    status: ImpactMetricRecord["status"],
    adminId: string,
    reviewerNotes?: string
  ): ImpactMetricRecord | null {
    const metric = this.impactMetrics.find((m) => m.id === id);
    if (!metric) return null;

    metric.status = status;
    metric.updated_at = new Date().toISOString();
    if (reviewerNotes !== undefined) {
      metric.reviewer_notes = reviewerNotes;
    }
    if (status === "approved" || status === "published") {
      metric.approved_by = adminId;
      metric.approved_at = new Date().toISOString();
    }

    this.auditLogs.unshift({
      id: `audit-${Date.now()}`,
      admin_id: adminId,
      action_type: `METRIC_STATUS_${status.toUpperCase()}`,
      target_table: "impact_metrics",
      target_record_id: id,
      details: { status, reviewerNotes },
      created_at: new Date().toISOString(),
    });

    return metric;
  }

  // --- Stories ---
  getStories(onlyPublished = false): StoryRecord[] {
    if (onlyPublished) {
      return this.stories.filter((s) => s.is_published && s.consent_verified);
    }
    return [...this.stories];
  }

  saveStory(story: Omit<StoryRecord, "id" | "created_at" | "updated_at"> & { id?: string }): StoryRecord {
    const now = new Date().toISOString();
    if (story.id) {
      const idx = this.stories.findIndex((s) => s.id === story.id);
      if (idx !== -1) {
        const updated = { ...this.stories[idx], ...story, updated_at: now };
        this.stories[idx] = updated;
        return updated;
      }
    }
    const newRecord: StoryRecord = {
      ...story,
      id: `story-${Date.now()}`,
      created_at: now,
      updated_at: now,
    };
    this.stories.push(newRecord);
    return newRecord;
  }

  deleteStory(id: string): boolean {
    const initialLen = this.stories.length;
    this.stories = this.stories.filter((s) => s.id !== id);
    return this.stories.length < initialLen;
  }

  // --- Events ---
  getEvents(onlyPublished = false): EventRecord[] {
    if (onlyPublished) {
      return this.events.filter((e) => e.status === "published" || e.status === "completed");
    }
    return [...this.events];
  }

  saveEvent(event: Omit<EventRecord, "id" | "created_at" | "updated_at"> & { id?: string }): EventRecord {
    const now = new Date().toISOString();
    if (event.id) {
      const idx = this.events.findIndex((e) => e.id === event.id);
      if (idx !== -1) {
        const updated = { ...this.events[idx], ...event, updated_at: now };
        this.events[idx] = updated;
        return updated;
      }
    }
    const newRecord: EventRecord = {
      ...event,
      id: `event-${Date.now()}`,
      created_at: now,
      updated_at: now,
    };
    this.events.push(newRecord);
    return newRecord;
  }

  // --- Inquiries ---
  getInquiries(): InquiryRecord[] {
    return [...this.inquiries];
  }

  saveInquiry(inquiry: Omit<InquiryRecord, "id" | "created_at" | "updated_at">): InquiryRecord {
    const now = new Date().toISOString();
    const newRecord: InquiryRecord = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      created_at: now,
      updated_at: now,
    };
    this.inquiries.unshift(newRecord);
    return newRecord;
  }

  updateInquiryStatus(id: string, status: InquiryRecord["status"], notes?: string): InquiryRecord | null {
    const inq = this.inquiries.find((i) => i.id === id);
    if (!inq) return null;
    inq.status = status;
    inq.updated_at = new Date().toISOString();
    if (notes !== undefined) {
      inq.internal_notes = notes;
    }
    return inq;
  }

  // --- Media ---
  getMedia(): MediaAssetRecord[] {
    return [...this.media];
  }

  saveMedia(asset: Omit<MediaAssetRecord, "id" | "created_at">): MediaAssetRecord {
    const newAsset: MediaAssetRecord = {
      ...asset,
      id: `media-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    this.media.unshift(newAsset);
    return newAsset;
  }

  // --- Audit Logs ---
  getAuditLogs(): AuditLogRecord[] {
    return [...this.auditLogs];
  }

  // --- Admins ---
  getAdmins(): AdminProfile[] {
    return [...this.admins];
  }

  findAdminByEmail(email: string): AdminProfile | undefined {
    return this.admins.find((a) => a.email.toLowerCase() === email.toLowerCase());
  }
}

// Global Singleton instance for seamless local operations
export const dataRepository = new LocalDataRepository();
