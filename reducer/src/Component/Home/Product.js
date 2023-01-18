import React from "react";
import "./product.css";
const Product = ({ id, image, price, title, rating }) => {
  console.log("log: ", rating);

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price"> $: {price}</p>
      </div>
      <div className="product_rating">
        {Array(rating)
          .fill()
          ?.map((_) => (
            <p>⭐</p>
          ))}
      </div>

      <img height="200px" src={image} alt={image} />
    </div>
  );
};

export default Product;
