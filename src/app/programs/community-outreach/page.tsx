import React from "react";
import { Metadata } from "next";
import { CommunityOutreachClient } from "./CommunityOutreachClient";

export const metadata: Metadata = {
  title: "Community Outreach — Stronger Communities, Brighter Futures",
  description:
    "We work hand-in-hand with underserved communities to create opportunities, awareness and support — because real change happens when communities grow together.",
  openGraph: {
    title: "Community Outreach & Family Support | Sathiyavani Charitable Trust",
    description:
      "Empowering underserved communities through health camps, educational awareness, livelihood support, and grassroots family welfare in Tamil Nadu.",
    images: [
      {
        url: "/assets/images/prog-community.jpg",
        width: 1200,
        height: 630,
        alt: "Community Outreach Program — Sathiyavani Charitable Trust",
      },
    ],
  },
};

export default function CommunityOutreachPage() {
  return <CommunityOutreachClient />;
}
