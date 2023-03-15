import { Box, Grid, Image } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import RoadmapCard from "components/RoadmapCard";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";

function Roadmap() {
  return (
    <Box
      as="section"
      py={{ base: 16, sm: 20, xl: 24 }}
      bg="sky"
      position="relative"
      zIndex={10}
    >
      <ContainerWrapper>
        <Title mb={0}>Roadmap</Title>

        <Image
          src="images/roadmap-dog.svg"
          maxWidth={{
            base: pxToRem(80),
            sm: pxToRem(100),
            md: pxToRem(150),
            xl: pxToRem(180),
          }}
          mb={4}
          mt={{ base: -14, md: -28 }}
          display="block"
        />

        <Grid
          templateColumns={{ sm: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
          gap={7}
          position="relative"
          maxWidth={{ base: pxToRem(500), lg: "none" }}
          mx={{ base: "auto", lg: "none" }}
        >
          <RoadmapCard
            title="Q1 2023"
            points={[
              "Floofer coin launch",
              "Presale launch of the token",
              "Website Launch",
              "Full Security Auditã",
              "Influencer Marketing Drive",
            ]}
          />

          <RoadmapCard
            title="Q2 2023"
            points={[
              "Floofer coin launch",
              "Presale launch of the token",
              "Website Launch",
              "Full Security Auditã",
              "Influencer Marketing Drive",
            ]}
          />

          <RoadmapCard
            title="Q3 2023"
            points={[
              "Floofer coin launch",
              "Presale launch of the token",
              "Website Launch",
              "Full Security Auditã",
              "Influencer Marketing Drive",
            ]}
          />

          <RoadmapCard
            title="Q4 2023"
            points={[
              "Floofer coin launch",
              "Presale launch of the token",
              "Website Launch",
              "Full Security Auditã",
              "Influencer Marketing Drive",
            ]}
          />
        </Grid>
      </ContainerWrapper>

      <Image
        src="images/pet-foots.png"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
        objectFit="cover"
      />
    </Box>
  );
}

export default Roadmap;
