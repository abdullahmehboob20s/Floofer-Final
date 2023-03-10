import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";
import ContainerWrapper from "./ContainerWrapper";

function Navbar() {
  return (
    <Box
      as="nav"
      sx={{
        bg: "greyishBlack",
        color: "white",
        h: pxToRem(80),
        display: "flex",
        alignItems: "center",
      }}
    >
      <ContainerWrapper>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" spacing={4}>
            <Image src="images/logo.svg" boxSize={pxToRem(60)} />
            <Heading fontFamily="jost" fontWeight={900} fontSize={pxToRem(26)}>
              Floofer
            </Heading>
          </Stack>

          <Stack direction="row" spacing={10} alignItems="center">
            <Text fontSize="lg" casing="uppercase" fontWeight={700}>
              HOME
            </Text>
            <Text fontSize="lg" casing="uppercase" fontWeight={700}>
              Roadmap
            </Text>
            <Text fontSize="lg" casing="uppercase" fontWeight={700}>
              Whitepaper
            </Text>
            <Text fontSize="lg" casing="uppercase" fontWeight={700}>
              COMMUNITY
            </Text>

            <Button
              sx={{
                bg: "white",
                color: "black",
                fontWeight: 700,
                fontSize: pxToRem(16),
                borderRadius: pxToRem(8),
                px: pxToRem(20),
                py: pxToRem(8),
                height: "auto",
              }}
            >
              Home
            </Button>
          </Stack>
        </Stack>
      </ContainerWrapper>
    </Box>
  );
}

export default Navbar;
