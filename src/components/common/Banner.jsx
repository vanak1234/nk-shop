import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full h-150">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/images/banner2.jpg')] bg-cover bg-center bg-no-repeat"></div>

  {/* Dark Overlay (Optional) */}
  <div className="absolute inset-0 bg-black/40"></div>

  
</div>
  )
}

export default Banner
