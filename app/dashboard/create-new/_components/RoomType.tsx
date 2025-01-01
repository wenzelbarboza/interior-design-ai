import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  selectedRoom: (roomType: string) => void;
};

const RoomType = ({ selectedRoom }: Props) => {
  return (
    <div>
      <label className="text-slate-500">Select Room Type *</label>
      <div className="mt-2">
        <Select onValueChange={selectedRoom}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Room Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="bedroom">Bedroom</SelectItem>
              <SelectItem value="living room">Living Room</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="bathroom">Bathroom</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default RoomType;
