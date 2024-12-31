"use client";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/zod/UserStore";
import React, { useState } from "react";
import EmptyListing from "./EmptyListing";
import Link from "next/link";

const Listing = () => {
  const userStore = useUserStore();
  console.log(userStore.user);
  const [userRoomListing, setUserRoomListing] = useState([]);
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Hello, {userStore.user?.name}</h2>
          <Link href={"/dashboard/create-new"}>
            <Button className="text-white">Redesign Room</Button>
          </Link>
        </div>
        {userRoomListing.length == 0 ? (
          <EmptyListing />
        ) : (
          <div>{/* print the listing */}</div>
        )}
      </div>
    </>
  );
};

export default Listing;
