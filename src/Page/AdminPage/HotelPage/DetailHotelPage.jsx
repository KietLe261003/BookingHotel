import ContentInforHotel from "./Components/ContentInforHotel";
import TableRoomHotel from "./Components/TableRoomHotel";
import RatingHotel from "./Components/RattingHotel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { notification } from "antd";
import { hotelServices } from "../../../Service/HotelService";
const URL_IMAGE = import.meta.env.VITE_IMAGE_URL;
const DetailHotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const getHotel = async () => {
    try {
      const res = await hotelServices.getHotelById(id);
      setHotel(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      notification.error({ message: "Lỗi lấy dữ liệu khách sạn" });
    }
  };
  useEffect(() => {
    if (id) getHotel();
  }, [id]);
  return (
    <div className=" mx-auto py-8 px-4 lg:py-16 lg:px-6 bg-slate-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          Chi tiết khách sạn
        </h2>
      </div>
      {hotel && (
        <>
          <div className="flex flex-col md:flex-row gap-5 bg-white p-5 rounded-xl mb-5">
            {/* Can Help Image */}
            <div className="mr-0 md:mr-8 mb-6 md:mb-0">
              <img
                className="w-1/2 md:w-full mx-auto max-w-[700px]"
                src={URL_IMAGE + hotel.imageUrls[0]}
                alt="can_help_banner"
              />
            </div>
            {/* End Can Help Image */}
            {hotel && <ContentInforHotel hotel={hotel}></ContentInforHotel>}
          </div>
          <TableRoomHotel hotelId={hotel.hotelId}></TableRoomHotel>
        </>
      )}
      <RatingHotel></RatingHotel>
    </div>
  );
};

export default DetailHotelPage;
