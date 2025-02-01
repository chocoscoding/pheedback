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
    <SidebarProvider>
      <AppSidebar className="bg-zinc-900" />
      <SidebarInset>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </SidebarInset>
    </SidebarProvider>
  );
}
