"use server";

import { db } from "@/db";
import { feedbacks, projects } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function getUserProjectsWithResponseCount(userId: string) {
  const userProjects = await db
    .select({
      id: projects.id,
      name: projects.name,
      description: projects.description,
      url: projects.url,
      responseCount: sql<number>`COUNT(${feedbacks.id})`.as("responseCount"),
    })
    .from(projects)
    .leftJoin(feedbacks, eq(projects.id, feedbacks.projectId)) // Join feedbacks table
    .where(eq(projects.userId, userId))
    .groupBy(projects.id, projects.name, projects.description, projects.url) // Group by project fields
    .orderBy(projects.id);

  return userProjects;
}
