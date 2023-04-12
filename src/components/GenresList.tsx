import useGenres, { Genres } from "../hooks/useGenres";
import { Button, Heading, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genres | null;
  onFilter: (genre: Genres) => void;
}

const GenresList = ({ onFilter, selectedGenre }: Props) => {
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
            <Button
              variant="link"
              marginLeft={2}
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              whiteSpace="break-spaces"
              textAlign="left"
              onClick={() => onFilter(genre)}
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
