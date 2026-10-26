import React from "react";
import { Metadata } from "next";
import { TermsClient } from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Use & Operational Disclaimers — Sathiyavani Trust",
  description:
    "Terms and conditions governing the informational use, intellectual property, community integrity, and non-profit disclaimers for Sathiyavani Charitable Trust.",
};

export default function TermsPage() {
  return <TermsClient />;
}
