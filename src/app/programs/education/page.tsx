import React from "react";
import { Metadata } from "next";
import { FreeEducationClient } from "./FreeEducationClient";

export const metadata: Metadata = {
  title: "Free Education & Tuition Support",
  description:
    "Education is not a privilege, it is a right. We support underprivileged children with free evening tuition, learning supplies, uniforms, and fee sponsorship in Chennai.",
  openGraph: {
    title: "Free Education | Sathiyavani Charitable Trust",
    description:
      "We support underprivileged children with free education, daily evening tuition, books, uniforms, and mentorship in Chennai.",
    images: [
      {
        url: "/assets/images/hero-children.jpg",
        width: 1200,
        height: 630,
        alt: "Free Education Program - Sathiyavani Charitable Trust",
      },
    ],
  },
};

export default function EducationProgramPage() {
  return <FreeEducationClient />;
}
