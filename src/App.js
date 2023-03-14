import { Box, Image } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Community from "sections/Community";
import Featured from "sections/Featured";
import Footer from "sections/Footer";
import Hero from "sections/Hero";
import HowToBuy from "sections/HowToBuy";
import MoreAboutFloofer from "sections/MoreAboutFloofer";
import Products from "sections/Products";
import Roadmap from "sections/Roadmap";
import Team from "sections/Team";
import Tokenomics from "sections/Tokenomics";
import Whitepaper from "sections/Whitepaper";

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

      <Featured />
      <Products />
      <Whitepaper />
      <Roadmap />
      <Tokenomics />
      <HowToBuy />
      <Team />
      <Community />
      <MoreAboutFloofer />
      <Footer />
    </div>
  );
};

export default App;
