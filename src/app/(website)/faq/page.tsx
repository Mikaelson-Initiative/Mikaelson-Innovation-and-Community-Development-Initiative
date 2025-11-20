import FaqContactSection from "@/features/website/components/faq/faq-contact";
import { FaqContent } from "@/features/website/components/faq/faq-content";
import { FaqHeader } from "@/features/website/components/faq/faq-header";
import React from "react";

const FAQpage = () => {
  return (
    <div className="py-10">
      <FaqHeader />
      <FaqContent />
      <FaqContactSection />
    </div>
  );
};

export default FAQpage;
