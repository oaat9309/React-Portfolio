import React from "react";
import "./Footer.css";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        OAAT9309
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://ko-kr.facebook.com/">
          <GrFacebook />
        </a>
        <a href="https://www.instagram.com/">
          <GrInstagram />
        </a>
        <a href="https://twitter.com/">
          <GrTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; OAAT9309. All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
