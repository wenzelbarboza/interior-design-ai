"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  //use effect to check user
  useEffect(() => {
    if (user) verufyUser();
  }, [user]);

  //verify user
  const verufyUser = async () => {
    const userRes = await axios.post("/api/verify-user", {
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
    });
    console.log(userRes.data);
  };

  return <div>{children}</div>;
};

export default Provider;
