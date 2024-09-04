import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Hamburger, Moon, Sun } from "@phosphor-icons/react";

import { PagesType } from "@/pages";

type Props = {
  onSetPage: Dispatch<SetStateAction<PagesType>>;
};

type MenuProps = Props & {
  toggleColorMode: () => void;
  toggleIcon: JSX.Element;
};

export default function Navbar({ onSetPage }: Props) {
  const { toggleColorMode } = useColorMode();
  const navbarBgColor = useColorModeValue("black.100", "black.900");
  const toggleIcon = useColorModeValue(<Moon size={22} />, <Sun size={22} />);
  // const { width } = useWindowDimensions();

  const width = 500;

  return (
    <Box
      position="fixed"
      top={0}
      w="100%"
      zIndex="sticky"
      bgColor={navbarBgColor}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={3}
        gap={4}
      >
        <Heading fontSize="md">
          <Button variant="unstyled" onClick={() => onSetPage("home")}>
            Rapha Olive
          </Button>
        </Heading>
        <HStack gap={8} fontSize="sm">
          <Button
            variant="unstyled"
            fontSize="sm"
            onClick={() => onSetPage("projects")}
          >
            Projects
          </Button>
          <Button
            variant="unstyled"
            fontSize="sm"
            onClick={() => onSetPage("contact")}
          >
            Contact
          </Button>
          <IconButton
            colorScheme="yellow"
            aria-label="toggle-theme"
            icon={toggleIcon}
            onClick={toggleColorMode}
          />
        </HStack>
      </Container>
    </Box>
  );
}
