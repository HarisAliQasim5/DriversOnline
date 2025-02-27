import React from 'react'

const BookingFeatures = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-10 font-serif">
    <div className=" mb-10">
    <h1 className='pb-16 text-4xl sm:text-5xl font-bold '>Highlighted Features</h1>
    </div>

    <div className="flex flex-col lg:flex-row">
        
        <div className="mr-0 lg:mr-8 mb-6 md:mb-0 flex lg:flex-col justify-center">
            <img className="w-full mx-auto" src="https://placeholder.pics/svg/400" alt="can_help_banner"/>
        </div>
        

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Dynamic Personalization:</h3>
                    <p className="text-sm">Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Mobile-Optimized Interface</h3>
                    <p className="text-sm"> Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.</p>
                </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">24/7 Customer Support</h3>
                    <p className="text-sm">ur U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.</p>
                </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Secure Payment Processing</h3>
                    <p className="text-sm">We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site.</p>
                </div>
            </div>


        </div>
    </div>
</div>
  )
}

export default BookingFeatures
