import { FC, useState } from "react";
import { RedHeart } from "@icons/RedHeart";
import Rating from "./Rating";
import { WhiteHeart } from "@icons/WhiteHeart";

interface ProductCardProps {
  product: any;
  index: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, index }) => {
  const [isWishListAdded, setIsWishListAdded] = useState<boolean>(false);
  // console.log(product);
  const {category, name, image, strikethroughPrice} = product;
  const randomRating: number = Math.floor(Math.random() * 5) + 1;
  const randomStrikePrice: number = Math.floor(Math.random() * 10) + 3;

  const handleWishlist = () => {
    setIsWishListAdded(!isWishListAdded);
  };

  return (
    <div className="product-card">
      <div onClick={handleWishlist} className="wishlist-icon">
        {isWishListAdded ? <RedHeart /> : <WhiteHeart />}
      </div>
      <div className="image-container">
        <img
          src={`https://source.unsplash.com/random/900x700/?${name}?${index}`}
          alt="fashion"
        />
        <p>View Product</p>
      </div>
      <p className="product-title">{name}</p>
      <div className="prices">
        <span className="strike-through-price">{`Rs. ${randomStrikePrice}99`}</span>
        <span className="purchase-price">{`Rs. ${
          randomStrikePrice - 1
        }99`}</span>
      </div>
      <div className="rating-count">
        <Rating rate={randomRating} />
        <span>(210)</span>
      </div>
    </div>
  );
};

export default ProductCard;
