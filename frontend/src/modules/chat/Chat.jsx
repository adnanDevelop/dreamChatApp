import { useState } from "react";
import AllContact from "../../components/global/AllContact";
import ChatSearchBar from "../../components/global/ChatSearchBar";
import RecentChat from "../../components/global/RecentChat";

const Chat = () => {
  const [params, setParams] = useState({ search: "" });

  const handleSearch = (e) =>
    setParams({ search: e.target.value.toLowerCase() });

  console.log(params, "search User");

  return (
    <>
      <ChatSearchBar handleSearch={handleSearch} params={params} />
      <RecentChat />
      <AllContact params={params} />
    </>
  );
};

export default Chat;
