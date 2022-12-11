import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = () => {
  const user = sessionStorage.getItem("user");
  const [item, setItem] = useState("");
  const [product, setProduct] = useState([]);
  axios
    .get("http://localhost:5000/stock")
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err));
  const onClick = () => {
    const cartItem = { user, item };
    axios
      .post("http://localhost:5000/cart/add", cartItem)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <button>
        <Link to={"/cart"}>Cart</Link>
      </button>
      {product.map((x, index) => {
        return (
          <div key={index}>
            <p>{x.name}</p>
            <button
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
