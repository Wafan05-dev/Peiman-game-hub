import useGenres from "../hooks/useGenres";
import { Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenresList = () => {
  const { genres, errors, isLoading } = useGenres();
  return (
    <>
      {genres && <p>{errors}</p>}
      <Heading>Genres</Heading>
      <List spacing={3}>
        {genres.map((genre) => (
          <ListItem
            paddingY={1}
            display="flex"
            alignItems="center"
            key={genre.id}
          >
            <Image
              boxSize={10}
              borderRadius={11}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text paddingX={2} fontSize="lg">
              {genre.name}
            </Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
