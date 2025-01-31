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
import { bio, welcome } from "@/utils/texts";
import Paragraph from "./motion/paragraph";
import ParagraphWrapper from "./motion/paragraph-wrapper";
import { Dispatch } from "react";
import { PagesType } from "@/utils/types";

export default function Welcome({
  onSetPage,
}: {
  onSetPage: Dispatch<React.SetStateAction<PagesType>>;
}) {
  const myWorksButtonScheme = useColorModeValue("yellow", "teal");

  return (
    <ParagraphWrapper>
      <Paragraph gap={6}>
        <Heading fontSize="lg">Welcome to My Portfolio</Heading>
        <AnimatePresence>
          {welcome.map((content, index) => (
            <Text as={motion.p} key={`content${index}`} textAlign="justify">
              {content}
            </Text>
          ))}
        </AnimatePresence>

        <Button
          alignSelf="center"
          colorScheme={myWorksButtonScheme}
          mt={12}
          onClick={() => onSetPage("projects")}
        >
          my works
        </Button>
      </Paragraph>
      <Paragraph gap={6} delay={1}>
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
      </Paragraph>
    </ParagraphWrapper>
  );
}
