import carousel1 from "@/assets/img/carousel-1.jpg";
import carousel2 from "@/assets/img/carousel-2.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function CarouselSection() {
  const location = useLocation();
  const currentUrl = location.pathname;
  useEffect(()=>{

  },[currentUrl])
  return (
    <div className="container-fluid p-0">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={carousel1} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4 className="text-white text-uppercase mb-md-3">
                  Tours & Travel
                </h4>
                <h1 className="display-3 text-white mb-md-4">
                  Let's Discover The World Together
                </h1>
                <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel2} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4 className="text-white text-uppercase mb-md-3">
                  Tours & Travel
                </h4>
                <h1 className="display-3 text-white mb-md-4">
                  Discover Amazing Places With Us
                </h1>
                <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#header-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <div
            className="btn btn-dark"
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-prev-icon mb-n2"></span>
          </div>
        </a>
        <a
          className="carousel-control-next"
          href="#header-carousel"
          role="button"
          data-bs-slide="next"
        >
          <div
            className="btn btn-dark"
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-next-icon mb-n2"></span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CarouselSection;
