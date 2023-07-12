import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchButton = () => {
  const [isSearchVisible, setSearchVisible] = useState(true);
  return (
    <>
      <button
        className="w-8 h-8 mr-2"
        onClick={() => setSearchVisible(!isSearchVisible)}
      >
        <FaSearch />
      </button>

      {isSearchVisible && (
        <div>
          <input
            placeholder="Search"
            className="fixed top-[25%] left-[25%] border h-14 w-[50vw] p-4 rounded"
          />
        </div>
      )}
    </>
  );
};
