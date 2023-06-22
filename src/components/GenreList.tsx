import useGenres from "../hooks/useGenres";
import { Menu, MenuButton, MenuItem, Button, MenuList } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();
  
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button}>
            {isOpen ? "Close" : "Open"}
          </MenuButton>
          <MenuList>
            {genres.map((genre) => (
              <MenuItem key={genre.id}>{genre.name}</MenuItem>
            ))}
            <MenuItem onClick={() => alert("Kagebunshin")}>
              Create a Copy
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default GenreList;
