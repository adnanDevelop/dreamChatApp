// Components
import Call from "../../modules/call/Call";
import Group from "../../modules/group/Group";
import Contact from "../../modules/contact/Contact";
import Setting from "../../modules/setting/Setting";

// Icons
import Chat from "../../modules/chat/Chat";
import { FaUsers } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

// Redux
import { setTab } from "../../redux/slices/tabSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.tab);

  const tabLinks = [
    { icon: <BiMessageAltDetail />, title: "Chat" },
    {
      icon: <LuUserSquare2 />,
      title: "Contact",
    },
    {
      icon: <FaUsers />,
      title: "Groups",
    },

    {
      icon: <FaPhoneVolume />,
      title: "Calls",
    },

    {
      icon: <IoMdSettings />,
      title: "Setting",
    },
  ];

  return (
    <div className="w-[450px] h-screen flex">
      {/* Mini Sidebar */}
      <div className="w-[70px] py-[20px] px-1 h-full bg-black overflow-y-auto fixed top-0 left-0">
        <img
          src="/image/chat-icon.svg"
          className="block mx-auto cursor-pointer"
          alt=""
        />
        {/* Tab buttons */}
        <div className="flex flex-col items-center justify-center gap-2 mt-5">
          {tabLinks.map((element, index) => {
            return (
              <button
                key={index}
                className={`w-[50px] h-[50px] flex items-center justify-center text-[22px] rounded-md transitions bg-transparent text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white ${
                  activeTab === element.title ? "bg-primary text-white" : ""
                }`}
                onClick={() => dispatch(setTab(element.title))}
              >
                {element.icon}
              </button>
            );
          })}
        </div>
      </div>
      {/* Full sidebar */}
      <div className="w-[380px] h-screen overflow-y-auto bg-[#181818] p-[20px] fixed top-0 left-[70px]">
        {(() => {
          switch (activeTab) {
            case "Chat":
              return <Chat />;
            case "Contact":
              return <Contact />;
            case "Groups":
              return <Group />;

            case "Calls":
              return <Call />;
            case "Setting":
              return <Setting />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
};

export default Sidebar;
