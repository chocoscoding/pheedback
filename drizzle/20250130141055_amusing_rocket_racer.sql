CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(256)
);
--> statement-breakpoint
DROP TABLE "feedbacks";--> statement-breakpoint
DROP TABLE "projects";--> statement-breakpoint
DROP TABLE "subscriptions";