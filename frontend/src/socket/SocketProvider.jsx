import { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUser } from "../redux/slices/authSlice";

// eslint-disable-next-line react/prop-types
const SocketProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    let socket;
    if (user) {
      socket = io("http://localhost:3000", {
        query: {
          userId: user?._id,
        },
      });

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUser(onlineUsers));
      });

      return () => {
        socket.close();
      };
    }
  }, [user, dispatch]);

  return <>{children}</>;
};

export default SocketProvider;
