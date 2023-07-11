import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { FaGithubSquare, FaLinkedin, FaRssSquare } from "react-icons/fa";

const navbarItems = [
  {
    title: "Home",
    url: "/",
    active: false,
  },
  {
    title: "Posts",
    url: "/posts",
    active: false,
  },
];

const Header = () => {
  const { asPath } = useRouter();

  const navbarItemsWithActive = useMemo(() => {
    return navbarItems.map((item) => ({
      ...item,
      active: asPath === item.url,
    }));
  }, [asPath]);

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        {navbarItemsWithActive.map((item) => (
          <Link
            key={item.url}
            className={`text-xl bold hover:text-blue-600 mr-4 ${
              item.active ? "text-blue-600" : ""
            }`}
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="flex flex-row">
        <Link href="https://github.com/BrsJsk/">
          <FaGithubSquare className="w-8 h-8 mr-2" />
        </Link>

        <Link href="https://www.linkedin.com/in/boris-joskic-797a35148">
          <FaLinkedin className="w-8 h-8 mr-2" />
        </Link>

        <Link href="rss.xml">
          <FaRssSquare className="w-8 h-8 text-orange-500" />
        </Link>
      </div>
    </section>
  );
};

export default Header;
