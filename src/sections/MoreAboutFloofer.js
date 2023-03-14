import { Box, Image, Stack, Text } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import HeroButton from "components/HeroButton";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";

function MoreAboutFloofer() {
  return (
    <Box
      as="section"
      pt={24}
      pb={48}
      position="relative"
      zIndex={10}
      overflow="hidden"
    >
      <ContainerWrapper>
        <Stack alignItems="center" spacing="none">
          <Title mb={6}>Wanna Know More About Floofer?</Title>

          <Text maxW={pxToRem(600)} textAlign="center" lineHeight={1.8}>
            Read our detailed documentation containing resources, FAQs and
            explanations to suit your needs.
          </Text>

          <HeroButton mt={8} gradient="none" bg="white">
            Read Whitepaper
          </HeroButton>
        </Stack>
      </ContainerWrapper>

      <Image
        src="images/about-floofler-bg.png"
        width="100%"
        position="absolute"
        left={0}
        bottom={0}
        zIndex={-1}
        pointerEvents="none"
        userSelect="none"
      />

      <Image
        src="images/bones.png"
        width="100%"
        position="absolute"
        left={0}
        bottom={0}
        zIndex={-2}
        pointerEvents="none"
        userSelect="none"
      />
    </Box>
  );
}

export default MoreAboutFloofer;
