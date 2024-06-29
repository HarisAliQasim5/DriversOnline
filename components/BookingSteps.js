import React from 'react';

const stepsData = [
  {
    title: "Choose your route",
    description: "To choose your route simply indicate your city or airport, the places you want to visit, and the date of the trip"
  },
  {
    title: "You'll know the distance and the approximate travel duration",
    description: "The time specified on the website indicates the estimated travel duration without any stops. Stops for sightseeing are not time-limited and free."
  },
  {
    title: "Choose your driver",
    description: "A quick search of our database will show you the best-fitting matches out of 100+ candidates. You can choose the driver by their car, photos, or reviews from previous passengers."
  },
  {
    title: "Input your information for booking",
    description: "Fill in the required fields so that the driver could start preparing for the trip beforehand, and we could notify you about the details"
  },
  {
    title: "Contact the driver",
    description: "Before meeting your driver, make all the necessary arrangements, for example, make sure that the child safety seats are available, specify the number of water bottles needed, etc"
  },
  {
    title: "Get your car at the appointed time",
    description: "In 80% of the cases, your car will be 20-30 minutes earlier than scheduled and will wait for you for as long as you need"
  },
  {
    title: "Enjoy your ride",
    description: "The driver will tell you about the most interesting sights, will show you places with the best cuisine, and will advise you on locations to buy home-made Georgian wine"
  },
  {
    title: "Provide feedback for your driver",
    description: "95% of our clients leave rave reviews, while 5% are highly satisfied with our service"
  },
  {
    title: "Plan your next trip with us",
    description: "Our clients come back to us again and again, you will be no exception"
  }
];

const BookingSteps = () => {
  return (
    <div className="py-16 px-4 sm:px-10 font-serif ">
      <div className="mx-auto max-w-7xl ">
       <h1 className='pb-16 text-4xl sm:text-5xl font-bold '>How it works</h1>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 gap-x-20">
          {stepsData.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                <h1 className='text-2xl text-purple'>Step {index + 1}</h1>
                <div className="absolute hidden lg:flex -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
              </div>
              <p className="mt-6 text-lg font-bold leading-8 tracking-wide text-black">{step.title}</p>
              <p className="mt-1 text-base leading-7 text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingSteps;
