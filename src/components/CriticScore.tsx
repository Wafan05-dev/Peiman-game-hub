import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const badgeColor = () => {
    return score >= 85 ? "green" : "yellow";
  };

  return (
    <Badge
      colorScheme={badgeColor()}
      fontSize="14px"
      borderRadius="4px"
      padding={1}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
