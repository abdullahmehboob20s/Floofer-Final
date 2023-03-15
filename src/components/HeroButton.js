import { Button } from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";

function HeroButton({
  children,
  bg = "none",
  gradient = "linear-gradient(180deg, #46BEFF -36.05%, #A4CAD1 81.66%)",
  ...props
}) {
  return (
    <Button
      color="black"
      fontWeight={700}
      cursor="pointer"
      height="auto"
      py={{ base: pxToRem(8), lg: pxToRem(10), xl: pxToRem(12) }}
      px={{ base: pxToRem(16), lg: pxToRem(20), xl: pxToRem(36) }}
      border="2px"
      borderRadius={pxToRem(10)}
      borderColor="textColor"
      bg={bg}
      bgGradient={gradient}
      display="flex"
      fontSize={{ base: pxToRem(12), sm: pxToRem(14), xl: pxToRem(16) }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default HeroButton;
