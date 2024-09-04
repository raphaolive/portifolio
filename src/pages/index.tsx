import {
  Box,
  Button,
  Image as ChakraImage,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Moon, Sun } from "@phosphor-icons/react";
import { bio, wellcome } from "@/utils/bio";

import Image from "next/image";
import Link from "next/link";
import city from "../assets/city.png";

export default function Home() {
  const { toggleColorMode } = useColorMode();

  const navbarBgColor = useColorModeValue("black.100", "black.900");
  const cardBgColor = useColorModeValue("#fafafa5a", "#00000083");
  const toggleIcon = useColorModeValue(<Moon size={28} />, <Sun size={28} />);

  return (
    <Box paddingBottom={24}>
      <Box bgColor={navbarBgColor}>
        <Container
          display="flex"
          w="lg"
          h={20}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading fontSize="lg">Rapha Olive</Heading>
          <HStack gap={8}>
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
      <Box pos="relative" height={300}>
        <Image
          alt="background"
          src={city}
          fill
          objectFit="cover"
          objectPosition="40% 70%"
        />
        <HStack
          position="absolute"
          padding={12}
          bg={cardBgColor}
          borderRadius={32}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ChakraImage
            alt="profie-picture"
            src="https://github.com/raphaolive.png"
            rounded="full"
            height={100}
          />
          <Box>
            <Heading>I&apos;m Rapha Olive</Heading>
            <Text fontWeight="bold">
              Front-end developer (React, NextJs / React / Native)
            </Text>
          </Box>
        </HStack>
      </Box>
      <Container display="flex" flexDir="column" gap={6} mt={24}>
        <VStack alignItems="start" gap={6}>
          <Heading fontSize="lg">Welcome to My Portfolio</Heading>
          {wellcome.map((content, index) => (
            <Text key={`content${index}`} textAlign="justify">
              {content}
            </Text>
          ))}
          <Button alignSelf="center" colorScheme="cyan" mt={12}>
            my works
          </Button>
        </VStack>

        <Box as="section">
          <VStack alignItems="start" gap={6}>
            <Heading fontSize="lg">Bio</Heading>
            <Grid gridTemplateColumns="50px 1fr" gap={2}>
              {bio.map((item) => (
                <>
                  <GridItem>
                    <Text fontWeight="bold">{item.year}</Text>
                  </GridItem>
                  <GridItem>
                    <Text textAlign="justify">{item.text}</Text>
                  </GridItem>
                </>
              ))}
            </Grid>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
