import { createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "../../utils/cookie";

const initialState = {
  onlineUser: null,
  isAuthenticated: !!getCookie("token"),
  user: JSON.parse(getCookie("userData") || "{}"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      setCookie("userData", JSON.stringify(action.payload));
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      setCookie("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      removeCookie("token");
      removeCookie("userData");
    },
    setOnlineUser: (state, action) => {
      state.onlineUser = action.payload;
    },
  },
});

export const { setUser, login, logout, setOnlineUser } = authSlice.actions;
export default authSlice.reducer;
