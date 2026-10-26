import React from "react";
import { Metadata } from "next";
import { ChildDevelopmentClient } from "./ChildDevelopmentClient";

export const metadata: Metadata = {
  title: "Child Development — Nurturing Brighter Futures",
  description:
    "We support the overall development of children through education, health, nutrition, play, and life skills — helping them grow into confident, happy, and capable individuals in Chennai.",
  openGraph: {
    title: "Child Development | Sathiyavani Charitable Trust",
    description:
      "Nurturing brighter futures through holistic early learning, health checkups, creative arts, and milestone celebrations for underprivileged children.",
    images: [
      {
        url: "/assets/images/child-birthday.jpg",
        width: 1200,
        height: 630,
        alt: "Child Development Program — Sathiyavani Charitable Trust",
      },
    ],
  },
};

export default function ChildDevelopmentPage() {
  return <ChildDevelopmentClient />;
}
