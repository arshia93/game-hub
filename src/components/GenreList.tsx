import useGenres from "../hooks/useGenres";
import {
  Menu,
  MenuButton,
  MenuItem,
  Button,
  MenuList,
  List,
  ListItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

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
    // <Menu>
    //   {({ isOpen }) => (
    //     <>
    //       <MenuButton isActive={isOpen} as={Button}>
    //         {isOpen ? "Close Filter" : "Filter"}
    //       </MenuButton>
    //       <MenuList>
    //         {data.map((data) => (
    //           <MenuItem key={data.id}>{data.name}</MenuItem>
    //         ))}
    //         <MenuItem onClick={() => alert("Kagebunshin")}>
    //           Create a Copy
    //         </MenuItem>
    //       </MenuList>
    //     </>
    //   )}
    // </Menu>
  );
};

export default GenreList;
