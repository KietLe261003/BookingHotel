import React, { useEffect, useState } from "react";
import uesr from "@/assets/img/user.jpg";
import { notification } from "antd";
import { blogService } from "../Service/BlogService";
import { UserService } from "../Service/UserService";
import { renderTime } from "../Until/RenderTime";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'
import { Icon3Dot, IconArowDown } from "../Comomon/Icons/Icons";
import DeleteComment from "../Page/ClientPage/BlogPage/Components/DeleteComment";
import UpdateComment from "../Page/ClientPage/BlogPage/Components/UpdateComment";
const ListComment = ({ blogId, refeshComment }) => {
  const [comments, setComments] = useState([]);
  const [userInfo,setUserInfo]=useState(null);
  const getAllComment = async () => {
    try {
      const currentUser = await UserService.findUserByToken();
      setUserInfo(currentUser.data);
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
        <div className="media mb-4 flex justify-between">
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
              <p className="text-left">{item.content}</p>
              
            </div>
          </div>
          {
            userInfo.userId === item?.author.userId &&
            <Menu>
              <MenuButton rightIcon={<IconArowDown />}>
                <Icon3Dot />
              </MenuButton>
              <MenuList>
                <MenuItem>
                <UpdateComment blogId={blogId} commentId={item.commentId} content={item.content} getAll={getAllComment}></UpdateComment>
                </MenuItem>
                <MenuItem>
                  <DeleteComment blogId={blogId} commentId={item.commentId} getAll={getAllComment}/>
                </MenuItem>
              </MenuList>
            </Menu>
          }
        </div>
      ))}
    </div>
  );
};

export default ListComment;
