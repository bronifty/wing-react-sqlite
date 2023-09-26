import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function setup() {
  const db = await open({
    filename: "./sql.db",
    driver: sqlite3.Database,
  });

  await db.exec("CREATE TABLE IF NOT EXISTS messages (text TEXT)");
  await db.exec('INSERT INTO messages (text) VALUES ("Hello World")');

  const result = await db.get("SELECT text FROM messages");
  console.log(result);
}

setup();
