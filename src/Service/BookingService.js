import { request } from "../Comomon/Config/Request"

export const bookingService = {
    createBooking: async(data)=>{
        console.log(data);
        const res= await request.post("/hotelservice/booking",data);
        return res.data;
    }
}