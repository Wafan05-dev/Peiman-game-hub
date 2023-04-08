import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, errors } = useGames();

  return (
    <>
      {errors && <p>{errors}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCards key={game.id} game={game}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
