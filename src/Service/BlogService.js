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
  }
};
