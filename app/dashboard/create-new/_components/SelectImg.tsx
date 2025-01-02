"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  selectedImage: (file: File | undefined) => void;
};

const SelectImg = ({ selectedImage }: Props) => {
  const [files, setFiles] = useState<File | undefined>();

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    setFiles(file);
    selectedImage(file);
  };

  return (
    <div>
      <label>Select Room image</label>
      <div className="mt-3">
        <label htmlFor="room-img">
          <div
            className={cn(
              `p-28 border border-dotted rounded-xl flex justify-center items-center bg-purple-50 border-primary cursor-pointer hover:shadow-lg`,
              { "p-0 bg-white": files }
            )}
          >
            {!files ? (
              <Image src={"/upload.svg"} alt="upload" width={75} height={75} />
            ) : (
              <Image
                src={URL.createObjectURL(files)}
                alt="my-room-image"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          name="room-img"
          id="room-img"
          accept="image/*"
          className="hidden"
          onChange={handleFiles}
        />
      </div>
    </div>
  );
};

export default SelectImg;
