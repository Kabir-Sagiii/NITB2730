const express = require("express");
const route = express.Router();
const mongodb = require("mongodb"); //imported mongodb package

route.get("/user", function (req, res) {
  res.send(`<h2> User Route </h2>`);
});

route.get("/getuserdata", function (req, res) {});

module.exports = route;
