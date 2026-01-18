"use client";

import React from 'react';

const FutureUpdatesSection = () => {
  return (
    <section id="future-updates" className="max-w-6xl w-full py-16 text-center px-4 md:py-20 lg:py-24">
      <h2 className="font-press-start-2p font-extrabold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] mb-12 bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent">
        Future Updates
      </h2>
      <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-400 leading-relaxed font-vt323 md:text-xl">
        We are continuously working to improve autocommit-cli. Here's a sneak peek at what's coming next:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
        {/* Planned Feature 1: Easy Installation */}
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Easy Installation</h3>
          <p className="text-gray-400">Homebrew, PowerShell/Scoop/Winget, single binary, npm/pip (via wrapper), VS Code Extension.</p>
        </div>

        {/* Planned Feature 2: Intelligent Change Classification */}
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Intelligent Classification</h3>
          <p className="text-gray-400">Advanced language-aware heuristics and learned patterns for change classification.</p>
        </div>

        {/* Planned Feature 3: Learning From History */}
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Continuous Learning</h3>
          <p className="text-gray-400">Continuously improves commit quality based on past commits and project guidelines.</p>
        </div>

        {/* Planned Feature 4: Commit Guide Awareness */}
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">Commit Guide Awareness</h3>
          <p className="text-gray-400">Automatically detects and adheres to project-specific commit guidelines.</p>
        </div>

        {/* Planned Feature 5: PR Creation */}
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">PR Creation</h3>
          <p className="text-gray-400">Future integration for automated Pull Request creation.</p>
        </div>

        {/* Planned Feature 6: IDE-native integrations */}
        <div className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">IDE Integrations</h3>
          <p className="text-gray-400">Native integrations with popular IDEs like VS Code and IntelliJ.</p>
        </div>
      </div>
    </section>
  );
};

export default FutureUpdatesSection;
