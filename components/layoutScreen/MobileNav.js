import React from 'react'

const MobileNav = (isDrawerOpen) => {
  return (
    <div>
       <div
              className={`fixed top-0 left-0 bottom-0 overflow-x-auto bg-gray-100 w-64 shadow-md z-50 transition-transform duration-500 ease-in-out transform ${
                isDrawerOpen ? "-translate-x-3" : "-translate-x-[3000px]"
              }`}
            >
              {/* Close button */}
              <button className="absolute top-4 right-4" onClick={toggleDrawer}>
                <IoClose className="text-3xl" />
              </button>

              <ul className="py-6">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="max-lg:border-b border-gray-300 max-lg:py-3 px-3"
                  >
                    <a
                      href={item.url}
                      className={`hover:text-[#007bff] block font-semibold text-[15px]`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="  p-4">
                <button className="w-full py-2 bg-[#007bff] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Login
                </button>
                <button className="w-full mt-4 py-2 bg-[#007bff] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Sign up
                </button>
              </div>
            </div>
    </div>
  )
}

export default MobileNav
