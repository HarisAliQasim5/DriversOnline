import React from 'react'
import { FaCar } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
const ridePackages = [
  {
    title: "Book packages",
    description: "20 school rides, starting at just AED 260.",
    icon: FaCar,
  },
  {
    title: "Save up to 40%",
    description: "Extra savings with no peak charges and regulator fees on package rides",
    icon: RiDiscountPercentFill ,
  },
  {
    title: "Your kids are in the safest hands",
    description: "Real-time tracking and notifications to keep you updated on your child’s journey.",
    icon:  IoShieldCheckmark ,
  },
];

const KidsRide = () => {
  return (
    <div className='px-4 md:px-10 lg:px-20 xl:px-32  py-10'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {ridePackages.map((pkg, index) => (
          <div className="p-4 " key={index} >
            <div className="shadow-md px-4 py-6 rounded-lg h-full">
              <div className='flex justify-center'>
                <pkg.icon className='bg-purple px-4 rounded-full text-[70px] text-white' />
              </div>
              <h2 className="title-font font-semibold text-2xl text-center text-gray-900 mt-5">
                {pkg.title}
              </h2>
              <p className="text-center mt-3">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsRide;
