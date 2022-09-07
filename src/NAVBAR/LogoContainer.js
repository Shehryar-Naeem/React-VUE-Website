import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/VUELOGO.jpeg";

const LogoContainer = () => {
  return (
    <>                  
      <div className="logoContainer">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  );
};

export default LogoContainer;
