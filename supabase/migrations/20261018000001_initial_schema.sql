-- ==============================================================================
-- Sathiyavani Charitable Trust — Initial Database Schema & RLS Policies
-- Migration: 20261018000001_initial_schema.sql
-- Description: Core tables, enums, triggers, and Row Level Security for Phase 4
-- ==============================================================================

-- Enable UUID extension if not already present
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. ENUMS & DOMAINS
-- ------------------------------------------------------------------------------
DO $$ BEGIN
    CREATE TYPE admin_role AS ENUM ('super_admin', 'content_admin', 'enquiry_manager');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE content_status AS ENUM ('draft', 'published', 'archived');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE event_status AS ENUM ('draft', 'published', 'completed');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE metric_status AS ENUM ('draft', 'submitted', 'approved', 'rejected', 'published');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE inquiry_type AS ENUM ('general', 'volunteer', 'sponsorship', 'partnership');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE inquiry_status AS ENUM ('new', 'in_progress', 'responded', 'resolved', 'spam');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- ------------------------------------------------------------------------------
-- 2. TABLES
-- ------------------------------------------------------------------------------

-- 2.1 Admin Profiles
CREATE TABLE IF NOT EXISTS admin_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role admin_role NOT NULL DEFAULT 'content_admin',
    avatar_url TEXT,
    last_sign_in_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2.2 Programs
CREATE TABLE IF NOT EXISTS programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    featured_image TEXT,
    gallery_urls JSONB DEFAULT '[]'::jsonb,
    start_date DATE,
    end_date DATE,
    location TEXT DEFAULT 'Chennai, Tamil Nadu',
    status content_status NOT NULL DEFAULT 'draft',
    sort_order INT NOT NULL DEFAULT 0,
    created_by UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    updated_by UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2.3 Page Content (Editable Page Sections)
CREATE TABLE IF NOT EXISTS page_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_key TEXT NOT NULL UNIQUE, -- e.g. 'home', 'about', 'impact'
    title TEXT NOT NULL,
    hero_headline TEXT,
    hero_subhead TEXT,
    content_sections JSONB NOT NULL DEFAULT '{}'::jsonb,
    seo_title TEXT,
    seo_description TEXT,
    status content_status NOT NULL DEFAULT 'published',
    updated_by UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2.4 Stories & Case Studies
CREATE TABLE IF NOT EXISTS stories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'General',
    excerpt TEXT NOT NULL,
    content_markdown TEXT NOT NULL,
    cover_image_url TEXT,
    consent_verified BOOLEAN NOT NULL DEFAULT false, -- Mandatory child protection consent
    is_published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMPTZ,
    created_by UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2.5 Events
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    event_date TIMESTAMPTZ NOT NULL,
    location TEXT NOT NULL DEFAULT 'Library Learning Center, Chennai',
    image_url TEXT,
    category TEXT NOT NULL DEFAULT 'Education',
    registration_url TEXT,
    status event_status NOT NULL DEFAULT 'draft',
    created_by UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2.6 Impact Metrics (With 4-stage governance workflow)
CREATE TABLE IF NOT EXISTS impact_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_key TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    numeric_value INT NOT NULL,
    display_suffix TEXT DEFAULT '+',
    unit TEXT NOT NULL DEFAULT 'Students / Kits',
    reporting_period TEXT NOT NULL, -- e.g. '2024 Cumulative', 'Annual 2024'
    description TEXT NOT NULL,
    methodology TEXT NOT NULL,
    verification_source TEXT NOT NULL, -- e.g. 'Physical Attendance Ledger #3'
    status metric_status NOT NULL DEFAULT 'draft',
    approved_by UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    approved_at TIMESTAMPTZ,
    reviewer_notes TEXT,
    created_by UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2.7 Inquiries (Confidential Form Ingestions)
CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inquiry_type inquiry_type NOT NULL DEFAULT 'general',
    full_name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    organization_name TEXT,
    message TEXT NOT NULL,
    metadata_payload JSONB DEFAULT '{}'::jsonb,
    status inquiry_status NOT NULL DEFAULT 'new',
    internal_notes TEXT,
    assigned_to UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2.8 Media Assets Metadata
CREATE TABLE IF NOT EXISTS media_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    file_name TEXT NOT NULL,
    storage_path TEXT NOT NULL UNIQUE,
    file_type TEXT NOT NULL, -- e.g. 'image/webp', 'image/jpeg'
    file_size_bytes INT NOT NULL,
    alt_text TEXT NOT NULL,
    consent_on_file BOOLEAN NOT NULL DEFAULT true,
    uploaded_by UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2.9 Audit Logs (Admin Activity Record)
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id UUID REFERENCES admin_profiles(id) ON DELETE SET NULL,
    action_type TEXT NOT NULL, -- e.g. 'METRIC_APPROVED', 'STORY_PUBLISHED', 'ROLE_CHANGED'
    target_table TEXT NOT NULL,
    target_record_id TEXT,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 3. INDEXES
-- ------------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_programs_status ON programs(status);
CREATE INDEX IF NOT EXISTS idx_programs_slug ON programs(slug);
CREATE INDEX IF NOT EXISTS idx_stories_published ON stories(is_published);
CREATE INDEX IF NOT EXISTS idx_stories_slug ON stories(slug);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_impact_metrics_status ON impact_metrics(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_type ON inquiries(inquiry_type);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON audit_logs(created_at DESC);

-- ------------------------------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- 4.1 Admin Profiles: Only authenticated admins can read; only super_admin can modify roles
CREATE POLICY "Admins can read profiles"
    ON admin_profiles FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Super Admins can manage profiles"
    ON admin_profiles FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM admin_profiles ap
            WHERE ap.id = auth.uid() AND ap.role = 'super_admin'
        )
    );

-- 4.2 Programs: Public reads published; authenticated admins manage all
CREATE POLICY "Public reads published programs"
    ON programs FOR SELECT
    TO anon, authenticated
    USING (status = 'published');

CREATE POLICY "Admins manage programs"
    ON programs FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4.3 Page Content: Public reads published; authenticated admins manage
CREATE POLICY "Public reads published page content"
    ON page_content FOR SELECT
    TO anon, authenticated
    USING (status = 'published');

CREATE POLICY "Admins manage page content"
    ON page_content FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4.4 Stories: Public reads published with verified consent; admins manage
CREATE POLICY "Public reads published stories with verified consent"
    ON stories FOR SELECT
    TO anon, authenticated
    USING (is_published = true AND consent_verified = true);

CREATE POLICY "Admins manage stories"
    ON stories FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4.5 Events: Public reads published/completed; admins manage
CREATE POLICY "Public reads published events"
    ON events FOR SELECT
    TO anon, authenticated
    USING (status IN ('published', 'completed'));

CREATE POLICY "Admins manage events"
    ON events FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4.6 Impact Metrics: Public reads ONLY approved & published metrics
CREATE POLICY "Public reads published impact metrics"
    ON impact_metrics FOR SELECT
    TO anon, authenticated
    USING (status = 'published');

CREATE POLICY "Admins manage impact metrics"
    ON impact_metrics FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4.7 Inquiries: Public (anon) can INSERT via server actions, but NEVER read or update
CREATE POLICY "Public can insert inquiries"
    ON inquiries FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Only admins can view inquiries"
    ON inquiries FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Only admins can update inquiries"
    ON inquiries FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4.8 Media Assets: Public reads metadata; admins manage
CREATE POLICY "Public can view media metadata"
    ON media_assets FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Admins manage media metadata"
    ON media_assets FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4.9 Audit Logs: Authenticated admins can view; insert via triggers/service
CREATE POLICY "Admins can view audit logs"
    ON audit_logs FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "System can insert audit logs"
    ON audit_logs FOR INSERT
    TO authenticated
    WITH CHECK (true);
