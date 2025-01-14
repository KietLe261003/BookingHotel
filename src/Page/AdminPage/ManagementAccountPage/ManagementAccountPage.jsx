import React, { useEffect, useState } from "react";
import { Table, Divider, Tag, notification } from "antd";
import { UserService } from "../../../Service/UserService";
import CreateForm from "./Components/CreateForm";
import UpdateForm from "./Components/UpdateForm";
import DeleteForm from "./Components/DeleteForm";

const ManagementAccountPage = () => {
  const [listData,setListData]=useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const getAllUser=async ()=>{
    try {
      const res = await UserService.getAllUser();
      setListData(res.data);
    } catch (error) {
      notification.error({message: "Lỗi lấy toàn bộ user"});
    }
  }
  const columns = [
    {
      title: "Id",
      dataIndex: "userId",
      key: "userId",
      render: (text) => <a>{text}</a>,
    },
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
          <a
            onClick={() => {
              setSelectedUserId(record.userId); // Cập nhật userId khi click
            }}
          >
            <UpdateForm
              getAllUser={getAllUser}
              userId={selectedUserId}
            />
          </a>
          <span> | </span>
          <a
            onClick={() => {
              setSelectedUserId(record.userId); // Cập nhật userId khi click
            }}
          >
            <DeleteForm getAllUser={getAllUser}
              userId={selectedUserId} />
          </a>
        </span>
      ),
    },
  ];
  useEffect(()=>{
    getAllUser();
  },[])
  return (
    <div>
      <CreateForm getAllUser={getAllUser}></CreateForm>
      <Table
        columns={columns}
        dataSource={listData}
        pagination={{ pageSize: 5 }}
      ></Table>
    </div>
  );
};

export default ManagementAccountPage;
