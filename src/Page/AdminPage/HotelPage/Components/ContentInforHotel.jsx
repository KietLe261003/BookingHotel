import React from 'react';
import { IconAddress, IconMail, IconPhone } from '../../../../Comomon/Icons/Icons';

const ContentInforHotel = () => {
    return (
        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <div class="md:pl-8 w-full">
            <h2 class="text-xl font-semibold text-black dark:text-white mb-4">
            CSJ Tower - Luxury Apartment Near Beach Vung Tau
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
            New York Center là một khách sạn hiện đại tọa lạc tại trung tâm thành phố, 
            mang phong cách sang trọng và tiện nghi. Với vị trí thuận lợi gần các địa điểm nổi tiếng, khách sạn cung cấp các phòng nghỉ đẳng cấp, 
            nhà hàng quốc tế, spa thư giãn, và dịch vụ chuyên nghiệp, phù hợp cho cả khách du lịch lẫn doanh nhân.
            </p>
            <h2 class="text-xl font-semibold text-black dark:text-white mb-4">
              Tiện ích
            </h2>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-indigo-100 text-black px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
              <span class="bg-indigo-100 text-black px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span class="bg-indigo-100 text-black px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span class="bg-indigo-100 text-black px-3 py-1 rounded-full text-sm">
                Python
              </span>
              <span class="bg-indigo-100 text-black px-3 py-1 rounded-full text-sm">
                SQL
              </span>
            </div>
            <h2 class="text-xl font-semibold text-black dark:text-white mb-4">
              Thông tin liên hệ
            </h2>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-center">
                <IconMail/>
                john.doe@example.com
              </li>
              <li class="flex items-center">
                <IconPhone></IconPhone>
                +1 (555) 123-4567
              </li>
              <li class="flex items-center">
                <IconAddress></IconAddress>
                Vũng Tàu
              </li>
            </ul>
          </div>
        </div>
    );
};

export default ContentInforHotel;