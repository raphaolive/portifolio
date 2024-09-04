import {
  Box,
  Container,
  HStack,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Moon, Sun } from "@phosphor-icons/react";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { toggleColorMode } = useColorMode();

  const navbarBgColor = useColorModeValue("black.100", "black.900");
  const toggleIcon = useColorModeValue(<Moon size={22} />, <Sun size={22} />);

  return (
    <Box bgColor={navbarBgColor}>
      <Container
        display="flex"
        flexDir={["column", "row"]}
        gap={4}
        justifyContent="space-between"
        alignItems="center"
        padding={4}
      >
        <Heading fontSize="md">Rapha Olive</Heading>
        <HStack gap={8} fontSize="sm">
          <Link href="#">Projects</Link>
          <Link href="#">Contact</Link>
        </HStack>
        <IconButton
          colorScheme="yellow"
          aria-label="toggle-theme"
          icon={toggleIcon}
          onClick={toggleColorMode}
        />
      </Container>
    </Box>
  );
}
