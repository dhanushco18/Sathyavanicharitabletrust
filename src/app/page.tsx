import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { ProgramGridSection } from "@/components/sections/ProgramGridSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { GetInvolvedSection } from "@/components/sections/GetInvolvedSection";
import { TransparencySection } from "@/components/sections/TransparencySection";

export default function HomePage() {
  return (
    <>
      {/* Section B: Hero */}
      <HeroSection />

      {/* Section C: Introduction & Roots */}
      <IntroductionSection />

      {/* Section D: The 5 Core Programmes */}
      <ProgramGridSection />

      {/* Section E: Evidence-Conscious Impact */}
      <ImpactSection />

      {/* Section F: The Founder's Journey */}
      <FounderSection />

      {/* Section G: Field Reports & Stories */}
      <StoriesSection />

      {/* Section H: Get Involved Pathways */}
      <GetInvolvedSection />

      {/* Section I: Governance & Transparency */}
      <TransparencySection />
    </>
  );
}
