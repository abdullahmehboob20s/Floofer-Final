import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

function TeamCard({ img, name }) {
  const theme = useTheme();

  return (
    <Stack
      spacing={8}
      px={pxToRem(26)}
      pt={pxToRem(26)}
      pb={pxToRem(40)}
      bg="white"
      border="2px solid"
      borderColor="textColor"
      borderRadius={pxToRem(14)}
      boxShadow={`0 ${pxToRem(10)} 0 ${theme.colors.shadow},  -${pxToRem(
        6
      )} 10px 0 0 ${theme.colors.shadow}, ${pxToRem(6)} 10px 0 0 ${
        theme.colors.shadow
      }`}
    >
      <Box
        h={pxToEm(280)}
        border="4px solid"
        borderColor="textColor"
        borderRadius={pxToRem(14)}
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
          bottom: `calc(-1 * ${pxToRem(4)})`,
          height: "4px",
          backgroundColor: "white",
          transform: "auto",
        }}
      >
        <Image src={img} width="80%" height="90%" zIndex={10} />
      </Box>

      <Heading textAlign="center" fontSize={pxToRem(26)} fontWeight={800}>
        {name}
      </Heading>
    </Stack>
  );
}

export default TeamCard;
