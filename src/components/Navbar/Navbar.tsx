import { ClockIcon, SearchIcon } from "@heroicons/react/outline";
import React from "react";
import Profile from "../Profile/Profile";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <label htmlFor="" className="relative block w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon className="w-5 h-5 opacity-50" />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search"
            type="text"
            title="search"
          />
        </label>
      </div>
      {/* <div className="flex items-center gap-4">
        <ClockIcon className="h-5 w-5" />
        19:30
      </div> */}
      <Profile />
    </nav>
  );
};

export default Navbar;
