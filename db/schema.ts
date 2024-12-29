import { integer, pgSchema, serial, varchar } from "drizzle-orm/pg-core";

const mySchema = pgSchema("designer_ai");

// a comment
export const user = mySchema.table("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageUrl: varchar("imageUrl").notNull(),
  credits: integer("credits").default(3),
});
