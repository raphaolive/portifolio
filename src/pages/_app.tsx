import { fonts } from "@/config/fonts";
import theme from "@/config/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.m_plus.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
