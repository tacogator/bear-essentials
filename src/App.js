import React from "react";
import { Container, Box } from "@material-ui/core";
import Logo from "./logo-48.png";
import BearAppBar from "./components/bear/BearAppBar";
import { desktopMenu, mobileMenu } from "./components/MyMenus";
import DialogDemo from "./components/DialogDemo";
function App() {
  return (
    <div>
      <BearAppBar
        brandingLogo={BrandingLogo}
        brandingText={BrandingText}
        desktopMenu={desktopMenu}
        mobileMenu={mobileMenu}
      />
      <Container maxWidth="md" style={{ paddingTop: "4rem" }}>
        <DialogDemo />
      </Container>
    </div>
  );
}

const BrandingLogo = <img alt="Bear logo" src={Logo} />;
const BrandingText = (
  <Box paddingLeft="8px" fontWeight="700" color="primary.main">
    BearEssentials
  </Box>
);

export default App;
