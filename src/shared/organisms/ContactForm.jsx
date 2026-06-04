"use client";

import Link from 'next/link';
import { SectionTitle } from '../atoms/SectionTitle';
import { Button } from '../molecules/Button';

export const ContactForm = () => {
    const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    // Success and error handling ...
  };

  return (
    <div className="container mx-auto">
      <SectionTitle title="Contact" />
      <form onSubmit={handleFormSubmit} name="contact" className="bg-surface rounded-lg shadow-md gap-6 mt-8 mb-8">
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="name" className="text-white font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="px-4 py-2 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-accent bg-bg text-white"
            required
          />
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="email" className="text-white font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="px-4 py-2 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-accent bg-bg text-white"
            required
          />
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="message" className="text-white font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            className="px-4 py-2 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-accent bg-bg text-white resize-none"
            required
          />
        </div>
        <Button theme="light" type="submit">
          Send
        </Button>
        <p className="mt-4 text-white">
          Or send me a message at <Link href="mailto:boris@joskonic.com">boris@joskonic.com</Link>
        </p>
      </form>
    </div>
  );
};
