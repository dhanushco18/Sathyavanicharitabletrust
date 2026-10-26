import React from "react";
import { Metadata } from "next";
import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events & Community Drives — Sathiyavani Charitable Trust",
  description:
    "View documented community events, past festival distribution drives, tree plantation campaigns, and upcoming academic sessions in Chennai.",
};

export default function EventsPage() {
  return <EventsClient />;
}
