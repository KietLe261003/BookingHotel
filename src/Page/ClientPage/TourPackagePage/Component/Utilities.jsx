import React from "react";
import { iconsService } from "../../../../Comomon/Icons/IconService";


const Utilities = ({amenities}) => {
  const renderIcon = (key) => {
    const item = iconsService.find((service) => service.key === key);
    if (!item) return null; // Nếu không tìm thấy, trả về null
    return (
      <a
        key={key}
        href="#"
        className="block w-1/2 py-10 text-center border lg:w-1/4"
      >
        <div>
          {item.icon}
          <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
            {item.key}
          </p>
        </div>
      </a>
    );
  };
  return (
    <div className="container relative z-40 mx-auto">
      <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
        {
          amenities && amenities.map((item) => renderIcon(item))
        }
      </div>
    </div>
  );
};

export default Utilities;
