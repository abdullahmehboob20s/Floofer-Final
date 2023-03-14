import { Box, Grid, Image } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import RoadmapCard from "components/RoadmapCard";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";

function Roadmap() {
  return (
    <Box as="section" py={24} bg="sky" position="relative" zIndex={10}>
      <ContainerWrapper>
        <Title mb={0}>Roadmap</Title>

        <Image
          src="images/roadmap-dog.svg"
          maxWidth={pxToRem(210)}
          mb={4}
          mt={-24}
          display="block"
        />

        <Grid templateColumns="repeat(4,1fr)" gap={7} position="relative">
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
