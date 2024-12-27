import package1 from '@/assets/img/package-1.jpg';
import package2 from '@/assets/img/package-2.jpg';
import package3 from '@/assets/img/package-3.jpg';
import package4 from '@/assets/img/package-4.jpg';
import package5 from '@/assets/img/package-5.jpg';
import package6 from '@/assets/img/package-6.jpg';
import { Link } from 'react-router-dom';
import RouterLink from "@/Until/RouterLink";
const TourPackages = () => {
    const packages = [
        {
            imgSrc: package1,
            location: "Thailand",
            duration: "3 days",
            persons: "2 Person",
            title: "Discover amazing places of the world with us",
            rating: 4.5,
            reviews: 250,
            price: "$350"
        },
        {
            imgSrc: package2,
            location: "Thailand",
            duration: "3 days",
            persons: "2 Person",
            title: "Discover amazing places of the world with us",
            rating: 4.5,
            reviews: 250,
            price: "$350"
        },
        {
            imgSrc: package3,
            location: "Thailand",
            duration: "3 days",
            persons: "2 Person",
            title: "Discover amazing places of the world with us",
            rating: 4.5,
            reviews: 250,
            price: "$350"
        },
        {
            imgSrc: package4,
            location: "Thailand",
            duration: "3 days",
            persons: "2 Person",
            title: "Discover amazing places of the world with us",
            rating: 4.5,
            reviews: 250,
            price: "$350"
        },
        {
            imgSrc: package5,
            location: "Thailand",
            duration: "3 days",
            persons: "2 Person",
            title: "Discover amazing places of the world with us",
            rating: 4.5,
            reviews: 250,
            price: "$350"
        },
        {
            imgSrc: package6,
            location: "Thailand",
            duration: "3 days",
            persons: "2 Person",
            title: "Discover amazing places of the world with us",
            rating: 4.5,
            reviews: 250,
            price: "$350"
        },
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Packages</h6>
                    <h1>Pefect Tour Packages</h1>
                </div>
                <div className="row">
                    {packages.map((pkg, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src={pkg.imgSrc} alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{pkg.location}</small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>{pkg.duration}</small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>{pkg.persons}</small>
                                    </div>
                                    <Link className="h5 text-decoration-none" to={"/detailtour/2"}>{pkg.title}</Link>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{pkg.rating} <small>({pkg.reviews})</small></h6>
                                            <h5 className="m-0">{pkg.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TourPackages;
