import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
const Cart = () => {
  const user = sessionStorage.getItem("user");
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [n, setN] = useState();
  axios
    .get(`http://localhost:5000/cart/${user}`)
    .then((res) => setItem(res.data))
    .catch((err) => console.log(err));

  const update = () => {
    const update = { user, name, n };
    axios
      .post("http://localhost:5000/cart/quantity", update)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {item.map((x, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{x.name}</td>
                <td>{x.quantity}</td>
                <td>
                  <button
                    onClick={update}
                    onMouseEnter={() => {
                      setN(1);
                      setName(x.name);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={update}
                    onMouseEnter={() => {
                      setN(-1);
                      setName(x.name);
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
