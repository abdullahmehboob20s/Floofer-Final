import { Heading } from "@chakra-ui/react";
import pxToRem from "utils/pxToRem";

function Title({ children, ...props }) {
  return (
    <Heading
      fontWeight="900"
      fontSize={pxToRem(50)}
      color="textColor"
      mb={16}
      textAlign="center"
      {...props}
    >
      {children}
    </Heading>
  );
}

export default Title;
