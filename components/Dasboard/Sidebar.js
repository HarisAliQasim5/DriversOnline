import React, { useContext } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { GlobalContext } from "@/context";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
const Data = [
  {
    icon: LuLayoutDashboard,
    title: "Dashboard",
    link: "",
  },
  {
    icon: FaRegUser ,
    title: "Users",
    link: "",
  },
  {
    icon: FiUsers,
    title: "Drivers",
    link: "",
  },
  {
    icon: MdHistory,
    title: "Booking History",
    link: "",
  },
  {
    icon: BsCash,
    title: "Fares",
    link: "",
  },
];

const Sidebar = () => {
  const { isSidebarOpen, isOpen , toggleOpen, toggleSidebar } = useContext(GlobalContext);
  
  return (
    
    <div className={`${isSidebarOpen ? "w-64" : "w-20"} ${isOpen ? "" : "hidden"} fixed lg:relative transition-all duration-300 bg-[#283045] h-screen pt-8 p-5 z-10 `}>
      <div className='relative z-30 lg:flex hidden'>
        {isSidebarOpen ? (
          <BsArrowLeftCircle
            className='bg-white text-black text-3xl rounded-full absolute top-5 -right-8 border cursor-pointer'
            onClick={toggleSidebar}
          />
        ) : (
          <BsArrowRightCircle
            className='bg-white text-black text-3xl rounded-full absolute -right-8 top-5 border cursor-pointer'
            onClick={toggleSidebar}
          />
        )}
      </div>
{/*----------------------------------FOR Ssm & MD Devices-----------------------------------  */}
      <div className='relative z-30 lg:hidden '>
        {isSidebarOpen ? (
          <BsArrowLeftCircle
            className='bg-white text-black text-3xl rounded-full absolute top-5 -right-8 border cursor-pointer'
            onClick={toggleOpen}
          />
        ) : (
          <BsArrowRightCircle
            className='bg-white text-black text-3xl rounded-full absolute -right-8 top-5 border cursor-pointer'
            onClick={toggleSidebar}
          />
        )}
      </div>


      <div className='inline-flex -mt-2'>
        <IoHome className={`text-white  text-4xl rounded cursor-pointer block float-left mr-2 duration-300 ${isSidebarOpen && "rotate-[360deg]"}`} />
        <div className='flex flex-col justify-center'>
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!isSidebarOpen && "scale-0"}`}>DriversOnline</h1>
        </div>
        
      </div>
      <div className='lg:mt-10'>
        {Data.map((item, index) => (
          <div key={index} className={`flex ${isSidebarOpen ? "hover:bg-red-600" : "justify-center "} mt-5  p-1 rounded-xl`}>
            <div className='flex flex-col justify-center'>
              <item.icon className={`text-white text-2xl rounded cursor-pointer block float-left mr-2 duration-300 ${isSidebarOpen && "rotate-[360deg]"}`} />
            </div>
            <h1 className={`text-white origin-left text-lg duration-300 ${!isSidebarOpen && "hidden"}`}>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
