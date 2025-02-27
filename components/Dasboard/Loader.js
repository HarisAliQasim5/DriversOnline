import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex flex-col justify-center'>
      <div className="w-full gap-x-2 flex justify-center items-center">
  <div
    className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full "
  ></div>
  <div
    className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full "></div>
  <div
    className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full "
  ></div>
</div>

    </div>
  )
}

export default Loader
