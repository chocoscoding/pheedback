import { TextAnimate } from "@/components/animation/TextAnimate";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TopInformationType } from "@/types";
import React from "react";

const TopInformation = ({ data }: { data: TopInformationType }) => {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <Card className="flex flex-col rounded-xl bg-muted/50 lg:min-w-[300px] max-h-[300px]">
        <CardHeader className="items-start pb-0 text-neutral-300">
          <CardTitle>Projects</CardTitle>
          <CardDescription>All your active projects collecting feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <TextAnimate animation="slideUp" delay={1} by="character" className="text-6xl mt-6 font-bold">
            {data.totalProjects.toString()}
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
            {data.totalResponses.toString()}
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
            {data.activeProjects.toString()}
          </TextAnimate>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopInformation;
