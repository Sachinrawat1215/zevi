import { Star } from "@icons/index";

const Rating = ({ rate = 3 }: { rate: number }) => {
  return (
    <span>
      {[...new Array(5)].map((element, index) => {
        return rate > index ? <Star key={index} color="#FDD33D" /> : <Star key={index} color="#CDCCC8" />;
      })}
    </span>
  );
};

export default Rating;
