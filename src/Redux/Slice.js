import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    openModal: 0,
    openCreateFormDocument: 0
  };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setCloseModal: (state) => {
      state.openModal = 0;
    },
    setOpenCreateFormDocument: (state, action)=>{
      state.openCreateFormDocument=action.payload;
    }
  },
});
export const {
  setOpenModal,
  setCloseModal,
  setOpenCreateFormDocument,
} = counterSlice.actions;

export default counterSlice.reducer;