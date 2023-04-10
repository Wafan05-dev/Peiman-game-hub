import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => (
  <>
    <HStack paddingY={5}>
      <SkeletonCircle />
      <SkeletonText noOfLines={1} w={100} />
    </HStack>
  </>
);

export default GenreListSkeleton;
