import React from "react";
import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import pxToRem from "utils/pxToRem";
import Title from "./Title";
import pxToEm from "utils/pxToEm";

function RoadmapCard() {
  return (
    <Stack spacing={8}>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Box w={pxToEm(160)} fontSize="100%" position="relative">
          <Image src="images/roadmap-year-ramp.svg" width="100%" />

          <Title
            variant="26"
            width="100%"
            position="absolute"
            transform="auto"
            top="42%"
            translateY="-50%"
            fontSize={pxToEm(22)}
          >
            Q1 2023
          </Title>
        </Box>
      </Stack>
    </Stack>
  );
}

export default RoadmapCard;
