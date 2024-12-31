"use client";
import { User, useUserStore } from "@/zod/UserStore";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const userStore = useUserStore();

  //use effect to check user
  useEffect(() => {
    if (user) verufyUser();
  }, [user]);

  const verufyUser = async () => {
    try {
      const userRes = await axios.post<User>("/api/verify-user", {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
      });
      console.log(userRes.data);
      userStore.setUser(userRes.data);
    } catch (error) {
      //TODO
      //make a toast
      console.error(error);
    }
  };

  return <div>{children}</div>;
};

export default Provider;
