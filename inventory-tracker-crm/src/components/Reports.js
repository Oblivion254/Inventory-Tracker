import React, { useState, useEffect } from 'react';

function Reports() {
  const [salesReport, setSalesReport] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/sales')
      .then(response => response.json())
      .then(data => setSalesReport(data));
  }, []);

  return (
    <div>
      <h2>Sales Report</h2>
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
          {salesReport.map((sale) => (
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

export default Reports;
