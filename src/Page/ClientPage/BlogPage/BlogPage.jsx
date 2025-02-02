import blog1 from "@/assets/img/blog-1.jpg";
import blog2 from "@/assets/img/blog-2.jpg";
import blog3 from "@/assets/img/blog-3.jpg";
import Pagination from "../../../Components/Pagination";
import RightSection from "./Components/RightSection";
import { useEffect, useState } from "react";
import { notification } from "antd";
import { blogService } from "../../../Service/BlogService";
import { UserService } from "../../../Service/UserService";
import { renderTime } from "../../../Until/RenderTime";
import CreateBlog from "./Components/CreateBlog";
const URL_IMAGE = import.meta.env.VITE_IMAGE_URL;
const BlogPage = () => {
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
      setBlogs(processedBlogs);
    } catch (error) {
      notification.error({ message: "Lỗi lấy dữ liệu blogs" });
    }
  };
  useEffect(() => {
    getAllBlog();
  }, []);
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <CreateBlog getAll={getAllBlog}></CreateBlog>
        <div className="row">
          <div className="col-lg-8">
            <div className="row pb-3">
              { blogs.map((item, index) => (
                <div key={index} className="col-md-6 mb-4 pb-2">
                  <div className="blog-item">
                    <div className="position-relative">
                      <img
                        className="img-fluid w-100 min-h-[200px] max-h-[200px]"
                        src={URL_IMAGE + item.imageUrls[0]}
                        alt="Blog"
                      />
                    </div>
                    <div className="bg-white p-4">
                      <div className="flex mb-2 w-full">
                        <a
                          className="text-primary text-uppercase text-decoration-none"
                          href=""
                        >
                          {item.author.fullName}
                        </a>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500">
                          {item?.tags[0]}
                        </span>
                        <p className="font-mono text-xs font-normal opacity-75 text-black">
                          {renderTime(item.createdAt)}
                        </p>
                      </div>
                      <a
                        className="m-0 text-decoration-none font-bold text-black w-full text-xl"
                        href={`/detailblog/${item.blogId}`}
                      >
                        {item.title}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination></Pagination>
          </div>
          <RightSection></RightSection>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
