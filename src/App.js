import React from "react";
import "./App.css";
import Logo from "./logo-48.png";
import LogText from "./logo-text.png";
import BearAppBar from "./components/bear/BearAppBar";
import { desktopMenu, mobileMenu } from "./components/MyMenus";

function App() {
  return (
    <div className="App">
      <BearAppBar
        brandingLogo={BrandingLogo}
        brandingText={BrandingText}
        desktopMenu={desktopMenu}
        mobileMenu={mobileMenu}
      />
    </div>
  );
}

const BrandingLogo = <img src={Logo} />;
const BrandingText = <img src={LogText} style={{ paddingLeft: "8px" }} />;

export default App;
