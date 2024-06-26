import { extendTheme } from "native-base";

export const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: "P-T",
        italic: "P-TI",
      },
      200: {
        normal: "P-EL",
        italic: "P-ELI",
      },
      300: {
        normal: "P-L",
        italic: "P-LI",
      },
      400: {
        normal: "P-R",
        italic: "P-I",
      },
      500: {
        normal: "P-M",
        italic: "P-MI",
      },
      600: {
        normal: "P-SB",
        italic: "P-SBI",
      },
      700: {
        normal: "P-BO",
        italic: "P-BOI",
      },
      800: {
        normal: "P-EBO",
        italic: "P-EBOI",
      },
      900: {
        normal: "P-BL",
        italic: "P-BLI",
      },
    },
  },
  colors: {
    primary: "#0052ae",
    secondry: "#ff9320",
    background: "#e6edff",
    text: "#fefefc",
    primaryDark: "#01143f",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Poppins",
  },
});
