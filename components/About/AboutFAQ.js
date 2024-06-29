import React, { useState } from 'react';
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";

const AboutFAQ = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Data containing questions and answers
  const data = [
    {
      question: "How can I get started?",
      answer: "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup."
    },
    {
      question: "What is the pricing structure?",
      answer: "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users."
    }
  ];

  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  const toggleAnswer = (index) => {
    setIsOpen(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className={`px-4 sm:px-10 ${darkMode ? "bg-dark" : ""} font-serif`}>
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className={`text-3xl font-bold leading-tight ${
                    darkMode
                      ? "bg-gradient-to-br from-purple to-white text-transparent bg-clip-text"
                      : "bg-gradient-to-br from-purple to-[#640D6B] text-transparent bg-clip-text"
                  } text-black sm:text-4xl lg:text-5xl`}>
              Explore Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {data.map((item, index) => (
              <div key={index} className={`transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer ${isOpen[index] ? 'bg-gray-50' : ''}`}>
                <button type="button" onClick={() => toggleAnswer(index)} className="flex items-center justify-between w-full px-4 py-5 ">
                  <span className="flex text-lg font-semibold text-black">{item.question}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 text-gray-400 transform ${isOpen[index] ? 'rotate-0' : '-rotate-180'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div style={{ display: isOpen[index] ? 'block' : 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-purple text-base mt-9">
            Still have questions?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline">Contact
              our support
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutFAQ;
