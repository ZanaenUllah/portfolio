import React from "react";

const ServiceSection = () => {
  return (
    <>
      {/* Start Service Section Wrapper */}
      <div className="service-display-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="service-display-slider">
                {/* Slider main container */}
                <div className="swiper-container">
                  {/* Additional required wrapper */}
                  <div className="swiper-wrapper">
                    {/* Slides */}
                    {/* Start Service Box Single Item */}
                    <div className="service-box-single-item swiper-slide">
                      <div className="inner-shape inner-shape-top-right" />
                      <div className="icon">
                        <img
                          src="assets/images/icon/service-icon-1.png"
                          alt=""
                        />
                      </div>
                      <h4 className="title">
                        <a href="service-details.html">UI/UX Design</a>
                      </h4>
                      <ul className="list-item">
                        <li>Landing Pages</li>
                        <li>User Flow</li>
                        <li>Wireframing</li>
                        <li>Prototyping</li>
                        <li>Mobile App Design</li>
                      </ul>
                      <div className="inner-shape inner-shape-bottom-right" />
                    </div>
                    {/* End Service Box Single Item */}
                    {/* Start Service Box Single Item */}
                    <div className="service-box-single-item swiper-slide">
                      <div className="inner-shape inner-shape-top-right" />
                      <div className="icon">
                        <img
                          src="assets/images/icon/service-icon-2.png"
                          alt=""
                        />
                      </div>
                      <h4 className="title">
                        <a href="service-details.html">Development</a>
                      </h4>
                      <ul className="list-item">
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>Animation</li>
                        <li>WordPress</li>
                        <li>React</li>
                      </ul>
                      <div className="inner-shape inner-shape-bottom-right" />
                    </div>
                    {/* End Service Box Single Item */}
                    {/* Start Service Box Single Item */}
                    <div className="service-box-single-item swiper-slide">
                      <div className="inner-shape inner-shape-top-right" />
                      <div className="icon">
                        <img
                          src="assets/images/icon/service-icon-3.png"
                          alt=""
                        />
                      </div>
                      <h4 className="title">
                        <a href="service-details.html">Illustration</a>
                      </h4>
                      <ul className="list-item">
                        <li>Character Design</li>
                        <li>Icon Set</li>
                        <li>Illustration Guide</li>
                        <li>Illustration Set</li>
                        <li>Motion Graphic</li>
                      </ul>
                      <div className="inner-shape inner-shape-bottom-right" />
                    </div>
                    {/* End Service Box Single Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* If we need pagination */}
        <div className="service-display-dots">
          <div className="swiper-pagination" />
        </div>
      </div>
      {/* End Service Section Wrapper */}
    </>
  );
};

export default ServiceSection;
