import React from "react";
import { Metadata } from "next";
import { SponsorClient } from "./SponsorClient";

export const metadata: Metadata = {
  title: "Sponsor a Student's Education — Sathiyavani Charitable Trust",
  description:
    "Directly sponsor school fees, textbooks, geometry kits, and evening study materials for underprivileged children in Chennai. Transparent, direct, and dignity-first student sponsorship.",
  openGraph: {
    title: "Sponsor a Student — Sathiyavani Charitable Trust",
    description:
      "Empower a child and brighten a future. Help a child stay in school with tuition, uniforms, and learning materials.",
    images: ["/assets/images/sponsor-hero.jpg"],
  },
};

export default function SponsorPage() {
  return <SponsorClient />;
}
