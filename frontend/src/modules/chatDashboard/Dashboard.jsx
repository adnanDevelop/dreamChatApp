import { useSelector } from "react-redux";
import Invite from "../Invite/Invite";

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

          default:
            null;
            break;
        }
      })()}
    </main>
  );
};

export default Dashboard;
