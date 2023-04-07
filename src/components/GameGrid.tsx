import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import apiClient from "../services/api-client";

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
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

  return (
    <>
      {errors && <p>{errors}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
