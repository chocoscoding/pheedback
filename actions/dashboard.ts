"use server";
import { db } from "@/db";
import { feedbacks, projects } from "@/db/schema";
import { TopInformationType, PieChartDataType } from "@/types";
import { and, count, desc, eq, gte, lt, sql } from "drizzle-orm";

export async function getResponsesByDay(userId: string) {
  const past90Days = sql`CURRENT_DATE - INTERVAL '90 days'`;

  const responseCounts = await db
    .select({
      date: sql<string>`DATE(${feedbacks.createdAt})`.as("date"),
      response: count(feedbacks.id).as("response"),
    })
    .from(feedbacks)
    .innerJoin(projects, eq(feedbacks.projectId, projects.id))
    .where(
      and(
        eq(projects.userId, userId),
        gte(feedbacks.createdAt, past90Days) // Only last 90 days
      )
    )
    .groupBy(sql`DATE(${feedbacks.createdAt})`)
    .orderBy(sql`DATE(${feedbacks.createdAt}) DESC`);
  return responseCounts;
}

export async function getLatestProjectsWithFeedback(userId: string) {
  const result = await db
    .select({
      projectId: projects.id,
      projectName: projects.name,
      feedbackCount: count(feedbacks.id).as("feedback_count"),
      projectStatus: projects.status,
      averageRating: sql<number>`ROUND(COALESCE(AVG(${feedbacks.rating}), 0), 1)`.as("average_rating"),
    })
    .from(projects)
    .leftJoin(feedbacks, eq(projects.id, feedbacks.projectId))
    .where(eq(projects.userId, userId))
    .groupBy(projects.id)
    .orderBy(desc(projects.id))
    .limit(10);

  return result;
}

export async function getUserProjectStats(userId: string): Promise<TopInformationType> {
  const [totalProjects, totalResponses, activeProjects] = await Promise.all([
    db
      .select({ count: count() })
      .from(projects)
      .where(eq(projects.userId, userId))
      .then((res) => res[0]?.count ?? 0),

    db
      .select({ count: count() })
      .from(feedbacks)
      .innerJoin(projects, eq(feedbacks.projectId, projects.id))
      .where(eq(projects.userId, userId))
      .then((res) => res[0]?.count ?? 0),

    db
      .select({ count: count() })
      .from(projects)
      .where(and(eq(projects.userId, userId), eq(projects.status, "Active")))
      .then((res) => res[0]?.count ?? 0),
  ]);

  return {
    totalProjects,
    totalResponses,
    activeProjects,
  };
}

/**
 * Get response data for ratings (chartData)
 */
export async function getUserResponseData(userId: string): Promise<PieChartDataType> {
  const currentMonthStart = sql`DATE_TRUNC('month', CURRENT_DATE)`;
  const nextMonthStart = sql`DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'`;

  const ratingCounts = await db
    .select({
      rating: feedbacks.rating,
      response: count(),
    })
    .from(feedbacks)
    .innerJoin(projects, eq(feedbacks.projectId, projects.id))
    .where(and(eq(projects.userId, userId), gte(feedbacks.createdAt, currentMonthStart), lt(feedbacks.createdAt, nextMonthStart)))
    .groupBy(feedbacks.rating);

  // Initialize response map with 0s for each rating
  const responseMap: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  // Fill in actual response counts from query result
  ratingCounts.forEach(({ rating, response }) => {
    if (rating !== null) {
      responseMap[rating] = response;
    }
  });

  const fills = ["var(--color-1)", "var(--color-2)", "var(--color-3)", "var(--color-4)", "var(--color-5)"];
  // Convert to array format
  return Object.entries(responseMap).map(([rating, response], i) => ({
    rating: rating,
    response,
    fill: fills[i],
  }));
}
