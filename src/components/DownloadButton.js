import React from 'react';

export default function DownloadButton({ href, label }) {
  return React.createElement(
    'a',
    {
      href: href,
      download: true,
      style: {
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: '#2e8555',
        color: 'white',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginBottom: '1rem',
      },
    },
    '⬇️ ' + label
  );
}