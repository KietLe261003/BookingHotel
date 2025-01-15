import { request } from "../Comomon/Config/Request"

export const hotelServices = {
  getAllHotel: async () => {
    const response = await request.get("/hotelservice/");
    return response.data;
  },
  getHotelById: async (id) => {
    const response = await request.get(`/hotelservice/${id}`);
    return response.data;
  },
  getRoomByHotelId: async (id) => {
    const response = await request.get(`/hotelservice/getallroom/${id}`);
    return response.data;
  },
  deleteHotel: async (id) => {
    const response = await request.delete(`/hotelservice/${id}`);
    return response.data;
  },
  createHotel: async (data) => {
    const response = await request.post("/hotelservice/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  updateHotel: async (id, data) => {
    const response = await request.put(`/hotelservice/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};