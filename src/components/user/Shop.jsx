import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Shop = () => {
  const user = sessionStorage.getItem("user");
  const [item, setItem] = useState("");
  const [product, setProduct] = useState([]);
  axios
    .get("http://localhost:5000/stock")
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err));
  const onClick = (e) => {
    const cartItem = { user, item };
    axios
      .post("http://localhost:5000/cart/add", cartItem)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      {product.map((x, index) => {
        return (
          <div key={index}>
            <p>{x.name}</p>
            <button
              value={x.name}
              onMouseEnter={() => {
                setItem(x.name);
              }}
              onClick={onClick}
              // setItem(x.name);
              // const cartItem = { user, item };
              // axios
              //   .post("http://localhost:5000/cart/add", cartItem)
              //   .then((res) => res.data)
              //   .catch((err) => console.log(err));
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
