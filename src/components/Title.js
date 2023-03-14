import { Heading } from "@chakra-ui/react";
import pxToRem from "utils/pxToRem";

const variants = {
  50: { fontSize: pxToRem(50) },
  40: { fontSize: pxToRem(40) },
  30: { fontSize: pxToRem(30) },
  28: { fontSize: pxToRem(28) },
  26: { fontSize: pxToRem(26) },
  24: { fontSize: pxToRem(24) },
  22: { fontSize: pxToRem(22) },
  20: { fontSize: pxToRem(20) },
};

function Title({ children, variant = "50", ...props }) {
  return (
    <Heading
      fontWeight="900"
      color="textColor"
      mb={16}
      textAlign="center"
      {...variants[variant]}
      {...props}
    >
      {children}
    </Heading>
  );
}

export default Title;
