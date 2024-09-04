import { Head, Html, Main, NextScript } from "next/document";

import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/config/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
