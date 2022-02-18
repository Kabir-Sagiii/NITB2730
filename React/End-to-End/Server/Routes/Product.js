const express = require("express");
const route = express.Router();

route.get("/product", function (req, res) {
  res.send(`<h2>Product Route</h2>`);
});

module.exports = route;
