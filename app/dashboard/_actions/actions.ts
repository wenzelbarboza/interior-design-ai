"use server";

import { db } from "@/db";
import { AiImage } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const getDesigns = async () => {
  try {
    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress as string;
    const res = await db
      .select()
      .from(AiImage)
      .where(eq(AiImage.userEmail, userEmail));
    return {
      success: true,
      message: "data retrived successfully",
      data: res,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "could not retrive data",
    };
  }
};
