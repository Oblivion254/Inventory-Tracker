import React, { useState, useEffect } from 'react';

function Inventory() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/inventory')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { itemName, quantity: parseInt(quantity), price: parseFloat(price) };

    fetch('http://localhost:3001/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        setItems([...items, data]);
        setItemName('');
        setQuantity('');
        setPrice('');
      });
  };

  return (
    <div>
      <h2>Inventory</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
