import React, { FC } from "react";
import { Search } from "@icons/Search";

interface SearchBarProps {
  variant: string;
  setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: FC<SearchBarProps> = ({ variant, setIsFocused }) => {
  const handleFocus = () => {
    setIsFocused && setIsFocused(true);
  };

  return (
    <div className={`search-bar ${variant === "small" ? "small" : ""}`}>
      <input
        onFocus={handleFocus}
        type="text"
        placeholder="Search"
      />
      <Search />
    </div>
  );
};

export { SearchBar };
