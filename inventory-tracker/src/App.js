// File: src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Request items from the database
    window.electron.send('get-items');

    // Listen for the reply with the items data
    window.electron.receive('get-items-reply', (data) => {
      setItems(data);
    });

    // Cleanup listener on component unmount
    return () => {
      window.electron.removeListener('get-items-reply');
    };
  }, []);

  return (
    <div>
      <h1>Inventory Tracker</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} - {item.customer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
