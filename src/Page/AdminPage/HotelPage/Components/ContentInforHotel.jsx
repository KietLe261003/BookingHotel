import { IconAddress, IconMail, IconPhone } from '../../../../Comomon/Icons/Icons';

const ContentInforHotel = ({hotel}) => {
    return (
      <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
        <div className="md:pl-8 w-full">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            {hotel.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {hotel.description}
          </p>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Tiện ích
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {hotel.amenities.map((item, index) => (
              <span key={index} className="bg-indigo-100 text-black px-3 py-1 rounded-full text-sm">
                {item}
              </span>
            ))}
            
          </div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Thông tin liên hệ
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <IconMail />
              {hotel.email}
            </li>
            <li className="flex items-center">
              <IconPhone></IconPhone>
              {hotel.phoneNumber}
            </li>
            <li className="flex items-center">
              <IconAddress></IconAddress>
              {hotel.city}
            </li>
          </ul>
        </div>
      </div>
    );
};

export default ContentInforHotel;