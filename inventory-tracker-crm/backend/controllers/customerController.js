import { Customer } from '../models/index.js';

export const getAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

export const addCustomer = async (req, res) => {
  const newCustomer = await Customer.create(req.body);
  res.json(newCustomer);
};
