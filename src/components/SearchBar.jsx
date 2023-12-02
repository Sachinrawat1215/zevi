import { Search } from "@icons/Search";
import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <Search />
        </div>
      </div>
    </div>
  );
};

export { SearchBar };
