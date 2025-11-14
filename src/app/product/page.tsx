import { CoreFeatures } from "@/features/website/components/product/core-features";
import FinalCta from "@/features/website/components/product/final-cta";
import { ProductHero } from "@/features/website/components/product/hero-section";
import HowItWorks from "@/features/website/components/product/how-it-works";
import { HubSolutions } from "@/features/website/components/product/hub-solutions";
import Testimonials from "@/features/website/components/product/testimonials";

const ProductPage = () => {
  return (
    <div>
      <ProductHero />
      <CoreFeatures />
      <HubSolutions />
      <HowItWorks />
      <Testimonials />
      <FinalCta />
    </div>
  );
};

export default ProductPage;
