import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./reducers/menuReducer";

export const store = configureStore({
  reducer: { menuReducer: menuReducer.reducer },
});
