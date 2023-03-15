import { Box, Grid, Image } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import HowToBuyCard from "components/HowToBuyCard";
import Title from "components/Title";
import React from "react";

function HowToBuy() {
  return (
    <Box
      as="section"
      py={{ base: 16, xl: 24 }}
      bg="sky2"
      position="relative"
      zIndex={20}
    >
      <ContainerWrapper>
        <Title mb={{ base: 14, sm: 16, xl: 20 }}>How To Buy</Title>

        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(3,1fr)" }}
          gap={8}
        >
          <HowToBuyCard
            img="images/how-to-buy/one.svg"
            desc="In order to participate in the Floofer token presale, you will first need to create an Ethereum wallet that supports ERC-20 tokens if you’re on desktop then we recommend Metamask, with Trust Wallet being the recommended wallet for mobile users."
          />
          <HowToBuyCard
            img="images/how-to-buy/two.svg"
            desc="You can buy $floofer using ETH on Etherium Chain. Once you ve connected your wallet, hit Buy with ETH When you click on this button, you will be prompted to enter the number of $Floofer tokens you would like to purchase. After Purchase Tokens can be claimed after presale ends."
          />
          <HowToBuyCard
            img="images/how-to-buy/three.svg"
            desc="You can also buy $floofer using USDT on Ethereum Chain. Simply connect your wallet, hit Buy with USDT and specify how many $floofer to purchase. Make sure you have enough ETH in your wallet to cover gas fees. Tokens can be claimed after presale ends."
          />
        </Grid>
      </ContainerWrapper>

      <Image
        src="images/how-to-buy-bg.svg"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-1}
        pointerEvents="none"
        userSelect="none"
      />
    </Box>
  );
}

export default HowToBuy;
