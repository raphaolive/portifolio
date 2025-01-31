import { StackProps, VStack } from "@chakra-ui/react";
import { delay, motion, MotionProps } from "framer-motion";
import React from "react";

export default function Paragraph({
  children,
  delay = 0,
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
} & StackProps &
  MotionProps) {
  const motionChildrenVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
    },
    visible: {
      delay: delay,
    },
  };

  return (
    <VStack
      align="start"
      as={motion.div}
      variants={motionChildrenVariant}
      initial="hidden"
      animate="show"
      alignItems="start"
      {...rest}
    >
      {children}
    </VStack>
  );
}
