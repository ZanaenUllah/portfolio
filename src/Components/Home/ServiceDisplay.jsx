import React from "react";
import ServiceSection from "./ServiceSection";
import OwlCarousel from "react-owl-carousel";

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
                      <OwlCarousel
                        className="owl-theme"
                        items={3}
                        autoplay={true}
                        dots
                        loop
                      >
                        <ServiceSection />
                        <ServiceSection />
                        <ServiceSection />
                      </OwlCarousel>
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
