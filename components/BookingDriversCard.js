import React, { useRef } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { FaUser , FaStar , FaWifi } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GiBasket } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlinePets } from "react-icons/md";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const BookingDriversCard = ({ data , open }) => {
  // Ensure data is an array
  const dataArray = Array.isArray(data) ? data : [];

  const swiperInstances = useRef([]);

  const goNext = (swiper) => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = (swiper) => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSwiperInit = (swiper, index) => {
    if (swiper && !swiperInstances.current.includes(swiper)) {
      swiperInstances.current[index] = swiper;
    }
  };

  return (
    <div className="px-10">
      <div className="grid grid-cols-3 mt-20 gap-x-10">
        {dataArray.map((item, index) => (
          <div key={index} className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-lg w-full pb-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                onSwiper={(swiper) => handleSwiperInit(swiper, index)}
                className="z-10"
              >
                {item.data && item.data.vehicleInfo && (
                  [
                    item.data.vehicleInfo.carFrontImageUrl,
                    item.data.vehicleInfo.carBackImageUrl,
                    item.data.vehicleInfo.carInteriorImageUrl,
                  ]
                    .filter((imageUrl) => imageUrl) // Filter out undefined or empty URLs
                    .map((imageUrl, slideIndex) => (
                      <SwiperSlide key={slideIndex}>
                        <img
                          src={imageUrl}
                          alt={`Image ${slideIndex + 1}`}
                          className="w-full h-64 object-cover rounded-t-xl"
                        />
                      </SwiperSlide>
                    ))
                )}
              </Swiper>
              <div className="top-0 left-0 right-0 bottom-0 flex items-center justify-between opacity-100 transition-opacity duration-300 hover:opacity-100">
                <button
                  className="text-2xl -mt-60 z-50 text-white bg-gray-900 bg-opacity-50 rounded-full p-0.5 hover:bg-opacity-75"
                  onClick={() => goPrev(swiperInstances.current[index])}
                >
                  <IoIosArrowBack />
                </button>
                <button
                  className="text-2xl -mt-60 z-50 text-white bg-gray-900 bg-opacity-50 rounded-full p-0.5 hover:bg-opacity-75"
                  onClick={() => goNext(swiperInstances.current[index])}
                >
                  <IoIosArrowForward />
                </button>
              </div>
              <div className="px-2">
                <div className="grid grid-cols-3 mt-4">
                  <div className="flex col-span-2 gap-x-4">
                    <div className="flex flex-col justify-center">
                      <img
                        src={item.data.profileImageUrl}
                        alt=""
                        className="h-14 w-14 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-y-1">
                      <p className="font-bold text-xl">{item.data.fullName}</p>
                      <div className="flex gap-x-2">
                        <div className="flex flex-col justify-center">
                        <TfiWorld className="text-purple"/>
                        </div>
                        <p>{item.data.languages.join(", ")}</p>
                      </div>
                      <div className="flex gap-x-2">
                        <div className="flex flex-col justify-center">
                        <FaUser className="text-purple"/>
                        </div>
                        <p>{item.data.gender}</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                  <div className="flex gap-x-2 justify-end">
                        <div className="flex flex-col justify-center">
                        <FaStar className="text-yellow-500"/>
                        </div>
                        <p>4.5</p>
                      </div>
                      <p className="text-end text-sm text-gray-400">128 Reviews</p>

                  </div>
                </div>
                <div className="flex gap-x-2 mt-5">
                        <div className="flex flex-col justify-center">
                        <IoCarSport className="text-purple text-xl"/>
                        </div>
                        <p className="text-lg font-bold">{item.data.vehicleInfo.name}</p>
                </div>
                <div className="grid grid-cols-2 mt-2">

                  <div className="flex gap-x-5">
                  <div className="flex">
                        <div className="flex flex-col justify-center">
                        <MdOutlineAirlineSeatReclineNormal className="text-purple text-xl"/>
                        </div>
                        <p className="font-bold pl-1">{item.data.vehicleInfo.numOfSeats}</p>
                </div>
                <div className="flex">
                        <div className="flex flex-col justify-center">
                        <GiBasket className="text-purple text-lg"/>
                        </div>
                        <p className="font-bold pl-1">4</p>
                </div>
                <div className="flex">
                        <div className="flex flex-col justify-center">
                        <BsFillFuelPumpFill  className="text-purple text-lg"/>
                        </div>
                        <p className="font-bold pl-1">Gas</p>
                </div>

                  </div>
                  <div className="flex flex-col justify-center">
                  <div className="flex gap-x-5 justify-center">
                    <TbAirConditioning className="text-purple text-xl"/>
                    <FaWifi className="text-purple text-xl"/>
                    <MdOutlinePets className="text-purple text-xl"/>

                  </div>
                  </div>

                </div>
                <hr className="mt-4 border-t border-purple "></hr>
                <div className="mt-3">
                  <div className="flex">
                  <p>This is Final Price</p>
                  <div className="flex flex-col justify-center mt-0.5 pl-1">
                  <AiTwotoneExclamationCircle/>
                  </div>
                  </div>
                  <p className="font-bold">Gel 336 - Price for the Vehicle</p>
                </div>

                <div className="flex bg-purple justify-center mx-4 py-1.5 rounded-lg mt-5">
                  <button className="text-white font-bold">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingDriversCard;
