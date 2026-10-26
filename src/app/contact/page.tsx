import React from "react";
import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Let's Create A Brighter Tomorrow | Sathiyavani Charitable Trust",
  description:
    "Get in touch with Sathiyavani Charitable Trust in Chennai. Contact details, telephone helpline, email, visiting hours, location directions, and direct enquiry form.",
  openGraph: {
    title: "Contact Us — Sathiyavani Charitable Trust",
    description:
      "We'd love to hear from you! Whether you want to support, volunteer, partner, or simply learn more about our work.",
    images: ["/assets/images/about-story-children.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
