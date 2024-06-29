import React from 'react'
import { CiMail } from 'react-icons/ci'
import { useRef, useEffect, useState } from 'react';
import { useDarkMode } from '../components/ContextFiles/DarkModeContext';
import { useLanguage } from '../components/ContextFiles/LanguageContext';

const ContactBox = () => {
    const [scrool, setscrool] = useState(true);
    const boxRef = useRef();
    const { darkMode } = useDarkMode();
    const { language } = useLanguage();
    useEffect(
        function onFirstMount() {
            const a = boxRef.current.offsetTop
            function onScroll() {
                const scrolled = document.documentElement.scrollTop;
                if (a <= scrolled + (screen.availHeight / 2.9)) {
                    setscrool(true)
                }
                else {
                    setscrool(false)
                }
            }
            window.addEventListener("scroll", onScroll);
        }, []
    );

    return (
        <div>
            <section className="relative py-20 md:py-32 overflow-hidden" ref={boxRef}>
                {/* -------------------------------- For light Mode-----------------------------------------------------------------*/}
                <img className={`absolute top-0 left-0 md:mt-24  ${darkMode ? "hidden" : ""}`} src='/images/dotside.svg' alt="" />
                <img className={`absolute bottom-0 right-0 mb-8 lg:mb-24 ${darkMode ? "hidden" : ""} `} src="/images/dotsside2.svg" alt="" />

                {/* ---------------------------------For Dark Mode----------------------------------------------------------------- */}

                <img className={`absolute top-0 -left-10 md:mt-24 w-64 h-64 opacity-50 ${darkMode ? "" : "hidden"}`} src='/images/dotside4.svg' alt="" />
                <img className={`absolute bottom-0 -right-10 mb-8 lg:mb-24  w-64 h-64 opacity-50 ${darkMode ? "" : "hidden"} `} src="/images/dotsside3.svg" alt="" />
                <div className="relative container px-4 mx-auto" >
                    <div className="max-w-2xl mx-auto mb-18 text-center">
                        <span className={`inline-block py-1 px-3 mb-4 text-xs font-semibold text-oragne-900 bg-purple text-white rounded-full`}>READY TO SUPPORT</span>
                        <h1 className="font-heading text-5xl xs:text-6xl font-bold  mb-4 bg-gradient-to-br from-purple to-magenta text-transparent bg-clip-text ">
                            <span className="font-serif italic font-bold  ">Contact Us </span>
                        </h1>
                        <p className=" text-gray-500 font-semibold">Relax, we are ready to support 24/7 for you</p>
                    </div>
                    <div className="flex flex-wrap justify-center -mx-4 mt-5">
                        <div className={`w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-0 ${scrool ? "animate_animated animate_bounceInLeft" : ""} `}>
                            <div className="max-w-sm mx-auto h-full py-8 px-6 bg-white  rounded-lg shadow-md ">
                                <div className="max-w-2xs mx-auto text-center">
                                    <CiMail className="w-14 h-14 mx-auto border rounded-full p-2 mb-1" />
                                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Email</h5>
                                    <p className="text-gray-500 mb-3 px-16">Hate to fill form Email us</p>
                                    <a href="mailto:info@binmushtaq.com">
                                        <span className="block text-sm text-green-900 mb-8">info@drivers.com</span>
                                    </a>
                                    <a href="mailto:info@binmushtaq.com" className="relative group inline-block py-4 px-6 text-white font-semibold bg-red-800 rounded-full overflow-hidden">
                                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                        <div className="relative flex items-center justify-center">
                                            <span className="mr-4">Email</span>
                                            <span>
                                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z" fill="#FAFBFC"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-0 ${scrool ? "animate__animated animate__bounceInRight" : ""}`}>
                            <div className="max-w-sm mx-auto h-full py-8 px-6 bg-white  rounded-lg shadow-md">
                                <div className="max-w-2xs mx-auto text-center">
                                    <CiMail className="w-14 h-14 mx-auto border rounded-full p-2 mb-1" />
                                    <h5 className="text-2xl font-bold text-gray-900 mb-3">Phone</h5>
                                    <p className="text-gray-500 mb-3 px-16">Call our representative now</p>
                                    <a href="tel:+923299979998">
                                        <span className="block text-sm text-orange-900 my-1">+92 0000000000</span>
                                    </a>
                                    <a href="tel:+923426020955">
                                        <span className="block text-sm text-orange-900 my-1">+92 0000000000</span>
                                    </a>
                                    <a href="tel:+923299979998">
                                        <span className="block text-sm text-orange-900 my-1 mb-5">+92 0000000000</span>
                                    </a>
                                    <span className="relative group inline-block py-4 px-6 text-white font-semibold  bg-red-800 rounded-full overflow-hidden" >
                                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                        <a href="tel:+923299979998">
                                            <div className="relative flex items-center justify-center">
                                                <span className="mr-4">Call Now</span>
                                                <span>
                                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z" fill="#FAFBFC"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactBox