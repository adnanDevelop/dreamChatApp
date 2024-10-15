import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

// Redux
import { useLoginUserMutation } from "../../redux/features/authApi";
import { login } from "../../redux/slices/authSlice";

// Icons
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  // Submit function
  const submitData = async (data) => {
    await loginUser({ body: data })
      .unwrap()
      .then((response) => {
        dispatch(login(response.data));
        toast.success(response.message);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <main className=" w-full gradient sm:p-[40px] p-[20px] h-screen">
      {/* Logo */}
      <img src="/image/logo.svg" className="block mx-auto" alt="" />

      {/* Form Section */}
      <form
        className="block max-w-[500px] py-4 sm:px-5 px-4 shadow-md mx-auto bg-white rounded-lg mt-6"
        onSubmit={handleSubmit(submitData)}
      >
        <h3 className="text-[28px] font-semibold black">Login</h3>
        <p className="text-sm text-content">
          Sign in to see what you’ve missed.
        </p>

        {/* Email input */}
        <div className="mt-6">
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
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password input */}
        <div className="mt-6">
          <p className="mb-1.5 text-sm font-medium text-[#141B27]">Password</p>
          <div className="w-full h-[40px] flex border border-[#f0e8e8] px-1.5 rounded-md">
            <div className="w-[30px] h-full flex items-center justify-center">
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

        {/* Submit button */}
        <div className="mt-6">
          <button className="w-full primary-btn" disabled={isLoading}>
            {" "}
            {isLoading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Login"
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
          Don’t have a account?{" "}
          <Link to="/register" className="text-primary">
            Sign Up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
