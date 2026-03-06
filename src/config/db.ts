import { Database } from "bun:sqlite";

export const db = new Database("database.sqlite", { create: true });

export const initDB = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      role TEXT
    )
  `);
};