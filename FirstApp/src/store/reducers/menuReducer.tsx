import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  activeItem: null,
};
export const menuReducer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});
