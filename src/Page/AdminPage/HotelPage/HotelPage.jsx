import React from "react";
import { Table, Divider, Tag } from 'antd';
import { Link } from "react-router-dom";
import RouterLinkAdmin from "../../../Until/RouterLinkAdmin";
const HotelPage = () => {
  const data = [
    {
      key: "1",
      id: "67777c2a237cfb43c08c7694",
      name: "New york center",
      phone: "0337612627",
      email: "huyencute@gmail.com",
      price: 100000,
      city: "Vũng Tàu",
      status: ["Active"],
    },
    {
      key: "2",
      id: "67777c2a237cfb43c08c7694",
      name: "New york center",
      phone: "0337612627",
      email: "huyencute@gmail.com",
      price: 100000,
      city: "Vũng Tàu",
      status: ["Active"],
    },
    {
      key: "3",
      id: "67777c2a237cfb43c08c7694",
      name: "New york center",
      phone: "0337612627",
      email: "huyencute@gmail.com",
      price: 100000,
      city: "Vũng Tàu",
      status: ["Active"],
    },
    {
      key: "4",
      id: "67777c2a237cfb43c08c7694",
      name: "New york center",
      phone: "0337612627",
      email: "huyencute@gmail.com",
      price: 100000,
      city: "Vũng Tàu",
      status: ["Active"],
    },
  ];
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
          <div style={{ color: "#888" }}>{record.id}</div>
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
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
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = "geekblue";
            switch (tag) {
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
            return (
              <Tag color={color} key={"volcano"}>
                {tag}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link to={`${record.key}`}>Detail</Link>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  return (
    <>
        <Table columns={columns} dataSource={data}></Table>
    </>
  );
};

export default HotelPage;
