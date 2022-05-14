import React from "react";

const ServiceDisplay = () => {
  return (
    <>
      <div className="service-display-section section-gap-tb-165 pos-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-content">
                <span className="section-tag">My Services</span>
                <h2 className="section-title">
                  Service Provide For My Clients.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="service-display-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="service-display-slider">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-display-dots">
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDisplay;
