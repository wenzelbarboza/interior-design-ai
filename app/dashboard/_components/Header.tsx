import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
      </div>
    </>
  );
};

export default Header;
