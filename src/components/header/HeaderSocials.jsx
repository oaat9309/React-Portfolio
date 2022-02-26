import React from "react";
import { FaVimeoSquare, FaInstagramSquare, FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/oaat9309" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://velog.io/@kite1993" target="_blank" rel="noreferrer">
        <FaVimeoSquare />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
