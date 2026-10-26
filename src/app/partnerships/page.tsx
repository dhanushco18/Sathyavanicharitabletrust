import React from "react";
import { Metadata } from "next";
import { PartnershipsClient } from "./PartnershipsClient";

export const metadata: Metadata = {
  title: "Corporate CSR & Institutional Partnerships | Sathiyavani Charitable Trust",
  description:
    "Partner with Sathiyavani Charitable Trust in Chennai. Explore Program Sponsorship, Project Grants, CSR Collaborations, and In-kind corporate support to empower underprivileged children and communities.",
  openGraph: {
    title: "Corporate Sponsorships & CSR Partnerships — Sathiyavani Trust",
    description:
      "Stronger Partnerships, Brighter Communities. Scale measurable grassroots impact in education, child development, and environment across Chennai.",
    images: ["/assets/images/corporate-hero.jpg"],
  },
};

export default function PartnershipsPage() {
  return <PartnershipsClient />;
}
