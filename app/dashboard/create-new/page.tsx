"use client";
import React, { useState } from "react";
import SelectImg from "./_components/SelectImg";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalPrompts from "./_components/AdditionalPrompts";
import { Button } from "@/components/ui/button";

type ValueName = "image" | "room" | "design" | "prompt";

type FormData = {
  image: File | undefined;
  room: string;
  design: string;
  prompt: string;
};

const Create = () => {
  const [formData, setFormData] = useState<FormData>({
    image: undefined,
    room: "",
    design: "",
    prompt: "",
  });

  const onHandleInputChange = (
    value: File | undefined | string,
    valueName: ValueName
  ) => {
    console.log(value, valueName);
    console.log(formData);
    setFormData((prev) => ({
      ...prev,
      [valueName]: value,
    }));
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-4xl text-primaryColor text-center">
          Experience the magic of AI remodeling
        </h1>
        <p className="text-center text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, numquam
          quas. Veniam asperiores amet fugit delectus blanditiis incidunt natus,
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center mt-10">
          {/* image select */}
          <SelectImg
            selectedImage={(file) => onHandleInputChange(file, "image")}
          />
          {/* form details */}
          <div>
            {/* Room type */}
            <RoomType
              selectedRoom={(value) => onHandleInputChange(value, "room")}
            />

            {/* design type */}
            <DesignType
              selectedDesign={(value) => onHandleInputChange(value, "design")}
            />

            {/* specifications  */}
            <AdditionalPrompts
              prompt={(value) => onHandleInputChange(value, "prompt")}
            />

            {/* submit */}
            <Button className="w-full mt-5">Submit</Button>
            <p className="text-sm text-gray-400 mb-52">
              NOTE: 1 credit point will be consumed to generate design
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
