import { Games } from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import { ParentPlatform } from "../hooks/usePlatforms";

const renderGames = (
  games: Games[],
  selectedGenre: Genres | null,
  selectedPlatform: ParentPlatform | null
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
  if (selectedGenre && selectedPlatform) return filteredByBoth;
  if (selectedGenre) return filteredByGenre;
  if (selectedPlatform) return filteredByPlatform;
  return games;
};

export default renderGames;
