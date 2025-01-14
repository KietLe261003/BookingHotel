import React, { useEffect, useState } from "react";
import { Table, Divider, Tag } from "antd";
import { Link } from "react-router-dom";
import RouterLinkAdmin from "../../../Until/RouterLinkAdmin";
import { hotelServices } from "../../../Service/HotelService";
import DeleteHotelForm from "./Components/DeleteHotelForm";
const HotelPage = () => {
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div>
          <div>
            <strong>{record.name}</strong>
          </div>
          <div style={{ color: "#888" }}>{record.hotelId}</div>
        </div>
      ),
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
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
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
          <Link to={`${record.key}`}>Detail</Link>
          <Divider type="vertical" />
          <a
            onClick={() => {
              setSelectedHotelId(record.hotelId); // Cập nhật userId khi click
            }}
          >
            <DeleteHotelForm
              getAllHotel={getAllHotel}
              hotelId={selectedHotelId}
            />
          </a>
        </span>
      ),
    },
  ];
  const [listData, setListData] = useState([]);
  const getAllHotel = async () => {
    try {
      const res = await hotelServices.getAllHotel();
      setListData(res.data);
    } catch (error) {
      notification.error({ message: "Lỗi lấy toàn bộ hotel" });
    }
  };
  useEffect(() => {
    getAllHotel();
  }, []);
  return (
    <>
      <Table columns={columns} dataSource={listData}></Table>
    </>
  );
};

export default HotelPage;
