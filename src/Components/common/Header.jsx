import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Start Header Section */}
      <header className="header-section sticky-header d-none d-lg-block">
        <div className="header-wrapper">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                {/* Start Header Logo */}
                <Link to="/" className="header-logo">
                  <img src="assets/images/logo/logo.png" alt="" />
                </Link>
                {/* End Header Logo */}
              </div>
              <div className="col-auto">
                {/* Start Header Menu */}
                <ul className="header-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="has-dropdown">
                    <Link to="/">Service</Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/">Services</Link>
                      </li>
                      <li>
                        <Link to="/">Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to="/">Blog</Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/">Blog List Full Width</Link>
                      </li>
                      <li>
                        <Link to="/">Blog List Left Sidebar</Link>
                      </li>
                      <li>
                        <Link to="/">Blog List Right Sidebar</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Details Full Width</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Details Left Sidebar</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Details Right Sidebar</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to="#">Pages</Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Project</Link>
                      </li>
                      <li>
                        <Link to="/">Project Details</Link>
                      </li>
                      <li>
                        <Link to="/">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/">404 Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
                {/* End Header Menu */}
              </div>
              <div className="col">
                <div className="header-btn-link text-end">
                  <Link
                    to="/"
                    className="btn btn-sm btn-outline-one icon-space-left"
                  >
                    Hire Me <i className="icofont-double-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Section */}
    </>
  );
};

export default Header;
