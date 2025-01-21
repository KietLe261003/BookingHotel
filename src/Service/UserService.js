import axios from "axios";
import { request } from "../Comomon/Config/Request"
const USER_TOKEN=import.meta.env.VITE_USER_TOKEN;
export const UserService={
    login: async(loginData)=>{   
        const res=await request.post("/userservice/auth",loginData);
        return res.data;
    },
    checkToken: async(token)=>{
        const dataRequest={
            token
        }
        const res = await axios.post("http://localhost:8080/api/userservice/auth/checktoken",dataRequest);
        return res.data;
    },
    findUserByid: async(id)=>{
        const res = await request.get(`/userservice/${id}`);
        return res.data;
    },
    getAllUser: async()=>{
        const res = await request.get("/userservice");
        return res.data;
    },
    createUser: async(data)=>{
        const res = await request.post("/userservice",data);
        return res.data;
    },
    updateUser: async(id,data)=>{
        const res = await request.put(`/userservice/${id}`,data);
        return res.data;
    },
    deleteUser: async(id)=>{
        const res = await request.delete(`/userservice/${id}`);
        return res.data;
    },
    findUserByToken: async()=>{
        const storeToken = localStorage.getItem(USER_TOKEN);
        const res = await request.get(`/userservice/findbytoken/${storeToken}`);
        return res.data;
    }
}