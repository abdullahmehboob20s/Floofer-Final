import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    my: "red",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    greyishBlack: "#1F1D1B",
    bg: "#FFDCAA",
    textColor: "#0F0901",
    sky: "#96DAE7",
    pink: {
      light: "#FFCBD9",
      dark: "#FF8FAF",
    },
  },
  sizes: {
    container: {
      "1440px": "1440px",
    },
  },

  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, sans-serif",
    jost: "Jost, sans-serif",
  },

  // STYLES

  styles: {
    global: (props) => ({
      "html, body": {
        backgroundColor: "bg",
      },
    }),
  },
});

export default theme;
