import Modal from "../../../components/ui/toast/Modal";
import { toast } from "react-toastify";

import {
  useListFavouritesQuery,
  useRemoveFavouriteMutation,
} from "../../../redux/features/favouriteContactApi";
import { useSelector } from "react-redux";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const RemoveFavouriteModal = ({ id }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const { user } = useSelector((state) => state.auth);

  // Calling Apis
  const [removeFavourites, { isLoading }] = useRemoveFavouriteMutation();
  const { data: favouriteData } = useListFavouritesQuery({ id: user?._id });

  // State to store selected ids

  const toggleSelection = (contactId) => {
    if (selectedIds.includes(contactId)) {
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.filter((id) => id !== contactId)
      );
    } else {
      setSelectedIds((prevSelectedIds) => [...prevSelectedIds, contactId]);
    }
  };

  const submitData = (event) => {
    event.preventDefault();

    const modal = document.getElementById(id);
    removeFavourites({
      body: {
        ids: selectedIds,
      },
      id: user?._id,
    })
      .unwrap()
      .then((response) => {
        setSelectedIds([]);
        if (modal) modal.close();
        toast.success(response?.message);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <Modal id={id}>
      <div className="modal-box w-[400px] bg-[#181818]">
        <h3 className=" font-bold text-center text-[25px] text-white mt-4">
          Remove Favourite Contact
        </h3>

        <form className="w-full mt-4" onSubmit={submitData}>
          {favouriteData?.data?.map((element, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-md cursor-pointer transitions select-none  ${
                selectedIds.includes(element?._id) ? "bg-black" : ""
              }`}
              onClick={() => toggleSelection(element?._id)}
            >
              <div className="flex items-center gap-2">
                <img
                  src={element?.profilePhoto}
                  className="w-[40px] rounded-full"
                  alt=""
                />
                <div>
                  <h5 className="text-base text-white font-poppin">
                    {element?.fullName}
                  </h5>
                </div>
              </div>
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
                checked={selectedIds.includes(element?._id)} // Check if the id is selected
                readOnly
              />
            </div>
          ))}

          <div className="flex items-center justify-center w-full modal-action">
            <button
              type="button"
              className="px-[30px] h-[40px] rounded-lg bg-gray-200 text-black font-medium font-jakarta transitions hover:scale-105 text-sm"
              onClick={() => {
                const modal = document.getElementById(id);
                if (modal) modal.close();
                setSelectedIds([]);
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
                "Remove Favourite"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RemoveFavouriteModal;
