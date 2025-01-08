import { Divider, Table, Tag } from "antd";
import React from "react";
import CreateRoomForm from "./CreateRoomForm";

const TableRoomHotel = () => {
  const data = [
    {
      _id: "677794363a06cb1143a33d57",
      roomName: "Phòng tiêu chuẩn",
      roomType: "Standard",
      pricePerNight: 500000,
      pricePerHour: 80000,
      EmptyRoom: 50,
      availability: true,
      status: "Active",
    },
    {
      _id: "677794363a06cb1143a33d57",
      roomName: "Phòng tiêu chuẩn",
      roomType: "Standard",
      pricePerNight: 500000,
      pricePerHour: 80000,
      EmptyRoom: 50,
      availability: true,
      status: "Active",
    },
    {
      _id: "677794363a06cb1143a33d57",
      roomName: "Phòng tiêu chuẩn",
      roomType: "Standard",
      pricePerNight: 500000,
      pricePerHour: 80000,
      EmptyRoom: 50,
      availability: true,
      status: "Active",
    },
  ];

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
      dataIndex: "EmptyRoom",
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
          <a>Edit</a>
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl mb-5">
      <h2 className="mb-5">Room</h2>
      <CreateRoomForm></CreateRoomForm>
      <Table columns={columns} dataSource={data} rowKey="_id" />
    </div>
  );
};

export default TableRoomHotel;
