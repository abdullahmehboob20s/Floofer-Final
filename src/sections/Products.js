import { Box, Button, Grid } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import ProductCard from "components/ProductCard";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";

function Products() {
  return (
    <Box as="section" py={{ base: 16, md: 20, xl: 24 }}>
      <ContainerWrapper>
        <Title mb={{ base: 12, md: 16, xl: 20 }}>Products</Title>

        <Grid
          maxW={{ base: pxToRem(500), lg: "none" }}
          mx={{ base: "auto", lg: "none" }}
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          rowGap={{ base: 10, sm: 12, xl: 16 }}
          columnGap={10}
        >
          <ProductCard
            title="The Love NFT"
            img="images/products/1.svg"
            productDetail="Floofer NFT collectibles are a set of unique 10000 NFTs which will be launched on our marketplace."
          />
          <ProductCard
            title="FLOOFER DATING"
            img="images/products/2.svg"
            productDetail="Floofer dating is the first NFT-based dog dating service, where dogs can find their match by swiping profiles"
          />
          <ProductCard
            title="Floofer MALL"
            img="images/products/3.svg"
            productDetail="the ultimate shopping app for dog lovers! With Floofer Mall."
          />
          <ProductCard
            title="Floofer Mini game"
            img="images/products/4.svg"
            productDetail="Floofer intends on building a simple 2D game where users can further benefit from Play to Earn models."
          />
          <ProductCard
            title="Floofer PET CARE"
            img="images/products/5.svg"
            productDetail="A range of professional pet care services."
          />
          <ProductCard
            title="Floofer STAKING"
            img="images/products/6.svg"
            productDetail="A staking program that allows users to earn rewards"
          />
        </Grid>
      </ContainerWrapper>
    </Box>
  );
}

export default Products;
