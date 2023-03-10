import { Container } from "@chakra-ui/react";

function ContainerWrapper({ children }) {
  return (
    <Container maxWidth="1200px" w="90%" my={0} mx="auto" p={0}>
      {children}
    </Container>
  );
}

export default ContainerWrapper;
