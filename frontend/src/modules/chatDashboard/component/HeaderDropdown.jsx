import { BsThreeDotsVertical } from "react-icons/bs";

const HeaderDropdown = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="mt-0 text-base text-content rounded-btn focus:text-primary"
        >
          <BsThreeDotsVertical />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-[#0d0d0d] border border-[#222224] rounded-md z-[1] mt-4 w-[150px] p-2.5 shadow"
        >
          <li className="transitions bg-transparent hover:bg-[#161616] mb-1.5  text-light rounded-md transitions hover:text-primary">
            <a className="p-2">Report</a>
          </li>
          <li className="transitions bg-transparent hover:bg-[#161616] mb-1.5  text-light rounded-md transitions hover:text-primary">
            <a className="p-2">Block</a>
          </li>
          <li className="transitions bg-transparent hover:bg-[#161616] mb-1.5  text-light rounded-md transitions hover:text-primary">
            <a className="p-2">Add To Favourite</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDropdown;
