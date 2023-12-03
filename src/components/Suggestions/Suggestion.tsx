import { FC } from "react";
import SuggestionCard from "./SuggestionCard";
import { Link } from "react-router-dom";

interface SuggestionProps {}

const Suggestion: FC<SuggestionProps> = () => {
  const popularSuggestions: string[] = [
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
      {popularSuggestions.map((suggestion, index) => {
        return (
          <Link to="/products" key={index} className="suggestion-text">
            {suggestion}
          </Link>
        );
      })}
    </div>
  );
};

export { Suggestion };
