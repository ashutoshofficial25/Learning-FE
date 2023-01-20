import React from "react";
import { useStateValue } from "../../context/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();
  const removeFromCart = () => {
    //code to remove from cart

    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div>
      <img src={image} height="200px" />

      <button onClick={removeFromCart}>Remove form cart</button>
    </div>
  );
};

export default CheckoutProduct;
