"use client";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/zustand/UserStore";
import React, { useEffect, useState } from "react";
import EmptyListing from "./EmptyListing";
import Link from "next/link";
import { getDesigns } from "../_actions/actions";
import RoomCard from "./RoomCard";

type RoomListing =
  | {
      id: number;
      imageUrl: string;
      userEmail: string;
      aiImageUrl: string;
      room: string;
      design: string;
      prompt: string | null;
    }[]
  | [];

const Listing = () => {
  const userStore = useUserStore();
  console.log(userStore.user);
  const [userRoomListing, setUserRoomListing] = useState<RoomListing>([]);

  useEffect(() => {
    if (userStore.user)
      getDesigns().then((res) => {
        if (res.data && res.success) {
          setUserRoomListing(res.data);
        }
      });
  }, [userStore.user]);

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Hello, {userStore.user?.name}</h2>
          <Link href={"/dashboard/create-new"}>
            <Button>Redesign Room</Button>
          </Link>
        </div>
        {userRoomListing.length == 0 ? (
          <EmptyListing />
        ) : (
          <div className="mt-5">
            <h2 className="text-primary text-xl font-medium mb-5">Gallery</h2>
            <div className="grid grid-cols-2  lg:grid-cols-3 gap-8 mb-5">
              {userRoomListing.map((room, index) => {
                return (
                  <RoomCard
                    key={index}
                    aiImage={room.imageUrl}
                    image={room.aiImageUrl}
                    design={room.design}
                    room={room.room}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Listing;
