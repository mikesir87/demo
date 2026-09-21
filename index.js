const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from the demo Express app!");
});

app.get("/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.json({ greeting: `Hello, ${name}!` });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
