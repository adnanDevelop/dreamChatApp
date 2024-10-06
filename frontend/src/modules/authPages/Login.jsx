import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slices/authSlice";

// Icons
import { FaUser } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

// Types
// import { userApiEndPoint } from "../../utils/apiEndPoints";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit function
  const submitData = async (data) => {
    console.log(data);
    // try {
    //   dispatch(setLoading(true));
    //   const response = await fetch(`https://localhost:3000/register`, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     credentials: "include",
    //   });
    //   if (response.ok) {
    //     const responseData = await response.json();
    //     navigate("/login");
    //     toast.success(responseData.message);
    //   } else {
    //     const errorData = await response.json();
    //     toast.error(
    //       errorData.message || "An error occurred during registration"
    //     );
    //   }
    // } catch (error) {
    //   console.log("Error while registering user", error);
    //   toast.error("An error occurred. Please try again.");
    // } finally {
    //   dispatch(setLoading(false));
    // }
  };

  return (
    <main className=" w-full gradient p-[40px] h-screen">
      {/* Logo */}
      <img src="/image/logo.svg" className="block mx-auto" alt="" />

      {/* Form Section */}
      <form
        className="block max-w-[550px] py-4 px-5 shadow-md mx-auto bg-white rounded-lg mt-6"
        onSubmit={handleSubmit(submitData)}
      >
        <h3 className="text-[28px] font-semibold black">Login</h3>
        <p className="text-sm text-content">
          Sign in to see what you’ve missed.
        </p>

        {/* Email input */}
        <div>
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
        <div>
          <p className="mb-1.5 text-sm font-medium text-[#141B27]">Password</p>
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

        <div className="mt-6">
          <button className="w-full primary-btn">
            {" "}
            {loading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Register"
            )}
          </button>
          <p className="mt-2 text-sm text-center">
            Already have a account?{" "}
            <Link to="/login" className="text-primary">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
