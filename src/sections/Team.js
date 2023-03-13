import { Box, Grid, Image } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import TeamCard from "components/TeamCard";
import Title from "components/Title";
import React from "react";

const data = [
  { img: "images/team/boss.svg", name: "Floofy Boss" },
  { img: "images/team/techie.svg", name: "Techie Floof" },
  { img: "images/team/design.svg", name: "Design Floof" },
  { img: "images/team/social.svg", name: "Social Floof" },
  { img: "images/team/dev.svg", name: "Dev Floof" },
  { img: "images/team/financial.svg", name: "Financial Floof" },
];

function Team() {
  return (
    <Box as="section" py={24} position="relative" zIndex={10}>
      <ContainerWrapper>
        <Title>Floofer Team</Title>

        <Grid templateColumns="repeat(3,1fr)" columnGap={6} rowGap={14}>
          {data.map((item, index) => (
            <TeamCard key={index} img={item.img} name={item.name} />
          ))}
        </Grid>
      </ContainerWrapper>

      <Image
        src="images/team-dots.svg"
        width="50%"
        position="absolute"
        right="0"
        top="-40%"
        zIndex={-1}
      />
    </Box>
  );
}

export default Team;
