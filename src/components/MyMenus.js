import React from "react";
import { Button, MenuItem, Divider } from "@material-ui/core";

import BearMenuList from "./bear/BearMenuList";

export const desktopMenu = (
  <>
    <Button>About</Button>
    <Button>Services</Button>
    <Button >
      Login
    </Button>
    <Button variant="contained" color="primary" disableElevation>
      Sign up
    </Button>
  </>
);

const mobileHamburger = (
  <BearMenuList label="[=]">
    <MenuItem href="/login">Login</MenuItem>
    <Divider />
    <MenuItem href="/services">Services</MenuItem>
    <MenuItem href="/about">About</MenuItem>
  </BearMenuList>
);

export const mobileMenu = (
  <>
    <Button variant="contained" color="primary">
      Signup
    </Button>
    {mobileHamburger}
  </>
);
