import { useTheme } from "@emotion/react";
import React from "react";
import pxToRem from "utils/pxToRem";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import pxToEm from "utils/pxToEm";

function HowToBuyCard({ desc, img }) {
  const theme = useTheme();

  return (
    <Stack
      spacing={8}
      borderRadius={pxToEm(14)}
      bg="skyLight"
      py={pxToEm(40)}
      px={pxToEm(40)}
      boxShadow={`${pxToEm(10)} ${pxToEm(10)} 0 ${theme.colors.shadow}`}
      border="2px solid"
      borderColor="textColor"
      fontSize={{ base: "80%", xl: "100%" }}
    >
      <Image
        src={img}
        height={{ base: pxToEm(120), sm: pxToEm(160) }}
        pointerEvents="none"
        userSelect="none"
      />

      <Text textAlign="center" fontSize={pxToEm(16)}>
        {desc}
      </Text>
    </Stack>
  );
}

export default HowToBuyCard;
