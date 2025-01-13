import { request } from "../Comomon/Config/Request"

export const UserService={
    login: async(loginData)=>{   
        const res=await request.post("/userservice/auth",loginData);
        return res.data;
    },
    checkToken: async(token)=>{
        const dataRequest={
            token
        }
        const res=await request.post("/userservice/auth/checktoken",dataRequest);
        return res.data;
    },
    getAllUser: async()=>{
        const res = await request.get("/userservice");
        return res.data;
    }
}