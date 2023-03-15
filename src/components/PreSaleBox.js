import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import useBreakpoints from "hooks/useBreakpoints";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";
import PresaleProgress from "./PresaleProgress";

function PreSaleBox() {
  const { isLargerThanLG } = useBreakpoints();

  return (
    <Box position="relative" zIndex={1} fontSize={{ base: "80%", xl: "100%" }}>
      <Box
        bg="sky"
        border="2px solid #0F0901"
        pt={{ base: pxToEm(30), sm: pxToEm(36) }}
        pb={pxToEm(26)}
        px={{ base: pxToEm(30), sm: pxToEm(38) }}
        borderRadius={pxToEm(50)}
        boxShadow="1em 1em 0px #0E879E"
        width={{ base: "100%", lg: pxToEm(480) }}
        zIndex={2}
      >
        <Heading
          textAlign="center"
          fontSize={pxToEm(26)}
          sx={{ textTransform: "uppercase" }}
          mb={{ base: pxToEm(16), sm: pxToEm(20) }}
        >
          PRESALE STAGE
        </Heading>

        <Box
          bgGradient="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
          py={{ base: pxToEm(30), sm: pxToEm(40) }}
          px={{ base: pxToEm(24), sm: pxToEm(34) }}
          border={`${pxToEm(3)} solid #0F0901`}
          borderRadius={pxToEm(50)}
          mb={pxToEm(31)}
        >
          <Heading
            textAlign="center"
            fontSize={pxToEm(24)}
            sx={{ textTransform: "uppercase" }}
            mb={pxToEm(16)}
            lineHeight={1}
          >
            ROUND 1
          </Heading>

          <Text
            fontFamily="jost"
            fontWeight={800}
            textAlign="center"
            color="textColor"
            fontSize={pxToEm(16)}
            mb={pxToEm(16)}
          >
            USDT Raised $102,375.39/$2,080,000
          </Text>

          <PresaleProgress progress={45} />

          <Text
            fontFamily="jost"
            fontWeight={800}
            textAlign="center"
            color="textColor"
            fontSize={pxToEm(16)}
            mt={pxToEm(26)}
            mb={pxToEm(11)}
          >
            152,124,970 Tokens Remaining Until
          </Text>

          <Text
            textAlign="center"
            fontWeight={400}
            color="textColor"
            mb={pxToEm(12)}
          >
            1 Floofer = 0.000045 USDT
          </Text>

          <Text
            fontFamily="jost"
            fontWeight={800}
            textAlign="center"
            color="textColor"
            fontSize={pxToEm(16)}
          >
            Buy before price increase!
          </Text>
        </Box>

        <Button
          h="auto"
          fontFamily="jost"
          fontWeight={700}
          color="textColor"
          py={pxToEm(15)}
          width="100%"
          borderRadius={pxToEm(16)}
          bg="white"
          border="2px solid"
          borderColor="textColor"
          fontSize={pxToEm(16)}
          cursor="pointer"
          mb={4}
        >
          CONNECT WALLET
        </Button>

        <Link
          fontSize={pxToEm(18)}
          display="block"
          w="fit-content"
          mx="auto"
          color="textColor"
        >
          How To Buy
        </Link>
      </Box>
      {isLargerThanLG && (
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
      )}
    </Box>
  );
}

export default PreSaleBox;
