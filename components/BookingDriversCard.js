import React, { useRef } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiSpeakLine } from "react-icons/ri";
import { FaUser, FaStar, FaWifi } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BsFillFuelPumpFill, BsFillLuggageFill } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { format } from "date-fns";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const BookingDriversCard = ({ data, onBookNow,departure, arrival, stopPoints, selectedDate }) => {
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

  const renderRouteIcons = (departure, stopPoints, arrival) => {
    const allPoints = [departure, ...stopPoints, arrival];
    return allPoints.map((point, index) => {
      if (index === 0) {
        return (
          <div key={index} className="flex items-center gap-x-1">
            <IoIosArrowForward className="text-purple text-lg" />
            <p className="text-lg font-bold">{point}</p>
          </div>
        );
      } else if (index === allPoints.length - 1) {
        return (
          <div key={index} className="flex items-center gap-x-1">
            <IoIosArrowForward className="text-purple text-lg transform rotate-180" />
            <p className="text-lg font-bold">{point}</p>
          </div>
        );
      } else {
        return (
          <div key={index} className="flex items-center gap-x-1">
            <IoIosArrowForward className="text-purple text-lg" />
            <p className="text-lg font-bold">{point}</p>
          </div>
        );
      }
    });
  };

  const formatDate = (date) => {
    return format(date, "dd MMM yyyy");
  };

  const formatDay = (date) => {
    return format(date, "EEEE");
  };

  return (
    <div className="px-2 sm:px-10">
   
      {dataArray.length === 0 ?
              <h1 className="text-5xl text-purple mt-10 font-serif font-bold">
              No car found
            </h1> :    <h1 className="text-5xl text-purple mt-10 font-serif font-bold">
        Available Cars
      </h1>
}
      <div className="flex justify-between items-center mt-5">
        <div>
          <p className="text-lg text-gray-600">Departure Destination:</p>
          <div className="flex items-center gap-x-1">
            <IoIosArrowForward className="text-purple text-lg" />
            <p className="text-lg font-bold">{departure}</p>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-600">Arrival Destination:</p>
          <div className="flex items-center gap-x-1">
            <IoIosArrowForward className="text-purple text-lg" />
            <p className="text-lg font-bold">{arrival}</p>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-600">Stop Points:</p>
          <div className="flex flex-col">
            {stopPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-x-1">
                <IoIosArrowForward className="text-purple text-lg" />
                <p className="text-lg font-bold">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-600">Date of Booking:</p>
          <p className="text-lg font-bold">{formatDate(selectedDate)}</p>
          <p className="text-sm text-gray-500">{formatDay(selectedDate)}</p>
        </div>
      </div>
      <div className="mb-10">

      {dataArray.length === 0 ? (
        <p className="text-lg mt-5 text-center text-gray-500">No rides found.</p>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-10 gap-x-10">
          {dataArray.map((item, index) => (
            <div key={index} className="flex justify-center ">
              <div className="rounded-lg shadow-lg max-w-[300px] xs:max-w-sm pb-2 p-5 hover:bg-gray-100">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  onSwiper={(swiper) => swiperInstances.current[index] = swiper}
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
                            className="w-full h-44 object-fill rounded-t-xl"
                          />
                        </SwiperSlide>
                      ))
                  )}
                </Swiper>
                <div className="top-0 left-0 right-0 bottom-0 flex items-center justify-between opacity-100 transition-opacity duration-300 hover:opacity-100">
                  <button
                    className="text-2xl -mt-40 z-30 text-white bg-gray-900 bg-opacity-50 rounded-full p-0.5 hover:bg-opacity-75"
                    onClick={() => goPrev(swiperInstances.current[index])}
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    className="text-2xl -mt-40 z-30 text-white bg-gray-900 bg-opacity-50 rounded-full p-0.5 hover:bg-opacity-75"
                    onClick={() => goNext(swiperInstances.current[index])}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
                <div className="px-2">
                  <div className="grid grid-cols-3 mt-1">
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
                            <RiSpeakLine className="text-purple" />
                          </div>
                          <p>{item.data.languages.join(", ")}</p>
                        </div>
                        <div className="flex gap-x-2">
                          <div className="flex flex-col justify-center">
                            <FaUser className="text-purple" />
                          </div>
                          <p>{item.data.gender}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex gap-x-2 justify-end">
                        <div className="flex flex-col justify-center">
                          <FaStar className="text-yellow-500" />
                        </div>
                        <p>4.5</p>
                      </div>
                      <p className="text-end text-sm text-gray-400">128 Reviews</p>
                    </div>
                  </div>
                  <div className="flex gap-x-2 my-1">
                    <div className="flex flex-col justify-center">
                      <IoCarSport className="text-purple text-xl" />
                    </div>
                    <p className="text-lg font-bold">{item.data.vehicleInfo.name}</p>
                  </div>
                  <div className="grid grid-cols-2 mt-2">
                    <div className="flex gap-x-5">
                      <div className="flex">
                        <div className="flex flex-col justify-center">
                          <MdOutlineAirlineSeatReclineNormal className="text-purple text-xl" />
                        </div>
                        <p className="font-bold pl-1">{item.data.vehicleInfo.numOfSeats}</p>
                      </div>
                      <div className="flex">
                        <div className="flex flex-col justify-center">
                          <BsFillLuggageFill className="text-purple text-lg" />
                        </div>
                        <p className="font-bold pl-1">4</p>
                      </div>
                      <div className="flex">
                        <div className="flex flex-col justify-center">
                          <BsFillFuelPumpFill className="text-purple text-lg" />
                        </div>
                        <p className="font-bold pl-1">Gas</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex gap-x-5 justify-center">
                        <span className="text-purple">A/C</span>
                        <FaWifi className="text-purple text-xl" />
                        <MdOutlinePets className="text-purple text-xl" />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-1 border-t border-purple my-2"></hr>
                  <div className="mt-1">
                    <div className="flex">
                      <p className="py-1">Total Price</p>
                    </div>
                    <p>
                      <b>Gel {item.price}</b> {/* Assuming price is included in item */}
                    </p>
                  </div>

                  <div className="flex flex-col mt-2">
                  <p className="text-lg text-gray-600">Categories:</p>
                  <div className="flex gap-2 mt-1 flex-col my-3">
                    {item.data.category? item.data.category.map((category, catIndex) => (
                      <div key={catIndex} className="flex items-center gap-x-1 px-2 py-1 bg-gray-200 rounded-md">
                        <AiTwotoneExclamationCircle className="text-purple text-lg" />
                        <p className="text-lg font-bold">{category}</p>
                      </div>
                    )) : ""}
                  </div>
                </div>

                  <div className="flex bg-purple justify-center mx-4 py-1.5 rounded-lg mt-2 cursor-pointer" onClick={() => onBookNow(item.key, item.price)}>
                    <button className="text-white font-bold">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default BookingDriversCard;
