import {
  Box,
  Button,
  CloseButton,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import pxToRem from "utils/pxToRem";
import ContainerWrapper from "./ContainerWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickDetector from "hooks/OutsideClickDetector";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={{ base: 3, xl: 4 }}>
      <Image
        src="images/logo.svg"
        boxSize={{
          base: pxToRem(36),
          sm: pxToRem(40),
          lg: pxToRem(46),
          xl: pxToRem(60),
        }}
      />
      <Heading
        fontFamily="jost"
        fontWeight={900}
        fontSize={{ base: pxToRem(20), lg: pxToRem(22), xl: pxToRem(26) }}
      >
        Floofer
      </Heading>
    </Stack>
  );
};

function Navbar() {
  const [isSiderbarVisible, setSidebarVisibility] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));
  const theme = useTheme();
  const [isLargerThanLG] = useMediaQuery(
    `(min-width : ${theme.breakpoints.lg})`
  );

  return (
    <Box
      as="nav"
      sx={{
        bg: "greyishBlack",
        color: "white",
        h: { base: pxToRem(58), sm: pxToRem(64), xl: pxToRem(80) },
        display: "flex",
        alignItems: "center",
      }}
    >
      <ContainerWrapper>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />

          {isLargerThanLG ? null : (
            <IconButton
              variant="unstyled"
              icon={<GiHamburgerMenu />}
              fontSize={pxToRem(22)}
              size={0}
              onClick={() => setSidebarVisibility(true)}
            />
          )}

          <Box
            ref={sidebarRef}
            position={{ base: "fixed", lg: "static" }}
            top={0}
            right={0}
            w={{ base: pxToRem(280), lg: "auto" }}
            bg={{ base: "greyishBlack", lg: "transparent" }}
            h={{ base: "100vh", lg: "auto" }}
            p={{ base: `${pxToRem(30)} ${pxToRem(38)}`, lg: 0 }}
            transition="all .3s ease"
            transform="auto"
            translateX={
              isSiderbarVisible ? 0 : `${isLargerThanLG ? 0 : pxToRem(280)}`
            }
            zIndex={110}
          >
            {!isLargerThanLG && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={7}
              >
                <Logo />

                <CloseButton
                  size="md"
                  onClick={() => setSidebarVisibility(false)}
                />
              </Stack>
            )}

            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: 4, lg: 8, xl: 10 }}
              alignItems={{ base: "unset", lg: "center" }}
            >
              <Text
                fontSize={{ base: pxToRem(14), xl: "lg" }}
                casing="uppercase"
                fontWeight={700}
              >
                HOME
              </Text>
              <Text
                fontSize={{ base: pxToRem(14), xl: "lg" }}
                casing="uppercase"
                fontWeight={700}
              >
                Roadmap
              </Text>
              <Text
                fontSize={{ base: pxToRem(14), xl: "lg" }}
                casing="uppercase"
                fontWeight={700}
              >
                Whitepaper
              </Text>
              <Text
                fontSize={{ base: pxToRem(14), xl: "lg" }}
                casing="uppercase"
                fontWeight={700}
              >
                COMMUNITY
              </Text>

              <Box pt={{ base: 2, lg: 0 }}>
                <Button
                  sx={{
                    bg: "white",
                    color: "black",
                    fontWeight: 700,
                    fontSize: { base: pxToRem(14), xl: pxToRem(16) },
                    borderRadius: pxToRem(8),
                    px: { base: pxToRem(16), xl: pxToRem(20) },
                    py: { base: pxToRem(6), xl: pxToRem(8) },
                    height: "auto",
                    w: { base: "100%", lg: "fit-content" },
                  }}
                >
                  Home
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </ContainerWrapper>

      <Box
        as="div"
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex={100}
        bg="rgba(0,0,0,.7)"
        opacity={isSiderbarVisible ? 1 : 0}
        transition="all .3s ease"
        pointerEvents={isSiderbarVisible ? "visible" : "none"}
      />
    </Box>
  );
}

export default Navbar;
