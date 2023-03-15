import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

function TeamCard({ img, name }) {
  const theme = useTheme();

  return (
    <Stack
      spacing={{ base: 5, sm: 8 }}
      px={{ base: pxToEm(16), sm: pxToEm(26) }}
      pt={{ base: pxToEm(16), sm: pxToEm(26) }}
      pb={{ base: pxToEm(30), sm: pxToEm(40) }}
      fontSize={{ base: "70%", xl: "100%" }}
      bg="white"
      border="2px solid"
      borderColor="textColor"
      borderRadius={pxToEm(14)}
      boxShadow={`0 ${pxToEm(10)} 0 ${theme.colors.shadow},  -${pxToEm(
        6
      )} ${pxToEm(10)} 0 0 ${theme.colors.shadow}, ${pxToEm(6)} ${pxToEm(
        10
      )} 0 0 ${theme.colors.shadow}`}
    >
      <Box
        h={{ base: pxToEm(160), sm: pxToEm(200), lg: pxToEm(280) }}
        border={`${pxToEm(4)} solid`}
        borderColor="textColor"
        borderRadius={pxToEm(14)}
        position="relative"
        bgGradient="linear-gradient(180deg, #E4D8C6 0%, rgba(237, 236, 236, 0) 100%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _before={{
          content: '""',
          position: "absolute",
          width: "50%",
          left: "50%",
          translateX: "-50%",
          bottom: `calc(-1 * ${pxToEm(4)})`,
          height: pxToEm(4),
          backgroundColor: "white",
          transform: "auto",
        }}
      >
        <Image src={img} width="80%" height="90%" zIndex={10} />
      </Box>

      <Heading
        textAlign="center"
        fontSize={{ base: pxToEm(20), sm: pxToEm(26) }}
        fontWeight={800}
      >
        {name}
      </Heading>
    </Stack>
  );
}

export default TeamCard;
