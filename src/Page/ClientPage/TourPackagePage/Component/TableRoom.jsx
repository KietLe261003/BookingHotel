import { Button } from "@chakra-ui/react";
import React from "react";
import BookingForm from "./BookingForm";
import { IconDate } from "../../../../Comomon/Icons/Icons";
import SignupForm from "./Test";

const TableHeader = () => (
  <thead>
    <tr>
      <th className="px-4 py-3 bg-gray-50 text-gray-700 text-xs font-semibold text-left uppercase border">
        Tên phòng
      </th>
      <th className="px-4 py-3 bg-gray-50 text-gray-700 text-xs font-semibold text-left uppercase border">
        Loại phòng
      </th>
      <th className="px-4 py-3 bg-gray-50 text-gray-700 text-xs font-semibold text-left uppercase border">
        Giá
      </th>
      <th className="px-4 py-3 bg-gray-50 text-gray-700 text-xs font-semibold text-left uppercase border">
        Số người
      </th>
      <th className="px-4 py-3 bg-gray-50 text-gray-700 text-xs font-semibold text-left uppercase border">
        Trạng thái
      </th>
      <th className="px-4 py-3 bg-gray-50 text-gray-700 text-xs font-semibold text-left uppercase border">
        
      </th>
    </tr>
  </thead>
);

const TableRow = ({ room }) => (
  <tr className="text-gray-500">
    <td className="border px-4 py-3 text-sm">{room.roomName}</td>
    <td className="border px-4 py-3 text-sm">{room.roomType}</td>
    <td className="border px-4 py-3 text-sm">
      {room.pricePerNight.toLocaleString()} VND
    </td>
    <td className="border px-4 py-3 text-sm">{room.maxOccupancy}</td>
    <td className="border px-4 py-3 text-sm">
      {room.availability ? (
        <span className="text-green-600 font-medium">Còn phòng</span>
      ) : (
        <span className="text-red-600 font-medium">Hết phòng</span>
      )}
    </td>
    <td className="border px-4 py-3 text-sm">
      <BookingForm room={room}/>
    </td>
  </tr>
);

const TableRoom = ({ rooms }) => {
  return (
    <>
    <h2 className="text-2xl font-medium mb-4 text-start">Tìm kiếm phòng theo ngày</h2>   
      <div id="date-range-picker" date-rangepicker="true" className="flex items-center mb-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IconDate></IconDate>
          </div>
          <input
            id="datepicker-range-start"
            name="start"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
          />
        </div>
        <span className="mx-4 text-gray-500">to</span>
        <div className="relative mr-3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IconDate></IconDate>
          </div>
          <input
            id="datepicker-range-end"
            name="end"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
          />
        </div>
        <Button>Tìm kiếm</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-md">
          <TableHeader />
          <tbody className="divide-y divide-gray-100">
            {rooms.map((room) => (
              <TableRow key={room.roomId} room={room} />
            ))}
          </tbody>
        </table>
      </div>
      <SignupForm></SignupForm>
    </>
  );
};

export default TableRoom;
