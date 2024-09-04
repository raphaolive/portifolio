import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";

import React from "react";

export default function Introduce() {
  return (
    <Box pos="relative" h={[150, 200, 300]}>
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
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          alt="profie-picture"
          src="https://github.com/raphaolive.png"
          rounded="full"
          height={["50px", "80px", "100px"]}
        />
        <Box>
          <Heading fontSize={["md", "lg", "35px"]}>I&apos;m Rapha Olive</Heading>
          <Text fontSize={["xs", "md", "lg"]}>
            Front-end developer (React, NextJs / React / Native)
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
