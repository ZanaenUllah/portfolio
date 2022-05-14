import React from "react";

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
                  <a href="index.html">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Services</span>
                  </a>
                  <ul className="mobile-sub-menu">
                    <li>
                      <a href="service-list.html">Service List</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span>Blog</span>
                  </a>
                  <ul className="mobile-sub-menu">
                    <li>
                      <a href="blog-list.html">Blog List Full Width</a>
                    </li>
                    <li>
                      <a href="blog-list-sidebar-left.html">
                        Blog List Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-list-sidebar-right.html">
                        Blog List Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details Full Width</a>
                    </li>
                    <li>
                      <a href="blog-details-sidebar-left.html">
                        Blog Details Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-details-sidebar-right.html">
                        Blog Details Right Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span>Pages</span>
                  </a>
                  <ul className="mobile-sub-menu">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="project-list.html">Project</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="404-page.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">
                    <span>Contact</span>
                  </a>
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
                <a target="_blank" href="https://example.com">
                  <i className="icofont-facebook" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://example.com">
                  <i className="icofont-twitter" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://example.com">
                  <i className="icofont-skype" />
                </a>
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
