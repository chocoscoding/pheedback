import { auth } from "@clerk/nextjs/server";
import { getSubscription } from "@/actions/userSubscriptions";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ReponseChart from "./ResponseChart";
import FeelingChart from "./FeelingChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "@/components/animation/TextAnimate";
import Table from "@/components/dashboard/Table";
import NoProject from "@/components/dashboard/NoProject";
import { getLatestProjectsWithFeedback, getResponsesByDay, getUserProjectStats, getUserResponseData } from "@/actions/dashboard";
import TopInformation from "./TopInformation";

type Item = {
  projectId: number;
  projectName: string | null;
  feedbackCount: number;
  projectStatus: "Active" | "Inactive" | "Pending" | null;
  averageRating: number;
};

export default async function Page() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const PROJECTS: Item[] = await getLatestProjectsWithFeedback(userId);
  const FEELINGS_DATA = await getUserResponseData(userId);
  const RESPONSE_DATA = await getResponsesByDay(userId);
  const PROJECTS_STATS = await getUserProjectStats(userId);

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
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <TopInformation data={PROJECTS_STATS} />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50">
            <FeelingChart data={FEELINGS_DATA} />
          </div>
          <div className="col-span-2">
            <ReponseChart chartData={RESPONSE_DATA} />
          </div>
        </div>
      </div>
      {PROJECTS.length === 0 ? (
        <NoProject />
      ) : (
        <div className="w-full relative pl-4">
          <TextAnimate animation="slideUp" delay={0.8} by="word" className="text-3xl mb-4 mt-1 font-bold">
            Recent Projects
          </TextAnimate>
          <Table key={"iggg"} hidePagination pageSize={10} serverProjects={PROJECTS} />
        </div>
      )}

      <br />
      {/* <div>
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
          {subscribed !== true && userProjects.length > maxFreeProjects ? null : <NewProjBtn />}
        </div>
        <ProjectsList projects={userProjects} subscribed={subscribed} />
      </div> */}
    </div>
  );
}
