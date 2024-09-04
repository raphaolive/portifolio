import { Box, HStack } from "@chakra-ui/react";

import React from "react";

export default function Introduce({
  introduceContent,
}: {
  introduceContent: React.ReactNode;
}) {
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
        {introduceContent}
      </HStack>
    </Box>
  );
}
