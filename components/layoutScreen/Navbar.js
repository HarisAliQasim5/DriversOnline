import React, { Fragment, useState , useContext , useRef} from "react";
import { Menu, Transition , Dialog } from "@headlessui/react";
import { IoMenu, IoClose } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";

import { useRouter } from 'next/router';
import Link from 'next/link'
const Navbar = () => {

  
  const menuItems = [
    { id: 2, label: "Drivers for Kids", url: "/driveforkids" },
    { id: 3, label: "Personal Driver", url: "/personalDriver" },
    { id: 4, label: "Driver for Family", url: "/familyDriver" }
  ];
  const menuItemssecond = [
    { id: 2, label: "Home", url: "/" },
    { id: 3, label: "About", url: "/about" },
    { id: 4, label: "Services", url: "/services" },
    { id: 5, label: "Contact", url: "/contact" }
  ];
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };  
 
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };
  const handleDropDown = () => {
    setDropDown(!dropdown);
  };
  return (
    <div className="font-serif">
      <header className={`flex shadow-md  py-4 px-4 sm:px-10 ${darkMode ? "bg-dark text-white shadow-[#283045] " : "bg-white text-black "} font-[sans-serif] min-h-[70px] tracking-wide  z-50  fixed top-0 left-0 right-0`}>
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <a href="/">
            <h1 className="bg-purple  font-extrabold text-white p-2 italic   text-sm py-6 rounded-full">Drivers</h1>
          </a>
          <div className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-blac k max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              {menuItems.map((item) => (
                 <li
                 key={item.id}
                 className={`max-lg:border-b border-gray-300 max-lg:py-3 px-3 ${router.pathname === item.url ? 'text-purple' : ''}`}
               >
                  <Link
                    href={item.url}
                    className={`hover:text-purple block font-semibold text-[17px] `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex max-lg:ml-auto gap-x-4">
           
            <div className="flex flex-col justify-center">
              <button
                className=" text-sm rounded-full font-bold "
                onClick={toggleDarkMode}
              >
                {darkMode ? (
                  <MdOutlineLightMode className="text-3xl" />
                ) : (
                  <MdDarkMode className="text-3xl" />
                )}
              </button>
            </div>

            <div className="sm:flex flex-col justify-center items-center mt-1 hidden">
              <Menu as="div" className="relative inline-block text-left">
                <div onClick={handleDropDown}>
                  <Menu.Button className={`flex   items-center  font-openSans  font-bold  ${darkMode ? "bg-slate-700":"bg-gray-300"}  px-2 py-0.5 rounded-3xl`}>
                   <img className="w-6 h-4" src={language == "en" ? "/images/eng.png" : language == "ka" ? "/images/rus.png" : "/images/grg.png"} />
                    <div
                      className="hover:text-[#6DC9E8] flex flex-col justify-center mt-1"
                      onClick={handleDropDown}
                    >
                    <p className="px-1 uppercase">{language == "en" ? "ENG" : language == "ka" ? "RUS" : "GE"}</p>
                    </div>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item
                        className="hover:text-[#6DC9E8]"
                        onClick={() => handleLanguageChange("en")
                      }
                      >
                        <h1 className={"block px-4 py-2 text-sm"}>English</h1>
                      </Menu.Item>

                      <Menu.Item
                        className="hover:text-[#6DC9E8]"
                        onClick={() => handleLanguageChange("ka")}
                      >
                        <h1 className={"block px-4 py-2 text-sm"}>Georgian</h1>
                      </Menu.Item>
                      <Menu.Item
                        className="hover:text-[#6DC9E8]"
                        onClick={() => handleLanguageChange("ru")}
                      >
                        <h1 className={"block px-4 py-2 text-sm"}>Russian</h1>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* <div className="flex flex-col justify-center pl-1">
              <button className="px-4 py-2 text-sm rounded-xl font-bold text-white bg-gradient-to-r from-purple to-magenta transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] hidden lg:flex">
                Login
              </button>
            </div> */}

            <button  onClick={toggleDrawer}>
              {isDrawerOpen ? (
                ""
              ) : (
                <IoMenu className="text-3xl" />
              )}
            </button>

            <div> 
              {isDrawerOpen && (
                <Transition.Root show={open} as={Fragment}>
                  <Dialog
                    as="div"
                    className={`fixed top-0 left-0 bottom-0 overflow-x-auto ${darkMode ? "bg-gradient-to-r from-purple to-magenta" : "bg-white"} lg:w-96  w-[90%] sm:w-[50%] shadow-xl z-50 transition-transform duration-1000 ease-in-out transform ${
                      isDrawerOpen ? "-translate-x-3" : "-translate-x-[3000px]"
                    }`}
                    initialFocus={cancelButtonRef}
                    onClose={setIsDrawerOpen}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0  bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="absolute top-10 sm:top-3 transform overflow-hidden rounded-lg  text-left  transition-all sm:my-8 w-full sm:max-w-lg px-4">
                            <div className=" px-4">
                              <div className="flex justify-between">
                                <button
                                  className="fixed top-0 right-3"
                                  onClick={() => setIsDrawerOpen(false)}
                                >
                                  <IoClose className="text-3xl" />
                                </button>
                                <div>
                                <a href="/">
                                  <img
                                    src="/images/logo.png"
                                    alt="logo"
                                    className="w-12 h-12"
                                  />
                                </a>
                                </div>
                              </div>
                              <div className="flex space-x-3 mt-6 md:hidden">
                              <div>
                                    <img
                                      src="./images/uk.png"
                                      alt="logo"
                                      className="w-10 h-5"
                                    />
                                </div>
                                <div>
                                    <img
                                      src="./images/span.png"
                                      alt="logo"
                                      className="w-10 h-5"
                                    />
                                </div>
                                <div>
                                    <img
                                      src="./images/france.png"
                                      alt="logo"
                                      className="w-10 h-5"
                                    />
                                </div>
                              </div>

                  
                              <ul className="py-6  space-y-5 text-xl flex flex-col items-center justify-center">
                                {menuItemssecond.map((item  ) => (
                                  <li
                                    key={item.id}
                                    className="max-lg:border-b border-gray-300 max-lg:py-3 "
                                  >
                                    <Link
                                      href={item.url}
                                      className={`hover:text-[#007bff] block font-semibold `}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                              <ul className="py-6 md:hidden  space-y-5 text-xl flex flex-col items-center justify-center">
                                {menuItems.map((item) => (
                                  <li
                                    key={item.id}
                                    className="max-lg:border-b border-gray-300 max-lg:py-3 "
                                  >
                                    <a
                                      href={item.url}
                                      className={`hover:text-[#007bff] block font-semibold `}
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>


                              <div className="p-4">
                                {/* <button className="w-full py-2 bg-[#007bff] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                  Login
                                </button>
                                <button className="w-full mt-4 py-2 bg-[#007bff] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                  Sign up
                                </button> */}
                              </div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
