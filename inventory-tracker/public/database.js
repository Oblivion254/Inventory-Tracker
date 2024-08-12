import knex from 'knex';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'inventory.db'),
  },
  useNullAsDefault: true,
});

// Create a table if it doesn't exist
db.schema.hasTable('items').then((exists) => {
  if (!exists) {
    return db.schema.createTable('items', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('quantity');
      table.string('customer');
      table.timestamps(true, true);
    });
  }
});

export default db;
