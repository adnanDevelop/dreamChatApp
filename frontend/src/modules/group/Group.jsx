import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { groupContent } from "../content";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

const Group = () => {
  return (
    <main>
      {/* Search section */}
      <section>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-light font-poppin">
            Group
          </h4>
          <div className="flex items-center gap-2">
            {/* Add Contacts button */}
            <button className="w-[25px] h-[25px] rounded-full bg-primary text-light text-sm flex items-center justify-center">
              <FaPlus />
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
                  <a className="p-2">
                    <IoIosSend className="text-lg" /> Invite Others
                  </a>
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
            placeholder="Search For Contacts or Messages"
          />
          <button className="w-[30px] h-full flex items-center justify-center text-light me-2">
            <FaSearch />
          </button>
        </div>
      </section>

      {/* Contacts section */}
      <section className="mt-[30px]">
        <h4 className="text-lg font-semibold text-light font-poppin">
          All Groups
        </h4>

        <div className="mt-[15px]">
          {groupContent.map((element, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between w-full p-4 mb-3 bg-black border-2 border-transparent rounded-md transitions hover:border-primary"
              >
                {/* Avator section */}
                <div className="flex items-center gap-3 cursor-pointer text-light">
                  <div className={`avatar ${element?.active ? "online" : ""}`}>
                    <div className="w-[50px] rounded-full">
                      <img src={element?.image} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold">{element?.title}</h4>
                </div>
                <div>
                  <p className="text-xs text-white">{element?.date}</p>
                  {element?.messages && (
                    <div className="flex items-center justify-end mt-1.5">
                      <p className="bg-red-500 border-none text-light badge">
                        {Number(element?.messages) > 99
                          ? "99+"
                          : element?.messages}
                      </p>
                      <BsThreeDotsVertical className="text-light" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Group;
