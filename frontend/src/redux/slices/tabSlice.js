import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeTab: localStorage.getItem("activeTab") || "Chat" };

const tabSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.activeTab = action.payload;
      localStorage.setItem("activeTab", action.payload);
    },
    removeTab: (state) => {
      state.activeTab = "chat";
      localStorage.removeItem("activeTab");
    },
  },
});

export const { setTab, removeTab } = tabSlice.actions;
export default tabSlice.reducer;
