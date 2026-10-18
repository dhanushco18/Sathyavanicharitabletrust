export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  iconName: string;
  accentColor: "navy" | "amber" | "terracotta" | "teal";
  badgeText?: string;
  href: string;
  statsPlaceholder?: string;
}

export interface ImpactMetric {
  id: string;
  key: string;
  label: string;
  value: number;
  suffix?: string;
  period: string;
  verificationSource: string;
  isAudited: boolean;
  notes?: string;
}

export interface StoryItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
  isProvisional?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
