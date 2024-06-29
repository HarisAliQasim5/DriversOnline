import React, { useState, useEffect } from "react";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";

const images = [
  "./images/kids.png", // Include more image paths here
  "./images/family.png",
  "./images/tourist.png",
];

const cardData = [
    {
      title: "Tourist Drivers",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button 1"
    },
    {
      title: "Regular Drivers",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button 2"
    },
    {
      title: "Family Drives",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button 3"
    },
    {
      title: "Kid Drivers",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Button 4"
    }
  ];

const HomeDrivers = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`px-4 sm:px-10 ${darkMode ? "bg-dark" : ""} font-serif pt-32`}
    >
      <div
        className={`${
          darkMode ? "bg-light" : "bg-gradient-to-br from-gray-200 to-gray-400"
        } rounded-3xl pb-10 `}
      >
        <img
          src={images[currentImageIndex]}
          alt="Display"
          className="w-full rounded-t-3xl"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 pt-4 gap-x-4 gap-y-5">
      {cardData.map((card, index) => (
        <div key={index} className={`block rounded-lg ${darkMode ? "bg-dark" : "bg-white"} p-6 text-surface shadow-secondary-1`}>
          <h5 className="mb-2 text-xl font-medium leading-tight">{card.title}</h5>
          <p className="mb-4 text-base">{card.content}</p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out bg-black "
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default HomeDrivers;
