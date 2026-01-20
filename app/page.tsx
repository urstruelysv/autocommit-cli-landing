"use client";

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import FutureUpdatesSection from '@/components/FutureUpdatesSection';
import TryNowSection from '@/components/TryNowSection';
import Footer from '@/components/Footer';
import GradientBackground from '@/components/GradientBackground';

const Page = () => {
  return (
    <main className="flex flex-col items-center min-h-screen gap-12 pt-20 px-4 relative z-0 md:gap-16 md:pt-24 lg:gap-20 lg:pt-28">
      <GradientBackground />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <FutureUpdatesSection />
      <TryNowSection />
      <Footer />
    </main>
  );
};

export default Page;
