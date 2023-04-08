import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const fetchGamesGird = async () => {
      try {
        const { data } = await apiClient.get<FetchGamesResponse>("/games");
        setGames([...data.results]);
      } catch (ex) {
        setErrors((ex as AxiosError).message);
      }
    };
    fetchGamesGird();
  }, []);
  return { games, errors };
};

export default useGames;
