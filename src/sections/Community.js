import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ContainerWrapper from "components/ContainerWrapper";
import JoinCommunityLink from "components/JoinCommunityLink";
import Title from "components/Title";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

function Community() {
  return (
    <Box
      as="section"
      py={{ base: 16, xl: 24 }}
      bg="sky2"
      position="relative"
      zIndex={10}
    >
      <ContainerWrapper variant="1000px">
        <Box
          maxW={pxToEm(800)}
          mx="auto"
          fontSize={{ base: "40%", md: "60%", xl: "90%" }}
          position="relative"
          mb={{ base: 8, xl: 12 }}
        >
          <Image
            src="images/community-dogs.svg"
            w="100%"
            userSelect="none"
            pointerEvents="none"
          />

          <Heading
            fontSize={pxToEm(50)}
            w="100%"
            textAlign="center"
            fontWeight={900}
            position="absolute"
            bottom="24%"
          >
            Floofer Community
          </Heading>
        </Box>

        <Text
          textAlign="center"
          mb={{ base: 10, md: 14, xl: 16 }}
          lineHeight={1.8}
          fontSize={{ base: pxToRem(14), xl: pxToRem(16) }}
        >
          We are encouraging new talented people to join our community, as this
          is the most important driving force behind Floofer’s success. Being in
          the crypto space is exciting, and there is a lot of potential here.
          Our numbers are increasing by the hour as more people learn about
          Floofer. Everyone is important in our community, and our team is
          always happy to help if you have any questions. You can reach us
          through a variety of channels on telegram, Instagram, medium , twitter
          etc.
        </Text>

        <Grid
          templateColumns={{ base: "repeat(2,1fr)", sm: "repeat(3,1fr)" }}
          gap={{ base: 3, sm: 6, md: 10 }}
        >
          <JoinCommunityLink
            title="Twitter"
            iconImg="images/icons/twitter.svg"
          />
          <JoinCommunityLink
            title="Discord"
            iconImg="images/icons/discord.svg"
          />
          <JoinCommunityLink
            title="Telegram"
            iconImg="images/icons/telegram.svg"
            gridColumn={{ base: "1/-1", sm: "unset" }}
          />
        </Grid>
      </ContainerWrapper>

      <Image
        src="images/bones.png"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex={-1}
        objectFit="cover"
      />
    </Box>
  );
}

export default Community;
