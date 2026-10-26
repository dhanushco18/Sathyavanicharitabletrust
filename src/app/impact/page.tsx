import React from "react";
import { Metadata } from "next";
import { ImpactClient } from "./ImpactClient";

export const metadata: Metadata = {
  title: "Our Impact — Real People, Real Change | Sathiyavani Charitable Trust",
  description:
    "Explore the documented grassroots impact of Sathiyavani Charitable Trust across Chennai: 5,000+ lives touched, 2,000+ children supported, 50+ health camps, and 10,000+ trees planted.",
  openGraph: {
    title: "Our Impact — Real People, Real Change | Sathiyavani Trust",
    description:
      "Every act of support creates opportunities, builds stronger communities and paves the way for a brighter, more inclusive tomorrow.",
    images: ["/assets/images/about-story-children.jpg"],
  },
};

export default function ImpactPage() {
  return <ImpactClient />;
}
