import api from "@/lib/api";
import {
  AppContextType,
  AppProviderProps,
  Fetch,
  PokemonDetail,
} from "@/lib/interface";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState, useMemo } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const apiInstance = useMemo(() => api(), []);
  const [pokedex, setPokedex] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiInstance.getPokemon();

        const detailPromises = response.map((pokemon: Fetch) =>
          apiInstance.fetchData({ url: pokemon.url })
        );
        const detailsResponse: PokemonDetail[] = await Promise.all(
          detailPromises
        );

        const filteredData: PokemonDetail[] = detailsResponse.map((detail) => ({
          name: detail.name,
          types: detail.types,
          stats: detail.stats,
          abilities: detail.abilities,
          sprites: detail.sprites,
          base_experience: detail.base_experience,
        }));

        setData(filteredData);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [apiInstance]);

  useEffect(() => {
    const localPokedex = localStorage.getItem("Pokedex");
    const localTotal = localStorage.getItem("total");
    const localPage = localStorage.getItem("currentPage");

    if (localPokedex) {
      setPokedex(JSON.parse(localPokedex));
    }
    if (localTotal) {
      setTotal(JSON.parse(localTotal));
    }
    if (localPage) {
      setCurrentPage(JSON.parse(localPage));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        total,
        setTotal,
        data,
        pokedex,
        setPokedex,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
