import React from "react";
import { Metadata } from "next";
import { PrivacyClient } from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Notice & Child Safeguarding Policy — Sathiyavani Trust",
  description:
    "How Sathiyavani Charitable Trust handles personal data, child protection standards, parental photography consent, and information privacy in Chennai.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
