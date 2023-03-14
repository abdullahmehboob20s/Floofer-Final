import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import React from "react";
import pxToRem from "utils/pxToRem";

function FlooferBar() {
  return (
    <Box
      as="section"
      rotate={-2}
      transform="auto"
      position="relative"
      zIndex={10}
      h={pxToRem(100)}
      display="flex"
      alignItems="center"
      mb={pxToRem(-50)}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "120%",
        height: "100%",
        bg: "black",
        zIndex: -1,
      }}
    >
      <ContainerWrapper overflow="hidden">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={14}
        >
          <Heading
            fontSize={pxToRem(24)}
            whiteSpace="nowrap"
            color="white"
            fontWeight={800}
            wordBreak="keep-all"
          >
            Floofer dating
          </Heading>
          <Image src="images/foot.svg" w={pxToRem(38)} />
          <Heading
            fontSize={pxToRem(24)}
            whiteSpace="nowrap"
            color="white"
            fontWeight={800}
            wordBreak="keep-all"
          >
            Floofer health profile
          </Heading>
          <Image src="images/foot.svg" w={pxToRem(38)} />
          <Heading
            fontSize={pxToRem(24)}
            whiteSpace="nowrap"
            color="white"
            fontWeight={800}
            wordBreak="keep-all"
          >
            The Love NFT
          </Heading>
          <Image src="images/foot.svg" w={pxToRem(38)} />
          <Heading
            fontSize={pxToRem(24)}
            whiteSpace="nowrap"
            color="white"
            fontWeight={800}
            wordBreak="keep-all"
          >
            The Floofy Kennel
          </Heading>
        </Stack>
      </ContainerWrapper>
    </Box>
  );
}

export default FlooferBar;
