import React, { useContext } from "react";
import { GlobalContext } from "@/context";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
export default function Navbar() {
  const { isSidebarOpen, isOpen , toggleOpen, toggleSidebar } = useContext(GlobalContext);

  return (
    <header className={`sticky top-0 z-10 flex justify-between w-full  bg-[#283045]  drop-shadow p-4 ${isOpen ? "rounded-md" : ""} mb-10 -mt-2 ${isOpen && "hidden lg:flex"}`}>
      <div>
        <h1>DriversOnline</h1>
      </div>
      <div className="flex gap-x-4">
      <div>
      <MdOutlineLightMode className={`text-white text-3xl`}/>
      </div>
      <div className="lg:hidden ">
      <IoMdMenu className="text-white text-3xl  " onClick={toggleOpen}/>
      </div>
      </div>
      
        
    </header>
  );
}
