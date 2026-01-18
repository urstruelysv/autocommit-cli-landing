"use client";

import React from 'react';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] -z-10 top-[-100px] left-[-100px] animate-move-before"
        style={{ background: 'radial-gradient(circle, rgba(255, 65, 108, 0.3), transparent 70%)' }}
      ></div>
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] -z-10 bottom-[-100px] right-[-100px] animate-move-after"
        style={{ background: 'radial-gradient(circle, rgba(255, 75, 43, 0.3), transparent 70%)' }}
      ></div>
    </div>
  );
};

export default GradientBackground;
