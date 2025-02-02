DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('Pending', 'Active', 'Inactive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
