import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch, FaPhone } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";

const ChatHeader = () => {
  return (
    <section className="w-[calc(100%-450px)] h-[60px] px-4 py-2.5 bg-black z-[1] flex items-center justify-between border-b  border-b-[#6f5c5c39] fixed top-0 right-0">
      {/* User profile */}
      <div className="flex items-center gap-2">
        <div className={`avatar online`}>
          <div className="w-[45px] rounded-full">
            <img src="/image/avator/image-1.jpg" alt="" />
          </div>
        </div>

        <div>
          <h5 className="text-base font-medium text-light">Nichol</h5>
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
        <div className="flex items-center justify-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="mt-0 text-base text-content rounded-btn focus:text-primary"
            >
              <BsThreeDotsVertical />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-[#0d0d0d] border border-[#222224] rounded-md z-[1] mt-4 w-[150px] p-2.5 shadow"
            >
              {[
                "Close Chat",
                "Mute Notification",
                "Clear Message",
                "Delete Chat",
                "Report",
                "Block",
              ].map((element, index) => {
                return (
                  <li
                    key={index}
                    className="transitions bg-transparent hover:bg-[#161616] mb-1.5  text-light rounded-md transitions hover:text-primary"
                  >
                    <a className="p-2">{element}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatHeader;
