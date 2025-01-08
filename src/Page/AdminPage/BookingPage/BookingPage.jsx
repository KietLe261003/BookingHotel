import React from 'react';
import { Table, Divider, Tag } from 'antd';
const BookingPage = () => {
    const data = [
        {
          key: "1",
          nameUser: "Quốc Trung",
          phone: "0337612627",
          email: "huyencute@gmail.com",
          hotelId: "677d441ef9e68d4fe7405770",
          hotel: "New york center",
          price: 100000,
          code: "536670",
          status: ["Check In"],
        },
        {
            key: "2",
            nameUser: "Quốc Trung",
            phone: "0337612627",
            email: "huyencute@gmail.com",
            hotelId: "677d441ef9e68d4fe7405770",
            hotel: "New york center",
            price: 100000,
            code: "536670",
            status: ["Check out"],
          },
          {
            key: "3",
            nameUser: "Quốc Trung",
            phone: "0337612627",
            email: "huyencute@gmail.com",
            hotelId: "677d441ef9e68d4fe7405770",
            hotel: "New york center",
            price: 100000,
            code: "536670",
            status: ["Cancel"],
          },
          {
            key: "4",
            nameUser: "Quốc Trung",
            phone: "0337612627",
            email: "huyencute@gmail.com",
            hotelId: "677d441ef9e68d4fe7405770",
            hotel: "New york center",
            price: 100000,
            code: "536670",
            status: ["Running"],
          },
      ];
      const columns = [
        {
          title: "Name",
          dataIndex: "nameUser",
          key: "nameUser",
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
            dataIndex: "code",
            key: "code",
        },
        {
          title: "Status",
          key: "status",
          dataIndex: "status",
          render: (tags) => (
            <span>
              {tags.map((tag) => {
                let color = "blue";
                switch (tag) {
                  case "Check In":
                    color = "green";
                    break;
                  case "Cancel":
                    color = "red";
                    break;
                  case "Check Out":
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
              <a>Detail</a>
              <Divider type="vertical" />
              <a>Delete</a>
            </span>
          ),
        },
      ];
    return (
        <div>
            <Table columns={columns} dataSource={data}></Table>
        </div>
    );
};

export default BookingPage;