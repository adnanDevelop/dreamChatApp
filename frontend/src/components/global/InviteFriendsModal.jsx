import { useForm } from "react-hook-form";
import Modal from "../ui/toast/Modal";

import { useInviteUserMutation } from "../../redux/features/inviteApi";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const InviteFriendsModal = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [inviteUser, { isLoading }] = useInviteUserMutation();

  const submitData = (data) => {
    const modal = document.getElementById(id);

    inviteUser({ body: data })
      .unwrap()
      .then((response) => {
        reset();
        if (modal) modal.close();
        toast.success(response?.data);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <Modal id={id}>
      <div className="modal-box w-[400px] bg-[#181818]">
        <h3 className=" font-bold text-center text-[25px] text-white mt-4">
          Delete Account
        </h3>

        <form className="w-full mt-4" onSubmit={handleSubmit(submitData)}>
          <div>
            <p className="mb-1 text-[13px] font-light text-white">
              Email Address
            </p>
            <input
              type="text"
              className="w-full h-[35px] border border-[#484848] px-1.5 rounded-md bg-transparent focus:outline-none placeholder:text-light text-light text-xs font-light"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <p className="mb-1 text-[13px] font-light text-white">
              Invitation Message
            </p>
            <textarea
              className="w-full h-[70px] resize-none border border-[#484848] p-1.5 rounded-md bg-transparent focus:outline-none placeholder:text-light text-light text-xs font-light"
              defaultValue={`I'd like to invite you to join our amazing chat app where we can stay connected and chat easily. Click the link below to get started and register your account`}
              {...register("message")}
            ></textarea>
          </div>

          <div className="flex items-center justify-center w-full modal-action">
            <button
              type="button"
              className="px-[30px] h-[40px] rounded-lg bg-gray-200 text-black font-medium font-jakarta transitions hover:scale-105 text-sm"
              onClick={() => {
                const modal = document.getElementById(id);
                if (modal) modal.close();
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-[30px] h-[40px] rounded-lg bg-primary text-white font-jakarta font-medium transitions hover:scale-105 text-sm"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Send Invitation"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default InviteFriendsModal;
