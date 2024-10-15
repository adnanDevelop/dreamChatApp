import { BsThreeDotsVertical } from "react-icons/bs";
import { chatContent } from "../../modules/content";

import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../redux/features/authApi";

const AllContact = () => {
  const { user } = useSelector((state) => state.auth);

  const { data: userData } = useGetUserByIdQuery({ id: user?._id });

  console.log(userData?.data?.friends, "user");

  return (
    <main>
      <div className="flex items-center justify-between mt-[30px]">
        <h4 className="text-lg font-semibold text-light font-poppin">
          All Chats
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
            {[
              "All Chats",
              "Favourite Chats",
              "Pinned Chats",
              "Archive Chats",
              "Trash",
            ].map((item, index, arr) => (
              <li
                key={index}
                className={`bg-[#161616] flex items-center justify-center text-light rounded-md transitions hover:text-primary ${
                  index !== arr.length - 1 ? "mb-2" : ""
                }`}
              >
                <a className="p-2">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Chats */}
      <div className="select-none mt-[20px]">
        {userData?.data?.friends.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full p-4 mb-3 bg-black border-2 border-transparent rounded-md transitions hover:border-primary"
          >
            {/* Avator section */}
            <div className="flex items-center gap-3 text-light">
              <div className={`avatar ${item?.active ? "online" : ""}`}>
                <div className="w-[50px] rounded-full">
                  <img src={item.profilePhoto} />
                </div>
              </div>
              <h4 className="text-lg font-semibold">{item?.fullName}</h4>
            </div>
            <div>
              <p className="text-xs text-white">{item?.date}</p>
              {item?.messages && (
                <div className="flex items-center justify-end mt-1.5">
                  <p className="bg-red-500 border-none text-light badge">
                    {Number(item?.messages) > 9 ? "9+" : item?.messages}
                  </p>
                  <BsThreeDotsVertical className="text-light" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllContact;
