import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      width={{ sm: 100, md: 350, lg: 300, xl: 440 }}
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton height={330}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
