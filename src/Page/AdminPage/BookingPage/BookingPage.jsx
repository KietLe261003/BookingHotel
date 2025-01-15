import React, { useEffect, useState } from "react";
import { Table, Divider, Tag } from "antd";
import { bookingService } from "../../../Service/BookingService";
import { roomService } from "../../../Service/RoomService";
import UpdateBookingForm from "./Components/UpdateBookingForm";
import DeleteBookingForm from "./Components/DeleteBookingForm";

const BookingPage = () => {
  const [listData, setListData] = useState([]);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const columns = [
    {
      title: "Id",
      dataIndex: "bookingId",
      key: "bookingId",
      render: (text)=>(
        <strong>{text}</strong>
      )
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Hotel",
      dataIndex: "hotel",
      key: "hote",
      render: (text, record) => (
        <div>
          <div>
            <strong>{record.hotelId}</strong>
          </div>
          <div style={{ color: "#888" }}>{record.hotel}</div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Code",
      dataIndex: "verificationCode",
      key: "verificationCode",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (tags) => {
        let color = "geekblue";
        switch (tags) {
          case "Active":
            color = "green";
            break;
          case "Inactive":
            color = "red";
            break;
          case "Banned":
            color = "orange";
            break;
          default:
            break;
        }
        return <Tag color={color}>{tags}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a
            onClick={() => {
              setSelectedBookingId(record); // Cập nhật Booking khi click
            }}
          >
            <UpdateBookingForm getAll={getAllBooking} booking={selectedBookingId}/>
          </a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              setSelectedBookingId(record); // Cập nhật Booking khi click
            }}
          >
            <DeleteBookingForm getAll={getAllBooking} booking={selectedBookingId}/>
          </a>
        </span>
      ),
    },
  ];
  const getAllBooking = async () => {
    try {
      const res = await bookingService.getAll();
      const listBooking = res.data;
      const listInforBooking = await Promise.all(listBooking.map(async (item) => {
        const res = await roomService.findInforHotel(item.roomId);
        return { ...item, hotelId: res.data.hotelId, hotel: res.data.name };
      }));
      setListData(listInforBooking);
    } catch (error) {
      notification.error({ message: "Lỗi lấy toàn bộ booking" });
    }
  };
  useEffect(() => {
    getAllBooking();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={listData}></Table>
    </div>
  );
};

export default BookingPage;
