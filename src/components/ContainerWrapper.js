import { Container } from "@chakra-ui/react";

const variants = {
  "1200px": {
    maxWidth: "1200px",
  },
  "1000px": {
    maxWidth: "1000px",
  },
  "800px": {
    maxWidth: "800px",
  },
};

function ContainerWrapper({ children, variant = "1200px", ...props }) {
  return (
    <Container
      maxWidth={variants[variant].maxWidth}
      w="90%"
      my={0}
      mx="auto"
      p={0}
      {...props}
    >
      {children}
    </Container>
  );
}

export default ContainerWrapper;
