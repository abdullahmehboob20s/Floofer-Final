import { Box, Grid, Image, Stack, Text, useToken } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import pxToRem from "utils/pxToRem";

function ProductCard({ title, img, productDetail }) {
  const theme = useTheme();

  return (
    <Stack spacing={4}>
      <Text
        fontSize={pxToRem(24)}
        textTransform="uppercase"
        fontWeight={700}
        textAlign="center"
      >
        {title}
      </Text>

      <Grid
        flex={1}
        gap={14}
        templateColumns="1fr 1fr"
        bgColor="white"
        borderRadius={pxToRem(30)}
        py={pxToRem(40)}
        px={pxToRem(32)}
        border="1px solid black"
        boxShadow={`10px 10px 0 ${theme.colors.shadow}`}
        alignItems="center"
      >
        <Box>
          <Text fontSize={pxToRem(18)} fontWeight={600}>
            {productDetail}
          </Text>
        </Box>
        <Box>
          <Image src={img} width="100%" height={pxToRem(140)} />
        </Box>
      </Grid>
    </Stack>
  );
}

export default ProductCard;
