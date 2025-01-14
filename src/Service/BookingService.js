import { request } from "../Comomon/Config/Request"

export const bookingService = {
    getAll: async()=>{
        const res= await request.get("/hotelservice/booking");
        return res.data;
    },
    createBooking: async(data)=>{
        const res= await request.post("/hotelservice/booking",data);
        return res.data;
    },
    updateBooking: async(id,data)=>{
        const res= await request.put(`/hotelservice/booking/${id}`,data);
        return res.data;
    }
}