import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeTab: localStorage.getItem("activeTab") || "chat" };

const tabSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.activeTab = action.payload;
      localStorage.setItem("activeTab", action.payload);
    },
  },
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;
