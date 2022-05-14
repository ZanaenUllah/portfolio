import React from "react";

const MobHeader = () => {
  return (
    <>
      {/* Start Mobile Header Section */}
      <div className="mobile-header d-block d-lg-none">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <div className="mobile-logo">
                <a href="index.html">
                  <img src="assets/images/logo/logo.png" alt="" />
                </a>
              </div>
            </div>

            <div className="col">
              <div className="mobile-action-link text-end">
                <a
                  href="#mobile-menu-offcanvas"
                  className="offcanvas-toggle offside-menu"
                >
                  <i className="icofont-navigation-menu" />
                </a>
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
