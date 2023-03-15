import { Box, Icon, Image, Link, Stack, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import pxToEm from "utils/pxToEm";

function JoinCommunityLink({ title, iconImg, ...props }) {
  const theme = useTheme();

  return (
    <Stack
      fontSize={{ base: "50%", md: "70%", xl: "100%" }}
      flex={1}
      as={Link}
      href="/"
      target="_blank"
      height={pxToEm(100)}
      px={{ md: pxToEm(36) }}
      bg="white"
      border="2px solid"
      borderColor="textColor"
      borderRadius={pxToEm(24)}
      boxShadow={`${pxToEm(10)} ${pxToEm(10)} 0 ${theme.colors.shadow}`}
      display="flex"
      alignItems="center"
      spacing={{ base: pxToEm(8), md: pxToEm(12) }}
      justifyContent="center"
      direction="row"
      transition="all .2s ease"
      position="relative"
      top={0}
      left={0}
      _hover={{
        textDecoration: "none",
        boxShadow: "none",
        top: pxToEm(10),
        left: pxToEm(10),
      }}
      {...props}
    >
      <Box as="span" width={{ base: pxToEm(46), md: pxToEm(60) }}>
        <Image src={iconImg} width="100%" />
      </Box>
      <Text
        as="span"
        textDecoration="none"
        fontSize={{ base: pxToEm(28), md: pxToEm(30) }}
        fontWeight={800}
      >
        {title}
      </Text>
    </Stack>
  );
}

export default JoinCommunityLink;
