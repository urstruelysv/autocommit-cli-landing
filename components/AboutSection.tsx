"use client";

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="max-w-6xl w-full py-16 text-center px-4 md:py-20 lg:py-24">
      <h2 className="text-4xl font-bold mb-8 font-press-start-2p bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent md:text-5xl lg:text-6xl">About autocommit-cli</h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed text-left font-vt323 md:text-xl">
        <p className="mb-4">
          In the fast-paced world of software development, maintaining a clean and informative Git history is crucial.
          However, crafting meaningful commit messages can often be a tedious and time-consuming task,
          distracting developers from their core work. This is where <strong className="text-white">autocommit-cli</strong> steps in.
        </p>
        <p className="mb-4">
          <strong className="text-white">autocommit-cli</strong> is an innovative command-line interface tool designed to revolutionize
          your Git workflow. By leveraging the power of artificial intelligence, it automatically generates
          descriptive and accurate commit messages based on your staged code changes.
        </p>
        <p>
          Our goal is to enhance developer productivity, ensure consistency across projects, and make version control
          a seamless and enjoyable experience. Spend less time thinking about commit messages and more time
          building amazing software.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
