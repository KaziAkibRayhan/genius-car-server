const express = require("express");
const cors = require("cors");
require("colors");
const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("genius car server is running!");
});

app.listen(port, () => {
  console.log(`genius car running on port ${port}`.yellow.italic);
});
