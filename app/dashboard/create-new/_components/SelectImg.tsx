import Image from "next/image";
import React from "react";

const SelectImg = () => {
  return (
    <div>
      <label>Select Room image</label>
      <div>
        <label htmlFor="room-img">
          <div>
            <Image src={"/upload.svg"} alt="upload" width={75} height={75} />
          </div>
        </label>
        <input type="file" name="room-img" id="room-img" accept="image/*" />
      </div>
    </div>
  );
};

export default SelectImg;
