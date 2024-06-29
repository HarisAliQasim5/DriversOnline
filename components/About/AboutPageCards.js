import React from 'react';
import { LuCar ,  LuClock3 ,  LuLeaf ,  LuShieldCheck,  LuUser ,LuWallet} from "react-icons/lu";

const cardData = [
  {
    icon: <LuCar className="h-12 w-12 text-magenta" />,
    title: 'Reliable Fleet',
    description: 'Our fleet of modern, well-maintained vehicles ensures a safe and comfortable ride every time.'
  },
  {
    icon: <LuClock3 className="h-12 w-12 text-magenta" />,
    title: 'Instant Booking',
    description: 'Book a ride in seconds with our user-friendly app and get to your destination quickly.'
  },
  {
    icon: <LuLeaf className="h-12 w-12 text-magenta" />,
    title: 'Eco-Friendly',
    description: 'Reduce your carbon footprint with our fleet of hybrid and electric vehicles.'
  },
  {
    icon: <LuShieldCheck className="h-12 w-12 text-magenta" />,
    title: 'Secure Rides',
    description: 'Your safety is our top priority, with advanced security features and 24/7 support.'
  },
  {
    icon: <LuWallet className="h-12 w-12 text-magenta" />,
    title: 'Affordable Rates',
    description: 'Enjoy competitive rates and transparent pricing, making ridesharing accessible to everyone.'
  },
  {
    icon: <LuUser className="h-12 w-12 text-magenta" />,
    title: 'Community-Driven',
    description: 'Join our growing community of riders and drivers who share our values and vision.'
  }
];

const AboutPageCards = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ">
              <div class="p-6 ">
                {card.icon}
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-norma text-purple ">
                  {card.title}
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-gray-700">
                  {card.description}
                </p>
              </div>
            </div> 
            ))}
          </div>
        </div>
    </div>
  );
};

export default AboutPageCards;
