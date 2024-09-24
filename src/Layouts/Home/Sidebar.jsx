// src/components/Sidebar.js

import React, { useState } from 'react';
import social_logos from "../../assets/Img/SM Icons-01.png";
import { HiMenu, HiX } from 'react-icons/hi';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu Button (Visible only on mobile) */}
      <button 
        onClick={toggleSidebar} 
        className="md:hidden p-[1.778vh] text-slate-500">
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-0 bg-black text-white md:relative md:w-[2.667vh]0 md:flex md:flex-col md:justify-between transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:translate-y-0 z-50`}>
        <div className="flex flex-col p-5 md:mt-[0.889vh]0 md:pl-5">
          <p className="text-lg mb-[0.889vh] cursor-pointer hover:text-gray-400">Home</p>
          <p className="text-lg mb-[0.889vh] cursor-pointer hover:text-gray-400">About Lumos</p>
          <p className="text-lg mb-[0.889vh] cursor-pointer hover:text-gray-400">Why Choose Us</p>
          <p className="text-lg mb-[0.889vh] cursor-pointer hover:text-gray-400">Our Services</p>
          <p className="text-lg mb-[0.889vh] cursor-pointer hover:text-gray-400">Contact</p>
        </div>
        <div className="flex justify-center mb-[4.444vh] px-[1.778vh] md:px-[2.222vh]">
          <img className="w-20 h-auto md:w-24" src={social_logos} alt="Social Media Logos" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
