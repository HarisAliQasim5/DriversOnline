import Navbar from "@/components/layoutScreen/Navbar";
import React, { useState, useEffect, useRef } from "react";
import cities from "../src/locals/cities";
import BookingSteps from "@/components/BookingSteps";
import BookingFeatures from "@/components/BookingFeatures";
import BookingGallery from "@/components/BookingGallery";
import Footer from "@/components/layoutScreen/Footer";
import BookingTourCards from "@/components/BookingTourCards";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { format, parseISO, addDays } from "date-fns";
import { FaCalendar, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import getRecords from "@/firebase/getRecords";
import BookingDriversCard from "@/components/BookingDriversCard";
const Booking = () => {

  // Booking --------------------------------------------------------------
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [stopPoints, setStopPoints] = useState([]);
  const [departureSelected, setDepartureSelected] = useState(false);
  const [arrivalSelected, setArrivalSelected] = useState(false);
  const [stopPointSelected, setStopPointSelected] = useState({});
  const [showDepartureCities, setShowDepartureCities] = useState(false);
  const [showArrivalCities, setShowArrivalCities] = useState(false);
  const [showStopCities, setShowStopCities] = useState({});
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const departureDropdownRef = useRef(null);
  const arrivalDropdownRef = useRef(null);
  const stopDropdownRefs = useRef([]);
  const dateTimePickerRef = useRef(null);
  const [open , setOpen] = useState(false);

  //---------------------------Drivers Data--------------------------------------------

  const [driverData , setDriversData]=useState();
    
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        departureDropdownRef.current &&
        !departureDropdownRef.current.contains(event.target)
      ) {
        if (!departureSelected && !cities.includes(departure)) {
          setDeparture("");
        }
        setShowDepartureCities(false);
      }
      if (
        arrivalDropdownRef.current &&
        !arrivalDropdownRef.current.contains(event.target)
      ) {
        if (!arrivalSelected && !cities.includes(arrival)) {
          setArrival("");
        }
        setShowArrivalCities(false);
      }
      stopDropdownRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target)) {
          if (
            !stopPointSelected[index] &&
            !cities.includes(stopPoints[index])
          ) {
            setStopPoints((prev) => {
              const newStopPoints = [...prev];
              newStopPoints[index] = "";
              return newStopPoints;
            });
          }
          setShowStopCities((prev) => ({ ...prev, [index]: false }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    departureSelected,
    arrivalSelected,
    stopPointSelected,
    departure,
    arrival,
    stopPoints,
  ]);

  useEffect(() => {
    flatpickr(".datetime-picker", {
      enableTime: true,
      dateFormat: "d-M-Y h:i K",
      defaultDate: new Date(),
      minDate: new Date(), // Allows selecting today
      disable: [
        function (date) {
          const now = new Date();
          return date < now.setHours(0, 0, 0, 0); // Disables past dates only
        },
      ],
      onChange: handleDateChange,
    });
  }, []);

  const handleCityClick = (city, type, index = null) => {
    if (type === "departure") {
      setDeparture(city);
      setDepartureSelected(true);
      setShowDepartureCities(false);
    } else if (type === "arrival") {
      setArrival(city);
      setArrivalSelected(true);
      setShowArrivalCities(false);
    } else if (type === "stop") {
      const newStopPoints = [...stopPoints];
      newStopPoints[index] = city;
      setStopPoints(newStopPoints);
      setStopPointSelected((prev) => ({ ...prev, [index]: true }));
      setShowStopCities((prev) => ({ ...prev, [index]: false }));
    }
  };

  const filteredCities = (type, index = null) => {
    let selectedCities = [departure, arrival, ...stopPoints];

    if (type === "stop") {
      selectedCities[index + 2] = ""; // Allow the current stop to be reselected
    } else if (type === "departure") {
      selectedCities[0] = "";
    } else if (type === "arrival") {
      selectedCities[1] = "";
    }

    return cities.filter(
      (city) =>
        city
          .toLowerCase()
          .includes(
            (type === "departure"
              ? departure
              : type === "arrival"
              ? arrival
              : stopPoints[index]
            ).toLowerCase()
          ) && !selectedCities.includes(city)
    );
  };

  const addStopPoint = () => {
    if (departure && arrival) {
      setStopPoints([...stopPoints, ""]);
      setShowStopCities((prev) => ({ ...prev, [stopPoints.length]: true }));
    }
  };

  const removeStopPoint = (index) => {
    const newStopPoints = [...stopPoints];
    newStopPoints.splice(index, 1);
    setStopPoints(newStopPoints);
    setStopPointSelected((prev) => {
      const updatedStopPointSelected = { ...prev };
      delete updatedStopPointSelected[index];
      return updatedStopPointSelected;
    });
    setShowStopCities((prev) => {
      const updatedShowStopCities = { ...prev };
      delete updatedShowStopCities[index];
      return updatedShowStopCities;
    });
  };

  const handleDateChange = (selectedDates) => {
    const selected = selectedDates[0];
    setSelectedDateTime(selected);
    const now = new Date();

    if (selected < now) {
      const nextDate = addDays(now, 1);
      nextDate.setHours(selected.getHours(), selected.getMinutes());
      setSelectedDateTime(nextDate);
    } else {
      setSelectedDateTime(selected);
    }
  };

  const formatDateTime = (date) => {
    return format(date, "dd-MMM-yyyy h:mm a");
  };

  const handleFindCar = () => {
    if ( departure && arrival)
      {
        // console.log({
        //   departure,
        //   arrival,
        //   stopPoints,
        //   selectedDate: format(selectedDateTime, "dd-MMM-yyyy"),
        //   selectedTime: format(selectedDateTime, "h:mm a"),
        // });
        fetchData();
      }
      else{
        console.log("hehe")
      }
   
  };
  const fetchData = async () => {
    try {
        const res = await getRecords("drivers");
        res &&
        console.log(res)
        setDriversData(res);
    } catch (error) {
        console.log(error)
    }
}

  const closeAllDropdowns = () => {
    setShowDepartureCities(false);
    setShowArrivalCities(false);
    setShowStopCities({});
  };

  // ---------------------------------------Drivers Data   -----------------

  return (
    <>
    {!open ?
    <div>
      <Navbar />
      <div className="relative flex items-center mt-16 sm:mt-12">
        <img
          src="./images/book.jpg"
          alt="swiper"
          style={{
            height: `calc(${
              stopPoints.length > 0 ? 803 + stopPoints.length * 60 : 803
            }px)`,
          }}
          className="h-[690px] sm:h-[600px] lg:h-full w-full"
        />
        <div className="absolute top-10 lg:px-32 xl:px-60 text-center text-white text-3xl sm:text-5xl font-bold">
          <p>Transfer and tours around Georgia from private drivers</p>
          <p className="text-lg sm:text-xl mt-5">
            Incredibly friendly locals will tell you all about Georgia's most
            picturesque, breathtaking, and gastronomic must-visit places
          </p>
        </div>
        <div className="absolute w-full px-2 sm:px-10 xl:px-32 mt-56 sm:mt-32">
          <div className="bg-gray-500 bg-opacity-60 rounded-2xl p-6 xl:p-0 xl:py-16 space-y-4">
            <h1 className="text-white text-center font-bold text-4xl pb-5">
              Book Your Ride Now
            </h1>
            <div
              className="flex justify-center relative"
              ref={departureDropdownRef}
            >
              <input
                type="text"
                className={`w-full lg:w-2/3 py-3 ${
                  showDepartureCities ? "rounded-t-md" : "rounded-md"
                } px-3 focus:outline-none`}
                placeholder="Point of Departure ?"
                value={departure}
                onFocus={() => {
                  closeAllDropdowns();
                  setShowDepartureCities(true);
                  setDepartureSelected(false);
                }}
                onChange={(e) => setDeparture(e.target.value)}
                required
              />
              {showDepartureCities && (
                <div className="absolute top-12 w-full lg:w-2/3 border-t-2 bg-white rounded-b-md shadow-lg z-10 min-h-[65px] max-h-[300px] overflow-y-auto">
                  {filteredCities("departure").length > 0 ? (
                    filteredCities("departure").map((city, index) => (
                      <div
                        key={index}
                        className="px-10 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleCityClick(city, "departure")}
                      >
                        {city}
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-center text-gray-500 border-t-2">
                      City not found
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className="flex justify-center relative"
              ref={arrivalDropdownRef}
            >
              <input
                type="text"
                className={`w-full lg:w-2/3 py-3 ${
                  showArrivalCities ? "rounded-t-md" : "rounded-md"
                } px-3 focus:outline-none`}
                placeholder="Point of Arrival ?"
                value={arrival}
                onFocus={() => {
                  closeAllDropdowns();
                  setShowArrivalCities(true);
                  setArrivalSelected(false);
                }}
                onChange={(e) => setArrival(e.target.value)}
              />
              {showArrivalCities && (
                <div className="absolute top-12 w-full lg:w-2/3 border-t-2 bg-white rounded-b-md shadow-lg z-10 min-h-[65px] max-h-[300px] overflow-y-auto">
                  {filteredCities("arrival").length > 0 ? (
                    filteredCities("arrival").map((city, index) => (
                      <div
                        key={index}
                        className="px-10 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleCityClick(city, "arrival")}
                      >
                        {city}
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-center text-gray-500 border-t-2">
                      City not found
                    </div>
                  )}
                </div>
              )}
            </div>
            {stopPoints.map((stop, index) => (
              <div
                className="flex justify-center relative"
                key={index}
                ref={(el) => (stopDropdownRefs.current[index] = el)}
              >
                <input
                  type="text"
                  className={`w-full lg:w-2/3 py-3 ${
                    showStopCities[index] ? "rounded-t-md" : "rounded-md"
                  } px-3 focus:outline-none`}
                  placeholder="Stop Point ?"
                  value={stop}
                  onFocus={() => {
                    closeAllDropdowns();
                    setShowStopCities((prev) => ({ ...prev, [index]: true }));
                    setStopPointSelected((prev) => ({
                      ...prev,
                      [index]: false,
                    }));
                  }}
                  onChange={(e) => {
                    const newStopPoints = [...stopPoints];
                    newStopPoints[index] = e.target.value;
                    setStopPoints(newStopPoints);
                  }}
                />
                {showStopCities[index] && (
                  <div className="absolute top-12 w-full lg:w-2/3 border-t-2 bg-white rounded-b-md shadow-lg z-10 min-h-[65px] max-h-[300px] overflow-y-auto">
                    {filteredCities("stop", index).length > 0 ? (
                      filteredCities("stop", index).map((city, idx) => (
                        <div
                          key={idx}
                          className="px-10 py-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleCityClick(city, "stop", index)}
                        >
                          {city}
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-center text-gray-500 border-t-2">
                        City not found
                      </div>
                    )}
                  </div>
                )}
                {/* Cross button */}
                <div className="flex flex-col justify-center">
                  <FaTimes
                    className="absolute ml-2 sm:text-4xl   bg-white bg-opacity-70  text-gray-500 cursor-pointer"
                    onClick={() => removeStopPoint(index)}
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button
                className="w-full lg:w-2/3 py-3  text-white border rounded-md focus:outline-none"
                onClick={addStopPoint}
              >
                Add Stop
              </button>
            </div>
            <div className="sm:flex md:justify-between lg:justify-around">
              <div className="w-full md:w-1/2 lg:w-2/5   lg:ml-[83px] ">
                <div className="relative">
                  <input
                    ref={dateTimePickerRef}
                    type="text"
                    className="datetime-picker w-full py-3 px-3 rounded-md focus:outline-none"
                    placeholder="Select Date and Time"
                    value={formatDateTime(selectedDateTime)}
                    readOnly
                  />

                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                    <FaCalendar
                      onClick={() =>
                        dateTimePickerRef.current._flatpickr.open()
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:mr-[83px]  mt-5 sm:mt-0">
                <button
                  className="w-full  px-6 py-3  bg-purple text-white rounded-md focus:outline-none"
                  onClick={handleFindCar}
                >
                  Find Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {driverData && 
      <BookingDriversCard data={driverData}/>}
      <BookingSteps />
      <BookingFeatures />
      <BookingTourCards />
      <BookingGallery />
      <Footer />
    </div> : 
     <div>
      Hello
     </div>
     }
    </>
  );
};

export default Booking;
