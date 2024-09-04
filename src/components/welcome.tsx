import { AnimatePresence, motion, stagger } from "framer-motion";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { bio, welcome } from "@/utils/bio";

export default function Welcome() {
  const myWorksButtonScheme = useColorModeValue("yellow", "teal");

  const motionParentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const motionChildrenVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Box
      as={motion.section}
      variants={motionParentVariant}
      initial="hidden"
      animate="show"
    >
      <VStack
        as={motion.div}
        variants={motionChildrenVariant}
        initial="hidden"
        animate="show"
        alignItems="start"
        gap={6}
      >
        <Heading fontSize="lg">Welcome to My Portfolio</Heading>
        <AnimatePresence>
          {welcome.map((content, index) => (
            <Text as={motion.p} key={`content${index}`} textAlign="justify">
              {content}
            </Text>
          ))}
        </AnimatePresence>

        <Button alignSelf="center" colorScheme={myWorksButtonScheme} mt={12}>
          my works
        </Button>
      </VStack>
      <VStack
        as={motion.div}
        variants={motionChildrenVariant}
        initial="hidden"
        animate="show"
        alignItems="start"
        gap={6}
      >
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
  );
}
