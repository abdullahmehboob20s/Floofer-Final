import { Box, Grid } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import RoadmapCard from "components/RoadmapCard";
import Title from "components/Title";
import React from "react";

function Roadmap() {
  return (
    <Box as="section" py={24} bg="sky">
      <ContainerWrapper>
        <Title>Roadmap</Title>

        <Grid templateColumns="repeat(4,1fr)">
          <RoadmapCard />
          <RoadmapCard />
          <RoadmapCard />
          <RoadmapCard />
        </Grid>
      </ContainerWrapper>
    </Box>
  );
}

export default Roadmap;
