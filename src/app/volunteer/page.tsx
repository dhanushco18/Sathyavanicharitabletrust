import React from "react";
import { Metadata } from "next";
import { VolunteerClient } from "./VolunteerClient";

export const metadata: Metadata = {
  title: "Volunteer With Us — Be the Change They Believe In | Sathiyavani Trust",
  description:
    "Your time, skills and compassion can create real opportunities for children and communities. Join hands with Sathiyavani Charitable Trust in Chennai as an academic tutor, sports coach, or community mentor.",
  openGraph: {
    title: "Volunteer With Us — Be the Change They Believe In | Sathiyavani Trust",
    description:
      "Share your knowledge, mentor youth, and create lasting impact. Discover volunteer pathways at Sathiyavani Charitable Trust in Chennai.",
    images: [
      {
        url: "/assets/images/volunteer-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Volunteer With Us - Sathiyavani Charitable Trust",
      },
    ],
  },
};

export default function VolunteerPage() {
  return <VolunteerClient />;
}
