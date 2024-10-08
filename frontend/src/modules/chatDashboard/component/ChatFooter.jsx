import { CiFolderOn } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
const ChatFooter = () => {
  return (
    <section className="w-[calc(100%-450px)] h-[60px] px-4 py-2.5 bg-black flex items-center justify-between border-t  border-t-[#6f5c5c39] fixed bottom-0 right-0">
      <div className="w-full h-[45px] rounded-md flex bg-[#181818] pe-2">
        <input
          type="text"
          className="w-full px-3 text-sm bg-transparent focus:outline-none text-light font-poppin placeholder:text-sm"
          placeholder="Type a message..."
        />
        <div className="flex items-center gap-3">
          {[MdOutlineEmojiEmotions, CiFolderOn].map((Icon, index) => {
            return (
              <button
                key={index}
                className="transitions text-content hover:text-primary"
              >
                {Icon && <Icon />}
              </button>
            );
          })}
          <button className="w-[30px] h-[30px] rounded-md flex items-center justify-center bg-primary transitions hover:bg-[#472d9f] text-white text-xs">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatFooter;
