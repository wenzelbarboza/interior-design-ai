"use server";

import { supabase } from "@/lib/supabase";

export const uploadImage = async (data: File) => {
  if (!data) {
    throw new Error("image data missing");
    // return {
    //   success: false,
    //   message: "image data missing",
    // };
  }

  const random = Math.floor(Math.random() * 90000);
  const fileName = `uploaded-${random}-${data?.name}`;

  const imageUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/interior-design-ai-uploads/${fileName}`;
  const { data: supabaseData, error } = await supabase.storage
    .from("interior-design-ai-uploads")
    .upload(fileName, data);

  console.log("supabase data: ", supabaseData);

  if (error) {
    throw new Error("error in uploading the image");
    // return {
    //   success: false,
    //   message: "error in uploading the image",
    // };
  } else {
    return {
      imageUrl,
    };
  }
};
