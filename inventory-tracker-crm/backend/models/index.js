import { Sequelize } from 'sequelize';
import InventoryModel from './inventory.js';
import SalesModel from './sales.js';
import CustomerModel from './customer.js';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

export const Inventory = InventoryModel(sequelize, Sequelize);
export const Sales = SalesModel(sequelize, Sequelize);
export const Customer = CustomerModel(sequelize, Sequelize);
