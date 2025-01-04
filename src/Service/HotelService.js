import { request } from "../Comomon/Config/Request"

export const hotelServices={
    getAllHotel: async()=>{
        const response = await request.get("/hotelservice/");
        return response.data;
    },
    getHotelById: async(id)=>{
        const response = await request.get(`/hotelservice/${id}`);
        return response.data;
    }
}