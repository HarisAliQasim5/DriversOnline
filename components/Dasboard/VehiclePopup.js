import React, { useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
const VehiclePopup = ({
  isOpen,
  setIsOpen,
  vehicleData,
  setVehicleData,
  handleSubmit,
  handleEdit,
  type,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const cancelButtonRef = useRef(null);
  const { darkMode } = useDarkMode();

  return (
    <div className="z-50">
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
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full   min-w-full sm:max-w-lg sm:min-w-min">
                  <div className="mt-2">
                    <form onSubmit={type == "add" ? handleSubmit : handleEdit}  className={`${darkMode ? "bg-[#283045]" : "bg-white"}`}>
                      <div className={`w-full flex flex-col justify-center  py-2 pl-2 ${darkMode ? "bg-slate-900" : "bg-black"}   `}>
                        <span className="flex justify-between pr-5">
                          <h1 className="font-semibold text-2xl text-red-600">
                          {type == "add" ? "Add New Vehicle" : "Edit Vehicle"}
                          </h1>
                          <IoClose
                            className="text-3xl cursor-pointer text-white"
                            onClick={() => setIsOpen(false)}
                          />
                        </span>
                      </div>
                      <div className="p-4">
                      <div className="mb-4">
                        <label
                          htmlFor="type"
                          className={`block ${darkMode ?  "text-white" : "text-black"} text-md  mb-2`}
                        >
                          Type
                        </label>
                        <input
                          type="text"
                          name="type"
                          value={vehicleData.type}
                          onChange={handleChange}
                          className={` border  p-1 rounded-md px-2    w-full ${darkMode ? "text-gray-300 bg-[#283045] border-gray-500" : "bg-gray-100 text-gray-600"} `}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="pricePerKm"
                          className={`block ${darkMode ?  "text-white" : "text-black"} text-md  mb-2`}
                        >
                          Price Per Km
                        </label>
                        <input
                          type="number"
                          name="pricePerKm"
                          value={vehicleData.pricePerKm}
                          onChange={handleChange}
                          className={` border  p-1 rounded-md px-2    w-full ${darkMode ? "text-gray-300 bg-[#283045] border-gray-500" : "bg-gray-100 text-gray-600"} `}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="seats"
                          className={`block ${darkMode ?  "text-white" : "text-black"} text-md  mb-2`}
                        >
                          Seats
                        </label>
                        <input
                          type="number"
                          name="seats"
                          value={vehicleData.seats}
                          onChange={handleChange}
                          className={` border  p-1 rounded-md px-2    w-full ${darkMode ? "text-gray-300 bg-[#283045] border-gray-500" : "bg-gray-100 text-gray-600"} `}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="imageUrl"
                          className={`block ${darkMode ?  "text-white" : "text-black"} text-md  mb-2`}
                        >
                          Image URL
                        </label>
                        <input
                          type="text"
                          name="imageUrl"
                          value={vehicleData.imageUrl}
                          onChange={handleChange}
                          className={` border  p-1 rounded-md px-2    w-full ${darkMode ? "text-gray-300 bg-[#283045] border-gray-500" : "bg-gray-100 text-gray-600"} `}
                        />
                      </div>
                      <div className="flex items-center justify-center gap-x-4 mt-10 mb-4 ">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Submit
                        </button>
                        
                      </div>
                      </div>
                      
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default VehiclePopup;
