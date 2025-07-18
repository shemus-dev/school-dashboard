import React from "react";
import { Bars3Icon, BellIcon } from "@heroicons/react/16/solid";
import { RiMenuFold3Line } from "react-icons/ri";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navigationbar({ toggleSidebar, isSidebarOpen }) {
  const navigate = useNavigate();
  function handlelogout() {
    navigate("/");
  }



  return (
    <div>
      <nav className="bg-blue-800 shadow-sm fixed w-full z-10 h-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-8">
            {/* Left section - Hamburger menu and school logo/name  */}
            <div className="flex items-center  ml-40">
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center justify-center rounded-md text-white hover:text-blue-300 "
              >
                {isSidebarOpen ? (
                 <RiMenuFold3Line className="block h-6 w-4 " />
                   
                ) : (
                  <FaRegRectangleXmark  className="block h-6 w-4 " />
                )}
              </button>
            </div>
            {/* school name  */}
            <div className="ml-4 flex items-center">
              <div className="ml-3">
                <h2 className="text-lg font-large text-white ">
                  School Management system
                </h2>
              </div>
            </div>
            {/* right section */}
            <div className="flex items-center space-x-4">
              {/* Notifications button */}

              <button
                className="p-1 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

              >
                <BellIcon className="h-4 w-4" />
              </button>

              <button
                onClick={handlelogout}
                className="flex items-center space-x-4 hover:text-blue-500"
              >
                <IoMdLogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigationbar;
