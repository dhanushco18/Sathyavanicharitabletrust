import { NavItem, Programme, ImpactMetric } from "./types";

export const SITE_CONFIG = {
  name: "Sathiyavani Charitable Trust",
  shortName: "Sathiyavani Trust",
  tagline: "Empowering Lives Through Education, Care and Community Support",
  description:
    "A grassroots nonprofit organization based in Chennai, committed to providing free quality education, holistic child development, and dignity-first community welfare.",
  phone: "+91 98414 54501",
  rawPhone: "9841454501",
  whatsappUrl: "https://wa.me/919841454501?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20Sathiyavani%20Charitable%20Trust",
  location: "Chennai, Tamil Nadu, India",
  founderName: "Mr. Raghu N.",
  founderRole: "Founder & President",
  inceptionYear: "2020",
  registeredYear: "2023",
  centerLandmark: "Library Learning Center, Chennai",
};

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "About the Trust",
        href: "/about",
        description: "Our history, guiding principles, and community roots.",
      },
      {
        label: "Founder Story",
        href: "/about/founder",
        description: "Mr. Raghu N.'s journey from roadside tutoring to the learning center.",
      },
      {
        label: "Governance & Transparency",
        href: "/about/transparency",
        description: "Official registration disclosures, 80G status, and reporting.",
      },
    ],
  },
  {
    label: "Programmes",
    href: "/programs",
    children: [
      {
        label: "Free Education",
        href: "/programs/education",
        description: "Daily after-school tuition and school fee assistance.",
      },
      {
        label: "Child Development",
        href: "/programs/child-development",
        description: "Sports, arts, talent discovery, and birthday celebrations.",
      },
      {
        label: "Community Outreach",
        href: "/programs/community-welfare",
        description: "Assistance for single parents, disabled, and tribal families.",
      },
      {
        label: "Festival Support",
        href: "/programs/festivals",
        description: "Annual Diwali Joy distribution and cultural celebrations.",
      },
      {
        label: "Environment",
        href: "/programs/environment",
        description: "Tree planting and biodiversity drives with Exnora.",
      },
    ],
  },
  {
    label: "Impact & Evidence",
    href: "/impact",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      {
        label: "Volunteer With Us",
        href: "/get-involved/volunteer",
        description: "Tutor students, coordinate weekend sports, or mentor youth.",
      },
      {
        label: "Sponsor a Student",
        href: "/get-involved/sponsor",
        description: "Fund school fees, books, and essential educational kits.",
      },
      {
        label: "Corporate Partnerships",
        href: "/get-involved/partnerships",
        description: "Align CSR allocations with measurable education outcomes.",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const PROGRAMMES_LIST: Programme[] = [
  {
    id: "prog-education",
    slug: "education",
    title: "Free Education & Tuition",
    category: "Academic Support",
    summary:
      "Consistent, zero-fee evening tuition classes and school-fee assistance to ensure no child drops out due to financial distress.",
    iconName: "GraduationCap",
    accentColor: "navy",
    badgeText: "Flagship Initiative",
    href: "/programs/education",
    statsPlaceholder: "Daily Academic Mentorship",
  },
  {
    id: "prog-child-dev",
    slug: "child-development",
    title: "Holistic Child Development",
    category: "Wellbeing & Character",
    summary:
      "Nurturing emotional confidence and joy through milestone birthday celebrations, sports coaching, drawing, and cultural competitions.",
    iconName: "HeartHandshake",
    accentColor: "amber",
    badgeText: "Holistic Care",
    href: "/programs/child-development",
    statsPlaceholder: "Celebrations & Sports",
  },
  {
    id: "prog-welfare",
    slug: "community-welfare",
    title: "Community Outreach",
    category: "Social Inclusion",
    summary:
      "Extending social security and humanitarian aid to single-parent households, differently-abled neighbors, and vulnerable tribal families.",
    iconName: "Users",
    accentColor: "terracotta",
    badgeText: "Vulnerable Families",
    href: "/programs/community-welfare",
    statsPlaceholder: "Family Support",
  },
  {
    id: "prog-festivals",
    slug: "festivals",
    title: "Diwali Gift Initiative",
    category: "Festive Joy",
    summary:
      "Delivering new festive clothes, educational supplies, and festive meals each Diwali to bring light and dignity to underserved homes.",
    iconName: "Sparkles",
    accentColor: "amber",
    badgeText: "Annual Tradition",
    href: "/programs/festivals",
    statsPlaceholder: "Annual Distribution",
  },
  {
    id: "prog-environment",
    slug: "environment",
    title: "Environmental Protection",
    category: "Sustainability",
    summary:
      "Instilling ecological stewardship among students through urban tree planting, sapling drives, and clean-up workshops with Exnora.",
    iconName: "TreePine",
    accentColor: "teal",
    badgeText: "Green Citizens",
    href: "/programs/environment",
    statsPlaceholder: "Exnora Collaboration",
  },
];

/**
 * Historical records documented on reference site.
 * Note: Clearly differentiated between historical self-reports and 2025 targets.
 */
export const VERIFIED_IMPACT_BASELINE: ImpactMetric[] = [
  {
    id: "metric-1",
    key: "diwali-2024",
    label: "Diwali Beneficiaries (2024 Distribution)",
    value: 1000,
    suffix: "+",
    period: "October 2024",
    verificationSource: "Organization Distribution Register (Diwali Drive 2024)",
    isAudited: false,
    notes: "Physical kit distribution to children and families across designated localities.",
  },
  {
    id: "metric-2",
    key: "years-service",
    label: "Years of Grassroots Service",
    value: 5,
    suffix: "+",
    period: "2020 – Present",
    verificationSource: "Operational timeline (Roadside initiation during COVID-19)",
    isAudited: true,
  },
  {
    id: "metric-3",
    key: "active-programs",
    label: "Continuous Active Pillars",
    value: 5,
    period: "2024",
    verificationSource: "Education, Child Dev, Welfare, Festivals, Environment",
    isAudited: true,
  },
  {
    id: "metric-4",
    key: "community-centers",
    label: "Dedicated Learning Center",
    value: 1,
    period: "Current",
    verificationSource: "Library Learning Center Facility, Chennai",
    isAudited: true,
  },
];

export const DIWALI_GROWTH_HISTORY = [
  { year: "2019", count: 20, status: "Grassroots initiation" },
  { year: "2020", count: 65, status: "COVID relief distribution" },
  { year: "2021", count: 200, status: "Expanded outreach" },
  { year: "2022", count: 450, status: "Multi-center drive" },
  { year: "2023", count: 750, status: "Official Trust establishment" },
  { year: "2024", count: 1000, status: "Current documented benchmark" },
  { year: "2025", count: 1500, status: "Provisional target / Under preparation" },
];
