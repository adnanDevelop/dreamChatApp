import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/slices/messageSlice";

export const UseGetRealTimeMessage = () => {
  const dispatch = useDispatch();
  const { socket } = useSelector((state) => state.socket);
  const { message } = useSelector((store) => store.message);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessage([...message, newMessage]));
    });
  }, [message, dispatch, socket]);
};
