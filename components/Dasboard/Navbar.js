import React, { useContext } from "react";
import { GlobalContext } from "@/context";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineLightMode , MdOutlineDarkMode  } from "react-icons/md";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
export default function Navbar() {
  const { isSidebarOpen, isOpen , toggleOpen, toggleSidebar } = useContext(GlobalContext);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`sticky top-0 z-10 flex justify-between w-full  ${darkMode ? "bg-[#283045]" : "bg-white"}   drop-shadow p-4 ${isOpen ? "rounded-md" : ""} mb-10 -mt-2 ${isOpen && "hidden lg:flex"}`}>
      <div>
        <h1 className={` ${darkMode ? "text-white" : ""}`}>DriversOnline</h1>
      </div>
      <div className="flex gap-x-4">
      { darkMode ? 
      <div>
      <MdOutlineLightMode className={`${darkMode ? "text-white" : "text-black"}  text-3xl`} onClick={toggleDarkMode}/>
      </div> : <div>
      <MdOutlineDarkMode className={`${darkMode ? "text-white" : "text-black"}  text-3xl`} onClick={toggleDarkMode}/>
      </div> }
      
      <div className="lg:hidden ">
      <IoMdMenu className="text-white text-3xl  " onClick={toggleOpen}/>
      </div>
      </div>
      
        
    </header>
  );
}
