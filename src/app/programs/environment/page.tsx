import React from "react";
import { Metadata } from "next";
import { EnvironmentClient } from "./EnvironmentClient";

export const metadata: Metadata = {
  title: "Environment Program — Greener Communities, Brighter Tomorrows",
  description:
    "We work towards a cleaner, healthier and more sustainable environment for present and future generations through tree plantation drives, clean-up campaigns, and eco-education.",
  openGraph: {
    title: "Environment Program | Sathiyavani Charitable Trust",
    description:
      "Student-led biodiversity awareness, native tree planting drives, and neighborhood clean-up campaigns across Chennai and Tamil Nadu.",
    images: [
      {
        url: "/assets/images/prog-environment-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Environment Program — Sathiyavani Charitable Trust",
      },
    ],
  },
};

export default function EnvironmentProgramPage() {
  return <EnvironmentClient />;
}
