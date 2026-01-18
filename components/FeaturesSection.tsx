"use client";

import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="max-w-6xl w-full py-16 text-center px-4 md:py-20 lg:py-24">
      <h2 className="text-4xl font-bold mb-8 font-press-start-2p bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent md:text-5xl lg:text-6xl">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">AI-Powered</h3>
          <p className="text-gray-400">Leverages advanced AI models to understand your code changes and generate relevant commit messages.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Time-Saving</h3>
          <p className="text-gray-400">Automate the tedious task of writing commit messages, freeing up your time for more important work.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Consistent</h3>
          <p className="text-gray-400">Ensures consistent and high-quality commit messages across your projects, improving readability and maintainability.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Customizable</h3>
          <p className="text-gray-400">Configure the AI to match your preferred commit message style and conventions.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
