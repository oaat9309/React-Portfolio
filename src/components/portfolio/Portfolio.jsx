import React from "react";
import "./Portfolio.css";
import PORTFOLIO from "../../assets/portfolio.webp";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={PORTFOLIO} alt="portfolio example" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={PORTFOLIO} alt="portfolio example" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={PORTFOLIO} alt="portfolio example" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={PORTFOLIO} alt="portfolio example" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={PORTFOLIO} alt="portfolio example" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={PORTFOLIO} alt="portfolio example" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
