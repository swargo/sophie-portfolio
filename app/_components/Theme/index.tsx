import { ThemeConfig } from "../Theme/types";

export const theme: ThemeConfig = {
  name: "Ecommerce Template",
  color: {
    primary: "#deebf2",
    secondary: "#EED9CB",
    tertiary: "#4B6B94",
    darkAccent: "#070D06",
    lightAccent: "#f0f6f9",
    bk: "#000",
    wh: "#FFF",
  },
  font: {
    primary: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400,
    },
  },
  fontWeight: { regular: 400, medium: 500, semiBold: 600, bold: 800 },
  fontSize: {
    sm: "12px",
    md: "14px",
    lg: "18px",
    xl: "24px",
    xxl: "32px",
    "3xl": "48px",
    hero: "60px",
  },
  space: ["0px", "4px", "8px", "12px", "16px", "24px", "32px", "36px", "48px"],
};

export type { ThemeConfig } from "../Theme/types";
