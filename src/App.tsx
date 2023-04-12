import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import useGames from "./hooks/useGames";
import { useMemo, useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const { games, errors, isLoading } = useGames();
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const filteredGames = useMemo(
    () =>
      selectedGenre
        ? games.filter((game) =>
            game.genres.some((genre) => genre.id === selectedGenre.id)
          )
        : games,
    [games, selectedGenre]
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={selectedGenre}
            onFilter={(genre) => setSelectedGenre({ ...genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid games={filteredGames} errors={errors} isLoading={isLoading} />
      </GridItem>
    </Grid>
  );
}

export default App;
