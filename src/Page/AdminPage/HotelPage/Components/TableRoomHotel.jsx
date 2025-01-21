import { Divider, notification, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import CreateRoomForm from "./CreateRoomForm";
import { hotelServices } from "../../../../Service/HotelService";
import UpdateRoomForm from "./UpdateRoomForm";
import DeleteRoomForm from "./DeleteRoomForm";
const TableRoomHotel = ({hotelId}) => {
  const [selectRoom,setSelectRoom]=useState(null);
  const [rooms,setRooms]=useState([]);
  const getAllRoom = async ()=>{
      try {
        const res = await hotelServices.getRoomByHotelId(hotelId);
        console.log(res.data);
        setRooms(res?.data);
      } catch (error) {
        notification.error({message: "Lỗi lấy dữ liệu"})
        console.log("Lỗi: ",error);
      }
    }
  const columns = [
    {
      title: "Room Name",
      dataIndex: "roomName",
      key: "roomName",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Room Type",
      dataIndex: "roomType",
      key: "roomType",
    },
    {
      title: "Price",
      dataIndex: "pricePerNight",
      key: "pricePerNight",
      render: (price) => `${price.toLocaleString()} VND`,
    },
    {
      title: "Empty Room",
      dataIndex: "emptyRoom",
      key: "EmptyRoom",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (available) => (
        <Tag color={available ? "green" : "red"}>
          {available ? "Available" : "Not Available"}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "blue" : "gray"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <span>
          <a>View</a>
          <Divider type="vertical" />
          <a onClick={()=>{setSelectRoom(record)}}>
            <UpdateRoomForm selectRoom={selectRoom} getAll={getAllRoom}></UpdateRoomForm>
          </a>
          <Divider type="vertical" />
          <a onClick={()=>{setSelectRoom(record)}}>
            <DeleteRoomForm selectRoom={selectRoom} getAll={getAllRoom}></DeleteRoomForm>
          </a>
        </span>
      ),
    },
  ];
  useEffect(()=>{
    if(hotelId)
    getAllRoom();
  },[hotelId]);
  return (
    <div className="bg-white p-5 rounded-xl mb-5">
      <h2 className="mb-5">Room</h2>
      <CreateRoomForm hotelId={hotelId} getAll={getAllRoom}></CreateRoomForm>
      <Table columns={columns} dataSource={rooms} rowKey="_id" />
    </div>
  );
};

export default TableRoomHotel;
