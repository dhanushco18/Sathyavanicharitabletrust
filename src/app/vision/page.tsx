import React from "react";
import { Metadata } from "next";
import { VisionClient } from "./VisionClient";

export const metadata: Metadata = {
  title: "Our Vision — Building a Better Future for Every Child",
  description:
    "Our vision for a future where educational equity, childhood dignity, and strong community support are accessible to every family in Chennai.",
};

export default function VisionPage() {
  return <VisionClient />;
}

