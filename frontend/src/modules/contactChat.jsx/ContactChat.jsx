// Components
import ChatBody from "../chatDashboard/component/ChatBody";
import ChatFooter from "../chatDashboard/component/ChatFooter";
import ChatHeader from "../chatDashboard/component/ChatHeader";

// Redux
import Invite from "../Invite/Invite";
import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../redux/features/authApi";
import { useGetMessagesByIdQuery } from "../../redux/features/conversationApi";
const ContactChat = () => {
  const { senderId } = useSelector((state) => state.conversation);
  const { data: userData } = useGetUserByIdQuery({ id: senderId });
  const {
    data: messageData,
    isLoading,
    refetch,
  } = useGetMessagesByIdQuery({
    id: senderId,
  });

  return (
    <main className="relative w-full h-screen">
      {!userData?.data ? (
        <Invite />
      ) : (
        <div>
          <ChatHeader userData={userData?.data} />
          <ChatBody
            isLoading={isLoading}
            messageData={messageData?.data?.messages}
          />
          <ChatFooter senderId={senderId} refetch={refetch} />
        </div>
      )}
    </main>
  );
};

export default ContactChat;
