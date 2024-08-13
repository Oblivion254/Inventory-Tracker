import React, { useState, useEffect } from 'react';

function Sales() {
  const [sales, setSales] = useState([]);
  const [inventoryId, setInventoryId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/sales')
      .then(response => response.json())
      .then(data => setSales(data));

    fetch('http://localhost:3001/inventory')
      .then(response => response.json())
      .then(data => setInventoryItems(data));
  }, []);

  const handleSaleSubmit = (e) => {
    e.preventDefault();
    const newSale = { inventoryId, quantity: parseInt(quantity), date: new Date(), totalAmount: 0 };

    fetch('http://localhost:3001/sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSale),
    })
      .then(response => response.json())
      .then(data => {
        setSales([...sales, data]);
        setInventoryId('');
        setQuantity('');
      });
  };

  return (
    <div>
      <h2>Sales</h2>

      <form onSubmit={handleSaleSubmit}>
        <select
          value={inventoryId}
          onChange={(e) => setInventoryId(e.target.value)}
          required
        >
          <option value="">Select Item</option>
          {inventoryItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.itemName}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Record Sale</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity Sold</th>
            <th>Total Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.inventoryId}</td>
              <td>{sale.quantity}</td>
              <td>{sale.totalAmount}</td>
              <td>{new Date(sale.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;
