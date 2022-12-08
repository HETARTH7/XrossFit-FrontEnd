import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
const Shop = () => {
  const [product, setProduct] = useState([]);
  axios
    .get("http://localhost:5000/stock")
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <Navbar />
      {product.map((x, index) => {
        return (
          <div>
            <p key={index}>{x.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
