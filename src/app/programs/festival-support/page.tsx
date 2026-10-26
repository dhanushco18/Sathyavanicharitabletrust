import React from "react";
import { Metadata } from "next";
import { FestivalSupportClient } from "./FestivalSupportClient";

export const metadata: Metadata = {
  title: "Festival Support — Spreading Joy, During Every Festival",
  description:
    "We bring happiness and hope to underprivileged families by supporting them during festivals, so they too can celebrate with dignity and joy.",
  openGraph: {
    title: "Festival Support | Sathiyavani Charitable Trust",
    description:
      "Delivering festive clothing, sweet boxes, and essential school supplies to ensure children from low-income communities experience festivals with joy and equality.",
    images: [
      {
        url: "/assets/images/prog-festival-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Festival Support Program — Sathiyavani Charitable Trust",
      },
    ],
  },
};

export default function FestivalSupportPage() {
  return <FestivalSupportClient />;
}
