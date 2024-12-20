import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: "90px" }}>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5 flex flex-col items-start">
            <a href="#" className="navbar-brand">
              <h1 className="text-primary">
                <span className="text-white">TRAVEL</span>ER
              </h1>
            </a>
            <p>
              Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero
              lorem dolor dolor
            </p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: "5px" }}>
              Follow Us
            </h6>
            <div className="d-flex justify-content-start">
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-primary btn-square" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 flex flex-col justify-start items-start">
            <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
              Our Services
            </h5>
            <div className="flex flex-col justify-start items-start">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>About
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Destination
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Services
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Packages
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Guides
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Testimonial
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right mr-2"></i>Blog
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4 flex flex-col justify-start items-start" style={{ letterSpacing: "5px" }}>
              Useful Links
            </h5>
            <div className="flex flex-col justify-start items-start">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>About
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Destination
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Services
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Packages
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Guides
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Testimonial
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right mr-2"></i>Blog
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 flex flex-col justify-start items-start">
            <h5 className="text-white text-uppercase mb-4 " style={{ letterSpacing: "5px" }}>
              Contact Us
            </h5>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope mr-2"></i>info@example.com
            </p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: "5px" }}>
              Newsletter
            </h6>
            <div className="w-100">
              <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: "25px" }} placeholder="Your Email" />
                <div className="input-group-append">
                  <button className="btn btn-primary px-3">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1)" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white-50">
              Copyright &copy; <a href="#">Domain</a>. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <p className="m-0 text-white-50">
              Designed by <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
