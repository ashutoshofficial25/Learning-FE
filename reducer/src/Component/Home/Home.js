import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="home">
      <div className="product_rows">
        {product?.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            rating={Math.floor(product.rating?.rate)}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
