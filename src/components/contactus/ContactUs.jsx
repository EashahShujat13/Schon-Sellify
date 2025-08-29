import React from 'react';
import MainNavbar from '../navbar/MainNavbar';

function ContactUs() {
  return (
    <div className="bg-white min-h-screen">
        <MainNavbar/>
      {/* Header */}
      <div className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-sm text-gray-600">Home &nbsp; › &nbsp; Contact</p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you have a question about products, pricing, or anything else,
            our team is ready to answer all your questions.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700 font-medium">Address</p>
              <p className="text-gray-500">Connaught Road Central Suite 18B, 148, New Yankee</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Phone</p>
              <p className="text-gray-500">+1 (555) 333 22 11</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Email</p>
              <p className="text-gray-500">info@schon.chair</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
