import { PROCESS } from "@/constants/process";
import React from "react";
import { MagicCard } from "../ui/magic-card";
import Container from "../global/container";

const Process = () => {
  return (
    <div>
      <Container delay={0.1}>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            <span className="font-subheading italic">Getting Started</span>
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">Just 3 simple steps</p>
        </div>
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
        {PROCESS.map((process, id) => (
          <Container delay={0.2 * id} key={id}>
            <MagicCard className="group md:py-8 px-4">
              <div className="flex flex-col items-start justify-center w-full">
                <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                <div className="flex flex-col relative items-start">
                  <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                    {id + 1}
                  </span>
                  <h3 className="text-base mt-6 font-medium text-foreground">{process.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{process.description}</p>
                </div>
              </div>
            </MagicCard>
          </Container>
        ))}
      </div>
    </div>
  );
};
export default Process;
