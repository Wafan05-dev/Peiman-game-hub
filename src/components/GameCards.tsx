import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

interface Props {
  game: Games;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={game.background_image}
        borderRadius={10}
        overflow="hidden"
      ></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
