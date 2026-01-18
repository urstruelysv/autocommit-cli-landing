"use client";

import React, { useState } from "react";
import { Github } from "lucide-react";

const NAV_HEIGHT = 72;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const navLink =
    "relative text-white/75 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-red-tone-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
                 bg-black/80 backdrop-blur-md border-b border-white/5"
      style={{ height: NAV_HEIGHT }}
    >
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-press-start-2p text-base tracking-tight
                     bg-gradient-to-r from-red-tone-500 to-red-tone-600
                     bg-clip-text text-transparent select-none"
        >
          autocommit-cli
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-vt323 text-base">
          <a href="#hero" className={navLink} onClick={(e) => handleScroll(e, "hero")}>
            Home
          </a>
          <a href="#features" className={navLink} onClick={(e) => handleScroll(e, "features")}>
            Features
          </a>
          <a href="#about" className={navLink} onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
          <a href="#future-updates" className={navLink} onClick={(e) => handleScroll(e, "future-updates")}>
            Updates
          </a>
          <a href="#documentation" className={navLink} onClick={(e) => handleScroll(e, "documentation")}>
            Docs
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/urstruelysv/autocommit-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2.5 rounded-md border border-white/10
                       text-white/80 hover:text-white
                       hover:border-red-tone-500/40
                       hover:bg-red-tone-500/10
                       transition-all"
            aria-label="GitHub repository"
          >
            <Github size={20} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl font-mono"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full
                     bg-black/95 backdrop-blur-lg
                     border-t border-white/10"
        >
          <nav className="flex flex-col items-center py-6 gap-5 font-vt323 text-base">
            <a href="#hero" className="text-white/80 hover:text-white" onClick={(e) => handleScroll(e, "hero")}>
              Home
            </a>
            <a href="#features" className="text-white/80 hover:text-white" onClick={(e) => handleScroll(e, "features")}>
              Features
            </a>
            <a href="#about" className="text-white/80 hover:text-white" onClick={(e) => handleScroll(e, "about")}>
              About
            </a>
            <a href="#future-updates" className="text-white/80 hover:text-white" onClick={(e) => handleScroll(e, "future-updates")}>
              Updates
            </a>
            <a href="#documentation" className="text-white/80 hover:text-white" onClick={(e) => handleScroll(e, "documentation")}>
              Docs
            </a>

            <a
              href="https://github.com/urstruelysv/autocommit-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2
                         px-4 py-2 rounded-md
                         border border-red-tone-500/40
                         text-red-tone-500 hover:bg-red-tone-500/10
                         transition"
            >
              <Github size={18} />
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
