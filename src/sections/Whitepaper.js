import { Box, Button, color, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import ContainerWrapper from "components/ContainerWrapper";
import Title from "components/Title";
import useBreakpoints from "hooks/useBreakpoints";
import React from "react";
import pxToRem from "utils/pxToRem";

const DesktopVersion = () => {
  const theme = useTheme();

  return (
    <Grid templateColumns="1fr 1fr" gap={10} alignItems="center">
      <Stack direction="row" justifyContent="center">
        <Box
          maxWidth={pxToRem(445)}
          border="2px solid black"
          borderRadius={pxToRem(30)}
          py={{ base: pxToRem(64), xl: pxToRem(74) }}
          px={pxToRem(22)}
          bg="green.light"
          shadow={`-1rem -1rem 0 ${theme.colors.green.shadow}`}
        >
          <Title mb={{ base: 6, xl: 7 }}>Whitepaper</Title>

          <Text
            textAlign="center"
            fontSize={{ base: pxToRem(14), xl: pxToRem(16) }}
            mb={10}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem ipsum.{" "}
          </Text>

          <Button
            bg="skySharp"
            fontSize={{ base: pxToRem(16), xl: pxToRem(20) }}
            color="white"
            fontWeight={600}
            py={{ base: 4, xl: 6 }}
            px={{ base: 8, xl: 10 }}
            borderRadius={pxToRem(50)}
            border="2px solid black"
            width="fit-content"
            mx="auto"
            display="flex"
            shadowColor="black"
          >
            Download
          </Button>
        </Box>
      </Stack>

      <Box>
        <Image src="images/dog-family.svg" width="100%" />
      </Box>
    </Grid>
  );
};

function Whitepaper() {
  const { isLargerThanLG } = useBreakpoints();

  return (
    <Box as="section" py={{ base: 12, lg: 24 }} bg="green.bg">
      <ContainerWrapper>
        {isLargerThanLG && <DesktopVersion />}

        {!isLargerThanLG && (
          <Box maxWidth={pxToRem(400)} mx="auto">
            <Title mb={9}>Whitepaper</Title>

            <Image src="images/dog-family.svg" width="100%" mb={8} />

            <Text
              textAlign="center"
              fontSize={{ base: pxToRem(14), xl: pxToRem(16) }}
              mb={8}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem ipsum.{" "}
            </Text>

            <Button
              bg="skySharp"
              fontSize={{ base: pxToRem(14), sm: pxToRem(16), xl: pxToRem(20) }}
              color="white"
              fontWeight={600}
              height="auto"
              py={{ base: 2, md: 4, xl: 6 }}
              px={{ base: 8, xl: 10 }}
              borderRadius={pxToRem(50)}
              border="2px solid black"
              width="fit-content"
              mx="auto"
              display="flex"
              shadowColor="black"
            >
              Download
            </Button>
          </Box>
        )}
      </ContainerWrapper>
    </Box>
  );
}

export default Whitepaper;
