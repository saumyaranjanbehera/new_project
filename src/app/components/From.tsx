"use client"
import React from 'react';
import { FaPhone } from "react-icons/fa6";

function Form() {
  return (
    <div className="bg-gradient-to-br from-white to-[#FFD3B4] rounded-[15px] p-8 relative w-full max-w-[270px] mx-auto mt-14 mb-4">
      <h1 className="text-2xl text-gray-800 mb-4">Try Now!</h1>
      <p className="text-gray-800 mb-6">Get a call from Toingg</p>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 w-full rounded-[8px] text-gray-600"
        />
      </div>

      <div className="flex items-center mb-6">
        <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="India Flag" className="h-6 w-6 mr-2" />
        <input
          type="text"
          placeholder="+91"
          className="p-2 w-full rounded-[8px] text-gray-600"
        />
      </div>

      <div className="mb-6">
        <select className="p-2 w-full rounded-[8px] text-gray-600">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      <div className="flex items-center justify-center">
        <div className="rounded-full bg-white p-4">
          <FaPhone className="text-orange-500" />
        </div>
      </div>
    </div>
  );
}

export default Form;
