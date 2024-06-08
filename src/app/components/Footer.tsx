"use client";
import React from "react";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-gradient-to-br from-[#FFD3B4] to-white py-8 text-gray-800">
      <footer className="container mx-auto px-4 md:px-8 lg:px-12 text-center space-y-4">
        <h3 className="text-2xl font-bold mb-4">TOINGG</h3>
        <p className="text-xl font-bold text-white mb-4">We are here to grow your business ❤️</p>
        
        <div className="space-y-2">
          <a
            href="/terms-and-conditions"
            className="hover:underline block text-sm md:text-base lg:text-lg"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy-policy"
            className="hover:underline block text-sm md:text-base lg:text-lg"
          >
            Privacy Policy
          </a>
          <a
            href="/help-center"
            className="hover:underline block text-sm md:text-base lg:text-lg"
          >
            Help Center
          </a>
          <a
            href="/api-docs"
            className="hover:underline block text-sm md:text-base lg:text-lg"
          >
            API Docs
          </a>
          <a
            href="/careers"
            className="hover:underline block text-sm md:text-base lg:text-lg"
          >
            Careers
          </a>
        </div>
        
        <div className="flex justify-center space-x-4 mb-4 text-lg">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6 text-blue-600" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-pink-500" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6 text-black" />
          </a>
          <a
            href="https://www.discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsDiscord className="w-6 h-6 text-blue-600" />
          </a>
        </div>
        
        
        <p className="text-sm text-gray-600 mb-2">© 2024 Toingg Inc. All rights reserved.</p>
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-600">Join our community</p>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsDiscord className="w-6 h-6 ml-2 text-blue-600" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
