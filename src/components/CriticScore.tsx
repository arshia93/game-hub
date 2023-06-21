import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yello" : "";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="14px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
