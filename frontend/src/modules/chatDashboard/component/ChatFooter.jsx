import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

// Icons
import { CiFolderOn } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../../redux/slices/messageSlice";
import { useSendMessageMutation } from "../../../redux/features/conversationApi";

// eslint-disable-next-line react/prop-types
const ChatFooter = ({ senderId, refetch }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const { message } = useSelector((state) => state.message);
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const onSubmit = (data) => {
    reset();
    sendMessage({
      id: senderId,
      body: data,
    })
      .unwrap()
      .then((response) => {
        reset();
        refetch();
        dispatch(setMessage([...message, response?.data]));
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <section className="xl:w-[calc(100%-450px)] lg:w-[calc(100%-420px)] h-[60px] px-4 py-2.5 bg-black flex items-center justify-between border-t  border-t-[#6f5c5c39] fixed bottom-0 right-0">
      <form
        className=" w-full h-[45px] rounded-md flex bg-[#181818] pe-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="w-full px-3 text-sm bg-transparent focus:outline-none text-light font-poppin placeholder:text-sm"
          placeholder="Type a message..."
          autoFocus={true}
          {...register("message")}
        />
        <div className="flex items-center gap-3">
          {[MdOutlineEmojiEmotions, CiFolderOn].map((Icon, index) => {
            return (
              <button
                key={index}
                type="button"
                className="transitions text-content hover:text-primary"
              >
                {Icon && <Icon />}
              </button>
            );
          })}
          <button
            type="submit"
            className="w-[30px] h-[30px] rounded-md flex items-center justify-center bg-primary transitions hover:bg-[#472d9f] text-white text-xs"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-dots loading-xs"></span>
            ) : (
              <FaPaperPlane />
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChatFooter;
