import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navigation = () => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image src={logo} boxSize={"60px"} objectFit={"cover"} />
        <InputGroup>
          <InputLeftElement>
            {/* enter magnifies icon once I know where to get one */}
          </InputLeftElement>
          <Input
            placeholder="Search games..."
            variant="filled"
            borderRadius={50}
            width={"80%"}
          />
          <ColorModeSwitch />
        </InputGroup>
      </HStack>
    </>
  );
};

export default Navigation;
