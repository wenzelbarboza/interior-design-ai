"use client";
import { User, useUserStore } from "@/zustand/UserStore";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

type ResType = {
  user: User;
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const userStore = useUserStore();

  //use effect to check user
  useEffect(() => {
    if (user) verufyUser();
  }, [user]);

  const verufyUser = async () => {
    try {
      const userRes = await axios.post<ResType>("/api/verify-user", {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
      });
      userStore.setUser(userRes.data.user);
    } catch (error) {
      //TODO
      //make a toast
      console.error(error);
    }
  };

  return <div>{children}</div>;
};

export default Provider;
