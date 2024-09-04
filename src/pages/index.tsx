import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

import Introduce from "@/components/introduce";
import Navbar from "@/components/navbar";
import Welcome from "@/components/welcome";
import { motion } from "framer-motion";
import { useState } from "react";

export type PagesType = "home" | "projects" | "contact";

const WelcomeContent = () => (
  <>
    <Image
      alt="profie-picture"
      src="https://github.com/raphaolive.png"
      rounded="full"
      height={["50px", "80px", "100px"]}
    />
    <Box ml={4} >
      <Heading
        as={motion.h1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        fontSize={["md", "lg", "35px"]}
      >
        I&apos;m Rapha Olive
      </Heading>
      <Text
        as={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        fontSize={["xs", "md"]}
      >
        Front-end developer (React, NextJs / React Native)
      </Text>
    </Box>
  </>
);

const ProjectsContent = () => (
  <Text fontSize={["xs", "md"]} fontWeight="bold">
    The projects I had a chance to work on.
  </Text>
);

const ContectContent = () => (
  <Text fontSize={["xs", "md"]} fontWeight="bold">
    Get in touch.
  </Text>
);

export default function Home() {
  const [page, setPage] = useState<PagesType>("home");

  const introduceContent =
    page === "home" ? (
      <WelcomeContent />
    ) : page === "projects" ? (
      <ProjectsContent />
    ) : (
      <ContectContent />
    );

  const porfolioContent =
    page === "home" ? (
      <Welcome />
    ) : page === "projects" ? (
      <Text fontSize={["xs", "md"]} fontWeight="bold">
        The projects I had a chance to work on.
      </Text>
    ) : (
      <Text fontSize={["xs", "md"]} fontWeight="bold">
        Get in touch.
      </Text>
    );

  return (
    <Box paddingBottom={24}>
      <Navbar onSetPage={setPage} />
      <Introduce introduceContent={introduceContent} />
      <Container display="flex" flexDir="column" gap={6} mt={24}>
        {porfolioContent}
      </Container>
    </Box>
  );
}
