import React from "react";
import { Metadata } from "next";
import { StoriesClient } from "./StoriesClient";

export const metadata: Metadata = {
  title: "Real Stories, Real Change — Sathiyavani Charitable Trust",
  description:
    "Behind every number is a person, a family and a community. Explore stories of hope, courage and transformation from our learning centers and outreach programs in Chennai.",
  openGraph: {
    title: "Our Stories — Real Stories, Real Change | Sathiyavani Trust",
    description:
      "Different Stories, A Brighter Tomorrow. Read verified journeys of children, youth, and families empowered through Sathiyavani Charitable Trust.",
    images: ["/assets/images/hero-children.jpg"],
  },
};

export default function StoriesPage() {
  return <StoriesClient />;
}
