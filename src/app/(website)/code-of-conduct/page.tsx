import CodeOfConductContent from "@/features/website/components/code-of-conduct/conduct";
import CodeOfConductHero from "@/features/website/components/code-of-conduct/conduct-hero-section";
import ReportViolationSection from "@/features/website/components/code-of-conduct/report-violation";
import React from "react";

const CodeOfConduct = () => {
  return (
    <div>
      <CodeOfConductHero />
      <CodeOfConductContent />
      <ReportViolationSection />
    </div>
  );
};

export default CodeOfConduct;
