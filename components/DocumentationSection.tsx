"use client";

import React from 'react';
import { commonStyles } from '../styles/commonStyles';

const DocumentationSection = () => {
  return (
    <section id="documentation" className="max-w-6xl w-full py-16 text-center px-4 md:py-20 lg:py-24">
      <h2 className="font-press-start-2p font-extrabold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] mb-12 bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent">
        Documentation & Support
      </h2>
      <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300 leading-relaxed font-vt323 md:text-xl">
        Dive deeper into autocommit-cli with our comprehensive documentation. The project is currently in active development, and you can find the latest information and support on our GitHub repository.
      </p>
      <div>
        <a href="https://github.com/urstruelysv/autocommit-cli#documentation" target="_blank" rel="noopener noreferrer"
           className="px-8 py-3 rounded-lg font-bold text-red-tone-500
                      text-sm md:text-base border border-red-tone-500
                      transition-all duration-300
                      hover:bg-red-tone-500 hover:text-white
                      hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]
                      hover:scale-[1.03] font-press-start-2p">
          Read the Docs
        </a>
      </div>
    </section>
  );
};

export default DocumentationSection;