import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/outline";
import { FolderIcon } from "@heroicons/react/outline";
import { LogoutIcon } from "@heroicons/react/outline";
import Dropdown from "../Dropdown/Dropdown";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-between text-gray-100 bg-blue-700 p-4 ">
        {/* Logo */}
        {/* Menuitems */}
        <div className="flex items-center flex-col gap-7 ">
          <p className=" font-bold">//Todo</p>
          <div className="flex flex-col gap-8">
            <HomeIcon className="h-7 w-7 cursor-pointer hover:opacity-60" />
            <FolderIcon
              className="h-7 w-7 cursor-pointer hover:opacity-60"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        {/* Logout/in */}
        <LogoutIcon className="h-7 w-7 cursor-pointer hover:opacity-60" />
      </div>
      {isOpen && <Dropdown />}
    </>
  );
};

export default Sidebar;
