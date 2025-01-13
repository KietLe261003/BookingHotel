import React, { useEffect, useState } from "react";
import { Table, Divider, Tag, notification } from "antd";
import { UserService } from "../../../Service/UserService";
const ManagementAccountPage = () => {
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (content)=>{
        return <span>{!content? 'Nữ':'Nam'}</span>
      }
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      key: "accountStatus",
      dataIndex: "accountStatus",
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
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a>Edit</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  // const data = [
  //   {
  //     fullName: "John Brown",
  //     email: "kietle@gmail.com",
  //     phoneNumber: "012345678",
  //     address: "New York No. 1 Lake Park",
  //     gender: true,
  //     accountStatus: "Active",
  //     role: "Admin",
  //   },
  // ];
  const [listData,setListData]=useState([]);
  const getAllUser=async ()=>{
    try {
      const res = await UserService.getAllUser();
      setListData(res.data);
    } catch (error) {
      notification.error({message: "Lỗi lấy toàn bộ user"});
    }
  }
  useEffect(()=>{
    getAllUser();
  },[])
  return (
    <div>
      <Table
        columns={columns}
        dataSource={listData}
        pagination={{ pageSize: 5 }}
      ></Table>
    </div>
  );
};

export default ManagementAccountPage;
