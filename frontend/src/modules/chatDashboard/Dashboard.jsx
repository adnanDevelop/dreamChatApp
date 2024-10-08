import { useSelector } from "react-redux";
import Invite from "../Invite/Invite";
import ContactChat from "../contactChat.jsx/ContactChat";
import GroupChat from "../groupChat/GroupChat";

const Dashboard = () => {
  const { activeTab } = useSelector((state) => state.tab);

  return (
    <main className="w-full h-screen bg-[url('/image/dashboard-bg.png')] bg-repeat bg-cover bg-center  bg-[#0c0c0c] ">
      {(() => {
        switch (activeTab) {
          case "Invite":
          case "Contact":
          case "Call":
          case "Setting":
            return <Invite />;
          case "Chat":
            return <ContactChat />;
          case "Groups":
            return <GroupChat />;
          default:
            null;
            break;
        }
      })()}
    </main>
  );
};

export default Dashboard;
