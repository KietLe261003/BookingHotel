import React from 'react';
import team1 from '@/assets/img/team-1.jpg';
import team2 from '@/assets/img/team-2.jpg';
import team3 from '@/assets/img/team-3.jpg';
import team4 from '@/assets/img/team-4.jpg';

const TravelGuides = () => {
  const guides = [
    { img: team1, name: "Guide Name", designation: "Designation" },
    { img: team2, name: "Guide Name", designation: "Designation" },
    { img: team3, name: "Guide Name", designation: "Designation" },
    { img: team4, name: "Guide Name", designation: "Designation" },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Guides</h6>
          <h1>Our Travel Guides</h1>
        </div>
        <div className="row">
          {guides.map((guide, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2" key={index}>
              <div className="team-item bg-white mb-4">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={guide.img} alt={guide.name} />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">{guide.name}</h5>
                  <p className="m-0">{guide.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelGuides;
