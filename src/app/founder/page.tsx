import React from "react";
import { Metadata } from "next";
import { FounderClient } from "./FounderClient";

export const metadata: Metadata = {
  title: "Founder Story — Mr. Raghu N. | Sathiyavani Charitable Trust",
  description:
    "The journey of Mr. Raghu N., from teaching underprivileged children on roadside platforms during the COVID-19 pandemic to establishing the library learning center in Chennai.",
};

export default function FounderPage() {
  return <FounderClient />;
}

