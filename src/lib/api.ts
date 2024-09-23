import axios from "axios";
import { Fetch } from "./interface";

const ROOT_URL = process.env.NEXT_PUBLIC_POKEMON_URL;
const BASE_URL = `${ROOT_URL}`;

const api = () => {
  async function getPokemon() {
    try {
      const response = await axios.get(`${BASE_URL}/pokemon`);
      return response.data.results;
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }

  async function fetchData({ url }: Fetch) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }

  return {
    getPokemon,
    fetchData,
  };
};

export default api;
