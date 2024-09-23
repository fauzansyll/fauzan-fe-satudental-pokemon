import React, { Fragment, useContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import Image from "next/image";
import { AppContext } from "@/pages/_app";
import { SmallBox } from "../atoms/box";
import Link from "next/link";
import { AppContextType } from "@/lib/interface";

const Navbar = () => {
  const { total } = useContext(AppContext) as AppContextType;

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = debounce(() => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 1000);

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Link href={"/pokedex"}>
      <div className="cursor-pointer">
        <SmallBox color="neocyan">
          <p>Pokedex</p>
          <Image
            priority
            alt="Pokedex"
            src={"/pokedex.png"}
            width={30}
            height={30}
          />
          {total}
        </SmallBox>
      </div>
    </Link>
  );
};

export default Navbar;
