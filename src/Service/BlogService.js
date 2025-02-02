import { request } from "../Comomon/Config/Request";

export const blogService = {
  getAllBlog: async () => {
    const res = await request.get("/blogservice");
    return res.data;
  },
  findBlogById: async (id) => {
    const res = await request.get(`/blogservice/${id}`);
    return res.data;
  },
  createBlog: async (data) => {
    const res = await request.post("/blogservice", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },
  createComment: async(blogId,data)=>{
    const res = await request.post(`/blogservice/addComment/${blogId}`,data);
    return res.data;
  },
  getCommentByIdBlog: async(blogId)=>{
    const res= await request.get(`/blogservice/getcomment/${blogId}`);
    return res.data;
  },
  deleteBlog: async(blogId)=>{
    const res= await request.delete(`/blogservice/${blogId}`);
    return res.data;
  }
};
