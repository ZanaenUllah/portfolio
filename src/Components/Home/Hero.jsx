import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* ...::: Start Hero Section :::... */}
      <div className="hero-section section-dark-blue-bg">
        <div className="hero-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7">
                <div className="hero-content">
                  <h3 className="title-big">Hello! I’m</h3>
                  <h2 className="title-large">
                    Mirta <span className="shape-mark">Akins</span>
                  </h2>
                  <p>
                    ReactJS &amp; Laravel developer also specialization in &amp;
                    Wordpress.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-xl btn-outline-one icon-space-left"
                  >
                    Get Resume <i className="icofont-download" />
                  </Link>
                  <div className="video-link">
                    <Link
                      className="wave-btn"
                      to="https://youtu.be/MKjhBO2xQzg"
                      data-autoplay="true"
                      data-vbtype="video"
                    >
                      <div className="ripple">
                        <i className="icofont-ui-play" />
                      </div>
                    </Link>
                    <span className="video-text">Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-shape hero-top-shape">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-shape hero-bottom-shape">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-portrait">
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/portrait/portrait-hero.png"
                alt="portrait-hero"
              />
              <div className="image-half-round-shape" />
              <div className="social-link">
                <Link to="https://www.example.com" target="_blank">
                  <i className="icofont-facebook" />
                </Link>
                <Link to="https://www.example.com" target="_blank">
                  <i className="icofont-dribbble" />
                </Link>
                <Link to="https://www.example.com" target="_blank">
                  <i className="icofont-behance" />
                </Link>
                <Link to="https://www.example.com" target="_blank">
                  <i className="icofont-linkedin" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...::: End Hero Section :::... */}
    </>
  );
};

export default Hero;
