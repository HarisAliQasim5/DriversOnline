// components/LanguagePopup.js
import React from 'react';
import { useLanguage } from './ContextFiles/LanguageContext';

const LangugaePopup = ({ onClose }) => {
  const { changeLanguage } = useLanguage();

  const handleLanguageSelect = (language) => {
    changeLanguage(language);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 ">
      <div className="relative w-full max-w-lg max-h-full p-4">
        <div className="bg-white rounded-lg shadow dark:bg-gray-900  pb-10">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white ">Select Language Prefence</h3>
          </div>
          <div className="p-4 space-y-4">
            <button className="px-4 py-2 text-sm rounded-xl font-bold text-white bg-gradient-to-r w-full from-purple to-magenta transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]  items-center justify-center" onClick={() => handleLanguageSelect('en')}>English</button>
            <button className="px-4 py-2 text-sm rounded-xl font-bold text-white bg-gradient-to-r w-full from-purple to-magenta transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]  items-center justify-center" onClick={() => handleLanguageSelect('ka')}>Georgian</button>
            <button className="px-4 py-2 text-sm rounded-xl font-bold text-white bg-gradient-to-r w-full from-purple to-magenta transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]  items-center justify-center" onClick={() => handleLanguageSelect('ru')}>Russian</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangugaePopup;



