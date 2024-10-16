import ChatBody from "../chatDashboard/component/ChatBody";
import ChatFooter from "../chatDashboard/component/ChatFooter";
import ChatHeader from "../chatDashboard/component/ChatHeader";

import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../redux/features/authApi";
import { useGetMessagesByIdQuery } from "../../redux/features/conversationApi";
import Invite from "../Invite/Invite";
const ContactChat = () => {
  const { senderId } = useSelector((state) => state.conversation);

  const { data: userData } = useGetUserByIdQuery({ id: senderId });
  const { data: messageData } = useGetMessagesByIdQuery({
    id: senderId,
  });

  return (
    <main className="relative w-full h-screen">
      {!userData?.data ? (
        <Invite />
      ) : (
        <div>
          <ChatHeader userData={userData?.data} />
          <ChatBody messages={messageData?.data} />
          <ChatFooter />
        </div>
      )}
    </main>
  );
};

export default ContactChat;
