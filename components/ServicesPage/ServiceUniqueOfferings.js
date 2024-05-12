import React from "react";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
const ServiceUniqueOfferings = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  return (
    <div className={`px-4 sm:px-10 ${darkMode ? "bg-dark" : ""} font-serif`}>
      <div className={`${darkMode?"text-white":""} pt-16 lg:pt-28`}>
        <div className="md:text-center max-w-2xl mx-auto">
          <h2 className={`md:text-4xl text-3xl font-bold mb-6 ${
                    darkMode
                      ? "bg-gradient-to-br from-purple to-white text-transparent bg-clip-text"
                      : "bg-gradient-to-br from-purple to-[#640D6B] text-transparent bg-clip-text"
                  } ` }>
            Explore Our Unique Offerings
          </h2>
          <p >
            Discover a range of exclusive features designed to elevate your
            experience. Learn how our distinct offerings can redefine your
            journey and empower you to accomplish more.
          </p>
        </div>
        <div className="mt-14">
          <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-16">
            <div className={`${darkMode ? "bg-light":"bg-gray-300"} rounded-lg`}>
              <img
                src="https://readymadeui.com/image-1.webp"
                className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
              />
            </div>
            <div className="max-w-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple">
                Tailored Customization
              </h3>
              <p>
                Experience unparalleled customization options tailored to suit
                your unique needs. Our platform provides a wide array of
                features, ensuring you have the flexibility to personalize your
                journey.
              </p>
              <div class="w-full h-24 lg:h-40 flex items-center  cursor-pointer">
                <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-purple group-hover:h-full"></span>
                  <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      class="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      class="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
            <div className="max-md:order-1 max-w-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple">
                Optimized Performance
              </h3>
              <p>
                Unlock top-notch performance with our advanced optimization
                techniques. We prioritize speed, efficiency, and reliability to
                ensure a seamless experience, no matter the complexity of your
                tasks.
              </p>
              <div class="w-full h-24 lg:h-40 flex items-center  cursor-pointer">
                <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50  group">
                  <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-purple group-hover:h-full"></span>
                  <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      class="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      class="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? "bg-light":"bg-gray-300"} rounded-lg`}>
              <img
                src="https://readymadeui.com/contact.webp"
                className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceUniqueOfferings;
