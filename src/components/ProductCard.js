import { Box, Grid, Image, Stack, Text, useToken } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

function ProductCard({ title, img, productDetail }) {
  const theme = useTheme();

  return (
    <Stack spacing={{ base: 3, md: 4 }} fontSize={{ base: "78%", xl: "100%" }}>
      <Text
        fontSize={{ base: pxToEm(20), sm: pxToEm(24) }}
        textTransform="uppercase"
        fontWeight={700}
        textAlign={{ base: "left", sm: "center" }}
        pl={{ base: pxToEm(24), sm: 0 }}
      >
        {title}
      </Text>

      <Grid
        flex={1}
        gap={{ base: 6, md: 14 }}
        templateColumns={{ base: `1fr ${pxToEm(150)}`, md: "1fr 1fr" }}
        bgColor="white"
        borderRadius={{ base: pxToEm(20), sm: pxToEm(30) }}
        py={{ base: pxToEm(30), sm: pxToEm(40) }}
        px={pxToEm(32)}
        border="1px solid black"
        boxShadow={`${pxToEm(10)} ${pxToEm(10)} 0 ${theme.colors.shadow}`}
        alignItems="center"
      >
        <Box>
          <Text
            fontSize={{ base: pxToEm(16), sm: pxToEm(18) }}
            fontWeight={600}
          >
            {productDetail}
          </Text>
        </Box>
        <Box>
          <Image src={img} width="100%" height={pxToEm(140)} />
        </Box>
      </Grid>
    </Stack>
  );
}

export default ProductCard;
