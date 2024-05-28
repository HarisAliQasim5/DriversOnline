const cardData = [
    {
      id: 1,
      title: "Simplest Salad Recipe ever",
      description: "Tbilisi – Jvari: 25 kmWe suggest you to start the journey at the ancient Jvari monastery. The first monks settled here in the 6th century. From the view point, you will see Mtskheta and the confluence of the Aragvi and Kura rivers. The water in the rivers is of different colors, and this is especially noticeable from above.Important: It is often windy near Jvari; take your",
      imageUrl: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      
      timeAgo: "6 mins ago",
      commentsCount: 39
    },
    {
      id: 2,
      title: "Best FastFood Ideas (Yummy)",
      description: "Tbilisi – Jvari: 25 kmWe suggest you to start the journey at the ancient Jvari monastery. The first monks settled here in the 6th century. From the view point, you will see Mtskheta and the confluence of the Aragvi and Kura rivers. The water in the rivers is of different colors, and this is especially noticeable from above.Important: It is often windy near Jvari; take your",
      imageUrl: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      
      timeAgo: "10 days ago",
      commentsCount: 0
    },
    {
      id: 3,
      title: "Why to eat salad?",
      description: "Tbilisi – Jvari: 25 kmWe suggest you to start the journey at the ancient Jvari monastery. The first monks settled here in the 6th century. From the view point, you will see Mtskheta and the confluence of the Aragvi and Kura rivers. The water in the rivers is of different colors, and this is especially noticeable from above.Important: It is often windy near Jvari; take your",
      imageUrl: "https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      
      timeAgo: "16 hours ago",
      commentsCount: 9
    }
  ];
  
  const BookingTourCards = () => {
    return (
      <div className="max-w-screen-xl px-4 sm:px-10 pb-10 font-serif">
        
        <h1 className='pb-16 text-4xl sm:text-5xl font-bold '>Pick The Tours</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cardData.map((card) => (
            <div key={card.id} className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#">
                <div className="relative">
                  <img className="w-full" src={card.imageUrl} alt={card.title} />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  
                </div>
              </a>
              <div className="px-6 py-4 mb-auto">
                <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2">
                  {card.title}
                </a>
                <p className="text-gray-500 text-sm">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-center pb-4">
              <button className="bg-purple px-4 py-2 rounded-lg w-1/2">Book Now</button>
              </div>
              
            </div>
            
          ))}
        </div>
      </div>
    );
  };
  
  export default BookingTourCards;
  