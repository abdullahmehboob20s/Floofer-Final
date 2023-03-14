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
    <Box as="section" bgColor="skySharp" pt={32} pb={24}>
      <ContainerWrapper>
        <Title>Featured In</Title>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            my: -5,
            mx: -5,
          }}
        >
          {featuredImgs.map((item, i) => (
            <Image
              src={item.img}
              key={i}
              height={pxToRem(60)}
              sx={{ m: 5 }}
              alt=""
            />
          ))}
        </Box>
      </ContainerWrapper>
    </Box>
  );
}

export default Featured;
