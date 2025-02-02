import { auth } from "@clerk/nextjs/server";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";

export default async function Page({ children }: { children: ReactNode }) {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  return (
    <div className="w-full relative m-auto max-w-[1500px]">
      <SidebarProvider>
        <AppSidebar className="bg-neutral-900" />
        <SidebarInset>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
