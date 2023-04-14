import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import useGames from "./hooks/useGames";
import { useEffect, useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { ParentPlatform } from "./hooks/usePlatforms";
import renderGames from "./utils/renderingGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [sortOrder, setSortOrder] = useState("");
  const { games, errors, isLoading } = useGames(sortOrder);
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] =
    useState<ParentPlatform | null>(null);
  const [searchElement, setSearchElement] = useState<string>("");

  useEffect(() => {
    if (searchElement) {
      setSelectedGenre(null);
      setSelectedPlatform(null);
    }
    if (selectedGenre || selectedPlatform) setSearchElement("");
  }, [searchElement, selectedGenre, selectedPlatform]);

  const filteredGames = renderGames(
    games,
    selectedGenre,
    selectedPlatform,
    searchElement
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
        <NavBar onSearch={(search) => setSearchElement(search)} />
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
        <PlatformSelector
          onPlatformSelect={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <SortSelector
          onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
          selectedSortOrder={sortOrder}
        />

        <GameGrid games={filteredGames} errors={errors} isLoading={isLoading} />
      </GridItem>
    </Grid>
  );
}

export default App;
