import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";

const featuredImgs = [
  { img: "images/featured/mint.svg" },
  { img: "images/featured/finaria.svg" },
  { img: "images/featured/krypto.svg" },
  { img: "images/featured/coin.svg" },
  { img: "images/featured/b2c.svg" },
  { img: "images/featured/theeco.svg" },
  { img: "images/featured/crypto.svg" },
];

function Featured() {
  return (
    <Box
      as="section"
      bgColor="skySharp"
      pt={{ base: 12, sm: 14, lg: 28, xl: 32 }}
      pb={{ base: 12, sm: 14, lg: 20, xl: 24 }}
      borderRadius={{ base: pxToRem(20), lg: 0 }}
    >
      <ContainerWrapper>
        <Title mb={{ base: 10, xl: 16 }}>Featured In</Title>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            my: { base: -3, xl: -5 },
            mx: { base: -3, xl: -5 },
          }}
        >
          {featuredImgs.map((item, i) => (
            <Image
              src={item.img}
              key={i}
              height={{ base: pxToRem(24), sm: pxToRem(40), xl: pxToRem(60) }}
              sx={{ m: { base: 3, xl: 5 } }}
              alt=""
            />
          ))}
        </Box>
      </ContainerWrapper>
    </Box>
  );
}

export default Featured;
