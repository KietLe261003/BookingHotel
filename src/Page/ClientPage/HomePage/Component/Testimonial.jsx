import React from 'react';
import testimonial1 from '../../../../assets/img/testimonial-1.jpg';
import testimonial2 from '../../../../assets/img/testimonial-2.jpg';
import testimonial3 from '../../../../assets/img/testimonial-3.jpg';
import testimonial4 from '../../../../assets/img/testimonial-4.jpg';
const Testimonial = () => {
  const testimonials = [
    { img: testimonial1, text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam", name: "Client Name", profession: "Profession" },
    { img: testimonial2, text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam", name: "Client Name", profession: "Profession" },
    { img: testimonial3, text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam", name: "Client Name", profession: "Profession" },
    { img: testimonial4, text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam", name: "Client Name", profession: "Profession" },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Testimonial
          </h6>
          <h1>What Say Our Clients</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="text-center pb-4" key={index}>
              <img
                className="img-fluid mx-auto"
                src={testimonial.img}
                style={{ width: "100px", height: "100px" }}
                alt={`testimonial-${index}`}
              />
              <div className="testimonial-text bg-white p-4 mt-n5">
                <p className="mt-5">{testimonial.text}</p>
                <h5 className="text-truncate">{testimonial.name}</h5>
                <span>{testimonial.profession}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
