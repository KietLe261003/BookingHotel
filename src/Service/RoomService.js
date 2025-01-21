import { request } from "../Comomon/Config/Request";

export const roomService = {
  findInforHotel: async (id) => {
    const response = await request.get(`/hotelservice/room/findhotel/${id}`);
    return response.data;
  },
  createRoom: async (data) => {
    const response = await request.post("/hotelservice/room", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  updateRoom: async (id, data) => {
    const response = await request.put(`/hotelservice/room/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  deleteRoom: async (id) => {
    const response = await request.delete(`/hotelservice/room/${id}`);
    return response.data;
  },
};
