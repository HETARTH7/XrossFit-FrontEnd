import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
const Stock = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState([]);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeDesc = (e) => {
    setDesc(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const addProduct = () => {
    const newProduct = { name, desc, price, quantity };
    axios
      .post("http://localhost:5000/stock/add", newProduct)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/stock")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <AdminNav />
      <form onSubmit={addProduct}>
        <input onChange={changeName} placeholder="Enter Product Name"></input>
        <input
          onChange={changeDesc}
          placeholder="Enter Product Description"
        ></input>
        <input onChange={changePrice} placeholder="Enter Product Price"></input>
        <input onChange={changeQuantity} placeholder="Enter Quantity"></input>
        <input type="submit"></input>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {product.map((x, index) => {
            return (
              <tr key={index}>
                <td>{x.name}</td>
                <td>{x.description}</td>
                <td>{x.price}</td>
                <td>{x.quantity}</td>
                <td>
                  <input
                    onClick={() => {
                      axios.post(`http://localhost:5000/stock/delete/${x._id}`);
                    }}
                    type="submit"
                    value="DELETE"
                  ></input>
                  <input type="submit" value="UPDATE"></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
