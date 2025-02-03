import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactNode } from "react";

export default function MessageToolTip({ children, response }: { children: ReactNode; response: string }) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="py-3 left-0 max-w-[300px] md:max-w-[500px]">
          <div className="space-y-1">
            <p className="text-base text-muted-foreground">{response}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
