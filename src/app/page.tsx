import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ProgramGridSection } from "@/components/sections/ProgramGridSection";
import { GetInvolvedSection } from "@/components/sections/GetInvolvedSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TransparencySection } from "@/components/sections/TransparencySection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner with Overlay & 4 Floating Pillar Cards */}
      <HeroSection />

      {/* 2. "Our Impact" Pastel Mint Wave Bar with 4 Documented Stats */}
      <ImpactSection />

      {/* 3. "Our Programs" Photo Grid & "Real Stories Real Change" Card */}
      <ProgramGridSection />

      {/* 4. "Be a Part of the Change" Bottom Atmospheric CTA Banner */}
      <GetInvolvedSection />

      {/* 5. Deep Trust Roots: Founder's Journey from Roadside Care to Learning Center */}
      <FounderSection />

      {/* 6. Legal & Operational Transparency & Governance */}
      <TransparencySection />
    </>
  );
}
