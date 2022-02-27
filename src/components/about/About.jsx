import React from "react";
import "./About.css";
import ME from "../../assets/profile.png";
import { BsBookHalf } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>About</h5>
      <h2>Who I Am</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about profile" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsBookHalf className="about__icon" />
              <h5>Education</h5>
              <small>lorem ipsum</small>
            </article>
            <article className="about__card">
              <FaBriefcase className="about__icon" />
              <h5>Experience</h5>
              <small>lorem ipsum</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>lorem ipsum</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta et
            illo dolores inventore tempora ipsum aut eius fuga! Ducimus, iusto
            molestiae repudiandae quidem blanditiis similique aliquid est
            facilis voluptatum laboriosam?
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
