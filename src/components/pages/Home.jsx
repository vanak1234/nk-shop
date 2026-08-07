import React from 'react'
import Banner from '../common/Banner'

const Home = () => {
  return (
    <div className='home-page h-screen w-full'>

        <div className="content">

          <div className="banner">

            <Banner/>
          </div>
          <div className="main-card container mx-auto py-5 ">
            <div className="card lg:w-[23%] md:w-[48%] sm:w-[48%] h-90 border border-gray-200 shadow rounded-2xl">
                <div className="card-img h-[60%]">
                  <img src="" alt="" />
                </div>
                <div className="body px-5 h-[40%]">
                   <p>category</p>
                   <h1>title</h1>
                   <p>star</p>
                   <div className="price-cart flex justify-between items-center  ">
                     <div className="price">
                      <h1>100$</h1>
                     </div>
                     <div className="cart">
                      <button><i class="ri-shopping-bag-4-fill"></i></button>
                     </div>
                   </div>
                </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home
