"use client";

import React from 'react';

const FutureUpdatesSection = () => {
  return (
    <section id="future-updates" className="max-w-6xl w-full py-16 text-center px-4 md:py-20 lg:py-24">
      <h2 className="text-4xl font-bold mb-8 font-press-start-2p bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent md:text-5xl lg:text-6xl">Future Updates</h2>
      <p className="text-lg mb-8 text-gray-400 leading-relaxed font-vt323 md:text-xl">
        We are continuously working to improve autocommit-cli. Here's a sneak peek at what's coming next:
      </p>
      <ul className="list-none p-0 mx-auto mt-8 max-w-3xl">
        <li className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 mb-4 font-vt323 text-base">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Multi-language Support</h3>
          <p className="text-gray-400">Expand AI capabilities to generate commit messages for various programming languages beyond JavaScript/TypeScript.</p>
        </li>
        <li className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 mb-4 font-vt323 text-base">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Integration with Popular IDEs</h3>
          <p className="text-gray-400">Seamless integration with VS Code, IntelliJ, and other IDEs for an even smoother workflow.</p>
        </li>
        <li className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 mb-4 font-vt323 text-base">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Advanced Customization Options</h3>
          <p className="text-gray-400">More granular control over AI models, commit message templates, and integration with project management tools.</p>
        </li>
        <li className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 mb-4 font-vt323 text-base">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Community Contributions</h3>
          <p className="text-gray-400">Tools and guidelines to allow the community to contribute to AI model training and feature development.</p>
        </li>
      </ul>
    </section>
  );
};

export default FutureUpdatesSection;
