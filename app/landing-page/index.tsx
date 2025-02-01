import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import Pricing from "@/components/marketing/pricing";
import Process from "@/components/marketing/process";

const LandingPage = () => {
  return (
    <Wrapper className="pt-2 md:pt-20 relative">
      <Hero />
      <Companies />
      <Features />
      <Analysis />
      <Integration />
      <Process />
      <Pricing />
      <CTA />
    </Wrapper>
  );
};

export default LandingPage;
