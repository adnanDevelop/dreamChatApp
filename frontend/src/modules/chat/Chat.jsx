import AllContact from "../../components/global/AllContact";
import ChatSearchBar from "../../components/global/ChatSearchBar";
import RecentChat from "../../components/global/RecentChat";

const Chat = () => {
  return (
    <>
      <ChatSearchBar />
      <RecentChat />
      <AllContact />
    </>
  );
};

export default Chat;
