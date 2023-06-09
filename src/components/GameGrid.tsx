import { SimpleGrid, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  games: Games[];
  errors: string;
  isLoading: boolean;
}

const GameGrid = ({ games, errors, isLoading }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (errors) return <Text>{errors}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={3}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games.map((game) => (
        <GameCards key={game.id} game={game}></GameCards>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
