import React from "react";
import "./Header.css";
import CTA from "./CTA";
import PROFILE from "../../assets/profile.png";
import HeaderSocials from "./HeaderSocials";
import { BsMouse } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>C.Y. Park</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={PROFILE} alt="profile" />
        </div>
        <a href="#contact" className="scroll__down">
          <BsMouse />
        </a>
      </div>
    </header>
  );
};

export default Header;
