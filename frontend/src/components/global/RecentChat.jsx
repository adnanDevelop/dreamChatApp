import { useState } from "react";

// Icons
import { BsThreeDotsVertical } from "react-icons/bs";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { storeSenderId } from "../../redux/slices/conversationSlice";
import { useListFavouritesQuery } from "../../redux/features/favouriteContactApi";
import RemoveFavouriteModal from "../../modules/chatDashboard/component/RemoveFavouriteModal";

const RecentChat = () => {
  const [hideRecentChat, setHidRecentChat] = useState(true);
  const dispatch = useDispatch();

  const { user, onlineUser } = useSelector((state) => state.auth);
  const { data: favouriteContact, isLoading } = useListFavouritesQuery({
    id: user?._id,
  });

  return (
    <main>
      {favouriteContact?.data?.length > 0 && (
        <div className="flex items-center justify-between mt-[30px]">
          <h4 className="text-lg font-medium text-light font-poppin">
            Favourite Contact
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
              <li className="bg-[#161616] text-light rounded-md transitions hover:text-primary">
                <a
                  className="p-2 ps-3"
                  onClick={() => {
                    setHidRecentChat(false);
                  }}
                >
                  Hide Favourite Chats
                  {/* <FaRegEyeSlash className="text-lg" /> */}
                </a>
              </li>
              <li className="bg-[#161616] text-light rounded-md transitions hover:text-primary mt-1">
                <a
                  className="p-2 ps-3"
                  onClick={() => {
                    setHidRecentChat(true);
                  }}
                >
                  {/* <FaUsers className="text-lg" /> */}
                  Show Favourite Chats
                </a>
              </li>
              <li className="bg-[#161616]  text-light rounded-md transitions hover:text-primary mt-1">
                <a
                  className="p-2 ps-3"
                  onClick={() => {
                    const modal = document.getElementById("remove-favourite");
                    if (modal) modal.showModal();
                  }}
                >
                  {/* <FaUsers className="text-lg" /> */}
                  Remove Favourite
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Recent Chats */}
      {hideRecentChat ? (
        <div className="flex items-center w-full gap-10 overflow-x-auto select-none mt-[20px] ">
          {isLoading ? (
            <div className="w-full h-[10vh] flex items-center justify-center">
              <span className="loading loading-dots loading-lg text-primary "></span>
            </div>
          ) : (
            favouriteContact?.data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 cursor-pointer"
                onClick={() => {
                  dispatch(storeSenderId(item?._id));
                }}
              >
                <div
                  className={`avatar ${
                    onlineUser?.includes(item?._id) ? "online" : ""
                  }`}
                >
                  <div className="w-[50px] rounded-full">
                    <img src={item?.profilePhoto} />
                  </div>
                </div>
                <p className="text-sm text-light">{item?.userName}</p>
              </div>
            ))
          )}
        </div>
      ) : (
        <div>
          {" "}
          <p className="mt-4 text-sm text-white font-poppin">No Recent Chat</p>
        </div>
      )}

      <RemoveFavouriteModal id="remove-favourite" />
    </main>
  );
};

export default RecentChat;
