import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import React from "react";
import { HashLoader } from "react-spinners";

type Props = {
  loading: boolean;
};

const CustomLoading = ({ loading }: Props) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="w-fit text-center flex items-center flex-col">
        <AlertDialogHeader className="hidden">
          <AlertDialogTitle></AlertDialogTitle>
        </AlertDialogHeader>
        <div>
          <HashLoader
            color={"#C858FF"}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <h2>Design in progress... Do not refresh</h2>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;
