import NewProjBtn from "@/components/new-proj";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ProjectsList from "./projects-list";
import { getSubscription } from "@/actions/userSubscriptions";
import { maxFreeProjects } from "@/lib/payments";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ReponseChart from "./ResponseChart";
import FeelingChart from "./FeelingChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, PlusSquare } from "lucide-react";
import ShapeSVG from "./ShapeSVG";
import { TextAnimate } from "@/components/animation/TextAnimate";
import Table from "@/components/dashboard/Table";
import Link from "next/link";
import NoProject from "@/components/dashboard/NoProject";

export default async function Page() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));

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
              {/* <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Card className="flex flex-col rounded-xl bg-muted/50 lg:min-w-[300px] max-h-[300px]">
            <CardHeader className="items-start pb-0 text-neutral-300">
              <CardTitle>Projects</CardTitle>
              <CardDescription>All your active projects collecting feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <TextAnimate animation="slideUp" delay={1} by="character" className="text-6xl mt-6 font-bold">
                12
              </TextAnimate>
            </CardContent>
          </Card>
          <Card className="flex flex-col rounded-xl bg-muted/50 lg:min-w-[300px] max-h-[300px]">
            <CardHeader className="items-start pb-0 text-neutral-300">
              <CardTitle>Responses</CardTitle>
              <CardDescription>All your feedbacks</CardDescription>
            </CardHeader>
            <CardContent>
              <TextAnimate animation="slideUp" delay={1} by="character" className="text-6xl mt-6 font-bold">
                12
              </TextAnimate>
            </CardContent>
          </Card>
          <Card className="flex flex-col rounded-xl bg-muted/50 lg:min-w-[300px] max-h-[300px]">
            <CardHeader className="items-start pb-0 text-neutral-300">
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>All your active projects collecting feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <TextAnimate animation="slideUp" delay={1} by="character" className="text-6xl mt-6 font-bold">
                12
              </TextAnimate>
            </CardContent>
          </Card>
        </div>

        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50">
            <FeelingChart />
          </div>
          <div className="col-span-2">
            <ReponseChart />
          </div>
        </div>
      </div>
      {/* <NoProject /> */}
      <div className="w-full relative pl-4">
        <TextAnimate animation="slideUp" delay={0.8} by="word" className="text-3xl mb-4 mt-1 font-bold">
          Recent Projects
        </TextAnimate>
        <Table key={"iggg"} hidePagination pageSize={10} />
      </div>
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
