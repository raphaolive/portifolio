// lib/fonts.ts
import { M_PLUS_Rounded_1c } from "next/font/google";

const m_plus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  display: "fallback",
  weight: ["100", "500", "800"],
  variable: "--font-mplus"
});

export const fonts = {
  m_plus,
};
