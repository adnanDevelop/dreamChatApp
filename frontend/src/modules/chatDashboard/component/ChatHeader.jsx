import { FaSearch, FaPhone } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import HeaderDropdown from "./HeaderDropdown";

// eslint-disable-next-line react/prop-types
const ChatHeader = ({ userData }) => {
  return (
    <section className="w-[calc(100%-450px)] h-[60px] z-[12] px-4 py-2.5 bg-black flex items-center justify-between border-b border-b-[#6f5c5c39] fixed top-0 right-0">
      {/* User profile */}
      <div className="flex items-center gap-2">
        <div className={`avatar online`}>
          <div className="w-[45px] rounded-full">
            <img
              // eslint-disable-next-line react/prop-types
              src={userData?.profilePhoto || "/image/avator/image-1.jpg"}
              alt=""
            />
          </div>
        </div>

        <div>
          <h5 className="text-base capitalize text-light">
            {/* eslint-disable-next-line react/prop-types */}
            {userData?.fullName || "Dummy"}
          </h5>
          <p className="text-xs text-content">Online</p>
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          {[FaSearch, IoVideocamOutline, FaPhone, RiErrorWarningLine].map(
            (Icon, index) => (
              <button
                key={index}
                className="w-[35px] h-[35px] flex items-center justify-center bg-transparent text-content transitions text-sm border border-transparent rounded-md hover:border-[#6f5c5c39] hover:text-primary"
              >
                {Icon && <Icon />}
              </button>
            )
          )}
        </div>
        <HeaderDropdown userData={userData} />
      </div>
    </section>
  );
};

export default ChatHeader;
