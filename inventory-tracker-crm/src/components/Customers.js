import React, { useState, useEffect } from 'react';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/customers')
      .then(response => response.json())
      .then(data => setCustomers(data));
  }, []);

  const handleCustomerSubmit = (e) => {
    e.preventDefault();
    const newCustomer = { name, email };

    fetch('http://localhost:3001/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
    })
      .then(response => response.json())
      .then(data => {
        setCustomers([...customers, data]);
        setName('');
        setEmail('');
      });
  };

  return (
    <div>
      <h2>Customers</h2>

      <form onSubmit={handleCustomerSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Customer</button>
      </form>

      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
