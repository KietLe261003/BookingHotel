import package1 from '@/assets/img/package-1.jpg';
import package2 from '@/assets/img/package-2.jpg';
import package3 from '@/assets/img/package-3.jpg';
import package4 from '@/assets/img/package-4.jpg';
import package5 from '@/assets/img/package-5.jpg';
import package6 from '@/assets/img/package-6.jpg';
import { Link } from 'react-router-dom';
import RouterLink from "@/Until/RouterLink";
import { useEffect, useState } from "react";
import { hotelServices } from '@/Service/HotelService';
import { renderName } from '../Until/RenderName';
const URL_IMAGE=import.meta.env.VITE_IMAGE_URL;
const TourPackages = () => {
    const [packages,setPackages]=useState([]);
    const getAllHotel = async () => {
        try {
          const res = await hotelServices.getAllHotel();
          setPackages(res?.data)
        } catch (error) {
          //alert("lỗi");
          console.log("Lỗi: ", error);
        }
      };
      useEffect(() => {
        getAllHotel();
      }, []);

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
                                <img className="img-fluid h-[200px] min-h-[200px] max-h-[200px]" src={URL_IMAGE+pkg.imageUrls[0]} alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{pkg.city}</small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>1 night</small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2</small>
                                    </div>
                                    <div className='min-h-[55px] h-[55px]'>
                                        <Link className="h5 text-decoration-none" to={`/detailtour/${pkg.hotelId}`}>{renderName(pkg.name,50)}</Link>
                                    </div>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{pkg.rating} <small>(200)</small></h6>
                                            <h5 className="m-0">{pkg.price} vnđ</h5>
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
