const express = require("express"); // importing the express
const app = express(); // Intilization the express module
const UserRoute = require("./Routes/User");
const ProductRoute = require("./Routes/Product");
const port = 2121;

app.use("/UserRoute", UserRoute); //http://localhost:2121/UserRoute/user
app.use("/PRoute", ProductRoute); //http://localhost:2121/PRoute/product

app.get("/", function (req, res) {
  res.send("Welcome to Express JS");
  //http://localhost:2121/ = https://jsonplaceholder.typicode.com/users
  //
  // operation
  //connect with DB
  // send to client
});

app.get("/html", function (req, res) {
  res.send(`<h2>This is HTML Response from Server</h2>
           <p> The callback form takes a completion callback function as its last argument and invokes the operation asynchronously. The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. If the operation is completed successfully, then the first argument is null or undefined. </p>
       `); // http://localhoste:2121/html
});

app.get("/json", function (req, res) {
  res.send({
    results: [
      {
        gender: "female",
        name: { title: "Miss", first: "مارال", last: "موسوی" },
        location: {
          street: { number: 5563, name: "یادگار امام" },
          city: "بندرعباس",
          state: "کردستان",
          country: "Iran",
          postcode: 32485,
          coordinates: { latitude: "29.9668", longitude: "37.0672" },
          timezone: {
            offset: "-4:00",
            description: "Atlantic Time (Canada), Caracas, La Paz",
          },
        },
        email: "mrl.mwswy@example.com",
        login: {
          uuid: "a248f3c3-54d8-477a-b7f7-e8958081a456",
          username: "yellowkoala936",
          password: "hooter",
          salt: "vrZGDDN9",
          md5: "d8a58dc1512a01bbda76b7874689641e",
          sha1: "a23bd077798bdddf8c748c7ac27d5ae9ce702bcd",
          sha256:
            "f6e1d4975b2228f1ea1ab9a41372124ed57a6035b2719aa8323fbd84c2cfce9a",
        },
        dob: { date: "1974-04-27T08:50:53.273Z", age: 48 },
        registered: { date: "2012-07-07T05:39:35.150Z", age: 10 },
        phone: "050-51623436",
        cell: "0951-795-1039",
        id: { name: "", value: null },
        picture: {
          large: "https://randomuser.me/api/portraits/women/34.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg",
        },
        nat: "IR",
      },
      {
        gender: "female",
        name: { title: "Ms", first: "Piper", last: "Anderson" },
        location: {
          street: { number: 5923, name: "Fitzgerald Avenue" },
          city: "Tauranga",
          state: "Marlborough",
          country: "New Zealand",
          postcode: 43548,
          coordinates: { latitude: "-20.8152", longitude: "70.6120" },
          timezone: {
            offset: "-6:00",
            description: "Central Time (US & Canada), Mexico City",
          },
        },
        email: "piper.anderson@example.com",
        login: {
          uuid: "82cf8205-fdc0-4f39-8c65-d0f7e526e549",
          username: "goldenfish634",
          password: "tulips",
          salt: "1d7C3tly",
          md5: "7c853c8d141023ad12242ebbd0368224",
          sha1: "f4ccd07f785fe5481a533875458ab2ed81a864c9",
          sha256:
            "526aaf005df24b3956d08a3ae7b183aacc2435e9a5be5d3a0f3bef4b97f78994",
        },
        dob: { date: "1959-03-27T03:07:15.154Z", age: 63 },
        registered: { date: "2004-01-01T21:41:44.376Z", age: 18 },
        phone: "(602)-542-6172",
        cell: "(433)-753-4735",
        id: { name: "", value: null },
        picture: {
          large: "https://randomuser.me/api/portraits/women/72.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
        },
        nat: "NZ",
      },
    ],
    info: {
      seed: "ea3b07a4ae50377b",
      results: 2,
      page: 1,
      version: "1.3",
    },
  });
});

app.listen(port, () => {
  console.log("Server is started");
});
