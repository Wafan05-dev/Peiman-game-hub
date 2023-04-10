import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  interface Genres {
    id: number;
    name: string;
    image_background: string;
  }

  interface FetchGenresResponse {
    count: number;
    results: Genres[];
  }

  useEffect(() => {
    const getGenres = async () => {
      setLoading(true);
      try {
        const { data } = await apiClient.get<FetchGenresResponse>("/genres");
        setGenres([...data.results]);
        setLoading(false);
      } catch (ex) {
        setErrors((ex as AxiosError).message);
        setLoading(false);
      }
    };
    getGenres();
  }, []);
  return { genres, errors, isLoading };
};

export default useGenres;
