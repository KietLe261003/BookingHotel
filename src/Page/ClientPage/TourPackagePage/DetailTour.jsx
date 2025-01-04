import "./Component/Css/Detail.css";
import hotel from '../../../assets/img/Hotel.jpg';
import Utilities from "./Component/Utilities";
import ListComment from "../../../Components/ListComment";
import CreateComment from "../../../Components/CreateComment";
import { useNavigate, useParams } from "react-router-dom";
import BookingForm from "./Component/BookingForm";
import { useEffect, useState } from "react";
import { hotelServices } from "../../../Service/HotelService";
const DetailTour = () => {
  const {id}=useParams();
  const navigate = useNavigate();
  const [hotel,setHotel]=useState(null);
  const getHotelById = async ()=>{
    try {
      const res = await hotelServices.getHotelById(id);
      setHotel(res?.data);
      console.log(res.data);
    } catch (error) {
      console.log("Lỗi: ",error)
    }
  }
  useEffect(()=>{
    getHotelById();
  },[id]);
  return (
    hotel && <div className="container-fluid px-5 flex flex-col">
      <main className="mb-12">
        <div className="card">
          <div className="card__body">
            <div className="half">
              <div className="image">
                <img
                  src={hotel?.imageUrls[0]}
                  alt=""
                  width={'100%'}
                  height={'100%'}
                />
              </div>
              <button class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600 m-3" onClick={()=> navigate(`/view360/${hotel.hotelId}`)}>View 360</button>
            </div>
            <div className="half">
              <div className="featured_text flex flex-col items-start">
                <p className="text-[60px] font-bold text-black text-start">{hotel.name}</p>
                <p className="price">{hotel.price} vnđ</p>
              </div>
              <div className="description">
                <p>
                  {hotel.description}
                </p>
              </div>
              <span className="stock">
                <i className="fa fa-pen"></i> In stock
              </span>
              <div className="reviews">
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star-o"></i>
                  </li>
                </ul>
                <span>(64 reviews)</span>
              </div>
              <Utilities></Utilities>
            </div>
          </div>
          <div className="card__footer">
            <div className="recommend">
              <p>Recommended by</p>
              <h3>Andrew Palmer</h3>
            </div>
            <BookingForm></BookingForm>
          </div>
        </div>
      </main>
      <ListComment></ListComment>
      <CreateComment></CreateComment>
    </div>
  );
};

export default DetailTour;
