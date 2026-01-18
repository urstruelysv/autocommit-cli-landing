"use client";

import React from "react";
import AnimatedTerminalBox from './AnimatedTerminalBox';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-72px)] flex flex-col justify-center items-center py-16 px-6 md:px-12 lg:px-16 "
    >
      <div className="w-full max-w-6xl text-center flex flex-col items-center">

        {/* Badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-full
                       border border-red-tone-500/30 bg-red-tone-500/10
                       px-4 py-1.5
                       text-xs md:text-sm
                       text-red-tone-500 font-vt323"
          >
            <span>&gt;_</span>
            AI-powered Git commits
          </span>

          <span
            className="inline-flex items-center gap-2 rounded-full
                       border border-white/10 bg-white/5
                       px-4 py-1.5
                       text-xs md:text-sm
                       text-gray-300 font-vt323"
          >
            Built by AVL
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-press-start-2p font-extrabold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] mb-6">
          <span className="block bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent">
            Stop explaining
          </span>
          <span className="block bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent">
            your code
          </span>
          <span className="block text-white mt-1">to Git.</span>
        </h1>

        {/* Branding element */}
        

        {/* Description */}
        <p className="max-w-2xl text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
          <span className="text-white">autocommit-cli</span> reads your changes and writes meaningful commit messages automatically — so you can focus on what actually matters:
          <span className="text-white"> shipping code.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <a
            href="https://github.com/urstruelysv/autocommit-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-bold text-white
                       text-sm md:text-base
                       bg-red-tone-500 border border-red-tone-500
                       transition-all duration-300
                       hover:bg-red-tone-600 hover:border-red-tone-600
                       hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]
                       hover:scale-[1.03]"
          >
            Try it now
          </a>
          <span className="text-gray-500 text-xs md:text-sm font-vt323 select-none right">
            Open source • CLI-first • Developer-focused
          </span>
        </div>

        {/* Terminal Previews */}
        <div className="mt-7 w-full w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 bg-red-tone-500/10 rounded-xl p-4 mesh-gradient ">
          <AnimatedTerminalBox key="terminal-1" text="$ autocommit-cli Select a mode to run autocommit-cli (default: AI-Commit): 1. AI-Commit (default) - Use AI to generate commit messages.Enter your choice (1-6, or press Enter for default):" loopDelay={6000} />
          <AnimatedTerminalBox key="terminal-2" text="$ autocommit-cli ✔ Mode selected: AI-Commit Detecting changes...Generating commit message with Gemini API..." delay={3000} loopDelay={6000} />
          <AnimatedTerminalBox key="terminal-3" text="✔ Commit generated: 'feat: add animated terminal boxes'? Review and edit commit message? (Y/n) n ✔ Changes committed and pushed to remote." delay={6000} loopDelay={6000} />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
