"use client";

import React from 'react';
import { commonStyles } from '../styles/commonStyles';

const DocumentationSection = () => {
  const docLinkStyles = {
    display: 'inline-block',
    margin: '1rem',
    padding: '0.8rem 1.5rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s',
    border: '1px solid #ff416c',
    color: '#ff416c',
    fontFamily: 'var(--font-press-start-2p)',
  };

  const docLinkHoverStyles = {
    backgroundColor: '#ff416c',
    color: '#fff',
  };

  const [docsHovered, setDocsHovered] = React.useState(false);
  const [faqHovered, setFaqHovered] = React.useState(false);

  return (
    <section id="documentation" style={commonStyles.section} className="section-padding">
      <h2 style={commonStyles.sectionTitle}>Documentation & Support</h2>
      <p style={commonStyles.description}>
        Dive deeper into autocommit-cli with our comprehensive documentation and find answers to common questions.
      </p>
      <div>
        <a href="https://github.com/urstruelysv/autocommit-cli#documentation" target="_blank" rel="noopener noreferrer"
           style={{ ...docLinkStyles, ...(docsHovered ? docLinkHoverStyles : {}) }}
           onMouseEnter={() => setDocsHovered(true)}
           onMouseLeave={() => setDocsHovered(false)}>
          Read the Docs
        </a>
        <a href="https://github.com/urstruelysv/autocommit-cli#faq" target="_blank" rel="noopener noreferrer"
           style={{ ...docLinkStyles, ...(faqHovered ? docLinkHoverStyles : {}) }}
           onMouseEnter={() => setFaqHovered(true)}
           onMouseLeave={() => setFaqHovered(false)}>
          FAQ
        </a>
      </div>
    </section>
  );
};

export default DocumentationSection;