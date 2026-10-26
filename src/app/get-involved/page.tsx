import React from "react";
import { Metadata } from "next";
import { GetInvolvedClient } from "./GetInvolvedClient";

export const metadata: Metadata = {
  title: "Get Involved — Make a Difference | Sathiyavani Charitable Trust",
  description:
    "Be a part of our mission to create brighter futures for children and communities in Chennai. Explore ways to get involved: donate, volunteer, corporate partnerships, or spreading the word.",
  openGraph: {
    title: "Get Involved — Make a Difference | Sathiyavani Charitable Trust",
    description:
      "Be a part of our mission to create brighter futures for children and communities. Whether you donate, volunteer, partner or spread the word — every action counts.",
    images: [
      {
        url: "/assets/images/get-involved-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Get Involved with Sathiyavani Charitable Trust",
      },
    ],
  },
};

export default function GetInvolvedPage() {
  return <GetInvolvedClient />;
}
