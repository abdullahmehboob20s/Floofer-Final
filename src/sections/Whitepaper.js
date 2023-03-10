import { Box, Button, color, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import ContainerWrapper from "components/ContainerWrapper";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";

function Whitepaper() {
  const theme = useTheme();

  return (
    <Box as="section" py={24} bg="green.bg">
      <ContainerWrapper>
        <Grid templateColumns="1fr 1fr" gap={10} alignItems="center">
          <Stack direction="row" justifyContent="center">
            <Box
              maxWidth={pxToRem(445)}
              border="2px solid black"
              borderRadius={pxToRem(30)}
              py={pxToRem(74)}
              px={pxToRem(22)}
              bg="green.light"
              shadow={`-1rem -1rem 0 ${theme.colors.green.shadow}`}
            >
              <Title mb={7}>Whitepaper</Title>

              <Text textAlign="center" fontSize={pxToRem(16)} mb={10}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem ipsum.{" "}
              </Text>

              <Button
                bg="skySharp"
                fontSize={pxToRem(20)}
                color="white"
                fontWeight={600}
                py={6}
                px={10}
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
      </ContainerWrapper>
    </Box>
  );
}

export default Whitepaper;
