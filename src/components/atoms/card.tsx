import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "@/pages/_app";
import Button from "./button";
import { CardProps } from "@/lib/interface";

const Card: React.FC<CardProps> = ({
  name,
  types,
  stats,
  abilities,
  sprites,
  onClick,
  actions,
  usage,
}) => {
  function capitalizeFirstLetter(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const router = useRouter();

  const newName = capitalizeFirstLetter(name);

  return (
    <div className="w-full h-full  ">
      <div className=" border-black border-2 rounded-md duration-500 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white flex flex-col">
        <article className="w-full h-full flex flex-col">
          <figure className="w-full h-full md:h-[200px] border-black border-b-2">
            <Image
              src={`${sprites.front_default}`}
              alt="thumbnail"
              width={200}
              height={200}
              className="w-full h-full object-contain"
              priority
            />
          </figure>
          <div className="px-6 py-5 text-left flex-grow">
            <h1 className="text-[24px] mb-4 truncate">{newName}</h1>{" "}
            <div className="flex flex-col gap-5">
              <div className="flex justify-start" onClick={actions}>
                <Button type="medium" color="neocyan">
                  {usage === "pokedex"
                    ? "Remove from Pokedex"
                    : "Add to Pokedex"}
                </Button>
              </div>
              <strong
                className="cursor-pointer  border-b-2 border-black"
                onClick={onClick}
              >
                Read More..
              </strong>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
