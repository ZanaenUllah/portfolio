import React from "react";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <>
      {/* Start Service Section Wrapper */}
      <div
        className="service-box-single-item swiper-slide swiper-slide-active"
        data-swiper-slide-index={0}
        role="group"
        aria-label="4 / 9"
        style={{ width: 352, marginRight: 45 }}
      >
        <div className="inner-shape inner-shape-top-right" />
        <div className="icon">
          <img src="assets/images/icon/service-icon-1.png" alt="" />
        </div>
        <h4 className="title">
          <Link to="service-details.html">UI/UX Design</Link>
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

      {/* End Service Section Wrapper */}
    </>
  );
};

export default ServiceSection;
