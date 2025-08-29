import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function MainNavbar() {

  const navigate = useNavigate();
  const logIn =()=>{
    navigate('/login');
  }
  return (
    <div className="bg-white px-4 py-3 text-black relative shadow-sm">
      {/* Toggle for mobile menu */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lowercase">SCHON.</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-2xl font-light">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/aboutus">About</Link>
          <Link to="/contactus">Contact</Link>
        </nav>

        {/* Cart + Login + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <AiOutlineShopping className="text-3xl cursor-pointer" onClick={()=> navigate('/cart')} />
          <div className="md:flex flex-col text-xs  hidden">
            <p className="uppercase font-bold">shopping cart</p>
            <span className="font-extralight">3 items - $74.00</span>
          </div>

          <RiLoginCircleLine className='text-3xl cursor-pointer' onClick={logIn}/>

          {/* Hamburger menu toggle */}
          <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
            <FaBars className="text-2xl peer-checked:hidden block" />
            <FaTimes className="text-2xl hidden peer-checked:block" />
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="peer-checked:flex hidden flex-col gap-4 text-lg font-light mt-4 md:hidden px-4">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/contactus">Contact</Link>
      </div>
    </div>
  );
}

export default MainNavbar;
