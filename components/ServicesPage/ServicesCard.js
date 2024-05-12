import React from 'react';
import { CiHome } from "react-icons/ci";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";

const ServicesCard = () => {
    const { darkMode } = useDarkMode();
    const { language } = useLanguage();

    // Define an array of service objects
    const services = [
        {
            icon: CiHome, // Icon component
            title: 'Refreshing Design',
            description: 'We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
        },
        {
            icon: CiHome, // No icon for this service
            title: 'Based on Tailwind CSS',
            description: 'We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
        },
        {
            icon: CiHome, // Icon component
            title: 'Refreshing Design',
            description: 'We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
        },
        {
            icon: CiHome, // No icon for this service
            title: 'Based on Tailwind CSS',
            description: 'We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
        },
        {
            icon: CiHome, // Icon component
            title: 'Refreshing Design',
            description: 'We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
        },
        {
            icon: CiHome, // No icon for this service
            title: 'Based on Tailwind CSS',
            description: 'We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
        },
        // Add more service objects as needed
    ];

    return (
        <div className={`px-4 sm:px-10 ${darkMode ? "bg-dark" : ""} font-serif overflow-x-hidden`}>
            <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
                <div className="">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                                <span className="font-semibold text-lg text-primary mb-2 block text-purple">
                                    Our Services
                                </span>
                                <h2 className={`font-bold text-3xl sm:text-4xl md:text-[40px] mb-4 ${
                    darkMode
                      ? "bg-gradient-to-br from-purple to-white text-transparent bg-clip-text"
                      : "bg-gradient-to-br from-purple to-[#640D6B] text-transparent bg-clip-text"
                  } `}>
                                    What We Offer
                                </h2>
                                <p className={`text-base ${darkMode ? "text-white" : ""}`}>
                                    There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {services.map((service, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4">
                                <div className={`p-10 md:px-7 xl:px-10 rounded-[20px] ${darkMode ? "bg-light" : "bg-gray-300" } shadow-md hover:shadow-lg mb-8`}>
                                    <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                                        {service.icon && <service.icon className={`${darkMode ? "bg-purple text-white" : "bg-black text-white"} px-2 rounded-2xl`} size={60}/>}
                                    </div>
                                    <h4 className="font-semibold text-xl text-purple mb-3">{service.title}</h4>
                                    <p className={`${darkMode ? "text-white" : ""}`}>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesCard;
