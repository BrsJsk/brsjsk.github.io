import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        Boris Joskic
      </h1>
      <div className="flex flex-row">
        <a href="https://github.com/BrsJsk/">
          <FaGithubSquare className="w-8 h-8 mr-2" />
        </a>

        <a href="https://www.linkedin.com/in/boris-joskic-797a35148">
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Header;
