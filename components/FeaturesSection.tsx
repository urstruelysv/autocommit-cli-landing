"use client";

import AnimatedFeatureCard from './AnimatedFeatureCard';

const FeaturesSection = () => {
  return (
    <section id="features" className="max-w-6xl w-full py-16 text-center px-4 md:py-20 lg:py-24">
      <h2 className="font-press-start-2p font-extrabold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] mb-12 bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
        {/* Feature 1: Logical Commit Grouping */}
        <AnimatedFeatureCard
          title="Logical Grouping"
          description="Intelligently groups code changes into logical commits (feat, fix, refactor, etc.) for a cleaner history."
        />

        {/* Feature 2: AI-Powered Message Generation */}
        <AnimatedFeatureCard
          title="AI-Powered Messages"
          description="Generates high-quality, context-aware commit messages using advanced AI (Gemini API)."
        />

        {/* Feature 3: History Learning & Guidelines */}
        <AnimatedFeatureCard
          title="Learns Your Style"
          description="Adapts to your past commit history and project guidelines for consistent messaging."
        />

        {/* Feature 4: Fully Automated & Safe Push */}
        <AnimatedFeatureCard
          title="Automated & Safe"
          description="Automates staging, committing, and safely pushing to the correct remote branch."
        />

        {/* Feature 5: Optional Review & Edit */}
        <AnimatedFeatureCard
          title="Review & Edit"
          description="Offers an optional interactive mode to review and quickly edit proposed commit messages."
        />

        {/* Feature 6: Multi-platform & CI/CD Ready */}
        <AnimatedFeatureCard
          title="CI/CD Ready"
          description="Easy installation across platforms and reliable, non-interactive execution in CI/CD pipelines."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
