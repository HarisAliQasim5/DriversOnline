import React, { useState, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useDarkMode } from '../ContextFiles/DarkModeContext';
import { useLanguage } from '../ContextFiles/LanguageContext';
SwiperCore.use([Navigation]);

const Testimonials = () => {

    const { darkMode } = useDarkMode();
    const { language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "Jane D",
      role: "CEO",
      avatarUrl: "https://pagedone.io/asset/uploads/1696229969.png",
      review:
        "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
      rating: 4,
    },
    {
      id: 2,
      name: "Harsh P.",
      role: "Product Designer",
      avatarUrl: "https://pagedone.io/asset/uploads/1696229994.png",
      review:
        "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
      rating: 5,
    },
    {
      id: 3,
      name: "Haris.",
      role: "Product Designer",
      avatarUrl: "https://pagedone.io/asset/uploads/1696229994.png",
      review:
        "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
      rating: 1,
    },
    // Add more testimonials here
  ];

  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  const prevTestimonial = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const nextTestimonial = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className={`px-4 sm:px-10 ${darkMode ? "bg-dark" : ""} pb-20 pt-20`}>

<h1 className=" text-purple font-bold pb-5 text-4xl  italic ">
            Testimonials
          </h1>
            <p className="pt-5 text-4xl md:text-5xl pb-10 lg:w-2/3">Hassle-free rides, unmatched service with <span className="text-purple">DriversOnline!</span></p>
      <div className="mx-auto max-w-7xl ">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5">
            <div className="flex justify-center md:justify-start lg:mb-14">
             
            </div>
            <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}  leading-[3.25rem] mb-8`}>
              23k+ Customers gave their{" "}
              <span className={`text-transparent ${darkMode  ? "bg-clip-text bg-gradient-to-tr from-[#C40C0C] to-purple" : "bg-clip-text bg-gradient-to-tr from-purple to-[#FFD0D0]"} `}>
                Feedback
              </span>
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-10">
              <button
                className={`group flex justify-center items-center border border-solid ${darkMode ? "bg-purple" : "border-black bg-black"}  w-12 h-12 transition-all duration-500 rounded-lg `}
                onClick={prevTestimonial}
              >
                <IoIosArrowBack className={`text-3xl ${darkMode ? "text-white" : "text-white"} `} />
              </button>
              <button
                className={`group flex justify-center items-center border border-solid ${darkMode ? "border-white bg-purple" : "border-black bg-black"}  w-12 h-12 transition-all duration-500 rounded-lg `}
                onClick={nextTestimonial}
              >
                <IoIosArrowForward className={`text-3xl ${darkMode ? "text-white" : "text-white"} `}/>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <Swiper
              ref={swiperRef}
              className="grid gap-4 grid-cols-1 lg:grid-cols-2"
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              onSwiper={setSwiper}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className={`group ${darkMode ?  "bg-[#070F2B] border-purple " : "bg-white border-gray-300 "}  border border-solid rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 `}>
                    <div className="flex items-center gap-5 mb-5 sm:mb-9">
                      <img src={testimonial.avatarUrl} alt="avatar" />
                      <div className="grid gap-1">
                        <h5 className="text-gray-900 font-medium transition-all duration-500">
                          {testimonial.name}
                        </h5>
                        <span className={`text-sm leading-6 ${darkMode ? "text-white" : "text-gray-500"} `}>
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                          key={index}
                          className={`h-5 w-5 fill-current ${
                            index < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className={`text-sm ${darkMode ? "text-white" : "text-gray-500"} leading-6 transition-all duration-500 min-h-24`}>
                      {testimonial.review}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
