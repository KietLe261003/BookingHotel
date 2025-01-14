import { request } from "../Comomon/Config/Request"

export const roomService = {
    findInforHotel: async(id)=>{
        const response = await request.get(`/hotelservice/room/findhotel/${id}`);
        return response.data;
    }
}