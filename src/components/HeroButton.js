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
      py={pxToRem(22)}
      px={pxToRem(36)}
      border="2px"
      borderRadius={pxToRem(10)}
      borderColor="textColor"
      bg={bg}
      bgGradient={gradient}
      display="flex"
      {...props}
    >
      {children}
    </Button>
  );
}

export default HeroButton;
