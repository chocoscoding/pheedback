import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubscribeBtn from "../payments/subscribe-btn";
import { monthlyPlanId } from "@/lib/payments";
import { Lock } from "lucide-react";
import { maxFreeProjects } from "@/lib/payments";

type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
  subscribed: boolean | null | undefined;
};

const ProjectsList = (props: Props) => {
  return (
    <>
      <ul className="flex flex-wrap gap-4 justify-start">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="w-full md:w-[350px] rounded-lg bg-muted/50 h-[13rem] bg-neutral-950">
              <CardHeader className="flex-1">
                <CardTitle className="text-neutral-200">{project.name}</CardTitle>
                <CardDescription className="line-clamp-2 text-neutral-400 ">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="py-2">10 Responses</CardContent>
              <CardFooter className="w-full">
                <Link href={`/projects/3`} className="w-full">
                  <Button variant={"outline"} className="w-full">
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
        {props.subscribed !== true && props.projects?.length > maxFreeProjects ? (
          <Card className="max-w-[350px] flex flex-col h-full bg-gray-300">
            <CardHeader className="flex-1">
              <CardTitle className="flex flex-row text-sm md:text-lg items-center">
                <Lock className="h-4 w-4 md:h-8 md:w-8 mr-2" />
                <span>Upgrade to Premium</span>
              </CardTitle>
              <CardDescription className="mt-3">Unlock unlimited projects</CardDescription>
            </CardHeader>
            <div className="w-fit mx-auto mb-4">
              <SubscribeBtn price={monthlyPlanId} />
            </div>
          </Card>
        ) : null}
      </ul>
    </>
  );
};
export default ProjectsList;
