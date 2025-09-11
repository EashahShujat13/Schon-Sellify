import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import ProductForm from '../productform/ProductForm';
import { useNavigate } from 'react-router-dom';

function MiniNavbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-black px-4 py-2 text-sm sm:text-base">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 flex-wrap">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-[#C8C8C8]" />
          <span className="text-[#C8C8C8] font-semibold">+1 (555) 333 22 11</span>
        </div>
        <div className="flex items-center space-x-2">
          <IoMdMail className="text-[#C8C8C8]" />
          <span className="text-[#C8C8C8] font-semibold">info@schon.chairs</span>
        </div>
        <div className="flex items-center space-x-2">
          <IoMdMail className="text-[#C8C8C8]" />
          <span className="text-[#C8C8C8] font-semibold" onClick={()=>{navigate("/productform")}}>Add Product</span>
        </div>
      </div>
    </div>
  );
}

export default MiniNavbar;
