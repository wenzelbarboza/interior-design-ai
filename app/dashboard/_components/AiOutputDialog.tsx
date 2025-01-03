import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

type Props = {
  openDialog: boolean;
  image: string;
  aiImage: string;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const AiOutputDialog = ({
  aiImage,
  image,
  openDialog,
  setOpenDialog,
}: Props) => {
  const FIRST_IMAGE = {
    imageUrl: image,
  };
  const SECOND_IMAGE = {
    imageUrl: aiImage,
  };
  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Result:</AlertDialogTitle>
        </AlertDialogHeader>
        {/* <div className="h-full w-full object-cover"> */}
        <ReactBeforeSliderComponent
          // className="w-10 h-10 bg-cover"
          className="max-w-full h-auto object-contain"
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
        />
        {/* </div> */}
        <Button onClick={() => setOpenDialog(false)}>Close</Button>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AiOutputDialog;
