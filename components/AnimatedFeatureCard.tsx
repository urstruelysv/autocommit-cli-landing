"use client";

import React from 'react';

interface AnimatedFeatureCardProps {
  title: string;
  description: string;
}

const AnimatedFeatureCard: React.FC<AnimatedFeatureCardProps> = ({ title, description }) => {
  return (
    <div
      className="bg-gray-900 p-6 rounded-lg text-left border border-gray-700 font-vt323 text-base
                 transition-all duration-300 ease-in-out
                 hover:border-red-tone-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:scale-[1.02]"
    >
      <h3 className="text-xl font-semibold mb-2 text-white font-press-start-2p">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default AnimatedFeatureCard;
