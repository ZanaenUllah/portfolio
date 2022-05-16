import React from "react";
import { Link } from "react-router-dom";

const ServiceSection = (props) => {
  const { title, image, list } = props;

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
          <img src={image} alt="" />
        </div>
        <h4 className="title">
          <Link to="/service-details">{title}</Link>
        </h4>
        <ul className="list-item">
          {list.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <div className="inner-shape inner-shape-bottom-right" />
      </div>

      {/* End Service Section Wrapper */}
    </>
  );
};

export default ServiceSection;
