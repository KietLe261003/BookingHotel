import { Divider, notification, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { UserService } from "../../../Service/UserService";
import { blogService } from "../../../Service/BlogService";
import DeleteBlog from "./Components/DeleteBlog";

const BlogPageAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectBlog, setSelectBlog] = useState(null);
  const columns = [
    {
      title: "Id",
      dataIndex: "blogId",
      key: "blogId",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (text, record) => (
        <div>
          <div>
            <strong>{record.nameAuthor}</strong>
          </div>
          <div style={{ color: "#888" }}>{record.idAuthor}</div>
        </div>
      ),
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
          <a href={`/detailblog/${record.blogId}`}>Detail</a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              setSelectBlog(record.blogId); // Cập nhật Booking khi click
            }}
          >
            <DeleteBlog blogId={selectBlog} getAllBlog={getAllBlog}></DeleteBlog>
          </a>
        </span>
      ),
    },
  ];
  const getAllBlog = async () => {
    try {
      const res = await blogService.getAllBlog();
      console.log(res);

      const processedBlogs = await Promise.all(
        res.map(async (item) => {
          const user = await UserService.findUserByid(item.author);
          return {
            ...item,
            nameAuthor: user.data.fullName,
            idAuthor: user.data.userId,
          };
        })
      );
      setBlogs(processedBlogs);
    } catch (error) {
      notification.error({ message: "Lỗi lấy dữ liệu blogs" });
    }
  };
  useEffect(() => {
    getAllBlog();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={blogs}></Table>
    </div>
  );
};

export default BlogPageAdmin;
