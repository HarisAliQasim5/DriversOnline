import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { GlobalContext } from '@/context';

const Layout = ({ children }) => {
  const { isSidebarOpen, isOpen , toggleOpen, toggleSidebar } = useContext(GlobalContext);

  return (
    <div className='flex flex-row h-screen  bg-[#171C30]'>
      
      <Sidebar/>
      {/* <div className={`relative flex-col overflow-y-auto `}>
        <Navbar/>
        <main className=''>
          <div className={`mx-auto  ${isOpen ? "p-4 md:p-6 2xl:p-10" : "" }  `}>
            {children}
          </div>
        </main>
      </div> */}
      <div className='relative flex flex-col flex-1 overflow-y-auto  p-4 '>{children}</div>
    </div>
  );
};

export default Layout;
