import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { GlobalContext } from '@/context';
import { useDarkMode } from "../ContextFiles/DarkModeContext";

const Layout = ({ children }) => {
  const { isSidebarOpen, isOpen , toggleOpen, toggleSidebar } = useContext(GlobalContext);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex flex-row h-screen ${darkMode ? "bg-[#171C30]" : "bg-gray-200"} `}>
      
      <Sidebar/>
      {/* <div className={`relative flex-col overflow-y-auto `}>
        <Navbar/>
        <main className=''>
          <div className={`mx-auto  ${isOpen ? "p-4 md:p-6 2xl:p-10" : "" }  `}>
            {children}
          </div>
        </main>
      </div> */}
      <div className='relative flex flex-col flex-1 overflow-y-auto  lg:px-4 lg:pt-0.5 '>{children}</div>
    </div>
  );
};

export default Layout;
