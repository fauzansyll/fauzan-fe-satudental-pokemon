import React, { Fragment } from "react";
import Template from "../atoms/template";
import Logo from "../atoms/logo";
import Navbar from "../molecules/navbar";
import Image from "next/image";

const Header = () => {
  return (
    <div className="border-b-2 border-black relative">
      <Template>
        <div className="w-full relative flex justify-between items-center">
          <Logo />
          <Navbar />
        </div>
      </Template>
    </div>
  );
};

export default Header;
