import Navbar from '@/components/layoutScreen/Navbar'
import React, { useState, useEffect, useRef } from 'react'
import cities from "../src/locals/cities"
import BookingSteps from '@/components/BookingSteps';
import BookingFeatures from '@/components/BookingFeatures';
import BookingGallery from '@/components/BookingGallery';
import Footer from '@/components/layoutScreen/Footer';
import BookingTourCards from '@/components/BookingTourCards';

const Booking = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [showDepartureCities, setShowDepartureCities] = useState(false);
  const [showArrivalCities, setShowArrivalCities] = useState(false);
  const [minDateTime, setMinDateTime] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const departureDropdownRef = useRef(null);
  const arrivalDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (departureDropdownRef.current && !departureDropdownRef.current.contains(event.target)) {
        setShowDepartureCities(false);
      }
      if (arrivalDropdownRef.current && !arrivalDropdownRef.current.contains(event.target)) {
        setShowArrivalCities(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    setMinDateTime(formattedDateTime);
    setSelectedDateTime(formattedDateTime);
  }, []);

  const handleCityClick = (city, type) => {
    if (type === 'departure') {
      setDeparture(city);
      setShowDepartureCities(false);
    } else {
      setArrival(city);
      setShowArrivalCities(false);
    }
  }

  const filteredDepartureCities = cities.filter(city => 
    city.toLowerCase().includes(departure.toLowerCase()) && city !== arrival
  );
  const filteredArrivalCities = cities.filter(city => 
    city.toLowerCase().includes(arrival.toLowerCase()) && city !== departure
  );

  const handleDateChange = (e) => {
    const selected = e.target.value;
    setSelectedDateTime(selected);
    const now = new Date();
    const selectedDateTime = new Date(selected);
    
    if (selectedDateTime < now) {
      // Automatically advance to the next available date
      const nextDate = new Date(now);
      nextDate.setDate(now.getDate() + 1);
      const year = nextDate.getFullYear();
      const month = String(nextDate.getMonth() + 1).padStart(2, '0');
      const day = String(nextDate.getDate()).padStart(2, '0');
      const hours = selected.substring(11, 13);
      const minutes = selected.substring(14, 16);
      const nextDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
      setSelectedDateTime(nextDateTime);
      e.target.value = nextDateTime;
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="relative flex items-center mt-16 sm:mt-12">
        <img src="./images/Booking.jpg" alt="swiper" className="h-[690px] sm:h-[600px] lg:h-full w-full" />
        <div className="absolute top-10 lg:px-32 xl:px-60 text-center text-white text-3xl sm:text-5xl font-bold">
          <p>Transfer and tours around Georgia from private drivers</p>
          <p className='text-lg sm:text-xl mt-5'>Incredibly friendly locals will tell you all about Georgia's most picturesque, breathtaking, and gastronomic must-visit places</p>
        </div>
        <div className="absolute w-full px-2 sm:px-10 xl:px-32 mt-56  sm:mt-32">
          
          <div className='bg-black bg-opacity-60 rounded-2xl p-6 xl:p-0 xl:py-16  space-y-4'>
          <h1 className='bg-gradient-to-br from-purple to-white text-transparent bg-clip-text text-center font-bold text-4xl pb-5'>Book Your Ride Now</h1>
            <div className='flex justify-center relative' ref={departureDropdownRef}>
              <input
                type="text"
                className={`w-full lg:w-2/3 py-3 ${showDepartureCities ? "rounded-t-md" : "rounded-md"} px-3 focus:outline-none`}
                placeholder='Point of Departure ?'
                value={departure}
                onFocus={() => setShowDepartureCities(true)}
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
                onFocus={() => setShowArrivalCities(true)}
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
              <input 
                type="datetime-local"
                className="lg:w-1/3 py-3 rounded-md px-3 focus:outline-none"
                min={minDateTime}
                value={selectedDateTime}
                onChange={handleDateChange}
              />
              <div className='text-white flex flex-col justify-center bg-purple px-6 rounded-lg lg:mr-11'>
                <button>
                  Find Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingSteps/>
      <BookingFeatures/>
      <BookingGallery/>
      <BookingTourCards/>
      <Footer/>
    </div>
  )
}

export default Booking;
