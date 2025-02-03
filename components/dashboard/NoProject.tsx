import ShapeSVG from "@/app/(user)/dashboard/ShapeSVG";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import NewProjBtn from "@/components/new-proj";
import { ReactNode } from "react";

const NoProject = ({ children }: { children?: ReactNode }) => {
  return (
    <section className="w-full m-4 rounded-lg border flex flex-col justify-center items-center h-[50vh] py-6">
      <ShapeSVG fill="#ffffff33" height={"250px"} />
      {children ?? (
        <Button className="my-2 py-5">
          <PlusIcon className="w-10" />
          Create Project
        </Button>
      )}
      <p className="text-gray-300">Create a new project to get started and see more data</p>
    </section>
  );
};

export default NoProject;
