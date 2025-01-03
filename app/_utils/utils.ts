import axios from "axios";
import sharp from "sharp";

export const getPngBuffer = async (imageUrl: string) => {
  if (!imageUrl) throw new Error("image url missing");

  const response = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });

  return await sharp(response.data).png().toBuffer();
};
