const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const arr = [
  { name: "minute", count: 0, price: 2 },
  { name: "sms", count: 0, price: 1 },
  { name: "enternet", count: 0, price: 25 },
  { name: "social", count: 0, price: 15 },
];

app.post("/api/tariff_settings", (req, res) => {
  arr.forEach((el) => {
    if (req.body.type === el.name) {
      el.count = req.body.count;
    }
  });
  let sum = arr.reduce((a, b) => {
    return a + b["price"] * b["count"];
  }, 0);
  res.json({ data: sum });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
