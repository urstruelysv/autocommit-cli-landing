"use client";

import React from 'react';
import { commonStyles } from '../styles/commonStyles';

const Footer = () => {
  const footerStyles = {
    width: '100%',
    padding: '1.5rem 2rem', // Reduced vertical padding
    borderTop: '1px solid #333',
    marginTop: '3rem', // Reduced margin
  };

  const footerLinksStyles = {
    display: 'flex',
    gap: '1rem', // Reduced gap
  };

  const footerLinkStyles = {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '0.8rem', // Reduced font size
    transition: 'color 0.3s',
    fontFamily: 'var(--font-vt323)',
  };

  const [twitterHovered, setTwitterHovered] = React.useState(false);
  const [linkedinHovered, setLinkedinHovered] = React.useState(false);
  const [githubHovered, setGithubHovered] = React.useState(false);

  return (
    <footer style={footerStyles} className="footer-padding footer-content">
      <p style={{color: '#aaa', fontSize: '0.9rem'}}>&copy; {new Date().getFullYear()} autocommit-cli. All rights reserved.</p>
      <div style={footerLinksStyles} className="footer-links">
        <a href="#"
           style={{ ...footerLinkStyles, ...(twitterHovered ? commonStyles.footerLinkHover : {}) }}
           onMouseEnter={() => setTwitterHovered(true)}
           onMouseLeave={() => setTwitterHovered(false)}>Twitter</a>
        <a href="#"
           style={{ ...footerLinkStyles, ...(linkedinHovered ? commonStyles.footerLinkHover : {}) }}
           onMouseEnter={() => setLinkedinHovered(true)}
           onMouseLeave={() => setLinkedinHovered(false)}>LinkedIn</a>
        <a href="https://github.com/urstruelysv/autocommit-cli" target="_blank" rel="noopener noreferrer"
           style={{ ...footerLinkStyles, ...(githubHovered ? commonStyles.footerLinkHover : {}) }}
           onMouseEnter={() => setGithubHovered(true)}
           onMouseLeave={() => setGithubHovered(false)}>GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;