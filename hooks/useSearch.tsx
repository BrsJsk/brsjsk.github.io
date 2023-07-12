import { useEffect, useState } from "react";
import { getAllPosts } from "../lib/posts";

export const useSearch = () => {
  const allPosts = ["/home", "/rss.xml"];
  const [results, setSearchResults] = useState<typeof allPosts>();
  const [searchValue, setSearchValue] = useState<string>();

  useEffect(() => {

    if (searchValue) {
      setSearchResults(allPosts);
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  return {
    results,
    setSearchValue,
  };
};
