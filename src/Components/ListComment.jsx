import React, { useEffect, useState } from "react";
import uesr from "@/assets/img/user.jpg";
import { notification } from "antd";
import { blogService } from "../Service/BlogService";
import { UserService } from "../Service/UserService";
import { renderTime } from "../Until/RenderTime";
const ListComment = ({ blogId, refeshComment }) => {
  const [comments, setComments] = useState([]);
  const getAllComment = async () => {
    try {
      const res = await blogService.getCommentByIdBlog(blogId);
      const listComment = await Promise.all(
        res.data.map(async (item) => {
          const user = await UserService.findUserByid(item.userId);
          return {
            ...item,
            author: user.data,
          };
        })
      );
      setComments(listComment);
    } catch (error) {
      console.log(error);
      notification.error({ message: "Lỗi lấy dữ liệu comment" });
    }
  };
  useEffect(() => {
    if (blogId) getAllComment();
  }, [blogId,refeshComment]);
  return (
    <div className="bg-white" style={{ padding: "30px", marginBottom: "30px" }}>
      <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        {comments.length} Comments
      </h4>
      {comments.map((item, index) => (
        <div className="media mb-4 flex justify-start">
          <img
            src={uesr}
            alt=""
            className="img-fluid mr-3 mt-1"
            style={{ width: "45px" }}
          />
          <div className=" flex flex-col items-start">
            <h6>
              <a href="">{item?.author.fullName}</a>{" "}
              <small>
                <i>{renderTime(item.createdAt)}</i>
              </small>
            </h6>
            <p className="text-left">
              {item.content}
            </p>
            <button className="btn btn-sm btn-outline-primary">Reply</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListComment;
