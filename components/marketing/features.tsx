import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconLink,
  IconMathIntegrals,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { MagicCard2 } from "../ui/magic-card2";

const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Our <span className="font-subheading italic">Features</span>
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            Tools crafted just for you -- Get information straight from your users and grow till you get tired of growing.
          </p>
        </div>
      </Container>

      <div className="w-full">
        <FeaturesSectionDemo />
      </div>
    </div>
  );
};

export default Features;

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Advanced Data Visualization",
      description: "Transform raw data into meaningful insights with our powerful visualization tools.",
      icon: <IconMathIntegrals />,
    },
    {
      title: "Real-time Analytics",
      description: "Get up-to-the-minute data analysis to make informed decisions quickly.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Built for everyone",
      description: "Built for engineers, developers, dreamers, thinkers and doers. ",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless Integration",
      description: "Pheedback is easy to integrate with any type of website or web service. Copy, paste, and go.",
      icon: <IconLink />,
    },
    {
      title: "Pricing like no other",
      description: "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number }) => {
  return (
    <MagicCard2
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-none",
        (index === 0 || index === 3) && "lg:border-l ",
        index < 3 && "lg:border-b"
      )}>
      <div className="mb-4 relative z-10 px-10 text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">{title}</span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </MagicCard2>
  );
};
