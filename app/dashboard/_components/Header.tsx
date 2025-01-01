"use client";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/zod/UserStore";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  const userStore = useUserStore();
  return (
    <>
      <div className="flex justify-between p-5 shadow-sm items-center">
        <div className="flex gap-2 items-center">
          <Image src={"/my-logo.svg"} alt="logo" width={30} height={30} />
          <h2>AI Room Design</h2>
        </div>

        <Button variant={"ghost"} className="text-primaryColor rounded-2xl">
          Buy more credits
        </Button>

        <div className="flex gap-12 items-center">
          <div className="flex items-center gap-2">
            <Image src={"/star.svg"} alt="star" width={22} height={22} />
            <h2>{userStore.user?.credits || 0}</h2>
          </div>
          <div className=" flex items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
