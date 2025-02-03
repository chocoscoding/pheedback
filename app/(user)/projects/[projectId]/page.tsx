import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects as dbProjects } from "@/db/schema";
import Link from "next/link";
import { Globe, Code } from "lucide-react";
import Table from "@/components/table";
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
import { DialogCloseButton } from "./EmbedDialog";
const page = async ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div>Invalid Project ID</div>;

  const projects = await db.query.projects.findMany({
    where: eq(dbProjects.id, parseInt(params.projectId)),
    with: {
      feedbacks: true,
    },
  });

  const project = projects[0];

  return (
    <div className="w-full">
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex justify-between items-start p-3">
        <div className="proj-info">
          <h1 className="text-3xl font-bold mb-3 break-words max-w-[500px]">{project.name}</h1>
          <h2 className="text-neutral-500 text-xl mb-2 break-words max-w-[500px]">{project.description}</h2>
        </div>
      </div>
      <div className="flex justify-end my-1 px-4 gap-4">
        {project.url ? (
          <Link
            target="_blank"
            href={project.url}
            className="hover:underline border p-1 rounded-md text-neutral-200 flex items-center justify-center">
            <Globe className="h-5 w-5 mr-1" />
            <span className="text-lg">Visit site</span>
          </Link>
        ) : null}
        <DialogCloseButton />

        {/* <Link
          href={`/projects/${params.projectId}/instructions`}
          className="hover:underline border p-1 rounded-md flex items-center justify-center text-neutral-900 bg-neutral-100">
          <Code className="h-5 w-5 mr-1" />
          <span className="text-lg">Embed Code</span>
        </Link> */}
      </div>
      <div>
        <Table data={project.feedbacks} />
      </div>
    </div>
  );
};

export default page;
