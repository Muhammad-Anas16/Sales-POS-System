import Database from 'better-sqlite3'
import path from 'path'
import { app } from 'electron'

const dbPath = path.join(app.getPath('userData'), 'inventory.db')

const db = new Database(dbPath)

db.pragma('journal_mode = WAL')

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    expDate TEXT,
    category TEXT,
    stock INTEGER,
    price REAL
  )
`
).run()

export default db;
