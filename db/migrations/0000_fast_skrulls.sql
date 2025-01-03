CREATE TABLE "designer_ai_ai_image" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_email" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"ai_image_url" varchar NOT NULL,
	"room" varchar NOT NULL,
	"design" varchar NOT NULL,
	"prompt" varchar
);
--> statement-breakpoint
CREATE TABLE "designer_ai_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar,
	"image_url" varchar NOT NULL,
	"credits" integer DEFAULT 3,
	CONSTRAINT "designer_ai_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "designer_ai_ai_image" ADD CONSTRAINT "designer_ai_ai_image_user_email_designer_ai_users_email_fk" FOREIGN KEY ("user_email") REFERENCES "public"."designer_ai_users"("email") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "designer_ai_users" USING btree ("email");