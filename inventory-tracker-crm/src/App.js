import React from 'react';
import Dashboard from './components/Dashboard.js';
import Inventory from './components/Inventory.js';
import Sales from './components/Sales.js';
import Customers from './components/Customers.js';
import Reports from './components/Reports.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory Tracker CRM</h1>
      </header>
      <main>
        <Dashboard />
        <Inventory />
        <Sales />
        <Customers />
        <Reports />
      </main>
    </div>
  );
}

export default App;
