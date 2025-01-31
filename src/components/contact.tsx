import { getInTouch } from "@/utils/texts";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React from "react";
import ParagraphWrapper from "./motion/paragraph-wrapper";
import Paragraph from "./motion/paragraph";

export default function Contact() {
  const mediaContact = [
    {
      link: "https://www.linkedin.com/in/raphael-oliveira-santos-18967b225/",
      icon: <LinkedinLogo size={60} />,
      name: "LinkedIn",
    },
    {
      link: "https://github.com/raphaolive",
      icon: <GithubLogo size={60} />,
      name: "Github",
    },
    {
      link: "mailto:7raphaolive@gmail.com",
      icon: <Envelope size={60} />,
      name: "Email",
    },
    {
      link: "https://wa.me/5541995765201",
      icon: <WhatsappLogo size={60} />,
      name: "WhatsApp",
    },
  ];

  return (
    <ParagraphWrapper>
      <Paragraph gap={12}>
        <Heading fontSize="lg">
          Want to build something cool together? Let&apos;s talk!
        </Heading>
        <Text textAlign="justify">{getInTouch}</Text>
      </Paragraph>

      <Paragraph my={12} w="100%" delay={1}>
        <Grid
          w="100%"
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
        >
          {mediaContact.map(({ link, icon, name }) => (
            <GridItem key={name} colSpan={1}>
              <a href={link} target="_blank" rel="noreferrer">
                <VStack>
                  <IconButton variant="ghost" icon={icon} aria-label={name} />
                  <span>{name}</span>
                </VStack>
              </a>
            </GridItem>
          ))}
        </Grid>
      </Paragraph>
    </ParagraphWrapper>
  );
}
