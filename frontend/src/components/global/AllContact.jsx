import { BsThreeDotsVertical } from "react-icons/bs";
// import { chatContent } from "../../modules/content";

import { useDispatch, useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../redux/features/authApi";
import { setTab } from "../../redux/slices/tabSlice";
import { storeSenderId } from "../../redux/slices/conversationSlice";

// eslint-disable-next-line react/prop-types
const AllContact = ({ params }) => {
  const dispatch = useDispatch();
  const { user, onlineUser } = useSelector((state) => state.auth);

  const { senderId } = useSelector((state) => state.conversation);
  const { data: userData, isLoading } = useGetUserByIdQuery({
    id: user?._id,
    params,
  });

  return (
    <main>
      <div className="flex items-center justify-between mt-[30px]">
        <h4 className="text-lg font-medium text-light font-poppin">
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
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-[40vh]">
            <span className="loading loading-dots loading-lg text-primary "></span>
          </div>
        ) : userData?.data?.friends?.length > 0 ? (
          userData?.data?.friends.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full p-4 mb-3  border-2 border-transparent rounded-md cursor-pointer transitions ${
                senderId === item?._id
                  ? "bg-black"
                  : "bg-transparent hover:bg-black"
              }`}
              onClick={() => {
                dispatch(storeSenderId(item?._id));
                dispatch(setTab("Chat"));
              }}
            >
              {/* Avator section */}
              <div className="flex items-center gap-3 text-light">
                <div
                  className={`avatar ${
                    onlineUser?.includes(item?._id) ? "online" : ""
                  }`}
                >
                  <div className="w-[50px] rounded-full">
                    <img src={item.profilePhoto} />
                  </div>
                </div>
                <h4 className="text-lg capitalize">{item?.fullName}</h4>
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
          ))
        ) : (
          <div>
            <p className="text-sm text-white font-poppin ">
              You don&apos;t have any friends yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllContact;
