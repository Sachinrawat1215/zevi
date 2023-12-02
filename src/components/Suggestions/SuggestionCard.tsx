import { FC } from "react";
import { Link } from "react-router-dom";

interface SuggestionCardProps {
  index: number;
}

const SuggestionCard: FC<SuggestionCardProps> = ({ index }) => {
  return (
    <Link to="/products" className="suggestion-card-container" key={index}>
      <img
        src={`https://source.unsplash.com/random/165x223/?shirt?${index}`}
        alt="shirts"
      />
      <p>Shirt with puffed</p>
    </Link>
  );
};

export default SuggestionCard;
