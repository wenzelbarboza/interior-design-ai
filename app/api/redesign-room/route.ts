import { getErrorMessage } from "@/lib/errorMessage";
import { RedesignRoomSchema } from "@/models/redesign-room";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { db } from "@/db";
import { AiImage } from "@/db/schema";
import { getPngBuffer } from "@/app/_utils/utils";
import { currentUser } from "@clerk/nextjs/server";

// const api_key = process.env.SEGMIND_KEY;

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();

    if (!user) throw new Error("user not logged in");

    const { design, image, room, prompt } = RedesignRoomSchema.parse(
      await req.json()
    );

    //TODO
    // check for credits remaining
    // if no credits are remaining then return

    //write code for generating design using ai (replicate.com)
    //start-----

    await new Promise((resolve) => setTimeout(resolve, 200));
    //let aiImageUrl;
    const aiImageUrl =
      "https://nnbwwoyabieqwquwxlts.supabase.co/storage/v1/object/public/interior-design-ai-assets/redisigned.png?t=2025-01-03T04%3A12%3A21.879Z";

    //finish----

    // Fetch the image data from the URL
    const pngBuffer = await getPngBuffer(aiImageUrl);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `aiGenerated-${random}`;

    // store ai image in supabase storage
    const storageImageUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/interior-design-ai-uploads/${fileName}`;
    const { data: supabaseData, error } = await supabase.storage
      .from("interior-design-ai-uploads")
      .upload(fileName, pngBuffer, {
        contentType: "image/png",
      });

    if (error) throw error;

    console.log("supabase data: ", supabaseData);

    // save the data in postgress
    await db.insert(AiImage).values({
      aiImageUrl: storageImageUrl,
      design,
      imageUrl: image,
      room,
      prompt,
      userEmail: user.primaryEmailAddress?.emailAddress as string,
    });

    return NextResponse.json({
      storageImageUrl,
    });
  } catch (error) {
    console.error(error);
    const errorMessage = getErrorMessage(error, "error in redesign room api");

    return NextResponse.json({}, { status: 400, statusText: errorMessage });
  }
}
