import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { Platform } from "./useGames";

export interface ParentPlatform {
  id: number;
  name: string;
  platforms: Platform[];
}

interface FetchParentPlatformsResponse {
  count: number;
  results: ParentPlatform[];
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<ParentPlatform[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const { data } = await apiClient.get<FetchParentPlatformsResponse>(
          "/platforms/lists/parents"
        );
        setPlatforms([...data.results]);
      } catch (ex) {
        setErrors((ex as AxiosError).message);
      }
    };
    fetchPlatforms();
  }, []);
  return { platforms, errors };
};

export default usePlatforms;
