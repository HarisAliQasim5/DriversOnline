import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layoutScreen/Navbar';
import Footer from '@/components/layoutScreen/Footer';
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaFlagCheckered } from "react-icons/fa";
import { createBooking } from "../firebase/bookingTableFormation";

const Checkout = () => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (router.query.data) {
      try {
        const parsedData = JSON.parse(router.query.data);
        setBookingData(parsedData);
      } catch (error) {
        console.error("Failed to parse booking data:", error);
      }
    }
  }, [router.query.data]);

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  const handlePay = async () => {
    const data = {
      name,
      email,
      phone,
      pickupAddress,
      note,
      date: bookingData.selectedDate,
      time: bookingData.selectedTime,
      driverId: bookingData.driver,
      departure: bookingData.departure,
      arrival: bookingData.arrival,
      stopPoints: bookingData.stopPoints,
      amount: bookingData.Amount,
    };
    await createBooking(data);
    router.push({pathname: "/booking"});
  };

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mt-16 font-serif text-purple">Ride from {bookingData.departure} to {bookingData.arrival}</h1>
      </div>
      <div className="font-[sans-serif] bg-white p-4">
        <div className="md:max-w-5xl max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 max-md:order-1">
              <h2 className="text-3xl font-extrabold text-gray-800">Booking Information</h2>

              <form className="mt-8 max-w-lg">
                <div className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                  />

                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Phone No"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Pick Up address"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      value={bookingData.selectedDate}
                      disabled
                      className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    />
                    <input
                      type="text"
                      value={bookingData.selectedTime}
                      disabled
                      className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    />
                  </div>
                  <textarea
                    rows={4}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    placeholder='Note (Additional Field)'
                  />
                </div>

                <button
                  type="button"
                  onClick={handlePay}
                  className="mt-4 w-40 py-3.5 text-sm bg-purple text-white rounded-md hover:bg-purple-600 tracking-wide"
                >
                  Pay
                </button>
              </form>
            </div>

            <div className="bg-gray-100 p-6 rounded-md">
              <h2 className="text-xl font-extrabold text-gray-800">{bookingData.departure} - {bookingData.arrival}</h2>
              <hr className="mt-4 border-t border-white "></hr>
              <ul className="text-gray-800 mt-6 ">
                <div className='flex gap-x-3'>
                  <div className='flex flex-col justify-center'>
                    <IoLocation className='text-xl text-purple'/>
                  </div>
                  <li className="flex flex-wrap gap-4 text-lg font-bold">{bookingData.departure}</li>
                </div>
                <li className="">
                  {bookingData.stopPoints.map((point, index) => (
                    <div key={index} className='flex gap-x-3 space-y-2'>
                      <div className='flex flex-col justify-center'>
                        <MdOutlineMyLocation className='text-lg text-purple'/>
                      </div>
                      <p>{point}</p>
                    </div>
                  ))}
                </li>
                <div className='flex gap-x-3 mt-1.5'>
                  <div className='flex flex-col justify-center'>
                    <FaFlagCheckered className='text-xl text-purple'/>
                  </div>
                  <li className="flex flex-wrap gap-4 text-lg font-bold">{bookingData.arrival}</li>
                </div>
              </ul>
              <hr className="mt-4 border-t-2 border-white "></hr>
              <div className='flex justify-between mt-7'>
                <p className='text-gray-400 text-lg'>Price of the trip</p>
                <div className='flex flex-col justify-center'>
                  <p className='font-bold text-lg'>{bookingData.Amount} Gel</p>
                </div>
              </div>
              <hr className="mt-6 border-t-2 border-white "></hr>
              <div className='flex justify-between mt-7'>
                <p className='text-gray-400 text-lg'>Total</p>
                <div className='flex flex-col justify-center'>
                  <p className='font-bold text-lg text-purple'>{bookingData.Amount} Gel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
