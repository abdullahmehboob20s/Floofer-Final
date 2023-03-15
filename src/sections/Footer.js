import { Box, Grid, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";

const FooterLink = ({ children }) => {
  return (
    <Link
      color="white"
      opacity={0.8}
      width="fit-content"
      display="block"
      fontSize={{ base: pxToRem(14), xl: pxToRem(16) }}
    >
      {children}
    </Link>
  );
};

function Footer() {
  return (
    <Box
      pt={{ base: 12, lg: 14, xl: 20 }}
      pb={0}
      as="section"
      bg="nightBlue"
      borderTopRadius={pxToRem(20)}
      mt={pxToRem(-20)}
      zIndex={20}
      position="relative"
    >
      <ContainerWrapper>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr .5fr" }}
          gap={{ base: pxToRem(50), lg: pxToRem(100) }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 5, xl: 8 }}
          >
            <Box>
              <Image
                src="images/logo.svg"
                minW={{ base: pxToRem(60), xl: pxToRem(110) }}
              />
            </Box>
            <Box>
              <Title
                mb={{ base: 4, lg: 6 }}
                variant={28}
                fontWeight={700}
                textAlign="left"
                color="white"
              >
                About floofer
              </Title>
              <Text
                color="white"
                opacity={0.8}
                lineHeight={1.8}
                maxW={{ base: "100%", lg: "80%" }}
                fontSize={{ base: pxToRem(14), xl: pxToRem(16) }}
              >
                Floofer is a cryptocurrency which allows all dog lovers to swipe
                right on their Floof’s potential love and gain utilitarian
                benefits in the real world.
              </Text>
            </Box>
          </Stack>

          <Stack spacing={6}>
            <Title
              variant={28}
              fontWeight={700}
              textAlign="left"
              color="white"
              mb={0}
            >
              Links
            </Title>

            <Stack direction="row" spacing={pxToRem(60)}>
              <Stack spacing={3}>
                <FooterLink>HOME</FooterLink>
                <FooterLink>PRE SALE</FooterLink>
                <FooterLink>HOW TO BUY</FooterLink>
                <FooterLink>ROADMAP</FooterLink>
                <FooterLink>FEATURES</FooterLink>
              </Stack>
              <Stack spacing={3}>
                <FooterLink>TOCONOMICS</FooterLink>
                <FooterLink>TEAM</FooterLink>
                <FooterLink>COMMUNITY</FooterLink>
                <FooterLink>WHITEPAPER</FooterLink>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </ContainerWrapper>

      <Box
        py={{ base: 6, xl: 10 }}
        borderTop="2px solid rgba(255,255,255,.4)"
        mt={{ base: 16, xl: 20 }}
      >
        <ContainerWrapper>
          <Text
            textAlign="center"
            color="white"
            opacity={0.6}
            fontSize={{ base: pxToRem(14), xl: pxToRem(16) }}
          >
            © Copyright 2023 floofer. All rights reserved.
          </Text>
        </ContainerWrapper>
      </Box>
    </Box>
  );
}

export default Footer;
