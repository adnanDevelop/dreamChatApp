import { FaPhone } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscCallIncoming } from "react-icons/vsc";
import { VscCallOutgoing } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";

import { callContent } from "../content";

const Call = () => {
  return (
    <main>
      {/* Search section */}
      <section>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-light font-poppin">
            Calls
          </h4>
          <div className="flex items-center gap-2">
            {/* Add Contacts button */}
            <button className="w-[25px] h-[25px] rounded-full bg-primary text-light text-xs flex items-center justify-center">
              <FaPhone />
            </button>

            {/* Invite other button */}
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
                className="menu dropdown-content bg-[#0d0d0d] border border-[#222224] rounded-md z-[1] mt-4 w-[150px] p-2.5 shadow"
              >
                <li className="bg-[#161616] flex items-center justify-center text-light rounded-md transitions hover:text-primary">
                  <a className="p-2">clear Call Log</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="w-full h-[45px] rounded-md bg-black flex gap-1.5 mt-[20px]">
          <input
            type="text"
            className="w-full h-full bg-black focus:outline-none text-light px-2.5 text-sm rounded-tl-md rounded-bl-md"
            placeholder="Search"
          />
          <button className="w-[30px] h-full flex items-center justify-center text-light me-2">
            <FaSearch />
          </button>
        </div>
      </section>

      {/* Call Header */}
      <section className="flex items-center justify-between mt-[30px]">
        <h4 className="text-lg font-semibold text-light font-poppin">
          All Calls
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
            {["All Calls", "Audio Calls", "Video Calls"].map(
              (item, index, arr) => (
                <li
                  key={index}
                  className={`bg-[#161616] flex items-center justify-center text-light rounded-md transitions hover:text-primary ${
                    index !== arr.length - 1 ? "mb-1.5" : ""
                  }`}
                >
                  <a className="p-2">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Call detail section */}
      <section className="mt-[20px]">
        {callContent.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full p-4 mb-3 bg-black border-2 border-transparent rounded-md transitions hover:border-primary"
          >
            {/* Avator section */}
            <div className="flex items-center gap-3 text-light">
              <div className={`avatar ${item?.active ? "online" : ""}`}>
                <div className="w-[50px] rounded-full">
                  <img src={item.image} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">{item?.title}</h4>
                <p className="flex items-center gap-2 text-xs text-content">
                  {" "}
                  {item?.callStatus === "Missed" ? (
                    <VscCallOutgoing className="text-green-500" />
                  ) : (
                    <VscCallIncoming className="text-red-500" />
                  )}{" "}
                  {item?.callDuration}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-content">{item?.callTime}</p>
              <p className="mt-1">
                <FiPhoneCall className="block text-sm text-red-500 ms-auto " />
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Call;
