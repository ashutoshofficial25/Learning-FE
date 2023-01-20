import React from "react";
import "./checkout.css";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ cart }] = useStateValue();

  console.log("log:", cart);

  return (
    <div className="checkout">
      <div className="checkout-container">
        {cart?.length == 0 ? (
          <div className="checkout-empty">You have no items in your cart</div>
        ) : (
          cart.map((item) => (
            <CheckoutProduct key={item.id} id={item.id} image={item.image} />
          ))
        )}
      </div>
    </div>
  );
};

export default Checkout;
