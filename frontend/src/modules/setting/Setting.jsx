import { FaKey, FaPaperPlane, FaUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useSelector } from "react-redux";

const Setting = () => {
  const { user } = useSelector((state) => state.auth);
  const isLoading = false;

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

        <div className="collapse rounded-md collapse-plus bg-[#181818] my-2">
          <input type="radio" className="min-h-0" name="my-accordion-3" />
          <div className="flex items-center min-h-0 gap-2 text-light collapse-title">
            <FaUser className="text-sm" /> Profile Setting
          </div>
          <div className="collapse-content">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-purple-500 border-dashed mx-auto">
              <img
                src={`${user?.profilePhoto || "/image/avator/image-1.jpg"}`}
                className="w-[68px] h-[68px] object-cover"
                alt=""
              />
            </div>

            <form className="mt-[20px]">
              {/* Fullname input */}
              <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md mb-2.5">
                <input
                  type="text"
                  className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
                  defaultValue={`${user?.fullName} `}
                />
                <div className="w-[30px] h-full  flex items-center justify-center">
                  <FaUser className="text-sm text-[#bab2b2]" />
                </div>
              </div>

              {/* Email input */}
              <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md mb-2.5">
                <input
                  type="email"
                  className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
                  placeholder="Email"
                  defaultValue={user?.email}
                />
                <div className="w-[30px] h-full  flex items-center justify-center">
                  <MdOutlineMail className="text-base text-[#bab2b2]" />
                </div>
              </div>

              {/* Gender option */}
              <div className="mb-2.5">
                <select
                  className="w-full h-[35px] text-xs flex border focus:outline-none bg-transparent border-[#a49c9c23] text-content px-1.5 rounded-md"
                  //   {...register("gender", {
                  //     required: "Please select Gender",
                  //   })}
                  defaultValue={user?.gender}
                >
                  <option className="text-xs" value="male">
                    Male
                  </option>
                  <option className="text-xs" value="female">
                    Female
                  </option>
                </select>
              </div>

              {/* Username input */}
              <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md mb-2.5">
                <input
                  type="text"
                  className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
                  placeholder="Username"
                  defaultValue={user?.userName}
                />
                <div className="w-[30px] h-full  flex items-center justify-center">
                  <FaUser className="text-sm text-[#bab2b2]" />
                </div>
              </div>
              {/* About input */}
              <div className="w-full h-[80px] border border-[#a49c9c23] px-1.5 rounded-md mb-2.5">
                <input
                  type="text"
                  className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
                  defaultValue={user?.aboutProfile}
                />
              </div>

              {/* Save button */}
              <div className="mt-4">
                <button className="w-full primary-btn h-[35px]">
                  {" "}
                  {isLoading ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Update"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="collapse rounded-md collapse-plus bg-[#181818] mb-2">
          <input type="radio" className="min-h-0" name="my-accordion-3" />
          <div className="flex items-center min-h-0 gap-2 text-light collapse-title">
            <FaKey className="text-sm" /> Password
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse rounded-md collapse-plus bg-[#181818]">
          <input type="radio" className="min-h-0" name="my-accordion-3" />
          <div className="flex items-center min-h-0 gap-2 text-light collapse-title">
            <FaPaperPlane className="text-sm" /> Terms & Conditions
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Setting;
