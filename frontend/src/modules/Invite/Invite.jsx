import { FaPaperPlane } from "react-icons/fa6";
import { useSelector } from "react-redux";
import InviteFriendsModal from "../../components/global/InviteFriendsModal";

const Invite = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="max-w-[500px] flex flex-col items-center justify-center">
        <div className="flex items-center gap-3">
          <img src={user?.profilePhoto} className="w-[40px]" alt="" />
          <p className="font-semibold text-light">
            Welcome! {user?.fullName} 👋
          </p>
        </div>
        <p className="mt-2 text-content">
          Choose a person or group to start chat with them.
        </p>
        <button
          className="primary-btn px-[20px] flex items-center gap-2 mt-4"
          onClick={() => {
            const modal = document.getElementById("sent-invite-modal");
            if (modal) modal.showModal();
          }}
        >
          {" "}
          <FaPaperPlane /> Invite Friends
        </button>
      </div>
      <InviteFriendsModal id={"sent-invite-modal"} />
    </section>
  );
};

export default Invite;
