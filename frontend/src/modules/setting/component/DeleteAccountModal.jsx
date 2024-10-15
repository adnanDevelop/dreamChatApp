import { toast } from "react-toastify";
import Modal from "../../../components/ui/toast/Modal";

// Redux
import { logout } from "../../../redux/slices/authSlice";
import { useDeleteUserMutation } from "../../../redux/features/authApi";

// Icons
import { GoAlertFill } from "react-icons/go";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const DeleteAccountModal = ({ id }) => {
  const dispatch = useDispatch();

  const [deleteUser] = useDeleteUserMutation();
  const deleteAccount = async () => {
    deleteUser({ id })
      .unwrap()
      .then(() => {
        dispatch(logout());
        toast.success("User deleted successfully");
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <Modal id={id}>
      <div className="modal-box w-[400px] text-center bg-[#181818]">
        <div className="w-[70px] h-[70px] mx-auto rounded-full grid place-items-center bg-red-500">
          <GoAlertFill className="text-[30px] text-white" />
        </div>
        <h3 className=" font-bold text-center text-[25px] text-white mt-4">
          Delete Account
        </h3>
        <p className="mt-3 leading-5 text-content">
          You&apos;re going to delete your account. Are you sure?
        </p>
        <div className="flex items-center justify-center w-full modal-action">
          <button
            className="px-[30px] h-[40px] rounded-lg bg-gray-200 text-black font-medium font-jakarta transitions hover:scale-105 text-sm"
            onClick={() => {
              const modal = document.getElementById(id);
              if (modal) modal.close();
            }}
          >
            No, Keep it.
          </button>
          <button
            type="submit"
            className="px-[30px] h-[40px] rounded-lg bg-red-500 text-white font-jakarta font-medium transitions hover:scale-105 text-sm"
            onClick={deleteAccount}
          >
            Yes, Delete it!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
