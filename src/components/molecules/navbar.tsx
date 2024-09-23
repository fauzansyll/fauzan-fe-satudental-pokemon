import React, { useContext } from "react";

import Image from "next/image";
import { AppContext } from "@/pages/_app";
import { SmallBox } from "../atoms/box";
import Link from "next/link";
import { AppContextType } from "@/lib/interface";

const Navbar = () => {
  const { total } = useContext(AppContext) as AppContextType;

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
