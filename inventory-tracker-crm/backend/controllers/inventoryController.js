import { Inventory } from '../models/index.js';

export const getAllItems = async (req, res) => {
  const items = await Inventory.findAll();
  res.json(items);
};

export const addItem = async (req, res) => {
  const newItem = await Inventory.create(req.body);
  res.json(newItem);
};

export const updateItem = async (req, res) => {
  const item = await Inventory.findByPk(req.params.id);
  if (item) {
    await item.update(req.body);
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
};

export const deleteItem = async (req, res) => {
  const item = await Inventory.findByPk(req.params.id);
  if (item) {
    await item.destroy();
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
};
