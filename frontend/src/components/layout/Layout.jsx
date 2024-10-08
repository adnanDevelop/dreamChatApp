import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../global/Sidebar";

const Layout = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isToolbarActive, setToolbarActive] = useState(false);

  const showSidebar = (value) => {
    setSidebarActive(value);
    console.log(value, "value");
  };

  return (
    <div className="relative lg:flex">
      <div className={`flex-none transitions `}>
        <Sidebar
          isToolbarActive={isToolbarActive}
          setToolbarActive={setToolbarActive}
          isSidebarActive={isSidebarActive}
          showSideBar={showSidebar}
        />
      </div>
      <div className={`flex flex-col flex-1 overflow-x-auto`}>
        {/* <div> */}
        <div className="relative flex-1 lg:p-[40px] md:px-[40px] px-[25px] p-[20px] !pt-[100px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
