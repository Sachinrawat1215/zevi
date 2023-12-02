import { Search } from "@icons/Search";
import React from "react";

const SearchBar = ({ varient }: { varient: string }) => {
  return (
    <div className={`search-bar small ${varient === "small" && "small"}`}>
      <input type="text" placeholder="Search" />
      <Search />
    </div>
  );
};

export { SearchBar };
