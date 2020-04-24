import React from "react";
import { Container } from "@material-ui/core";
import Logo from "./logo.png";
import LogoText from "./logo-text.png";
import BearAppBar from "./components/bear/BearAppBar";
import { desktopMenu, mobileMenu } from "./components/MyMenus";
import DialogDemo from "./components/DialogDemo";

export default function () {
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
  <img
    alt="BearEssentials logo text"
    src={LogoText}
    style={{ paddingLeft: "8px" }}
  />
);
