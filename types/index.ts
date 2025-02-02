export type PieChartDataType = {
  rating: string;
  response: number;
  fill: string;
}[];

export type TopInformationType = {
  totalProjects: number;
  totalResponses: number;
  activeProjects: number;
};

export type LineChartDataType = { date: string; response: number }[];
