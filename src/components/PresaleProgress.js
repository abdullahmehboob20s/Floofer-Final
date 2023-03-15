import { Box, Text } from "@chakra-ui/react";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

function PresaleProgress({ progress = 50 }) {
  return (
    <Box
      sx={{
        border: "1px",
        borderColor: "textColor",
        borderRadius: "50px",
        bgColor: "pink.light",
        height: pxToEm(35),
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: `calc(100% + 2px)`,
          width: `calc(${progress}% + 2px)`,
          border: "1px",
          borderColor: "textColor",
          borderRadius: "50px",
          bgColor: "pink.dark",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "-1px",
        }}
      >
        <Text fontWeight={700} fontSize={pxToEm(20)} color="textColor">
          {progress}%
        </Text>
      </Box>
    </Box>
  );
}

export default PresaleProgress;
