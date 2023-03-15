import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import PreSaleBox from "components/PreSaleBox";
import Title from "components/Title";
import useBreakpoints from "hooks/useBreakpoints";
import React from "react";
import pxToRem from "utils/pxToRem";

const Foot = () => {
  return (
    <Image
      src="images/foot.svg"
      w={{ base: pxToRem(22), lg: pxToRem(26), xl: pxToRem(38) }}
    />
  );
};

function FlooferBar() {
  const { isLargerThanLG } = useBreakpoints();

  return (
    <>
      <Box
        as="section"
        rotate={-2}
        transform="auto"
        position="relative"
        zIndex={10}
        h={{ base: pxToRem(60), lg: pxToRem(70), xl: pxToRem(100) }}
        display="flex"
        alignItems="center"
        mb={{ base: pxToRem(0), lg: pxToRem(-50) }}
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
            spacing={{ base: 4, lg: 6, xl: 14 }}
          >
            <Title
              variant="24"
              whiteSpace="nowrap"
              color="white"
              fontWeight={800}
              wordBreak="keep-all"
              mb={0}
            >
              Floofer dating
            </Title>
            <Foot />
            <Title
              variant="24"
              whiteSpace="nowrap"
              color="white"
              fontWeight={800}
              wordBreak="keep-all"
              mb={0}
            >
              Floofer health profile
            </Title>
            <Foot />
            <Title
              variant="24"
              whiteSpace="nowrap"
              color="white"
              fontWeight={800}
              wordBreak="keep-all"
              mb={0}
            >
              The Love NFT
            </Title>
            <Foot />
            <Title
              variant="24"
              whiteSpace="nowrap"
              color="white"
              fontWeight={800}
              wordBreak="keep-all"
              mb={0}
            >
              The Floofy Kennel
            </Title>
          </Stack>
        </ContainerWrapper>
      </Box>

      {!isLargerThanLG && (
        <ContainerWrapper>
          <Box pt={14} pb={24}>
            <PreSaleBox />
          </Box>
        </ContainerWrapper>
      )}
    </>
  );
}

export default FlooferBar;
