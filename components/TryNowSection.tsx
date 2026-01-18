"use client";

import React from 'react';
import { commonStyles } from '../styles/commonStyles';

const TryNowSection = () => {
  const [ctaHovered, setCtaHovered] = React.useState(false);

  const codeBlockStyles = {
    backgroundColor: '#1a1a1a',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    textAlign: 'left',
    fontFamily: 'var(--font-vt323)',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    marginTop: '2rem',
    color: '#eee',
    border: '1px solid #333',
    maxWidth: '600px',
    margin: '2rem auto',
  };

  return (
    <section id="try-now" style={commonStyles.section} className="section-padding">
      <h2 style={commonStyles.sectionTitle}>Try autocommit-cli Now!</h2>
      <p style={commonStyles.description}>
        Get started with autocommit-cli in minutes. Follow these simple steps to integrate AI-powered commit messages into your workflow.
      </p>
      <div style={codeBlockStyles} className="code-block-padding code-block-width">
        <pre><code>
          # Install globally using npm or yarn<br />
          $ npm install -g autocommit-cli<br />
          # OR<br />
          $ yarn global add autocommit-cli<br />
          <br />
          # Configure your AI API key (e.g., OpenAI, Gemini)<br />
          $ autocommit-cli config set openai.api_key YOUR_API_KEY<br />
          <br />
          # In your project, stage your changes and run autocommit<br />
          $ git add .<br />
          $ autocommit<br />
        </code></pre>
      </div>
      <a href="https://github.com/urstruelysv/autocommit-cli" target="_blank" rel="noopener noreferrer"
         style={{ ...commonStyles.ctaButton, ...(ctaHovered ? commonStyles.ctaButtonHover : {}) }}
         onMouseEnter={() => setCtaHovered(true)}
         onMouseLeave={() => setCtaHovered(false)}>
        View on GitHub
      </a>
    </section>
  );
};

export default TryNowSection;