import React, { useEffect, useState } from "react";
import uesr from '@/assets/img/user.jpg';
import imgBlog from '@/assets/img/blog-100x100.jpg';
import { notification } from "antd";
import { UserService } from "../../../../Service/UserService";
import { blogService } from "../../../../Service/BlogService";
import { renderTime } from "../../../../Until/RenderTime";
const URL_IMAGE = import.meta.env.VITE_IMAGE_URL;
const RightSectionDetail = ({blog}) => {
  const [author,setAuthor]=useState(null);
  const getAuthor= async()=>{
    try {
      const userData = await UserService.findUserByid(blog.author);
      setAuthor(userData.data);
    } catch (error) {
      notification.error({message: "Lỗi lấy user"});
    }
  }
  const [blogs, setBlogs] = useState([]);
    const getAllBlog = async () => {
      try {
        const res = await blogService.getAllBlog();
        const processedBlogs = await Promise.all(
          res.map(async (item) => {
            const user = await UserService.findUserByid(item.author);
            return {
              ...item,
              author: user.data,
            };
          })
        );
        console.log(processedBlogs);
        setBlogs(processedBlogs);
      } catch (error) {
        notification.error({ message: "Lỗi lấy dữ liệu blogs" });
      }
    };
  useEffect(()=>{
    if(blog)
      getAuthor();
    getAllBlog();
  },[blog])
  return (
    <div className="col-lg-4 mt-5 mt-lg-0">
      {/* Author Bio */}
      <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
        <img
          src={uesr}
          className="img-fluid mx-auto mb-3"
          style={{ width: "100px" }}
          alt="User"
        />
        <h3 className="text-primary mb-3">{author && author.fullName}</h3>
        <p>
          Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit
          no ut est ipsum erat kasd amet elitr
        </p>
        <div className="d-flex justify-content-center">
          {["facebook-f", "twitter", "linkedin-in", "instagram", "youtube"].map(
            (icon, index) => (
              <a key={index} className="text-primary px-2" href="">
                <i className={`fab fa-${icon}`}></i>
              </a>
            )
          )}
        </div>
      </div>

      {/* Search Form */}
      <div className="mb-5">
        <div className="bg-white" style={{ padding: "30px" }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control p-4"
              placeholder="Keyword"
            />
            <div className="input-group-append">
              <span className="input-group-text bg-primary border-primary text-white">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category List */}
      <div className="mb-5">
        <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
          Categories
        </h4>
        <div className="bg-white" style={{ padding: "30px" }}>
          <ul className="list-inline m-0">
            {[
              "Web Design",
              "Web Development",
              "Online Marketing",
              "Keyword Research",
              "Email Marketing",
            ].map((category, index) => (
              <li
                key={index}
                className="mb-3 d-flex justify-content-between align-items-center"
              >
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>
                  {category}
                </a>
                <span className="badge badge-primary badge-pill">
                  {Math.floor(Math.random() * 200)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Post */}
      <div className="mb-5">
        <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
          Recent Post
        </h4>
        {blogs.slice(0,3).map((post, index) => (
          <a
            key={index}
            className="d-flex align-items-center text-decoration-none bg-white mb-3"
            href={`/detailblog/${post.blogId}`}
          >
            <img className="max-w-[150px] max-h-[100px] min-w-[150px] min-h-[100px]" src={URL_IMAGE+post.imageUrls[0]} alt="Recent Post" />
            <div className="pl-3">
              <h6 className="m-1">
                {post.title}
              </h6>
              <small>{renderTime(post.createdAt)}</small>
            </div>
          </a>
        ))}
      </div>

      {/* Tag Cloud */}
      <div className="mb-5">
        <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
          Tag Cloud
        </h4>
        <div className="d-flex flex-wrap m-n1">
          {blog.tags.map((tag, index) => (
            <a key={index} href="" className="btn btn-light m-1">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSectionDetail;
