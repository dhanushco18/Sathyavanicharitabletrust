export type AdminRole = "super_admin" | "content_admin" | "enquiry_manager";

export type ContentStatus = "draft" | "published" | "archived";

export type EventStatus = "draft" | "published" | "completed";

export type MetricStatus = "draft" | "submitted" | "approved" | "rejected" | "published";

export type InquiryType = "general" | "volunteer" | "sponsorship" | "partnership";

export type InquiryStatus = "new" | "in_progress" | "responded" | "resolved" | "spam";

export interface AdminProfile {
  id: string;
  email: string;
  full_name: string;
  role: AdminRole;
  avatar_url?: string | null;
  last_sign_in_at?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProgramRecord {
  id: string;
  slug: string;
  title: string;
  category: string;
  short_description: string;
  full_description: string;
  featured_image?: string | null;
  gallery_urls?: string[];
  start_date?: string | null;
  end_date?: string | null;
  location: string;
  status: ContentStatus;
  sort_order: number;
  created_by?: string | null;
  updated_by?: string | null;
  created_at: string;
  updated_at: string;
}

export interface PageContentRecord {
  id: string;
  page_key: string;
  title: string;
  hero_headline?: string | null;
  hero_subhead?: string | null;
  content_sections: Record<string, unknown>;
  seo_title?: string | null;
  seo_description?: string | null;
  status: ContentStatus;
  updated_by?: string | null;
  updated_at: string;
}

export interface StoryRecord {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content_markdown: string;
  cover_image_url?: string | null;
  consent_verified: boolean;
  is_published: boolean;
  published_at?: string | null;
  created_by?: string | null;
  created_at: string;
  updated_at: string;
}

export interface EventRecord {
  id: string;
  slug: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  image_url?: string | null;
  category: string;
  registration_url?: string | null;
  status: EventStatus;
  created_by?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ImpactMetricRecord {
  id: string;
  metric_key: string;
  title: string;
  numeric_value: number;
  display_suffix: string;
  unit: string;
  reporting_period: string;
  description: string;
  methodology: string;
  verification_source: string;
  status: MetricStatus;
  approved_by?: string | null;
  approved_at?: string | null;
  reviewer_notes?: string | null;
  created_by?: string | null;
  created_at: string;
  updated_at: string;
}

export interface InquiryRecord {
  id: string;
  inquiry_type: InquiryType;
  full_name: string;
  email?: string | null;
  phone: string;
  organization_name?: string | null;
  message: string;
  metadata_payload?: Record<string, unknown>;
  status: InquiryStatus;
  internal_notes?: string | null;
  assigned_to?: string | null;
  created_at: string;
  updated_at: string;
}

export interface MediaAssetRecord {
  id: string;
  file_name: string;
  storage_path: string;
  file_type: string;
  file_size_bytes: number;
  alt_text: string;
  consent_on_file: boolean;
  uploaded_by?: string | null;
  created_at: string;
}

export interface AuditLogRecord {
  id: string;
  admin_id?: string | null;
  action_type: string;
  target_table: string;
  target_record_id?: string | null;
  details?: Record<string, unknown>;
  created_at: string;
}
