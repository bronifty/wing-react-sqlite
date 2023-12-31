import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const app = express();
app.use(cors());

const port = 8080;

// Initialize a new SQLite database
const db = await open({
  filename: "./dist/sql.db",
  driver: sqlite3.Database,
});

app.get("/api", (req, res) => {
  res.json("Hello World");
});

app.get("/api/messages", async (req, res) => {
  const messages = await db.all("SELECT text FROM messages");
  res.json(messages);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
