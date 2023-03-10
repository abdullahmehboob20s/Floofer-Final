import { Box, Image } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Hero from "layout/Hero";

const App = () => {
  return (
    <div>
      <Box position="relative" zIndex={1}>
        <Navbar />
        <Hero />

        <Image
          src="images/hero-paint.svg"
          sx={{ position: "absolute", top: 0, right: 0, width: "80%" }}
          zIndex={-1}
        />
      </Box>
    </div>
  );
};

export default App;
