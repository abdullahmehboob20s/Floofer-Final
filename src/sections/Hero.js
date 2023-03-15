import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import HeroButton from "components/HeroButton";
import PreSaleBox from "components/PreSaleBox";
import Title from "components/Title";
import React, { useState } from "react";
import pxToRem from "utils/pxToRem";

function Hero() {
  const [isLargerThanLG, isLargerThanSM] = useMediaQuery([
    "(min-width : 62em)",
    "(min-width : 30em)",
  ]);
  const [noOfLines, setNoOfLines] = useState(3);

  return (
    <Box as="section" pt={{ base: 9, sm: 12, xl: 14 }} pb={14}>
      <ContainerWrapper>
        <Stack direction="row" spacing={pxToRem(80)}>
          <Box flex={1} pt={{ lg: 4, xl: 6 }}>
            <Title
              fontWeight={800}
              variant="46"
              lineHeight={1.4}
              mb={6}
              textTransform="capitalize"
              textAlign={{ base: "center", lg: "left" }}
            >
              Find love for your Floofy {isLargerThanSM && <Box as="br" />}
              friends with Floofer
            </Title>

            <Text
              fontSize={{ base: pxToRem(14), lg: pxToRem(14), xl: "md" }}
              color="textColor"
              lineHeight={1.7}
              textAlign={{ base: "center", lg: "justify" }}
            >
              <Text as="span" noOfLines={isLargerThanLG ? "auto" : noOfLines}>
                Floofer is a cryptocurrency which allows all dog lovers to swipe
                right on their Floof’s potential love and gain utilitarian
                benefits in the real world. Not just love, the ecosystem makes
                up for a strong meet up and socialize community for all the
                furry floofs and their owners. Just Buy the Floofy NFT, Access
                the app, find more floofy friends around you! Use your pass for
                value added services like spas, e commerce, vets etc. in the
                real world!
              </Text>
              {noOfLines !== "auto" && !isLargerThanLG ? (
                <Button
                  display="inline"
                  variant="link"
                  color="inherit"
                  fontSize="inherit"
                  onClick={() =>
                    noOfLines !== "auto"
                      ? setNoOfLines("auto")
                      : setNoOfLines(3)
                  }
                >
                  Read More
                </Button>
              ) : null}
            </Text>

            <Stack
              maxWidth={{ base: pxToRem(200), sm: "unset" }}
              mx={{ base: "auto", sm: "unset" }}
              direction={{ base: "column", sm: "row" }}
              mt={{ base: 8, lg: 10 }}
              spacing={{ base: pxToRem(12), lg: pxToRem(28) }}
              justifyContent={{ base: "center", lg: "flex-start" }}
            >
              <HeroButton>Join community</HeroButton>
              <HeroButton>
                Get {isLargerThanLG && "your"} Floofer coin now!
              </HeroButton>
            </Stack>

            <Image
              src="images/hero-dogs.png"
              position="relative"
              left={{ base: "5%", lg: "0" }}
              width="100%"
            />
          </Box>

          {isLargerThanLG && (
            <Box flex={0.7}>
              <PreSaleBox />
            </Box>
          )}
        </Stack>
      </ContainerWrapper>
    </Box>
  );
}

export default Hero;
