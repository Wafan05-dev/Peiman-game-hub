import { HStack, Heading, Text } from "@chakra-ui/react";
import { Genres } from "../hooks/useGenres";
import { ParentPlatform } from "../hooks/usePlatforms";

interface Props {
  genre: Genres | null;
  platform: ParentPlatform | null;
}

const GameHeading = ({ genre, platform }: Props) => {
  return (
    <Heading marginY={5} marginX={2}>
      <HStack>
        {genre && <Text>{genre.name}</Text>}
        {platform && <Text>{platform.name}</Text>}
        <Text>Games</Text>
      </HStack>
    </Heading>
  );
};

export default GameHeading;
