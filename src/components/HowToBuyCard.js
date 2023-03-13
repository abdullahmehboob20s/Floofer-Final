import { useTheme } from "@emotion/react";
import React from "react";
import pxToRem from "utils/pxToRem";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

function HowToBuyCard({ desc, img }) {
  const theme = useTheme();

  return (
    <Stack
      spacing={8}
      borderRadius={pxToRem(14)}
      bg="skyLight"
      py={pxToRem(40)}
      px={pxToRem(40)}
      boxShadow={`${pxToRem(10)} ${pxToRem(10)} 0 ${theme.colors.shadow}`}
      border="2px solid"
      borderColor="textColor"
    >
      <Image
        src={img}
        height={pxToRem(160)}
        pointerEvents="none"
        userSelect="none"
      />

      <Text textAlign="center">{desc}</Text>
    </Stack>
  );
}

export default HowToBuyCard;
