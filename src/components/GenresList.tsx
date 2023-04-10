import { useEffect, useState } from "react";
import useGenres from "../hooks/useGenres";
import apiClient from "../services/api-client";
import { Heading } from "@chakra-ui/react";

const GenresList = () => {
  const { genres, errors, isLoading } = useGenres();
  return (
    <>
      {genres && <p>{errors}</p>}
      <Heading>Genres</Heading>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
