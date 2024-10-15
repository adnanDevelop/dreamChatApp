import { useForm } from "react-hook-form";
import { FaKey, FaRegEye } from "react-icons/fa6";
import { useUpdatePasswordMutation } from "../../../redux/features/authApi";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const isLoading = false;

  const [UpdatePassword] = useUpdatePasswordMutation(); // Mutation function

  const onSubmit = (data) => {
    const values = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    };
    UpdatePassword({
      body: values,
    })
      .unwrap()
      .then((response) => {
        reset();
        toast.success(response?.message);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div className="collapse rounded-md collapse-plus bg-[#181818] mb-2">
      <input type="radio" className="min-h-0" name="my-accordion-3" />
      <div className="flex items-center min-h-0 gap-2 text-light collapse-title">
        <FaKey className="text-sm" /> Password
      </div>
      <div className="collapse-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Current Password */}
          <div className="mb-2.5">
            <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md ">
              <input
                type="password"
                className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
                placeholder="Current Password"
                {...register("currentPassword", {
                  required: "Current Password is required",
                })}
              />
              <div className="w-[30px] h-full  flex items-center justify-center">
                <FaRegEye className="text-sm text-[#bab2b2]" />
              </div>
            </div>
            {errors.currentPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="mb-2.5">
            <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md">
              <input
                type="password"
                className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
                placeholder="New Password"
                {...register("newPassword", {
                  required: "New Password is required",
                })}
              />
              <div className="w-[30px] h-full  flex items-center justify-center">
                <FaRegEye className="text-sm text-[#bab2b2]" />
              </div>
            </div>
            {errors.newPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-2.5">
            <div className="w-full h-[35px] flex border border-[#a49c9c23] px-1.5 rounded-md">
              <input
                type="password"
                className="w-full text-xs bg-transparent border-none text-content placeholder:text-content focus:outline-none placeholder:text-xs"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  validate: (value) => {
                    const newPassword = getValues("newPassword");
                    if (value !== newPassword) {
                      return "Password didn't match";
                    }
                  },
                })}
              />
              <div className="w-[30px] h-full  flex items-center justify-center">
                <FaRegEye className="text-sm text-[#bab2b2]" />
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Save button */}
          <div className="mt-4">
            <button type="submit" className="w-full primary-btn h-[35px]">
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
