import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { ReactNode } from "react";

export default function Component({ children }: { children: ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">Subscribe to create more projects</p>
            <p className="text-xs text-muted-foreground">
              Hi there, We see that you are finding Pheedbac useful 😍. Subscribe now to create more projects.
            </p>
          </div>
          <Link href={"/subscription"}>
            <Button size="sm" className="h-7 px-2">
              Subscribe
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
