import React from "react";
import SuggestionCard from "./SuggestionCard";

const Suggestion = () => {
  const popularSuggstions = [
    "Striped shirt dress",
    "Satin shirts",
    "Denim jumpsuit",
    "Leather dresses",
    "Solid tshirts",
  ];

  return (
    <div className="suggestion-container">
      <h2>Latest Trends</h2>
      <div className="suggestions-cards-container">
        {[...new Array(5)].map((card, index) => {
          return <SuggestionCard index={index} key={index} />;
        })}
      </div>
      <h2>Popular suggestions</h2>
      {popularSuggstions.map((suggestion, index) => {
        return <p key={index} className="suggestion-text">{suggestion}</p>;
      })}
    </div>
  );
};

export { Suggestion };
