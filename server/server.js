const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

var minute = 0;
var sms = 0;
var enternet = 0;
var social = 0;

app.post("/api/tariff_settings", (req, res) => {
  if (req.body.type === "minute") {
    minute = req.body.count * 2;
  } else if (req.body.type === "sms") {
    sms = req.body.count * 1;
  } else if (req.body.type === "enternet") {
    enternet = req.body.count * 25;
  } else if (req.body.type === "social") {
    social = req.body.count * 20;
  }
  res.json({ data: minute + sms + enternet + social });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
