/* theme.ts */
import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  colors: {
    black: {
      100: "#ECE6E1",
      800: "#212020",
      900: "#111111",
    },
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "body",
        color: mode("black.800", "black.100")(props),
        bg: mode("black.100", "black.800")(props),
        lineHeight: "base",
      },
      "&::-webkit-scrollbar": {
        width: "1vh",
        background: mode("black.100", "black.800")(props),
      },
      "&::-webkit-scrollbar-thumb": {
        background: "black.100",
        borderRadius: "30px",
      },
    }),
  },

  fonts: {
    heading: "var(--font-mplus)",
    body: "var(--font-mplus)",
  },

  initialColorMode: "dark",
  useSystemColorMode: true,
});

export default theme;