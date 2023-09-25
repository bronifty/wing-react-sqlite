import express from "https://esm.sh/express@4.18.2";
import cors from "https://esm.sh/cors@2.8.5";
import sqlite3 from "https://esm.sh/sqlite3@5.1.6";
const app = express();
const port = 8080;

app.use(cors());
app.get("/api", (req, res) => {
  res.json("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
