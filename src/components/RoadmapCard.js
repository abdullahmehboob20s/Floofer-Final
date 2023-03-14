import React from "react";
import {
  Box,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import pxToRem from "utils/pxToRem";
import Title from "./Title";
import pxToEm from "utils/pxToEm";
import { FaStar } from "react-icons/fa";

function RoadmapCard({ points, title }) {
  return (
    <Stack spacing={6}>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Box
          minW={pxToEm(160)}
          w={pxToEm(160)}
          fontSize="90%"
          position="relative"
        >
          <Image
            src="images/roadmap-year-ramp.svg"
            width="100%"
            userSelect="none"
            pointerEvents="none"
          />

          <Title
            variant="26"
            width="100%"
            position="absolute"
            transform="auto"
            top="42%"
            translateY="-50%"
            fontSize={pxToEm(22)}
          >
            {title}
          </Title>
        </Box>
        <Image
          src="images/pet-foots-horizontal-line.svg"
          width="100%"
          userSelect="none"
          pointerEvents="none"
        />
      </Stack>

      {points && (
        <List spacing={3}>
          {points.map((point, index) => (
            <ListItem key={index}>
              <ListIcon
                position="relative"
                fontSize={pxToRem(14)}
                bottom={pxToEm(6)}
                color="textColor"
                as={FaStar}
                marginRight={pxToEm(14)}
              />

              {point}
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
}

export default RoadmapCard;
