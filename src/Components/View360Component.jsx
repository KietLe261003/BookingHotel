import React from "react";
import { Pannellum} from "pannellum-react";
const View360Component = () => {
  return (
    <div className="flex justify-center h-[700px] border-2 border-black ">
      <Pannellum
        width={"100%"}
        height={"700px"}
        image={
          "https://l13.alamy.com/360/RE702C/minsk-belarus-august-10-2017-360-panorama-view-in-bedroom-loft-room-in-luxury-elite-vip-hotel-full-360-by-180-degrees-angle-panorama-in-equirect-RE702C.jpg"
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
  );
};

export default View360Component;
