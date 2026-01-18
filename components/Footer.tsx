"use client";

import React from 'react';


const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 border-t border-white/10 mt-16 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <p className="text-gray-400 text-sm font-vt323">&copy; {new Date().getFullYear()} aethos vison labs. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/urstruelysv/autocommit-cli" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-white transition-colors font-vt323 text-base">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;