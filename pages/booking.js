import Navbar from '@/components/layoutScreen/Navbar'
import React, { useState, useEffect, useRef } from 'react'
import cities from "../src/locals/cities"
import BookingSteps from '@/components/BookingSteps';
import BookingFeatures from '@/components/BookingFeatures';
import BookingGallery from '@/components/BookingGallery';
import Footer from '@/components/layoutScreen/Footer';
import BookingTourCards from '@/components/BookingTourCards';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { format, parseISO, addDays } from 'date-fns';
import { FaCalendar } from "react-icons/fa6";

const Booking = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureSelected, setDepartureSelected] = useState(false);
  const [arrivalSelected, setArrivalSelected] = useState(false);
  const [showDepartureCities, setShowDepartureCities] = useState(false);
  const [showArrivalCities, setShowArrivalCities] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const departureDropdownRef = useRef(null);
  const arrivalDropdownRef = useRef(null);
  const dateTimePickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (departureDropdownRef.current && !departureDropdownRef.current.contains(event.target)) {
        if (!departureSelected) {
          setDeparture('');
        }
        setShowDepartureCities(false);
      }
      if (arrivalDropdownRef.current && !arrivalDropdownRef.current.contains(event.target)) {
        if (!arrivalSelected) {
          setArrival('');
        }
        setShowArrivalCities(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [departureSelected, arrivalSelected]);

  useEffect(() => {
    flatpickr(".datetime-picker", {
      enableTime: true,
      dateFormat: "d-M-Y h:i K",
      defaultDate: new Date(),
      minDate: "today",
      onChange: handleDateChange
    });
  }, []);

  const handleCityClick = (city, type) => {
    if (type === 'departure') {
      setDeparture(city);
      setDepartureSelected(true);
      setShowDepartureCities(false);
    } else {
      setArrival(city);
      setArrivalSelected(true);
      setShowArrivalCities(false);
    }
  }

  const filteredDepartureCities = cities.filter(city =>
    city.toLowerCase().includes(departure.toLowerCase()) && city !== arrival
  );
  const filteredArrivalCities = cities.filter(city =>
    city.toLowerCase().includes(arrival.toLowerCase()) && city !== departure
  );

  const handleDateChange = (selectedDates) => {
    const selected = selectedDates[0];
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

  return (
    <div>
      <Navbar />
      <div className="relative flex items-center mt-16 sm:mt-12">
        <img src="./images/Booking.jpg" alt="swiper" className="h-[690px] sm:h-[600px] lg:h-full w-full" />
        <div className="absolute top-10 lg:px-32 xl:px-60 text-center text-white text-3xl sm:text-5xl font-bold">
          <p>Transfer and tours around Georgia from private drivers</p>
          <p className='text-lg sm:text-xl mt-5'>Incredibly friendly locals will tell you all about Georgia's most picturesque, breathtaking, and gastronomic must-visit places</p>
        </div>
        <div className="absolute w-full px-2 sm:px-10 xl:px-32 mt-56 sm:mt-32">

          <div className='bg-black bg-opacity-60 rounded-2xl p-6 xl:p-0 xl:py-16 space-y-4'>
            <h1 className='bg-gradient-to-br from-purple to-white text-transparent bg-clip-text text-center font-bold text-4xl pb-5'>Book Your Ride Now</h1>
            <div className='flex justify-center relative' ref={departureDropdownRef}>
              <input
                type="text"
                className={`w-full lg:w-2/3 py-3 ${showDepartureCities ? "rounded-t-md" : "rounded-md"} px-3 focus:outline-none`}
                placeholder='Point of Departure ?'
                value={departure}
                onFocus={() => {
                  setShowDepartureCities(true);
                  setDepartureSelected(false);
                }}
                onChange={(e) => setDeparture(e.target.value)}
              />
              {showDepartureCities && (
                <div className='absolute top-12 w-full lg:w-2/3 border-t-2 bg-white rounded-b-md shadow-lg z-10 min-h-[65px] max-h-[300px] overflow-y-auto'>
                  {filteredDepartureCities.length > 0 ? (
                    filteredDepartureCities.map((city, index) => (
                      <div
                        key={index}
                        className="px-10 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleCityClick(city, 'departure')}
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
            <div className='flex justify-center relative' ref={arrivalDropdownRef}>
              <input
                type="text"
                className={`w-full lg:w-2/3 py-3 ${showArrivalCities ? "rounded-t-md" : "rounded-md"} px-3 focus:outline-none`}
                placeholder='Point of Arrival ?'
                value={arrival}
                onFocus={() => {
                  setShowArrivalCities(true);
                  setArrivalSelected(false);
                }}
                onChange={(e) => setArrival(e.target.value)}
              />
              {showArrivalCities && (
                <div className='absolute top-12 w-full lg:w-2/3 border-t-2 bg-white rounded-b-md shadow-lg z-10 min-h-[65px] max-h-[300px] overflow-y-auto'>
                  {filteredArrivalCities.length > 0 ? (
                    filteredArrivalCities.map((city, index) => (
                      <div
                        key={index}
                        className="px-10 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleCityClick(city, 'arrival')}
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
            <div className='flex justify-between lg:justify-around lg:ml-11'>
              <div className="relative lg:w-1/3">
                <input
                  type="text"
                  className="w-full py-3 rounded-md px-3 focus:outline-none datetime-picker"
                  value={formatDateTime(selectedDateTime)}
                  readOnly
                  ref={dateTimePickerRef}
                />
                <FaCalendar
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  onClick={() => dateTimePickerRef.current._flatpickr.open()}
                />
              </div>
              <div className='text-white flex flex-col justify-center bg-purple px-6 rounded-lg lg:mr-11'>
                <button>
                  Find Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingSteps />
      <BookingFeatures />
      <BookingGallery />
      <BookingTourCards />
      <Footer />
    </div>
  )
}

export default Booking;
