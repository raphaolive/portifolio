import { PagesType } from "@/utils/types";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

export default function Introduce({ page }: { page: PagesType }) {
  const heading: Record<PagesType, string> = {
    home: "I'm Rapha Olive",
    projects: "Projects worked.",
    contact: "Get in touch.",
  };

  return (
      <Box pos="relative" h={[150, 200, 300]} mt="64px">
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.4",
          }}
          src={require("@/assets/introducing.mp4")}
          autoPlay
          muted
          loop
        />
        <HStack
          position="absolute"
          style={{
            top: "50%",
            transform: "translate(0, -50%)",
          }}
          width="100%"
          justifyContent="center"
          padding={10}
        >
          <Image
            alt="profie-picture"
            src="https://github.com/raphaolive.png"
            rounded="full"
            height={["50px", "80px", "100px"]}
          />
          <Box ml={4}>
            <Heading
              as={motion.h1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              fontSize={["md", "lg", "35px"]}
            >
              {heading[page] || heading.home}
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
        </HStack>
      </Box>
  );
}
