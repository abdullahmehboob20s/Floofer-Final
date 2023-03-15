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
import useBreakpoints from "hooks/useBreakpoints";

function RoadmapCard({ points, title }) {
  const { isLargerThanSM } = useBreakpoints();

  return (
    <Stack spacing={6}>
      {isLargerThanSM && (
        <Stack direction="row" alignItems="center" spacing={4}>
          <Box
            minW={pxToEm(160)}
            w={pxToEm(160)}
            fontSize={{ base: "70%", xl: "90%" }}
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
      )}

      <Stack direction="row" spacing={{ base: pxToRem(12), sm: 0 }}>
        {!isLargerThanSM && (
          <Stack direction="column" alignItems="center" spacing={4}>
            <Box
              minW={pxToEm(160)}
              w={pxToEm(160)}
              fontSize={{ base: "54%", sm: "70%", xl: "90%" }}
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
              src="images/pet-foots-vertical-line.svg"
              width="20%"
              userSelect="none"
              pointerEvents="none"
            />
          </Stack>
        )}

        {points && (
          <List flex={1} pt={{ base: pxToRem(20), sm: 0 }} spacing={3}>
            {points.map((point, index) => (
              <ListItem
                key={index}
                fontSize={{
                  base: pxToRem(13),
                  sm: pxToRem(14),
                  xl: pxToRem(16),
                }}
              >
                <ListIcon
                  position="relative"
                  fontSize={pxToEm(14)}
                  bottom={pxToEm(6)}
                  color="textColor"
                  opacity={{ base: 0.6, sm: 1 }}
                  as={FaStar}
                  marginRight={{ base: pxToEm(10), sm: pxToEm(14) }}
                />

                {point}
              </ListItem>
            ))}
          </List>
        )}
      </Stack>
    </Stack>
  );
}

export default RoadmapCard;
