// Modal.jsx
import React from 'react';
import bgImg from '../../assets/img/heroSection/modalimg.jpeg'

function Modal({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } bg-black bg-opacity-50`}
    >
      <div
        className="bg-cover bg-center p-6 rounded-lg shadow-xl max-w-md w-full relative text-white transition-all duration-300 transform scale-100"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="backdrop-blur-sm bg-black/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-3">Welcome to My Website</h2>
          <p className="text-sm mb-4">
            This modal has a background image and appears on page load.
          </p>
          <button
            onClick={onClose}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
