const SuggestionCard = ({ index }: { index: number }) => {
  return (
    <div className="suggestion-card-container" key={index}>
      <img
        src={`https://source.unsplash.com/random/165×223/?shirt?${index}`}
        alt="shirts"
      />
      <p>Shirt with puffed</p>
    </div>
  );
};

export default SuggestionCard;
