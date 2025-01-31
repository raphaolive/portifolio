import { Box, Container } from "@chakra-ui/react";

import Introduce from "@/components/introduce";
import Navbar from "@/components/navbar";
import Welcome from "@/components/welcome";
import { useState } from "react";
import { PagesType } from "@/utils/types";
import Contact from "@/components/contact";
import Projects from "@/components/projects";

export default function Home() {
  const [page, setPage] = useState<PagesType>("home");

  const portfolioContent: Record<PagesType, React.ReactNode> = {
    home: <Welcome onSetPage={setPage} />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <Box paddingBottom={24}>
      <Navbar onSetPage={setPage} />
      <Introduce page={page} />
      <Container display="flex" flexDir="column" gap={6} mt={24}>
        {portfolioContent[page]}
      </Container>
    </Box>
  );
}
