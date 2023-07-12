import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../../hooks";
import Link from "next/link";
import useDebounced from "use-debounced";

export const SearchButton = () => {
  const [isSearchVisible, setSearchVisible] = useState(true);
  const [searchValue, setSearchValue] = useState<string>();
  const debouncedValue = useDebounced(searchValue, 100);

  const { results, setSearchValue: updateValue } = useSearch();

  useEffect(() => {
    updateValue(debouncedValue);
  }, [debouncedValue]);

  return (
    <>
      <button
        className="w-8 h-8 mr-2"
        onClick={() => setSearchVisible(!isSearchVisible)}
      >
        <FaSearch />
      </button>

      {isSearchVisible && (
        <div className="flex flex-col w-[50vw] fixed top-[25%] left-[25%] shadow-lg">
          <input
            placeholder="Search"
            className=" border h-14 p-4 rounded"
            onChange={(ev) => {
              setSearchValue(ev.target.value);
            }}
            value={searchValue}
          />

          <div className="flex flex-col">
            {results?.map((item) => (
              <Link
                key={item}
                className="bg-gray-100 p-4 w-full text-gray-800"
                href={item}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
