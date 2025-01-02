import { getErrorMessage } from "@/lib/errorMessage";
import { RedesignRoomSchema } from "@/models/redesign-room";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { supabase } from "@/lib/supabase";

const api_key = process.env.SEGMIND_KEY;

export async function POST(req: NextRequest) {
  try {
    const { design, image, room, prompt } = RedesignRoomSchema.parse(
      await req.json()
    );

    console.log("======api key======: ", api_key);

    //TODO
    // check for credits remaining

    //write code for generating design using ai (replicate.com)
    //start-----

    //let aiImageUrl;

    //finish----

    // Fetch the image data from the URL
    // TODO
    // replace image with ai generate aiImageUrl
    const response = await axios.get(image, { responseType: "arraybuffer" });

    const pngBuffer = await sharp(response.data).png().toBuffer();

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
    //start---

    //finish---

    return NextResponse.json({
      storageImageUrl,
    });
  } catch (error) {
    console.error(error);
    const errorMessage = getErrorMessage(error, "error in redesign room api");

    return NextResponse.json({}, { status: 400, statusText: errorMessage });
  }
}
