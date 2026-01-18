"use client";

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="max-w-6xl w-full py-16 text-center px-4 md:py-20 lg:py-24">
      <h2 className="font-press-start-2p font-extrabold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] mb-12 bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent">
        About autocommit-cli
      </h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed text-left font-vt323 md:text-xl">
        <p className="mb-6">
          <strong className="text-white">autocommit-cli</strong> is an AI-powered Git automation tool designed to eliminate the friction of Git workflows. It intelligently detects code changes, groups them into logical commits, and generates high-quality commit messages automatically.
        </p>
        <p className="mb-6">
          <strong className="text-white">Problem:</strong> Deciding what belongs in a commit, writing accurate messages, and maintaining consistency are tedious. Existing tools fall short, offering only partial solutions or requiring too much interaction.
        </p>
        <p className="mb-6">
          <strong className="text-white">Our Goal:</strong> To fully automate Git commits smartly and safely, learn from past commits and guidelines, provide optional human review, and be trivial to install on any platform, working reliably in local dev and CI/CD.
        </p>
        <p>
          <strong className="text-white">Key Differentiators:</strong> Unlike other tools, autocommit-cli offers logical commit grouping, learns from your commit history and guidelines, provides fully automated pushes, and allows instant review/accept.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
