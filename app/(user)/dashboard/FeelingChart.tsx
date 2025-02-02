"use client";

import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChartDataType } from "@/types";
import { TextAnimate } from "@/components/animation/TextAnimate";

const chartConfig = {
  response: {
    label: "Feelings",
  },
  1: {
    label: "1",
    color: "hsl(var(--chart-1))",
  },
  2: {
    label: "2",
    color: "hsl(var(--chart-2))",
  },
  3: {
    label: "3",
    color: "hsl(var(--chart-3))",
  },
  4: {
    label: "4",
    color: "hsl(var(--chart-4))",
  },
  5: {
    label: "5",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function FeelingChart({ data }: { data: PieChartDataType }) {
  const totalResponse = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.response, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          <TextAnimate animation="slideUp" delay={0.5} by="line">
            Customers Feeling
          </TextAnimate>
        </CardTitle>
        <CardDescription>This Month</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={data} dataKey="response" nameKey="rating" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalResponse.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Ratings
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          5.2% feel more positive this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Showing total response emotions based on ratings.</div>
      </CardFooter>
    </Card>
  );
}
