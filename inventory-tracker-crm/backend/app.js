import express from 'express';
import { sequelize } from './models/index.js';
import inventoryRoutes from './routes/inventory.js';
import salesRoutes from './routes/sales.js';
import customerRoutes from './routes/customers.js';

const app = express();
app.use(express.json());

app.use('/inventory', inventoryRoutes);
app.use('/sales', salesRoutes);
app.use('/customers', customerRoutes);

app.post('/inventory', async (req, res) => {
    try {
      const newItem = await Inventory.create(req.body);
      res.json(newItem);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add item to inventory' });
    }
  });

app.post('/sales', async (req, res) => {
    try {
      const newSale = await Sale.create(req.body);
      res.json(newSale);
    } catch (error) {
      res.status(500).json({ error: 'Failed to record sale' });
    }
  });

app.post('/customers', async (req, res) => {
    try {
      const newCustomer = await Customer.create(req.body);
      res.json(newCustomer);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add customer' });
    }
  });
  

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
  });
});
