import React from 'react'

const KidsHero = () => {

    const navigation = [
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Careers", path: "javascript:void(0)" },
    ]

  return (



<main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">

    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden mt-12">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-4xl  py-2 mb-4 font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Drivers For
                    <span class="text-5xl sm:text-6xl">
                        Kids
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                    We provides friendly Drivers for   Kids Transportation with comfort and in friendly manner.              </p>
                <div class="flex mt-8">
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Book Now
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Download App
                    </a>
                </div>
            </div>

            <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                <img src="/images/kidhero.webp" className="w-full mx-auto sm:w-10/12  lg:w-full" />
            </div>

        </div>
    </div>
</main>
  )
}

export default KidsHero

