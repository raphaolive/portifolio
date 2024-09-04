import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { bio, wellcome } from "@/utils/bio";

import Introduce from "@/components/introduce";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <Box paddingBottom={24}>
      <Navbar />
      <Introduce />
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
