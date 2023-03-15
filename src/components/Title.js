import { Heading } from "@chakra-ui/react";
import pxToRem from "utils/pxToRem";

const variants = {
  50: {
    fontSize: {
      base: pxToRem(28),
      md: pxToRem(32),
      lg: pxToRem(38),
      xl: pxToRem(50),
    },
  },
  48: { fontSize: pxToRem(48) },
  46: {
    fontSize: {
      base: pxToRem(26),
      sm: pxToRem(28),
      lg: pxToRem(34),
      xl: pxToRem(46),
    },
  },
  44: { fontSize: pxToRem(44) },
  42: { fontSize: pxToRem(42) },
  40: { fontSize: pxToRem(40) },
  30: { fontSize: pxToRem(30) },
  28: { fontSize: { base: pxToRem(24), xl: pxToRem(28) } },
  26: { fontSize: pxToRem(26) },
  24: { fontSize: { base: pxToRem(18), lg: pxToRem(20), xl: pxToRem(24) } },
  22: { fontSize: pxToRem(22) },
  20: { fontSize: pxToRem(20) },
};

function Title({ children, variant = "50", ...props }) {
  return (
    <Heading
      fontWeight="900"
      color="textColor"
      mb={{ base: 12, lg: 16 }}
      textAlign="center"
      {...variants[variant]}
      {...props}
    >
      {children}
    </Heading>
  );
}

export default Title;
