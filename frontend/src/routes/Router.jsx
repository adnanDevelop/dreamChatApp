import { useEffect } from "react";
import { Routes } from "./Routes";
import io from "socket.io-client";
import { BrowserRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setOnlineUser } from "../redux/slices/authSlice";

export const Router = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      const newSocket = io("http://localhost:3000", {
        query: {
          userId: user._id,
        },
      });
      // dispatch(setSocket(newSocket));
      newSocket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUser(onlineUsers));
      });

      return () => newSocket.close();
    }
  }, [user]);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
