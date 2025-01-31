import { Box, BoxProps, StackProps, VStack } from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";
import React from "react";

export default function ParagraphWrapper({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & StackProps &
  MotionProps) {
  const motionParentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <VStack
      as={motion.section}
      variants={motionParentVariant}
      initial="hidden"
      animate="show"
      alignItems="start"
      {...rest}
    >
      {children}
    </VStack>
  );
}
