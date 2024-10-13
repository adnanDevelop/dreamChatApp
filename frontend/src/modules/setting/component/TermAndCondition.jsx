import { FaPaperPlane } from "react-icons/fa6";
import { useSelector } from "react-redux";

const TermAndCondition = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="collapse rounded-md collapse-plus bg-[#181818]">
      <input type="radio" className="min-h-0" name="my-accordion-3" />
      <div className="flex items-center min-h-0 gap-2 text-light collapse-title">
        <FaPaperPlane className="text-sm" /> Terms & Conditions
      </div>
      <div className="collapse-content">
        {/* About input */}
        <div className="w-full h-[80px] border border-[#a49c9c23] px-1.5 rounded-md mb-2.5">
          <input
            type="text"
            className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
            defaultValue={user?.aboutProfile}
          />
        </div>
        <div className="mt-4">
          <button className="w-full primary-btn h-[35px]">Save</button>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
