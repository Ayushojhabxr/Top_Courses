// Footer.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bgDark text-white py-4 text-center mb-0 h-20">
      <p className="text-sm">
        © {new Date().getFullYear()} Ayush ojha. All rights reserved.
      </p>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="https://www.linkedin.com/in/ayush-ojha-977945253/" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-white hover:text-gray-400 transition-colors">
          <FaLinkedin fontSize="1.5rem" />
        </a>
        <a href="https://github.com/Ayushojhabxr" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-white hover:text-gray-400 transition-colors">
          <FaGithub fontSize="1.5rem" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
