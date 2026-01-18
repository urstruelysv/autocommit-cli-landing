"use client";

import React from 'react';

import AnimatedFeatureCard from './AnimatedFeatureCard';

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
        <AnimatedFeatureCard
          title="Easy Installation"
          description="Homebrew, PowerShell/Scoop/Winget, single binary, npm/pip (via wrapper), VS Code Extension."
        />

        {/* Planned Feature 2: Intelligent Change Classification */}
        <AnimatedFeatureCard
          title="Intelligent Classification"
          description="Advanced language-aware heuristics and learned patterns for change classification."
        />

        {/* Planned Feature 3: Learning From History */}
        <AnimatedFeatureCard
          title="Continuous Learning"
          description="Continuously improves commit quality based on past commits and project guidelines."
        />

        {/* Planned Feature 4: Commit Guide Awareness */}
        <AnimatedFeatureCard
          title="Commit Guide Awareness"
          description="Automatically detects and adheres to project-specific commit guidelines."
        />

        {/* Planned Feature 5: PR Creation */}
        <AnimatedFeatureCard
          title="PR Creation"
          description="Future integration for automated Pull Request creation."
        />

        {/* Planned Feature 6: IDE-native integrations */}
        <AnimatedFeatureCard
          title="IDE Integrations"
          description="Native integrations with popular IDEs like VS Code and IntelliJ."
        />
      </div>
    </section>
  );
};

export default FutureUpdatesSection;
