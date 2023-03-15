import { Box, Heading, Image, Text } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import Title from "components/Title";
import useBreakpoints from "hooks/useBreakpoints";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

function Tokenomics() {
  const { isLargerThanMD } = useBreakpoints();

  return (
    <Box py={{ base: 16, lg: 20, xl: 24 }} position="relative" zIndex={10}>
      <Image
        src="images/pet-foots.png"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex={-1}
        objectFit="cover"
      />

      <ContainerWrapper>
        <Box mb={14}>
          <Title mb={8}>Floofynomics</Title>

          <Text
            textAlign="center"
            lineHeight={1.8}
            fontSize={{ base: pxToRem(14), xl: pxToRem(16) }}
          >
            In total the maximum supply of Floofer will be 1 trillion
            (1,000,000,000,000). <br /> There will be 35 billion
            (35,000,000,000) tokens in circulation at the token generation
            event, with 200 Million unminted and reserved for exchange listings.
            There will be 300 Million which will become available to be minted
            over 10 years to power the Floofer project.
          </Text>
        </Box>

        <Heading
          fontSize={{ base: pxToRem(14), md: pxToRem(18), xl: pxToRem(20) }}
          fontWeight={900}
          textAlign="center"
        >
          Overall Pool
        </Heading>

        <Box
          fontSize={{ base: "50%", md: "70%", xl: "100%" }}
          maxWidth={pxToEm(277)}
          mx="auto"
          position="relative"
        >
          <Image src="images/bone.svg" width="100%" />

          <Heading
            fontSize={pxToEm(28)}
            fontWeight={800}
            color="orange.pure"
            position="absolute"
            top="46%"
            left="0%"
            transform="auto"
            translateY="-50%"
            width="100%"
            textAlign="center"
          >
            1 Trillion
          </Heading>
        </Box>

        <Image
          src={
            isLargerThanMD
              ? "images/tokenmics-chart.svg"
              : "images/tokenmics-chart-mobile.svg"
          }
          mt={{ base: pxToRem(30), md: 0 }}
          width="100%"
        />
      </ContainerWrapper>
    </Box>
  );
}

export default Tokenomics;
