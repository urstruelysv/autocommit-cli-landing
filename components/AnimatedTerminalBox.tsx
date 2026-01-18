"use client";

import React, { useState, useEffect } from 'react';

interface AnimatedTerminalBoxProps {
  text: string;
  delay?: number; // Delay before animation starts
  speed?: number; // Typing speed in ms per character
  loopDelay?: number; // Delay before looping animation
  className?: string;
}

const AnimatedTerminalBox: React.FC<AnimatedTerminalBoxProps> = ({ text, delay = 0, speed = 70, loopDelay = 3000, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [animationKey, setAnimationKey] = useState(0); // Key to force re-render and restart animation

  useEffect(() => {
    setDisplayedText(''); // Reset text on key change
    setShowCursor(true); // Show cursor at start

    let timeoutId: NodeJS.Timeout;
    let typingInterval: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;
    let loopTimeout: NodeJS.Timeout;

    const startTyping = () => {
      let i = 0;
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        if (i === text.length) {
          clearInterval(typingInterval);
          // Keep cursor blinking after typing is complete
          cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
          }, 500);

          // Start loop after loopDelay
          loopTimeout = setTimeout(() => {
            clearInterval(cursorInterval); // Stop blinking cursor
            setAnimationKey((prevKey) => prevKey + 1); // Trigger re-render to restart animation
          }, loopDelay);
        }
      }, speed);
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearTimeout(loopTimeout);
    };
  }, [text, delay, speed, loopDelay, animationKey]); // Depend on animationKey to restart

  return (
    <div
      className={`relative w-full rounded-xl border border-white/10 bg-black/60 backdrop-blur
                 px-4 py-4 text-left font-mono text-sm sm:text-base md:text-lg text-gray-200 overflow-x-auto h-48 ${className || ''}`}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="relative z-10"> {/* Added relative z-10 to ensure content is above background */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <pre className="leading-relaxed whitespace-pre-wrap break-normal">
          {displayedText}
          {showCursor && <span className="animate-blink">_</span>}
        </pre>
      </div>
    </div>
  );
};

export default AnimatedTerminalBox;
