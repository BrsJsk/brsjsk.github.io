import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const HomeHero = () => {
  return (
    <div className="container mx-auto flex items-start lg:flex-nowrap justify-center flex-wrap mt-20 lg:justify-between">
      <div className="max-w-full sm:max-w-[40%]">
        <h1 className="font-bold text-white">Software Engineer</h1>
        <p className="text-base text-[#888888]">
          I'm a frontend-focused software engineer with over 7 years of experience building scalable
          and user-friendly web applications.
        </p>

        <div className="flex gap-4 flex-wrap mt-6">
          <Link
            href="https://github.com/BrsJsk"
            className="flex items-center justify-between  text-white border-1 border-white px-4 py-2 rounded-md mt-4 hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pr-4">
              <FaGithub />
            </span>
            Github
          </Link>

          <Link
            href="https://www.linkedin.com/in/boris-joskic-797a35148/"
            className="flex items-center justify-between  text-white border-1 border-white px-4 py-2 rounded-md mt-4 hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pr-4">
              <FaLinkedin />
            </span>
            Linkedin
          </Link>


        </div>
      </div>

      <div className="max-w-full sm:max-w-[60%] mt-10 lg:mt-0">
        <Image
          quality={90}
          className="rounded-2xl"
          src="/images/borisjoskic.jpg"
          width={600}
          height={400}
          alt="Boris Joskic"
        />
      </div>
    </div>
  );
};
