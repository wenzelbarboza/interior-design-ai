import { z } from "zod";

export const RedesignRoomSchema = z.object({
  room: z.string(),
  design: z.string(),
  prompt: z.string().optional(),
  image: z.string(),
});

export type RedesignRoomRes = z.infer<typeof RedesignRoomSchema>;
