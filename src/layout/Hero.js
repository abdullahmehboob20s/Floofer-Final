import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import HeroButton from "components/HeroButton";
import PreSaleBox from "components/PreSaleBox";
import React from "react";
import pxToRem from "utils/pxToRem";

function Hero() {
  return (
    <Box as="section" py={14}>
      <ContainerWrapper>
        <Stack direction="row" spacing={pxToRem(80)}>
          <Box flex={1} pt={6}>
            <Heading
              fontWeight={800}
              fontSize={pxToRem(48)}
              lineHeight={1.4}
              mb={6}
            >
              Find love for your Floofy <br /> friends with Floofer
            </Heading>

            <Text
              fontSize="md"
              color="textColor"
              lineHeight={1.7}
              textAlign="justify"
            >
              Floofer is a cryptocurrency which allows all dog lovers to swipe
              right on their Floof’s potential love and gain utilitarian
              benefits in the real world. Not just love, the ecosystem makes up
              for a strong meet up and socialize community for all the furry
              floofs and their owners. Just Buy the Floofy NFT, Access the app,
              find more floofy friends around you! Use your pass for value added
              services like spas, e commerce, vets etc. in the real world!
            </Text>

            <Stack direction="row" mt={10} spacing={pxToRem(28)}>
              <HeroButton>Join community</HeroButton>
              <HeroButton>Get your Floofer coin now!</HeroButton>
            </Stack>

            <Image src="images/hero-dogs.png" width="100%" />
          </Box>

          <Box flex={0.7}>
            <PreSaleBox />
          </Box>
        </Stack>
      </ContainerWrapper>
    </Box>
  );
}

export default Hero;
