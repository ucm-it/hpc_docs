import React from 'react';

export default function DownloadButton({ href, label }) {
  function handleClick(e) {
    e.preventDefault();
    window.open(window.location.origin + href, '_blank');
  }

  return React.createElement(
    'a',
    {
      href: href,
      onClick: handleClick,
      style: {
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: '#2e8555',
        color: 'white',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginBottom: '1rem',
        cursor: 'pointer',
      },
    },
    '\u2B07\uFE0F ' + label
  );
}
