const express = require("express");
const route = express.Router();
const mongodb = require("mongodb"); //imported mongodb package
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
// const {MongoClient} = require('mongodb')
var url =
  "mongodb+srv://sagar:s191919@nitreactb7302021.em6u2.mongodb.net/NITReactB2DB?retryWrites=true&w=majority";

route.get("/user", function (req, res) {
  res.send(`<h2> User Route </h2>`);
});

route.get("/getuserdatafromdb/", function (req, res) {
  MongoClient.connect(url, function (error, cluster) {
    if (error) {
      console.log(error);
      // res.send(error);
      res.send("Error while connecting with DB"); //http://localhost:2121/UserRoute/getuserdatafromdb
    } else {
      const dbRef = cluster.db("NITReactB2DB");
      const userCollRef = dbRef.collection("UserCollection");
      userCollRef.find().toArray(function (err, data) {
        if (err) {
          res.send("Error while getting the data");
        } else {
          res.send(data);
        }
      });
    }
  });
});

route.get("/getoneuserinfo/:id", function (req, res) {
  var id = req.params.id;
  MongoClient.connect(url, function (error, cluster) {
    //http://localhost:2121/UserRoute/getoneuserinfo/6210fb34e2a482523da993d0
    if (error) {
      res.send("Error while connecting with DB");
    } else {
      var dbRef = cluster.db("NITReactB2DB");
      var collectionRef = dbRef.collection("UserCollection");
      collectionRef.findOne({ _id: ObjectId(id) }, function (err, data) {
        if (err) {
          res.send("Error while fetching the data");
        } else {
          res.send(data);
        }
      });
    }
  });
});

route.post("/storeUserData", function (req, res) {
  var n = req.body.name;
  var c = req.body.city;
  var e = req.body.email;

  var data = {
    name: n,
    city: c,
    email: e,
  };
  MongoClient.connect(url, function (err, cluster) {
    if (err) {
      res.send("Error while connecting with DB"); //http://localhost:2121//UserRoute/storeUserData
    } else {
      var dbRef = cluster.db("NITReactB2DB");
      var collectionRef = dbRef.collection("UserCollection");
      collectionRef.insertOne(data, function (err, successMsg) {
        if (err) {
          res.send("Error while inserting the data");
        } else {
          res.send("Inserted Successfully");
          console.log(successMsg);
        }
      });
    }
  });
});

module.exports = route;
