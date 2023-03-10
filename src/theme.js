import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const Button = {
  variants: {
    "with-hover": (props) => {
      const { movement = "-.2em", shadowColor = "#0E879E" } = props;

      return {
        transition: "all .2s ease",
        _hover: {
          transform: `translateY(${movement})`,
          boxShadow: `.3em .3em 0 ${shadowColor}`,
        },
      };
    },
  },
  defaultProps: {
    variant: "with-hover",
  },
};

const theme = extendTheme({
  components: {
    Button,
  },
  colors: {
    my: "red",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    greyishBlack: "#1F1D1B",
    bg: "#FFDCAA",
    textColor: "#0F0901",
    sky: "#96DAE7",
    skySharp: "#01A0BE",

    pink: {
      light: "#FFCBD9",
      dark: "#FF8FAF",
    },
    shadow: "#0E879E",
    green: {
      bg: "#B8F0AB",
      light: "#EFFFEB",
      shadow: "#549B44",
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
        color: "textColor",
      },
    }),
  },
});

export default theme;
