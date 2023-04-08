import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

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
        <PlatformIconList
          platform={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCards;
