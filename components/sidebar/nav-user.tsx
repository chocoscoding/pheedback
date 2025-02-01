"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { UserButton, useUser } from "@clerk/nextjs";

export function NavUser() {
  const auth = useUser();
  const username = auth.user?.username || "";
  const usermail = auth.user?.emailAddresses[0].emailAddress || "";
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <UserButton />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{username}</span>
            <span className="truncate text-xs line-clamp-1">{usermail}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
