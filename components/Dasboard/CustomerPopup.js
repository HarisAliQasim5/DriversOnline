import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDarkMode } from "../ContextFiles/DarkModeContext";

const CustomerPopup = ({
  isOpen,
  setIsOpen,
  data,
  seteditData,
  handleEdit
}) => {
  const cancelButtonRef = useRef(null);
  const { darkMode } = useDarkMode();

  const handleToggle= (event) => {
    const updatedBlocked = event.target.checked;
    seteditData((prevData) => ({
      ...prevData,
      blocked: updatedBlocked,
      blockedMessage: ""
    }));
    console.log("Check",data)
  };

  const handleBlockedMessage = (event)=>{
    const updatedBlockedMessage = event.target.value;
    seteditData((prevData) => ({
      ...prevData,
      blockedMessage: updatedBlockedMessage,
    }));
  }

  

  return (
    <div className="z-50 ">
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:z-10"
          initialFocus={cancelButtonRef}
          onClose={() => setIsOpen(false)}
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
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed top-4 sm:top-0 inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4  text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full   min-w-full sm:max-w-lg sm:min-w-min">
                  {data && (
                    <form onSubmit={handleEdit} className={`${darkMode ? "bg-[#283045]" : "bg-white"}`}>
                      <div className={`w-full flex flex-col justify-center  py-2 pl-2 ${darkMode ? "bg-slate-900" : "bg-black"} rounded-se-md rounded-ss-md `}>
                        <span className="flex justify-between pr-5">
                          <h1 className="font-semibold text-2xl text-purple md:pl-4">
                            Edit
                          </h1>
                          <IoClose
                            className="text-3xl cursor-pointer text-white"
                            onClick={() => setIsOpen(false)}
                          />
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="sm:grid sm:grid-cols-2 gap-x-5 my-3 gap-y-3 space-y-2 sm:space-y-0">
                          <div className="flex flex-col">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>
                              First Name
                            </label>
                            <input
                              className={`${darkMode ? "bg-[#283045] border-gray-500 text-gray-300" : "bg-gray-100 text-gray-600"} border p-1 rounded-md px-2   `}
                              type="text"
                              value={data.firstName}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>Last Name</label>
                            <input
                              className={`${darkMode ? "bg-[#283045] border-gray-500 text-gray-300" : "bg-gray-100 text-gray-600"} border p-1 rounded-md px-2   `}
                              type="text"
                              value={data.lastName}
                            />
                          </div>
                          <div className="flex flex-col col-span-2">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>Email</label>
                            <input
                              className={`${darkMode ? "bg-[#283045] border-gray-500 text-gray-300" : "bg-gray-100 text-gray-600"} border p-1 rounded-md px-2   `}
                              type="email"
                              value={data.email}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>Phone No</label>
                            <input
                              className={`${darkMode ? "bg-[#283045] border-gray-500 text-gray-300" : "bg-gray-100 text-gray-600"} border p-1 rounded-md px-2   `}
                              type="text"
                              value={data.phone}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>Gender</label>
                            <input
                              className={`${darkMode ? "bg-[#283045] border-gray-500 text-gray-300" : "bg-gray-100 text-gray-600"} border p-1 rounded-md px-2   `}
                              type="text"
                              value={data.gender}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>Type</label>
                            <input
                              className={`${darkMode ? "bg-[#283045] border-gray-500 text-gray-300" : "bg-gray-100 text-gray-600"} border p-1 rounded-md px-2   `}
                              type="text"
                              value={data.type}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>Verified</label>
                            <input
                             className={`${darkMode ? "bg-[#283045] border-gray-500 text-gray-300" : "bg-gray-100 text-gray-600"} border p-1 rounded-md px-2   `}
                              type="text"
                              value={data.verified}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>Blocked</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={data.blocked}
                                className="sr-only peer"
                                onChange={handleToggle}
                              />
                              <div className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-16 h-7 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-9 peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500"></div>
                            </label>
                          </div>
                          {data?.blocked && 
                          <div className="flex flex-col col-span-2">
                            <label className={`pb-1 ${darkMode ? "text-white" : "text-black"}`}>Message</label>
                            <textarea rows={5}
                            value={data.blockedMessage}
                            onChange={handleBlockedMessage}
                            className={`${darkMode ? "bg-[#283045] border-gray-500 text-gray-300" : "bg-gray-100 text-gray-600"} border p-1 rounded-md px-2   `}/>
                          </div>}
                        </div>
                      </div>

                      <div className="flex justify-center gap-x-4 mt-4 mb-4 pb-5 sm:pb-8">
                        <button
                          className="bg-blue-600 text-white px-5 py-2 rounded-md"
                          type="submit"
                          onClick={handleEdit}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default CustomerPopup;
