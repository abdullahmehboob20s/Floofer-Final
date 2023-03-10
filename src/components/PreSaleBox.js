import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";
import PresaleProgress from "./PresaleProgress";

function PreSaleBox() {
  return (
    <Box position="relative" zIndex={1}>
      <Box
        bg="sky"
        border="2px solid #0F0901"
        pt={pxToRem(36)}
        pb={pxToRem(26)}
        px={pxToRem(38)}
        borderRadius={pxToRem(50)}
        boxShadow="1rem 1rem 0px #0E879E"
        width={pxToRem(480)}
        zIndex={2}
      >
        <Heading
          textAlign="center"
          fontSize={pxToRem(26)}
          sx={{ textTransform: "uppercase" }}
          mb={pxToRem(32)}
        >
          PRESALE STAGE
        </Heading>

        <Box
          bgGradient="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
          py={pxToRem(40)}
          px={pxToRem(34)}
          border="3px solid #0F0901"
          borderRadius={pxToRem(50)}
          mb={pxToRem(31)}
        >
          <Heading
            textAlign="center"
            fontSize={pxToRem(24)}
            sx={{ textTransform: "uppercase" }}
            mb={pxToRem(26)}
            lineHeight={1}
          >
            ROUND 1
          </Heading>

          <Text
            fontFamily="jost"
            fontWeight={800}
            textAlign="center"
            color="textColor"
            fontSize={pxToRem(16)}
            mb={pxToRem(16)}
          >
            USDT Raised $102,375.39/$2,080,000
          </Text>

          <PresaleProgress progress={45} />

          <Text
            fontFamily="jost"
            fontWeight={800}
            textAlign="center"
            color="textColor"
            fontSize={pxToRem(16)}
            mt={pxToRem(26)}
            mb={pxToRem(11)}
          >
            152,124,970 Tokens Remaining Until
          </Text>

          <Text
            textAlign="center"
            fontWeight={400}
            color="textColor"
            mb={pxToRem(12)}
          >
            1 Floofer = 0.000045 USDT
          </Text>

          <Text
            fontFamily="jost"
            fontWeight={800}
            textAlign="center"
            color="textColor"
            fontSize={pxToRem(16)}
          >
            Buy before price increase!
          </Text>
        </Box>

        <Button
          h="auto"
          fontFamily="jost"
          fontWeight={700}
          color="textColor"
          py={pxToRem(15)}
          width="100%"
          borderRadius={pxToRem(16)}
          bg="white"
          border="2px solid"
          borderColor="textColor"
          fontSize={pxToRem(16)}
          cursor="pointer"
          mb={4}
        >
          CONNECT WALLET
        </Button>

        <Link
          fontSize={pxToRem(18)}
          display="block"
          w="fit-content"
          mx="auto"
          color="textColor"
        >
          How To Buy
        </Link>
      </Box>
      <Image
        src="images/presale-art.svg"
        sx={{
          position: "absolute",
          top: "80%",
          left: "20%",
          width: "90%",
          zIndex: -2,
        }}
      />
    </Box>
  );
}

export default PreSaleBox;
