import React from "react";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";

const HomeInsights = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  return (
    <div>
     {language === 'en' &&  <div className={` ${darkMode ? "bg-dark" : ""} px-4 sm:px-10 pt-32 pb-5 `}>
        <div
          className={`font-serif  ${
            darkMode ? "bg-light" : "bg-gradient-to-br from-gray-200 to-gray-400"
          } rounded-3xl p-2 py-4`}
        >
          <h1 className="sm:px-4  bg-gradient-to-br from-purple to-magenta text-transparent bg-clip-text font-bold pb-5 text-4xl  italic ">
            Insights
          </h1>
          <div className="grid lg:grid-cols-2 ">
            <div className="sm:px-4">
             
              <p className="pt-5 text-4xl md:text-5xl pb-10 ">
                A<span className="text-purple"> DriversOnline app</span> that
                doesn't charge extra
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi hic non esse magni facere, beatae omnis soluta quisquam.
                Laboriosam fugiat at a nihil atque est illum ad error aliquid
                vel!
              </p>
              <div class="font-serif">
                <div className="md:space-x-5 pt-5 xl:pt-10 lg:pb-10 xl:pb-0 text-center md:text-start space-y-5 md:space-y-0">
                  <button
                    type="button"
                    class="px-4 py-2 inline-flex items-center rounded text-white text-xl tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      fill="#fff"
                      class="inline mr-2"
                      viewBox="0 0 22.773 22.773"
                    >
                      <path
                        d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                        data-original="#000000"
                      />
                    </svg>
                    <div>
                      <p class="text-[10px] text-white leading-none text-left px-[14px] md:px-0">
                        Download on the
                      </p>
                      App Store
                    </div>
                  </button>

                  <button
                    type="button"
                    class="px-4 py-2 inline-flex items-center rounded text-white text-xl tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      fill="#fff"
                      class="inline mr-2"
                      viewBox="0 0 64 64"
                    >
                      <path
                        fill="#57cef3"
                        d="M7 3v58l33-29z"
                        data-original="#57cef3"
                      />
                      <path
                        fill="#fff200"
                        d="m36 32 8-10 15 10-15 10z"
                        data-original="#fff200"
                      />
                      <path
                        fill="#48ff48"
                        d="M36 32 7 3h4l34 20z"
                        data-original="#48ff48"
                      />
                      <path
                        fill="#ff6c58"
                        d="M36 32 7 61h4l34-20z"
                        data-original="#ff6c58"
                      />
                      <path
                        fill="#f33"
                        d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                        data-original="#ff3333"
                      />
                      <path
                        fill="#0779e4"
                        d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                        data-original="#0779e4"
                      />
                      <path
                        fill="#314a52"
                        d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                        data-original="#314a52"
                      />
                    </svg>
                    <div>
                      <p class="text-[10px] text-white leading-none text-left">
                        Get it on
                      </p>
                      Google Play
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="flex justify-center lg:justify-end">
                <img
                  src="./images/homeinsight.png"
                  alt=""
                  className="w-[550px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     }
    </div>
  );
};

export default HomeInsights;
