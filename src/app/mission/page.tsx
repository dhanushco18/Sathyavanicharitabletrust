import React from "react";
import { Metadata } from "next";
import { MissionClient } from "./MissionClient";

export const metadata: Metadata = {
  title: "Our Mission — Sathiyavani Charitable Trust",
  description:
    "Our mission statement and four core operational commitments: Education for All, Community Support, Sustainable Development, and Inclusivity in Chennai.",
};

export default function MissionPage() {
  return <MissionClient />;
}

