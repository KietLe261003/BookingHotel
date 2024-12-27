import "./Component/Css/Detail.css";
import hotel from '../../../assets/img/Hotel.jpg';
import Utilities from "./Component/Utilities";
import ListComment from "../../../Components/ListComment";
import CreateComment from "../../../Components/CreateComment";
import { useNavigate } from "react-router-dom";
import BookingForm from "./Component/BookingForm";
const DetailTour = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid px-5 flex flex-col">
      <main className="mb-12">
        <div className="card">
          <div className="card__body">
            <div className="half">
              <div className="image">
                <img
                  src={hotel}
                  alt=""
                  width={'100%'}
                  height={'100%'}
                />
              </div>
              <button class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600 m-3" onClick={()=> navigate('/view360/1')}>View 360</button>
            </div>
            <div className="half">
              <div className="featured_text flex flex-col items-start">
                <p className="text-[60px] font-bold text-black text-start">Khách sạn Metropole Hà Nội</p>
                <p className="price">$210.00</p>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  voluptatem nam pariatur voluptate perferendis, asperiores
                  aspernatur! Porro similique consequatur, nobis soluta minima,
                  quasi laboriosam hic cupiditate perferendis esse numquam
                  magni.
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
            <div className="action">
              <button type="button">Đặt phòng ngay</button>
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
