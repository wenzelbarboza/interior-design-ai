import { z } from "zod";

export const RedesignRoomSchema = z.object({
  room: z.string().min(1, "please provide room type"),
  design: z.string().min(1, "please provide room type"),
  prompt: z.string().optional(),
  image: z.string().min(1, "please provide room type"),
});

export type RedesignRoomRes = z.infer<typeof RedesignRoomSchema>;
