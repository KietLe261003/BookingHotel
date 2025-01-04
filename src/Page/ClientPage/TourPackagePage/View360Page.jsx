import React, { useEffect, useState } from "react";
import View360Component from "../../../Components/View360Component";
import { useNavigate, useParams } from "react-router-dom";
import { hotelServices } from "../../../Service/HotelService";
import { Pannellum } from "pannellum-react";
const View360Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const getHotelById = async () => {
    try {
      const res = await hotelServices.getHotelById(id);
      setHotel(res?.data);
      console.log(res.data);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  };
  useEffect(() => {
    getHotelById();
  }, [id]);
  return (
    <div>
        {
            hotel && 
            <div className="flex justify-center h-[700px] border-2 border-black ">
                <Pannellum
                width={"100%"}
                height={"700px"}
                image={
                    hotel?.imageUrls[0]
                }
                pitch={10}
                yaw={180}
                hfov={200}
                autoLoad
                onLoad={() => {
                    console.log("panorama loaded");
                }}
                ></Pannellum>
            </div>
        }
    </div>
  );
};

export default View360Page;
