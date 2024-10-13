import { FaArrowRight, FaTrash } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import TermAndCondition from "./component/TermAndCondition";
import UpdatePassword from "./component/UpdatePassword";
import UpdateProfile from "./component/UpdateProfile";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { useLogoutUserMutation } from "../../redux/features/authApi";
import DeleteAccountModal from "./component/DeleteAccountModal";

const Setting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [logoutUser] = useLogoutUserMutation();

  const onSubmit = () => {
    logoutUser()
      .unwrap()
      .then((response) => {
        toast.success(response?.message);
        navigate("/login");
        dispatch(logout());
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

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
      <h4 className="mt-[20px] p-3 text-lg font-semibold  text-light font-poppin">
        Profile Setting
      </h4>
      <section className="p-3 bg-black rounded-md ">
        {/* Update profile */}
        <UpdateProfile />
        {/* Update password */}
        <UpdatePassword />
      </section>

      {/* Logout and Delete Account Setting */}
      <h4 className="mt-[20px] p-3 text-lg font-semibold  text-light font-poppin">
        Other
      </h4>
      <section className="p-3 bg-black rounded-md ">
        {/* Term And Conditions */}
        <TermAndCondition />

        <div className="flex items-center justify-between p-3 border-b border-b-[#6f5c5c39] transitions group  cursor-pointer">
          <button
            className="flex items-center gap-2 text-base text-light group-hover:text-primary transitions "
            onClick={() => {
              const modal = document.getElementById(user?._id);
              if (modal) modal.showModal();
            }}
          >
            <FaTrash className="text-sm" /> Delete Account
          </button>
          <FaArrowRight className="text-sm text-light group-hover:text-primary transitions" />
        </div>
        <div
          className="flex items-center justify-between p-3 border-b border-b-[#6f5c5c39] transitions group  cursor-pointer"
          onClick={onSubmit}
        >
          <button className="flex items-center gap-2 text-base text-light group-hover:text-primary transitions ">
            <IoExitOutline className="text-sm" />
            Logout
          </button>
          <FaArrowRight className="text-sm text-light group-hover:text-primary transitions" />
        </div>
      </section>

      <DeleteAccountModal id={user?._id} />
    </main>
  );
};

export default Setting;
