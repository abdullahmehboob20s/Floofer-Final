import { useMediaQuery, useTheme } from "@chakra-ui/react";

function useBreakpoints() {
  const theme = useTheme();
  const [
    isLargerThanSM,
    isLargerThanMD,
    isLargerThanLG,
    isLargerThanXL,
    isLargerThan2XL,
  ] = useMediaQuery([
    `(min-width : ${theme.breakpoints.sm})`,
    `(min-width : ${theme.breakpoints.md})`,
    `(min-width :  ${theme.breakpoints.lg})`,
    `(min-width :  ${theme.breakpoints.xl})`,
    `(min-width :  ${theme.breakpoints["2xl"]})`,
  ]);

  return {
    isLargerThanSM,
    isLargerThanMD,
    isLargerThanLG,
    isLargerThanXL,
    isLargerThan2XL,
  };
}

export default useBreakpoints;
