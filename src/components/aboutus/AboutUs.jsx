import React from 'react';
import bgImg from '../../assets/img/breadcrumb1.jpeg'// Replace with your actual image path
import MainNavbar from '../navbar/MainNavbar';

function AboutUs() {
  return (
    <div className="bg-white">
        <MainNavbar/>
      {/* Hero Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <img
            src={bgImg}
            alt="About"
            className="w-48 md:w-64 lg:w-72 object-cover mb-6 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">ABOUT US</h1>
            <div className="text-sm text-gray-600">
              <span className="text-gray-500">Home</span> &nbsp;›&nbsp; <span>About Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">WHO WE ARE?</h2>

        <p className="text-gray-600">
          Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros
          scelerisque, vulputate tortor quis, efficitur arcu sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Umco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat
        </p>

        <p className="text-gray-800 font-semibold">
          Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem.
        </p>

        <p className="text-gray-600">
          Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus
          euismod, condimentum lectus id, ultrices sem. Morbi in erat malesuada, sollicitudin
          massa at,
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
