import moment from "moment";

import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const ChatBody = ({ messageData, isLoading }) => {
  const { user } = useSelector((state) => state.auth);

  const chatContainerRef = useRef(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messageData]);

  return (
    <div
      ref={chatContainerRef}
      className="h-[calc(100vh-60px)] overflow-y-auto pt-[70px] w-full text-white p-4 scrollbar select-none"
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-dots loading-lg text-primary"></span>
        </div>
      ) : (
        // eslint-disable-next-line react/prop-types
        messageData?.map((item) => (
          <div key={item._id}>
            {item.senderId?._id === user?._id ? (
              <div className="relative w-[500px] ms-auto mb-4">
                <div className="me-10">
                  <div className="flex items-center justify-end mb-0.5 me-5">
                    <p className="text-xs font-medium text-light font-primary">
                      You
                    </p>
                    <div className="w-[8px] h-[8px] rounded-full bg-light mx-2" />
                    <p className="text-xs font-medium text-light font-primary">
                      {moment(item.createdAt).format("hh:mm A")}
                    </p>
                  </div>
                  <div className="chat chat-end ">
                    <div className="text-white bg-[#181818] chat-bubble before:hidden ">
                      {item.message}
                    </div>
                  </div>
                </div>
                <img
                  src={user?.profilePhoto}
                  className="w-[40px] h-[40px] absolute bottom-[0] right-0 z-10 rounded-full "
                  alt=""
                />
              </div>
            ) : (
              <div className="relative mb-4">
                <div className="flex items-center mb-1 ms-11">
                  <p className="text-xs font-medium text-light font-primary">
                    {item.senderId?.fullName}
                  </p>
                  <div className="w-[8px] h-[8px] rounded-full bg-light mx-2" />
                  <p className="text-xs font-medium text-light font-primary">
                    {moment(item?.createdAt).format("hh:mm A")}
                  </p>
                </div>
                <img
                  src={item.senderId?.profilePhoto}
                  className="w-[40px] h-[40px] absolute bottom-[-0.5rem] left-0 z-10 rounded-full "
                  alt=""
                />
                <div className="ms-12">
                  <div className="!rounded-bl-none chat-bubble chat-bubble-primary">
                    {item.message}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ChatBody;
