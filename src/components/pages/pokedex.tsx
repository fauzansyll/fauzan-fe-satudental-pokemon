import { AppContext } from "@/pages/_app";
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import Template from "../atoms/template";
import Card from "../atoms/card";
import { useRouter } from "next/router";
import Button from "../atoms/button";
import { LIMIT_PER_PAGE } from "@/lib/constants";
import Filters from "../molecules/filters";
import { AppContextType, PokemonDetail } from "@/lib/interface";
import Link from "next/link";
import Toast from "../atoms/toast";
import Image from "next/image";

const Pokedex = () => {
  const { data, setPokedex, setTotal, pokedex, currentPage, setCurrentPage } =
    useContext(AppContext) as AppContextType;
  const [book, setBook] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [toastMessage, setToastMessage] = useState("Back to Catalog");

  useEffect(() => {
    const storedPokedex = localStorage.getItem("Pokedex");
    const storedTotal = localStorage.getItem("total");
    const storedSearch = localStorage.getItem("pokedexSearch");

    if (storedPokedex) {
      const parsedPokedex = JSON.parse(storedPokedex);
      setPokedex(parsedPokedex);
      setBook(parsedPokedex);
    }

    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }

    if (storedSearch) {
      setSearch(storedSearch);
    }
  }, []);

  const finalBook = useMemo(
    () =>
      (data || []).filter(
        (pokemon: PokemonDetail) =>
          book.includes(pokemon.name) &&
          pokemon.name.toLowerCase().includes(search.toLowerCase())
      ),
    [data, book, search]
  );

  const router = useRouter();

  const handleNavigate = (name: string) => {
    const selectedItem = finalBook.find(
      (item: PokemonDetail) => item.name === name
    );

    if (selectedItem) {
      router.push(
        {
          pathname: `/detail/${selectedItem.name}`,
          query: { slug: selectedItem.name },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  const itemsPerPage = LIMIT_PER_PAGE;
  const deletePokemon = useCallback(
    (item: string) => {
      const updatedPokedex = book.filter((pokemon) => pokemon !== item);
      const totalPokemon = updatedPokedex.length;

      setPokedex(updatedPokedex);
      setTotal(totalPokemon);

      localStorage.setItem("Pokedex", JSON.stringify(updatedPokedex));
      localStorage.setItem("total", JSON.stringify(totalPokemon));
      setBook(updatedPokedex);
    },
    [book, setPokedex, setTotal]
  );

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    setCurrentPage(storedPage ? Number(storedPage) : 1);
  }, [setCurrentPage]);

  useEffect(() => {
    if (search !== "") {
      setCurrentPage(1);
      localStorage.setItem("currentPage", "1");
    }
  }, [search]);

  const currentItems = useMemo<PokemonDetail[]>(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return (finalBook || []).slice(startIndex, endIndex);
  }, [finalBook, currentPage, itemsPerPage]);

  const totalPages = Math.ceil((finalBook?.length || 0) / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      localStorage.setItem("currentPage", nextPage.toString());
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      localStorage.setItem("currentPage", prevPage.toString());
    }
  };

  return (
    <div className="bg-neolime-200 min-h-screen">
      <Template>
        <div className="flex flex-col gap-5">
          <h2 className="text-center text-4xl">Your Pokedex</h2>
          <Filters
            text="Search your pokemon"
            value={search}
            setSearch={setSearch}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {currentItems.length > 0 ? (
              currentItems.map((pokemon: PokemonDetail, index: number) => (
                <Card
                  usage="pokedex"
                  types={pokemon.types}
                  stats={pokemon.stats}
                  sprites={pokemon.sprites}
                  name={pokemon.name}
                  abilities={pokemon.abilities}
                  onClick={() => handleNavigate(pokemon.name)}
                  key={index}
                  actions={() => deletePokemon(pokemon.name)}
                />
              ))
            ) : (
              <p>No Pokémon in your Pokedex</p>
            )}
          </div>
          <div className="flex w-full justify-center text-xs items-center gap-5 mt-5">
            <Button
              color="neoyellow"
              disabled={currentPage === 1}
              type="medium"
              onClick={handlePrevPage}
              size="sm"
            >
              &lt;
            </Button>

            <p className="text-sm">
              Page {currentPage} of {totalPages}
            </p>

            <Button
              size="sm"
              color="neoyellow"
              disabled={currentPage === totalPages}
              type="medium"
              onClick={handleNextPage}
            >
              &gt;
            </Button>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default Pokedex;
