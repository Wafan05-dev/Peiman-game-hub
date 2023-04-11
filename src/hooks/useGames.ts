import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { Genres } from "./useGenres";

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
  metacritic: number;
  genres: Genres[];
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGamesGird = async () => {
      setLoading(true);
      try {
        const { data } = await apiClient.get<FetchGamesResponse>("/games");
        setGames([...data.results]);
        setLoading(false);
      } catch (ex) {
        setErrors((ex as AxiosError).message);
        setLoading(false);
      }
    };
    fetchGamesGird();
  }, []);
  return { games, errors, isLoading };
};

export default useGames;
