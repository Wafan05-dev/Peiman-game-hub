import { Games } from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import { ParentPlatform } from "../hooks/usePlatforms";

const renderGames = (
  games: Games[],
  selectedGenre: Genres | null,
  selectedPlatform: ParentPlatform | null,
  searchedElement: string
) => {
  const filteredByGenre = games.filter((game) =>
    game.genres.some((genre) => genre.id === selectedGenre?.id)
  );
  const filteredByPlatform = games.filter((game) =>
    game.parent_platforms.some(
      ({ platform }) => platform.id === selectedPlatform?.id
    )
  );
  const filteredByBoth = filteredByGenre.filter((game) =>
    game.parent_platforms.some(
      ({ platform }) => platform.id === selectedPlatform?.id
    )
  );
  const searchedGames = games.filter(
    (game) =>
      game.slug.startsWith(searchedElement) ||
      game.slug.includes(searchedElement)
  );

  if (selectedGenre && selectedPlatform) return filteredByBoth;
  if (selectedGenre) return filteredByGenre;
  if (selectedPlatform) return filteredByPlatform;
  if (searchedGames) return searchedGames;
  return games;
};

export default renderGames;
