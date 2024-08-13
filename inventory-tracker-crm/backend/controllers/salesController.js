import { Sales, Inventory } from '../models/index.js';

export const getAllSales = async (req, res) => {
  const sales = await Sales.findAll();
  res.json(sales);
};

export const recordSale = async (req, res) => {
  const { inventoryId, quantity } = req.body;
  const item = await Inventory.findByPk(inventoryId);
  if (item && item.quantity >= quantity) {
    const sale = await Sales.create(req.body);
    item.quantity -= quantity;
    await item.save();
    res.json(sale);
  } else {
    res.status(400).json({ error: 'Insufficient stock or invalid item' });
  }
};
