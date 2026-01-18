// styles/commonStyles.ts
import React from 'react';

export const commonStyles = {
  section: {
    padding: '4rem 0',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#fff',
  } as React.CSSProperties,
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#ccc',
    marginBottom: '2rem',
  } as React.CSSProperties,
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '0.8rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  } as React.CSSProperties,
  ctaButtonHover: {
    backgroundColor: '#0056b3',
  } as React.CSSProperties,
  footerLinkHover: {
    color: '#fff', // Lighter color on hover
  } as React.CSSProperties,
};
