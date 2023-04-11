import React, { useState } from "react";
import Footer from "./footer";
import ProfilePage from "./profile.jsx"

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setItems([...items, { name: itemName, price: itemPrice }]);
    setItemName("");
    setItemPrice("");
  };

  return (
    <div className="order">
      <form className="item" >
        <h1 className="big-heading">Place Your Order</h1>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Item Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <br />
        <label>
          Item Price:
          <input type="number" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
        </label>

        <br/>

        <button onClick={handleSubmit} className="button" type="submit">Submit Order</button>
      </form>
      {items.map((item, index) => (
        <li key={index}>
        <ProfilePage price={item.price} name={name} email={email} address={address} item={item.name} />

        </li>
      ))}
      <Footer />
    </div>
  );
}

export default OrderForm;
