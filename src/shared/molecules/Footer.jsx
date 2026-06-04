import * as React from 'react';

export const Footer = () => (
  <footer className="h-36 w-full bg-surface text-white shadow-inner py-4 font-secondary container mx-auto flex align-center items-center justify-center px-4 max-w-6xl">
    <span className="text-base text-muted">
      © {new Date().getFullYear()} Boris Joskic. All rights reserved.
    </span>
  </footer>
);
