import { useEffect } from "react";
import { io } from "socket.io-client";

// Components
import ChatBody from "../chatDashboard/component/ChatBody";
import ChatFooter from "../chatDashboard/component/ChatFooter";
import ChatHeader from "../chatDashboard/component/ChatHeader";

// Redux
import Invite from "../Invite/Invite";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../../redux/slices/messageSlice";
import { useGetUserByIdQuery } from "../../redux/features/authApi";
import { useGetMessagesByIdQuery } from "../../redux/features/conversationApi";
const ContactChat = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { message } = useSelector((store) => store.message);
  const { senderId } = useSelector((state) => state.conversation);
  const { data: userData } = useGetUserByIdQuery({ id: senderId });

  const {
    data: messageData,
    isLoading,
    refetch,
  } = useGetMessagesByIdQuery({
    id: senderId,
  });

  useEffect(() => {
    if (messageData) {
      dispatch(setMessage(messageData?.data?.messages));
    }
  }, [dispatch, messageData]);

  useEffect(() => {
    let socket;
    socket = io("http://localhost:3000", {
      query: {
        userId: user?._id,
      },
    });
    socket?.on("newMessage", (newMessage) => {
      console.log(newMessage, "newMessage");
      dispatch(setMessage([...message, newMessage]));
    });
  }, [message, dispatch, user]);

  return (
    <main className="relative w-full h-screen">
      {!userData?.data ? (
        <Invite />
      ) : (
        <div className="hidden lg:block">
          <ChatHeader userData={userData?.data} />
          <ChatBody isLoading={isLoading} messageData={message} />
          <ChatFooter senderId={senderId} refetch={refetch} />
        </div>
      )}
    </main>
  );
};

export default ContactChat;
