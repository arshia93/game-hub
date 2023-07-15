import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSelectPlatform: (value: string) => void;
}

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
