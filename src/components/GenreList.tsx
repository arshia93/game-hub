import useGenres from "../hooks/useGenres";
import { Menu, MenuButton, MenuItem, Button, MenuList } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres()
  
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button}>
            {isOpen ? "Close Filter" : "Filter"}
          </MenuButton>
          <MenuList>
            {data.map((data) => (
              <MenuItem key={data.id}>{data.name}</MenuItem>
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
