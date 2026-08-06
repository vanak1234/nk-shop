import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full h-150">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/images/banner2.jpg')] bg-cover bg-center bg-no-repeat"></div>

  {/* Dark Overlay (Optional) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text */}
  <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white">
    <h1 className="text-4xl md:text-6xl font-bold">
      Welcome to Fishing Store
    </h1>

    <p className="mt-4 text-lg md:text-2xl max-w-xl">
      Premium fishing equipment for every adventure.
    </p>

    <button className="mt-8 w-fit bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
      Shop Now
    </button>
  </div>
</div>
  )
}

export default Banner
