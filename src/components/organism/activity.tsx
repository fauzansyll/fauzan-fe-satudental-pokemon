import { LIMIT_PER_PAGE } from "@/lib/constants";
import { AppContext } from "@/pages/_app";
import { useRouter } from "next/router";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import Template from "../atoms/template";
import Button from "../atoms/button";
import Card from "../atoms/card";
import Filters from "../molecules/filters";
import Toast from "../atoms/toast";
import { AppContextType, PokemonDetail } from "@/lib/interface";

const Activity = () => {
  const {
    data,
    setPokedex,
    pokedex,
    setTotal,
    total,
    setCurrentPage,
    currentPage,
  } = useContext(AppContext) as AppContextType;
  const [search, setSearch] = useState("");
  const [toastMessage, setToastMessage] = useState("Pokemon Added To Pokedex");

  const itemsPerPage = LIMIT_PER_PAGE;
  const router = useRouter();
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const storedPokedex = localStorage.getItem("Pokedex");
    const storedTotal = localStorage.getItem("total");

    if (storedPokedex) {
      setPokedex(JSON.parse(storedPokedex));
    }

    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }
  }, [setPokedex, setTotal]);

  const AddToCart = useCallback(
    (item: string) => {
      const exists = pokedex.includes(item);

      if (!exists) {
        const dataPokedex = [...pokedex, item];
        const totalCart = dataPokedex.length;

        setPokedex(dataPokedex);
        setTotal(totalCart);

        localStorage.setItem("Pokedex", JSON.stringify(dataPokedex));
        localStorage.setItem("total", JSON.stringify(totalCart));

        setToastMessage("Pokemon Added To Pokedex");
        setToast(false);
        setTimeout(() => {
          setToast(true);
          setTimeout(() => {
            setToast(false);
          }, 5000);
        }, 100);
      } else {
        setToastMessage("Pokemon Already In Pokedex");
        setToast(false);
        setTimeout(() => {
          setToast(true);
          setTimeout(() => {
            setToast(false);
          }, 5000);
        }, 100);
      }
    },
    [pokedex, setPokedex, setTotal]
  );

  const filteredItems = useMemo(() => {
    return (
      data?.filter((pokemon: PokemonDetail) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      ) || []
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  }, [filteredItems, currentPage, itemsPerPage]);

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    setCurrentPage(storedPage ? Number(storedPage) : 1);
  }, [setCurrentPage]);

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");

    if (search !== "") {
      setCurrentPage(1);
      localStorage.setItem("currentPage", "1");
    }
  }, [search]);

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

  const handleNavigate = (name: string) => {
    const selectedItem = filteredItems.find(
      (item: PokemonDetail) => item.name === name
    );

    if (selectedItem) {
      localStorage.removeItem("currentPage");
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

  return (
    <div className="">
      <div id="pokedex" className="w-full">
        <Template>
          <div className="flex w-full flex-col gap-5">
            <Filters
              text="Search pokemon"
              value={search}
              setSearch={setSearch}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {currentItems.map((item: PokemonDetail, index: number) => (
                <div
                  key={index}
                  className="w-full grid justify-items-center items-center"
                >
                  <Card
                    name={item.name}
                    actions={() => AddToCart(item.name)}
                    types={item.types}
                    stats={item.stats}
                    abilities={item.abilities}
                    sprites={item.sprites}
                    onClick={() => handleNavigate(item.name)}
                    usage="catalog"
                  />
                </div>
              ))}
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
      <div
        className={`text-xs md:text-base text-center w-fit -translate-x-1/2 z-50 transform duration-500 left-1/2 fixed ${
          toast ? "bottom-14 md:bottom-10" : "-bottom-32 md:-bottom-14"
        }`}
      >
        <Toast message={toastMessage} />
      </div>
    </div>
  );
};

export default Activity;
