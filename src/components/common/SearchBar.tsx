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

  const handleBlur = () => {
    setIsFocused && setIsFocused(false);
  };

  return (
    <div className={`search-bar ${variant === "small" ? "small" : ""}`}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        placeholder="Search"
      />
      <Search />
    </div>
  );
};

export { SearchBar };
