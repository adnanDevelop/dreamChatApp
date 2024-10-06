import { FaUsers } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
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
      icon: <FaRegDotCircle />,
      title: "Status",
    },
    {
      icon: <FaPhoneVolume />,
      title: "Calls",
    },
    {
      icon: <FaRegUserCircle />,
      title: "Profile",
    },
    {
      icon: <IoMdSettings />,
      title: "Setting",
    },
  ];

  return (
    <div className="w-[290px] h-screen flex">
      {/* Mini Sidebar */}
      <div className="w-[70px] py-[20px] px-1 h-full bg-black">
        <img src="/image/chat-icon.svg" className="block mx-auto" alt="" />
        {/* Tab buttons */}
        <div className="flex flex-col items-center justify-center gap-2 mt-5">
          {tabLinks.map((element, index) => {
            return (
              //   <button
              //     key={index}
              //     className="w-[50px] h-[50px] flex items-center justify-center text-xl rounded-md transitions bg-transparent text-white hover:bg-primary hover:text-white  focus:bg-primary focus:text-white"
              //   >
              //     {element.icon}
              //   </button>
              <div
                key={index}
                className="text-black bg-white tooltip"
                data-tip={element.title}
              >
                <button className=" w-[50px] h-[50px] flex items-center justify-center text-xl rounded-md transitions bg-transparent text-white hover:bg-primary hover:text-white  focus:bg-primary focus:text-white">
                  Hover me
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Full sidebar */}
      <div></div>
    </div>
  );
};

export default Sidebar;
