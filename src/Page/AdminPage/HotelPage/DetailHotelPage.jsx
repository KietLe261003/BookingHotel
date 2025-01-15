import React from "react";
import ContentInforHotel from "./Components/ContentInforHotel";
import TableRoomHotel from "./Components/TableRoomHotel";
import RatingHotel from "./Components/RattingHotel";

const DetailHotelPage = () => {
  return (
    <div className=" mx-auto py-8 px-4 lg:py-16 lg:px-6 bg-slate-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          Chi tiết khách sạn
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-5 bg-white p-5 rounded-xl mb-5">
        {/* Can Help Image */}
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img
            className="w-1/2 md:w-full mx-auto max-w-[700px]"
            src="http://localhost:8082/Uploads/a2ffa19a-79c3-4a7c-a1c9-a4e832c4c528_maxresdefault.jpg"
            alt="can_help_banner"
          />
        </div>
        {/* End Can Help Image */}
        <ContentInforHotel></ContentInforHotel>
      </div>
      <TableRoomHotel></TableRoomHotel>
      <RatingHotel></RatingHotel>
    </div>
  );
};

export default DetailHotelPage;
