import React, { FC } from "react";
import Rating from "./Rating";

interface ProductCardProps {
  product: any;
  index: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, index }) => {
  const randomRating: number = Math.floor(Math.random() * 5) + 1;
  const randomStrikePrice: number = Math.floor(Math.random() * 10) + 3;

  return (
    <div className="product-card">
      <img
        src={`https://source.unsplash.com/random/900x700/?clothes?${index}`}
        alt="fashion"
      />
      <p className="product-title">Round neck cotton Tee</p>
      <div className="prices">
        <span className="strike-through-price">{`Rs. ${randomStrikePrice}99`}</span>
        <span className="purchase-price">{`Rs. ${randomStrikePrice - 1}99`}</span>
      </div>
      <div className="rating-count">
        <Rating rate={randomRating} />
        <span>(210)</span>
      </div>
    </div>
  );
};

export default ProductCard;
