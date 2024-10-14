import { useForm } from "react-hook-form";

import { FaKey, FaRegEye } from "react-icons/fa6";
const UpdatePassword = () => {
  const { register, handleSubmit } = useForm();

  const isLoading = false;

  return (
    <div className="collapse rounded-md collapse-plus bg-[#181818] mb-2">
      <input type="radio" className="min-h-0" name="my-accordion-3" />
      <div className="flex items-center min-h-0 gap-2 text-light collapse-title">
        <FaKey className="text-sm" /> Password
      </div>
      <div className="collapse-content">
        {" "}
        <form>
          {/* Current Password */}
          <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md mb-2.5">
            <input
              type="password"
              className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
              placeholder="Current Password"
              onFocus={(e) => (e.target.type = "text")}
              onBlur={(e) => (e.target.type = "password")}
              {...register("currentPassword", {
                required: "Current Password is required",
              })}
            />
            <div className="w-[30px] h-full  flex items-center justify-center">
              <FaRegEye className="text-sm text-[#bab2b2]" />
            </div>
          </div>

          {/* New Password Password */}
          <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md mb-2.5">
            <input
              type="password"
              className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
              placeholder="New Password"
              onFocus={(e) => (e.target.type = "text")}
              onBlur={(e) => (e.target.type = "password")}
              {...register("newPassword")}
            />
            <div className="w-[30px] h-full  flex items-center justify-center">
              <FaRegEye className="text-sm text-[#bab2b2]" />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md mb-2.5">
            <input
              type="password"
              className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
              placeholder="Confirm Password"
              onFocus={(e) => (e.target.type = "text")}
              onBlur={(e) => (e.target.type = "password")}
              {...register("confirmPassword", {
                validate: (value) => {
                  if (value !== register.newPassword) {
                    return "Password didn't match";
                  }
                },
              })}
            />
            <div className="w-[30px] h-full  flex items-center justify-center">
              <FaRegEye className="text-sm text-[#bab2b2]" />
            </div>
          </div>

          {/* Save button */}
          <div className="mt-4">
            <button className="w-full primary-btn h-[35px]">
              {" "}
              {isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Update Password"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
