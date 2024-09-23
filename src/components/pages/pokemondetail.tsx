import React, { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PokemonDetail } from "@/lib/interface";
import { AppContextType } from "@/lib/interface";
import Image from "next/image";
import Template from "@/components/atoms/template";
import { AppContext } from "@/pages/_app";
import Toast from "../atoms/toast";
import Link from "next/link";

const Detail = () => {
  const router = useRouter();
  const { data } = useContext(AppContext) as AppContextType;
  const [filteredItems, setFilteredItems] = useState<PokemonDetail[]>([]);
  const [tipe, setTipe] = useState<string>("");
  const [toastMessage, setToastMessage] = useState("Back to Catalog");

  useEffect(() => {
    const slug = Array.isArray(router.query.slug)
      ? router.query.slug[0]
      : router.query.slug;

    if (slug && typeof slug === "string") {
      const filtered = data?.filter((pokemon: PokemonDetail) =>
        pokemon.name.toLowerCase().includes(slug.toLowerCase())
      );
      setFilteredItems(filtered || []);

      if (filtered?.length) {
        if (filtered[0].types[0]?.type.name === "normal") {
          setTipe(filtered[0].types[1]?.type.name);
        } else {
          setTipe(filtered[0].types[0]?.type.name);
        }
      }
    }
  }, [router.query.slug, data]);

  if (!filteredItems.length) {
    return <p>No Pokémon Found</p>;
  }

  const pokemon = filteredItems[0];

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const typeColorMap: { [key: string]: string } = {
    grass: "bg-green-300",
    fire: "bg-red-300",
    water: "bg-blue-300",
    bug: "bg-yellow-300",
    poison: "bg-purple-300",
    electric: "bg-yellow-300",
    ground: "bg-yellow-300",
    fairy: "bg-pink-300",
    fighting: "bg-red-300",
    psychic: "bg-purple-300",
    rock: "bg-gray-300",
    ghost: "bg-purple-300",
    ice: "bg-blue-300",
    dragon: "bg-blue-300",
    dark: "bg-gray-300",
    steel: "bg-gray-300",
    flying: "bg-blue-300",
  };

  const theme = typeColorMap[tipe] || "bg-neoviolet-200";

  return (
    <div className={`flex ${theme}  w-full items-center justify-center`}>
      <Template>
        <div className="flex border-2 rounded-md border-black bg-white p-6 gap-5 flex-col">
          <h1 className="text-4xl text-center">
            {capitalizeFirstLetter(pokemon.name)}
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites?.front_default || "/pokeball.png"}
                alt={pokemon.name}
                width={200}
                height={200}
                priority
              />
              <Image
                src={pokemon.sprites?.front_shiny || "/pokeball.png"}
                alt={pokemon.name}
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites?.back_default || "/pokeball.png"}
                alt={pokemon.name}
                width={200}
                height={200}
                priority
              />
              <Image
                src={pokemon.sprites?.back_shiny || "/pokeball.png"}
                alt={pokemon.name}
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pokemon.stats.map((stat) => (
              <div
                className={`text-center ${theme} text-xs md:text-base p-1 rounded-md border-2 border-black`}
                key={stat.stat.name}
              >
                <p>{capitalizeFirstLetter(stat.stat.name)}</p>
                <p>{stat.base_stat}</p>
              </div>
            ))}
            <p>XP: {pokemon.base_experience}</p>
            <p>
              Type: {pokemon.types.map((type) => type.type.name).join(", ")}
            </p>
            <p>
              Abilities:{" "}
              {pokemon.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default Detail;
