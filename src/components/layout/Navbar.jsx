import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-1000">
      <header >
        <div className="nov-top font-mono w-full bg-white h-8 ">
          <div className="container mx-auto h-full flex justify-between items-center">
            <div className="header-left flex items-center gap-5 text-gray-800">
              <div className="phone-number">
                <i class="ri-phone-line"></i> +885 965416790
              </div>

              <div className="free-shopping">
                <i class="ri-map-pin-fill"></i> Free shipping on orders over $75
              </div>
            </div>

            <div className="header-right flex items-center gap-5 text-gray-800">
              <div className="discount-text">
                <i class="ri-discount-percent-line"></i> Summer Sale — Up to 40%
                off
              </div>
              <div className="notification">
                <i class="ri-mail-unread-fill"></i> Track Order
              </div>
            </div>
          </div>
        </div>

        <nav className="nav-bottum bg-black py-3 font-mono">

          <div className="menu container mx-auto  flex items-center  gap-2 justify-between ">

            <div className="logo flex gap-2 items-center ">
              <div className="logo-name  w-13 h-13 rounded-full bg-white flex gap-1 items-center justify-center text-black">
                <i class="ri-store-3-line"></i> NK
              </div>
              <div className="name text-xl text-white">NK-Shop</div>
            </div>

            <div className="menulink flex items-center gap-4 text-white text-lg ">

            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/shop"}>Shop</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>

            </div>

            <div className="icon flex text-white text-lg items-center gap-3">
              <button>
                <i class="ri-search-line"></i>
              </button>
              <button>
                <i class="ri-heart-add-2-line"></i>
              </button>
              <button>
                <i class="ri-user-2-fill"></i>
              </button>
              <button className="px-3 py-1 bg-white text-black rounded-xl cursor-pointer active:scale-95">
                <i class="ri-shopping-bag-4-fill"></i> cart
              </button>
            </div>


          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
