import React from "react";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
const Footer = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  return (
    <div>
      <section
        className={`px-4 sm:px-10 pb-5 ${
          darkMode ? "bg-light" : "bg-gradient-to-br from-gray-200 to-gray-400 "
        } font-serif`}
      >
        
        <div className="container mx-auto flex flex-col justify-between p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-around lg:text-left">
            <h1 className="py-2 text-3xl font-medium leading-tight title-font text-purple">
              DriversOnline
            </h1>
          </div>
          <div className="md:space-x-5  lg:pb-10 xl:pb-0 text-center md:text-start space-y-5 md:space-y-0">
            <button
              type="button"
              className="px-4 py-2 inline-flex items-center rounded text-white text-xl tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                fill="#fff"
                className="inline mr-2"
                viewBox="0 0 22.773 22.773"
              >
                <path
                  d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                  data-original="#000000"
                />
              </svg>
              <div>
                <p className="text-[10px] text-white leading-none text-left px-[14px] md:px-0">
                  Download on the
                </p>
                App Store
              </div>
            </button>

            <button
              type="button"
              className="px-4 py-2 inline-flex items-center rounded text-white text-xl tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                fill="#fff"
                className="inline mr-2"
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
                <p className="text-[10px] text-white leading-none text-left">
                  Get it on
                </p>
                Google Play
              </div>
            </button>
          </div>
          
        </div>
        <footer className=" px-6 font-sans tracking-wide">
      <div className="flex flex-col items-center gap-6">

        <ul className="flex flex-wrap justify-center gap-x-7 gap-4">
          <li><a href="javascript:void(0)" className="text-xl hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-7 h-7" viewBox="0 0 512 512">
              <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" />
              <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" />
            </svg>
          </a></li>

          <li><a href="javascript:void(0)" className="text-xl hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-7 h-7" viewBox="0 0 176 176">
              <g data-name="Layer 2">
                <rect width="176" height="176" fill="#0077b5" data-original="#0077b5" rx="24" />
                <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" data-original="#ffffff" />
              </g>
            </svg>
          </a></li>

          <li><a href="javascript:void(0)" className="text-xl hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-7 h-7" viewBox="0 0 24 24">
              <linearGradient id="a" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fd5" />
                <stop offset=".5" stop-color="#ff543e" />
                <stop offset="1" stop-color="#c837ab" />
              </linearGradient>
              <path fill="url(#a)" d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z" data-original="url(#a)" />
              <path fill="#fff" d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" data-original="#ffffff" />
            </svg></a></li>

          <li><a href="javascript:void(0)" className="text-xl hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-7 h-7" viewBox="0 0 1227 1227">
              <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" data-original="#000000" />
              <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" data-original="#ffffff" />
            </svg></a></li>
        </ul>

        <hr className="border-gray-500 w-full" />

        <ul className="flex flex-wrap gap-x-3 sm:gap-x-7 gap-4">
          <p>© 2024 RideTechnology Global FZ-LLC</p>
        </ul>
      </div>
    </footer>
      </section>
    </div>
  );
};

export default Footer;
