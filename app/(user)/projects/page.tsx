import NewProjBtn from "@/components/new-proj";
import { auth } from "@clerk/nextjs/server";
import ProjectsList from "./projects-list";
import { getSubscription } from "@/actions/userSubscriptions";
import { maxFreeProjects } from "@/lib/payments";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getUserProjectsWithResponseCount } from "@/actions/projects";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import SubscriptionTooltip from "@/components/dashboard/SubscriptionTooltip";
import NoProject from "@/components/dashboard/NoProject";
export default async function Page() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await getUserProjectsWithResponseCount(userId);

  const subscribed = await getSubscription({ userId });

  return (
    <div className=" w-full">
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <>
        <div className="flex items-center justify-start gap-4 py-4">
          {subscribed !== true && userProjects.length > maxFreeProjects ? (
            <SubscriptionTooltip>
              <Button className="rounded-md" variant={"white"} disabled>
                <p>Create Project</p>
                <Plus className="w-4 h-4" />
              </Button>
            </SubscriptionTooltip>
          ) : (
            <NewProjectButton />
          )}
        </div>
        {userProjects.length <= 0 ? (
          <NoProject>
            <NewProjectButton />
          </NoProject>
        ) : null}
        <ProjectsList projects={userProjects} subscribed={subscribed} />
      </>
    </div>
  );
}

const NewProjectButton = () => (
  <NewProjBtn>
    <Button className="rounded-md">
      <p>Create Project</p>
      <Plus className="w-4 h-4" />
    </Button>
  </NewProjBtn>
);
