import useGenres from "../hooks/useGenres";
import {
  List,
  ListItem,
  HStack,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) {
    return null
  }
  if(isLoading) {
    return <Spinner />
  }
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="30px"
              borderRadius={8}
              src={getCroppedImageUrl(item.image_background)}
            ></Image>
            <Text fontSize='lg'>{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
