import Link from 'next/link';
import * as React from 'react';

export const Header = () => (
  <header className="w-full bg-surface text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between py-4">
      <div className="text-2xl font-bold tracking-tight">
        <Link href="/" className="hover:text-primary transition-colors">
          Boris Joskic
        </Link>
      </div>
      <nav className="flex gap-6 text-lg font-medium">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/posts" className="hover:text-primary transition-colors">
          Posts
        </Link>

      </nav>
    </div>
  </header>
);
