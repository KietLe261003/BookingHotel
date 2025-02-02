import ListComment from "../../../Components/ListComment";
import CreateComment from "../../../Components/CreateComment";
import ContentBlog from "./Components/ContentBlog";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notification } from "antd";
import { blogService } from "../../../Service/BlogService";
import RightSectionDetail from "./Components/RightSectionDetail";
const URL_IMAGE = import.meta.env.VITE_IMAGE_URL;
const DetailBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [refeshComment,setRefeshComment]=useState(0);
  const getBlogById = async () => {
    try {
      const res = await blogService.findBlogById(id);
      setBlog(res.data);
    } catch (error) {
      notification.error({ message: "Lỗi lấy dữ liệu" });
    }
  };
  useEffect(() => {
    if (id) getBlogById();
  }, [id]);
  return (
    <div className="container-fluid">
      {blog && (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              {/* Blog Detail Start */}
              <div className="pb-3">
                <div className="blog-item">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={URL_IMAGE+blog.imageUrls[0]} alt="" />
                    <div className="blog-date">
                      <h6 className="font-weight-bold mb-n1">01</h6>
                      <small className="text-white text-uppercase">Jan</small>
                    </div>
                  </div>
                </div>
              </div>
              <h1>{blog.title}</h1>
              <ContentBlog content={blog.content}></ContentBlog>
              {/* Blog Detail End */}

              {/* Comment List Start */}
              <ListComment blogId={id} refeshComment={refeshComment}></ListComment>

              <CreateComment blogId={blog.blogId} setRefeshComment={setRefeshComment}></CreateComment>
            </div>
            <RightSectionDetail blog={blog}></RightSectionDetail>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailBlogPage;
