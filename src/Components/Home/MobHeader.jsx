import React from "react";
import { Link } from "react-router-dom";

const MobHeader = () => {
  return (
    <>
      {/* Start Mobile Header Section */}
      <div className="mobile-header d-block d-lg-none">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <div className="mobile-logo">
                <Link to="/">
                  <img src="assets/images/logo/logo.png" alt="" />
                </Link>
              </div>
            </div>

            <div className="col">
              <div className="mobile-action-link text-end">
                <Link
                  to="#mobile-menu-offcanvas"
                  className="offcanvas-toggle offside-menu"
                >
                  <i className="icofont-navigation-menu" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start MobileHeader Section */}
    </>
  );
};

export default MobHeader;
