import React from "react";
import { Link } from "react-router-dom";

const OffcanvasMobile = () => {
  return (
    <>
      {/* Start Offcanvas Mobile Menu Section */}
      <div
        id="mobile-menu-offcanvas"
        className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section"
      >
        {/* Start Offcanvas Header */}
        <div className="offcanvas-header text-end">
          <button className="offcanvas-close">
            <i className="icofont-close-line" />
          </button>
        </div>
        {/* End Offcanvas Header */}
        {/* Start Offcanvas Mobile Menu Wrapper */}
        <div className="offcanvas-mobile-menu-wrapper">
          {/* Start Mobile Menu  */}
          <div className="mobile-menu-bottom">
            {/* Start Mobile Menu Nav */}
            <div className="offcanvas-menu">
              <ul>
                <li>
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span>Services</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="service-list.html">Service List</Link>
                    </li>
                    <li>
                      <Link to="service-details.html">Service Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <span>Blog</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="blog-list.html">Blog List Full Width</Link>
                    </li>
                    <li>
                      <Link to="blog-list-sidebar-left.html">
                        Blog List Left Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-list-sidebar-right.html">
                        Blog List Right Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-details.html">
                        Blog Details Full Width
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-details-sidebar-left.html">
                        Blog Details Left Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-details-sidebar-right.html">
                        Blog Details Right Sidebar
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <span>Pages</span>
                  </Link>
                  <ul className="mobile-sub-menu">
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link to="project-list.html">Project</Link>
                    </li>
                    <li>
                      <Link to="project-details.html">Project Details</Link>
                    </li>
                    <li>
                      <Link to="faq.html">FAQ</Link>
                    </li>
                    <li>
                      <Link to="404-page.html">404 Page</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contact.html">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Mobile Menu Nav */}
          </div>
          {/* End Mobile Menu */}
          {/* Start Mobile contact Info */}
          <div className="mobile-contact-info text-center">
            <ul className="social-link">
              <li>
                <Link target="_blank" to="https://example.com">
                  <i className="icofont-facebook" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://example.com">
                  <i className="icofont-twitter" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://example.com">
                  <i className="icofont-skype" />
                </Link>
              </li>
            </ul>
          </div>
          {/* End Mobile contact Info */}
        </div>
        {/* End Offcanvas Mobile Menu Wrapper */}
      </div>
      {/* End Offcanvas Mobile Menu Section */}
    </>
  );
};

export default OffcanvasMobile;
