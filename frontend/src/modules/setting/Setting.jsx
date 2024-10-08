import { FaPaperPlane } from "react-icons/fa6";
import UpdatePassword from "./component/UpdatePassword";
import UpdateProfile from "./component/UpdateProfile";
import { useSelector } from "react-redux";

const Setting = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <main className="select-none">
      <h4 className="text-lg font-semibold text-light font-poppin">Setting</h4>

      {/* Profile infor */}
      <section className="flex flex-col items-center justify-center w-full mt-[30px]">
        <div className={`avatar online`}>
          <div className="w-[100px] rounded-full border-2 border-purple-500 border-dashed">
            <img src={`${user?.profilePhoto || "/image/avator/image-1.jpg"}`} />
          </div>
        </div>

        <h3 className="text-[20px] font-medium text-light mt-3">
          Salom Katherine
        </h3>
        <p className="text-sm text-content">Software Developer</p>
      </section>

      {/* Profile setting */}
      <section className="mt-[20px] p-3 rounded-md bg-black">
        <h4 className="text-lg font-semibold text-light font-poppin">
          Profile Setting
        </h4>

        {/* Update profile */}
        <UpdateProfile />
        {/* Update password */}
        <UpdatePassword />

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
      </section>
    </main>
  );
};

export default Setting;
