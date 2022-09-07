import React from "react";
import LogoContainer from "./LogoContainer";
import NavComponent from "./NavComponet";
import NavMenuComponent from "./NavMenucomponent";




const NavBar = () => {
  return (
    <>
      <NavComponent/>
      <LogoContainer/>
      <NavMenuComponent/>
    </>
  );
};

export default NavBar;
