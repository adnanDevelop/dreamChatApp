import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

const RecentChat = () => {
  const chatContent = [
    { image: "/image/avator/image-1.jpg", title: "Nichol" },
    { image: "/image/avator/image-2.jpg", title: "Titus" },
    { image: "/image/avator/image-3.jpg", title: "Geoffrey" },
    { image: "/image/avator/image-4.jpg", title: "Laverty" },
    { image: "/image/avator/image-1.jpg", title: "Nichol" },
    { image: "/image/avator/image-2.jpg", title: "Titus" },
    { image: "/image/avator/image-3.jpg", title: "Geoffrey" },
    { image: "/image/avator/image-4.jpg", title: "Laverty" },
  ];

  return (
    <main>
      <div className="flex items-center justify-between mt-[30px]">
        <h4 className="text-lg font-semibold text-light font-poppin">
          Recent Chats
        </h4>
        {/* Hide aur active contacts button */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="mt-0 text-xl text-light rounded-btn"
          >
            <BsThreeDotsVertical />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-[#0d0d0d] border border-[#222224] rounded-md z-[1] mt-4 w-[180px] p-2.5 shadow"
          >
            <li className="bg-[#161616] flex items-center justify-center text-light rounded-md transitions hover:text-primary">
              <a className="p-2">
                <FaRegEyeSlash className="text-lg" /> Hide Recent Chats
              </a>
            </li>
            <li className="bg-[#161616] flex items-center justify-center text-light rounded-md transitions hover:text-primary mt-1">
              <a className="p-2">
                <FaUsers className="text-lg" /> Active Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Recent Chats */}
      <div className="flex items-center w-full gap-10 overflow-x-auto select-none mt-[20px] ">
        {chatContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="avatar online">
              <div className="w-[50px] rounded-full">
                <img src={item.image} />
              </div>
            </div>
            <p className="text-sm text-light">{item?.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RecentChat;
