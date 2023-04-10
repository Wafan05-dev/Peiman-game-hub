import useGenres from "../hooks/useGenres";
import { Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenresList = () => {
  const { genres, errors, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {genres && <p>{errors}</p>}
      <Heading marginBottom={2}>Genres</Heading>
      <List spacing={3}>
        {isLoading &&
          skeleton.map((skeleton) => (
            <GenreListSkeleton key={skeleton}></GenreListSkeleton>
          ))}
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
