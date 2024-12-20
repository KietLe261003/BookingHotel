import React from "react";
import { Pannellum} from "pannellum-react";
const View360Component = () => {
  return (
    <div className="flex justify-center h-[700px] border-2 border-black ">
      <Pannellum
        width={"100%"}
        height={"700px"}
        image={
          "https://l13.alamy.com/360/2E30CWW/360-panorama-of-a-furniture-showroom-interior-showcasing-different-living-room-and-dining-furnishings-for-sale-on-a-reflective-textured-white-floor-2E30CWW.jpg"
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
