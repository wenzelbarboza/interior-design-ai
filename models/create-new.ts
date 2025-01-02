import { z } from "zod";

export const formSchema = z.object({
  room: z.string(),
  design: z.string(),
  prompt: z.string().optional(),
  image: z.custom<File>(
    (file) => {
      if (!(file instanceof File)) return false;
      if (!file.type.startsWith("image/")) return false;
      if (file.size > 2 * 1024 * 1024) return false; // Max size: 22MB
      return true;
    },
    { message: "The file must be an image and less than 2MB." }
  ),
});
