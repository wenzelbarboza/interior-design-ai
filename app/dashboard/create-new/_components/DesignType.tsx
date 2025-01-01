import React, { useState } from "react";
import designList from "@/data/DesignTypes.json";
import Image from "next/image";
import { cn } from "@/lib/utils";
type DesignList = {
  type: string;
  image: string;
};

type Props = {
  selectedDesign: (value: string) => void;
};

const DesignType = ({ selectedDesign }: Props) => {
  const [select, setSelect] = useState<string>("");

  const handleSelect = (type: string) => {
    setSelect(type);
    selectedDesign(type);
  };

  return (
    <div className="mt-5">
      <label className="text-gray-500 ">Select Design Type</label>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {designList.map((design: DesignList, index) => {
          return (
            <div key={index} onClick={() => handleSelect(design.type)}>
              <Image
                src={design.image}
                alt="design-type-image"
                width={100}
                height={100}
                className={cn(
                  `h-[80px] rounded-lg hover:scale-105 cursor-pointer`,
                  {
                    "border-2 border-primary p-1": select == design.type,
                  }
                )}
              />
              {design.type}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignType;
