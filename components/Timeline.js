import React from 'react';
import { BsFillClockFill, BsBuilding, BsBook, BsGlobe } from 'react-icons/bs'; // Import icons from react-icons

// Data array for timeline events
const timelineEvents = [
    {
        title: 'Quantum Computing Breakthrough',
        description: 'Scientists at a leading research institution unveil a groundbreaking breakthrough in quantum computing.',
        icon: <BsFillClockFill />, // Icon component for clock
    },
    {
        title: 'First Quantum Computer',
        description: 'The first quantum computer is built by a team of researchers in a laboratory in the United States.',
        icon: <BsBuilding />, // Icon component for building
    },
    {
        title: 'Quantum Computing Research',
        description: 'A group of scientists in Europe publish a paper on quantum computing research.',
        icon: <BsBook />, // Icon component for book
    },
];

const TimelineItem = ({ event }) => {
    return (
        <div className="grid gap-2 text-base relative mb-1 -mt-1">
            <div className="aspect-square w-14 rounded-full absolute -left-3 translate-x-[-42px] z-10 top-1 text-4xl bg-gradient-to-br from-white to-gray-400 ">
                <div className='flex flex-col justify-center'>
                <div className='  text-white flex justify-center mt-[9px] '>
                    {event.icon}
                 </div>
                </div>
                    
            </div>
            <div className="font-semobold sm:font-bold text-lg sm:text-xl pl-5 md:pl-10 text-purple pt-4  ">{event.title}</div>
            <div className="text-gray-500 dark:text-gray-400 text-base pl-5 md:pl-10 leading-tight">{event.description}</div>
        </div>
    );
};

const Timeline = () => {
    return (
        <div className="flex justify-center items-center px-2 md:px-4 mt-3">
            <div className="w-full max-w-4xl p-6">
                <div className="after:absolute after:inset-y-0 after:w-[3px] after:bg-gradient-to-br from-purple to-magenta relative pl-6 after:left-0 grid gap-12">
                    {timelineEvents.map((event, index) => (
                        <TimelineItem key={index} event={event}  />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;





// image

// import React from 'react';

// // Data array for timeline events
// const timelineEvents = [
//     {
//         date: 'March 14, 1879',
//         title: 'Quantum Computing Breakthrough',
//         description: 'Scientists at a leading research institution unveil a groundbreaking breakthrough in quantum computing.',
//         image: './images/image1.png', // Adjust image paths as necessary
//     },
//     {
//         date: 'April 1, 1939',
//         title: 'First Quantum Computer',
//         description: 'The first quantum computer is built by a team of researchers in a laboratory in the United States.',
//         image: './images/image1.png',
//     },
//     {
//         date: 'June 12, 1954',
//         title: 'Quantum Computing Research',
//         description: 'A group of scientists in Europe publish a paper on quantum computing research.',
//         image: './images/image1.png',
//     },
//     {
//         date: 'December 31, 1979',
//         title: 'Quantum Computing Breakthrough',
//         description: 'A team of researchers in Asia makes a significant breakthrough in quantum computing.',
//         image:'./images/image1.png',
//     }
// ];

// const TimelineItem = ({ event }) => {
//     return (
//         <div className="grid gap-2 text-base relative">
//             <div className="aspect-square w-16 rounded-full absolute -left-3 translate-x-[-42px] z-10 top-1">
//                 <img
//                     alt={event.title}
//                     className="object-cover rounded-full"
//                     src={event.image}
//                     style={{
//                         aspectRatio: "1",
//                         objectFit: "cover",
//                     }}
//                     width={64} // Adjust the width and height to make the image bigger
//                     height={64}
//                 />
//             </div>
//             <div className="font-medium text-lg pl-5 md:pl-20">{event.date}</div>
//             <div className="text-gray-500 dark:text-gray-400 text-base pl-5 md:pl-20">{event.description}</div>
//         </div>
//     );
// };

// const Timeline = () => {
//     return (
//         <div className="flex justify-center items-center h-screen px-4">
//             <div className="w-full max-w-4xl p-6 sm:p-10">
//                 <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-12 dark:after:bg-gray-400/20">
//                     {timelineEvents.map((event, index) => (
//                         <TimelineItem key={index} event={event} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Timeline;