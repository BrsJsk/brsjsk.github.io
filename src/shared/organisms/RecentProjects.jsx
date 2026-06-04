import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '../atoms/SectionTitle';

const PROJECTS = [
  {
    title: 'AlertBeat',
    image: '/images/alertbeatbanner.png',
    url: 'https://alertbeat.gr/?lang=en',
  },
  {
    title: 'M&C Candles',
    image: '/images/mccandles.png',
    url: 'https://mccandles.shop/',
  },
  {
    title: 'Jumpy Theme Customizer',
    image: '/images/jumpythemeproject.png',
    url: 'https://jumpy-theme-customizer.joskonic.com/',
  },
];

export const RecentProjects = ({ title, isFirstTwo = false }) => {
  const projects = isFirstTwo ? [PROJECTS[0], PROJECTS[1]] : PROJECTS;

  return (
    <>
      <div className="container mx-auto pt-[20px] pt-6">
        <SectionTitle title={title}></SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-6">
          {projects.map((project) => (
            <Link
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-102 transition-transform  block rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative w-full h-120">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
