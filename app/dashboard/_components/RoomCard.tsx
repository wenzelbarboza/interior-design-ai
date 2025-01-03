import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

type Props = {
  image: string;
  aiImage: string;
  room: string;
  design: string;
};

const RoomCard = ({ image, aiImage, room, design }: Props) => {
  const FIRST_IMAGE = {
    imageUrl: image,
  };
  const SECOND_IMAGE = {
    imageUrl: aiImage,
  };
  return (
    <div>
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      />
      <h2>🏠 {room}</h2>
      <h2>🎨 {design}</h2>
    </div>
  );
};

export default RoomCard;
