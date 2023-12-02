import React, { FC } from "react";
import { Search } from "@icons/Search";

interface SearchBarProps {
  variant: string;
}

const SearchBar: FC<SearchBarProps> = ({ variant }) => {
  return (
    <div className={`search-bar ${variant === "small" && "small"}`}>
      <input type="text" placeholder="Search" />
      <Search />
    </div>
  );
};

export { SearchBar };
