import {
  integer,
  pgTableCreator,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `designer_ai_${name}`);

// a comment
export const User = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").unique(),
    imageUrl: varchar("image_url").notNull(),
    credits: integer("credits").default(3),
  },
  (table) => {
    return {
      emailIdx: uniqueIndex("email_idx").on(table.email),
    };
  }
);

export const AiImage = pgTable("ai_image", {
  id: serial("id").primaryKey(),
  userEmail: varchar("user_email")
    .notNull()
    .references(() => User.email),
  imageUrl: varchar("image_url").notNull(),
  aiImageUrl: varchar("ai_image_url").notNull(),
  room: varchar("room").notNull(),
  design: varchar("design").notNull(),
  prompt: varchar("prompt"),
});
