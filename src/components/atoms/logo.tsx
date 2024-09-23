import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div>
        <div className="w-28">
          <Image
            width={200}
            height={200}
            alt="Pokemon Text"
            src={"/pokemontext.png"}
            priority
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
