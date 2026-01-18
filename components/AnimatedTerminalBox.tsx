"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedTerminalBoxProps {
  text: string;
  delay?: number;
  speed?: number;
  loopDelay?: number;
  className?: string;
}

const AnimatedTerminalBox: React.FC<AnimatedTerminalBoxProps> = ({
  text,
  delay = 0,
  speed = 60,
  loopDelay = 2500,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const containerRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    let cursorTimer: NodeJS.Timeout;
    let startTimer: NodeJS.Timeout;
    let loopTimer: NodeJS.Timeout;

    let index = 0;
    setDisplayedText("");
    setCursorVisible(true);

    const type = () => {
      typingTimer = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        // auto-scroll like a real terminal
        if (containerRef.current) {
          containerRef.current.scrollTop =
            containerRef.current.scrollHeight;
        }

        if (index >= text.length) {
          clearInterval(typingTimer);

          // cursor blinks ONLY when idle
          cursorTimer = setInterval(() => {
            setCursorVisible((v) => !v);
          }, 500);

          loopTimer = setTimeout(() => {
            clearInterval(cursorTimer);
            setCursorVisible(false);
            setDisplayedText(""); // clear terminal
            index = 0;
            type(); // restart typing
          }, loopDelay);
        }
      }, speed);
    };

    startTimer = setTimeout(type, delay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(loopTimer);
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [text, delay, speed, loopDelay]);

  return (
    <div
      className={`relative rounded-xl border border-white/10 bg-black/60 backdrop-blur
      w-full max-w-[420px] h-[220px] p-4 font-mono text-left text-gray-200
      ${className}`}
    >
      {/* GRID — untouched */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Terminal header */}
        <div className="flex gap-2 mb-2 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Terminal body */}
        <pre
          ref={containerRef}
          className="flex-1 overflow-y-auto whitespace-pre-wrap leading-relaxed text-sm md:text-[15px]"
        >
          {displayedText}
          <span className="inline-block w-2">
            {cursorVisible && "█"}
          </span>
        </pre>
      </div>
    </div>
  );
};

export default AnimatedTerminalBox;
