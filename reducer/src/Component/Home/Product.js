import React from "react";
import "./product.css";
import { useStateValue } from "../../context/StateProvider";

const Product = ({ id, image, price, title, rating }) => {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      itemDetils: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

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
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
