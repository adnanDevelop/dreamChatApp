import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../redux/features/authApi";

// Icons
import { FaUser } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const inviteToken = searchParams.get("inviteToken");

  // Submit function
  const submitData = async (data) => {
    await registerUser({
      body: { ...data, inviteToken: inviteToken && inviteToken },
    })
      .unwrap()
      .then((response) => {
        navigate("/login");
        toast.success(response.message);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <main className=" w-full gradient sm:p-[20px] p-[20px]">
      {/* Logo */}
      <img src="/image/logo.svg" className="block mx-auto" alt="" />

      {/* Form Section */}
      <form
        className="block max-w-[550px] py-4 px-5 shadow-md mx-auto bg-white rounded-lg mt-6"
        onSubmit={handleSubmit(submitData)}
      >
        <h3 className="text-[28px] font-semibold black">Register</h3>
        <p className="text-sm text-content">
          Sign up to share moments with friends!
        </p>

        {/* Form Input */}
        <div className="flex gap-5 mt-6">
          {/* Fullname input */}
          <div className="basis-1/2 ">
            <p className="mb-1.5 text-sm font-medium text-[#141B27]">
              Full Name
            </p>
            <div className="w-full h-[40px] flex border border-[#f0e8e8] px-1.5 rounded-md">
              <div className="w-[30px] h-full  flex items-center justify-center">
                <FaUser className="text-base text-[#bab2b2]" />
              </div>
              <input
                type="text"
                {...register("fullName", {
                  required: "Name is required",
                })}
                className="w-full text-xs border-none text-content placeholder:text-content focus:outline-none"
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>
          {/* Email input */}
          <div className="basis-1/2 ">
            <p className="mb-1.5 text-sm font-medium text-[#141B27]">Email</p>
            <div className="w-full h-[40px] flex border border-[#f0e8e8] px-1.5 rounded-md">
              <div className="w-[30px] h-full  flex items-center justify-center">
                <MdOutlineMail className="text-base text-[#bab2b2]" />
              </div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full text-xs border-none text-content placeholder:text-content focus:outline-none"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Gender */}
        <div className="flex mt-4">
          <div className="w-full">
            <p className="mb-1.5 text-sm font-medium text-[#141B27]">Gender</p>
            <select
              className="w-full h-[40px] text-sm flex border focus:outline-none border-[#f0e8e8] px-1.5 rounded-md"
              {...register("gender", {
                required: "Please select Gender",
              })}
            >
              <option className="text-xs" value="male">
                Male
              </option>
              <option className="text-xs" value="female">
                Female
              </option>
            </select>
          </div>
        </div>

        {/* Phone number input */}
        <div className="flex mt-4">
          <div className="w-full">
            <p className="mb-1.5 text-sm font-medium text-[#141B27]">
              Phone Number
            </p>
            <div className="w-full h-[40px] flex border border-[#f0e8e8] px-1.5 rounded-md">
              <div className="w-[30px] h-full  flex items-center justify-center">
                <LuPhone className="text-base text-[#bab2b2]" />
              </div>
              <input
                type="text"
                {...register("phoneNumber", {
                  required: "Number is required",
                })}
                className="w-full text-xs border-none text-content placeholder:text-content focus:outline-none"
              />
            </div>
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Username and password input */}
        <div className="flex gap-5 mt-4">
          <div className="basis-1/2 ">
            <p className="mb-1.5 text-sm font-medium text-[#141B27]">
              Username
            </p>
            <div className="w-full h-[40px] flex border border-[#f0e8e8] px-1.5 rounded-md">
              <div className="w-[30px] h-full  flex items-center justify-center">
                <FaUser className="text-base text-[#bab2b2]" />
              </div>
              <input
                type="text"
                {...register("userName", {
                  required: "Username is required",
                })}
                className="w-full text-xs border-none text-content placeholder:text-content focus:outline-none"
              />
            </div>
            {errors.userName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.userName.message}
              </p>
            )}
          </div>
          <div className="basis-1/2 ">
            <p className="mb-1.5 text-sm font-medium text-[#141B27]">
              Password
            </p>
            <div className="w-full h-[40px] flex border border-[#f0e8e8] px-1.5 rounded-md">
              <div className="w-[30px] h-full  flex items-center justify-center">
                <FaRegEye className="text-base text-[#bab2b2]" />
              </div>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full text-xs border-none text-content placeholder:text-content focus:outline-none"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-6">
          <button className="w-full primary-btn" disabled={isLoading}>
            {" "}
            {isLoading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Register"
            )}
          </button>
        </div>

        {/* Another option for login */}
        <div className="mt-4">
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-[30%] sm:w-[35%] h-[1px] bg-[#f0e8e8]" />
            <div className="absolute top-1/2 right-0 w-[30%] sm:w-[35%] h-[1px] bg-[#f0e8e8]" />
            <p className="text-sm text-center text-content">Or Sign in with</p>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              type="button"
              className="w-full basis-1/2 h-[40px] border border-[#f0e8e8] flex items-center justify-center gap-1.5 rounded-md text-content text-sm transitions hover:bg-[#e2dbdb]"
            >
              <img src="/image/auth/google-icon.svg" alt="" /> Google
            </button>
            <button
              type="button"
              className="w-full basis-1/2 h-[40px] border border-[#f0e8e8] flex items-center justify-center gap-1.5 rounded-md text-content text-sm transitions hover:bg-[#e2dbdb]"
            >
              <img src="/image/auth/facbook-icon.svg" alt="" /> Facebook
            </button>
          </div>
        </div>

        <p className="mt-3 text-sm text-center">
          Already have a account?{" "}
          <Link to="/login" className="text-primary">
            Sign In
          </Link>
        </p>
      </form>
      {/* Image section */}
    </main>
  );
};

export default Register;
