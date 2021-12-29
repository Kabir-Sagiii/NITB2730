var obj1 = {
  name: "S1",
  email: "S1@gmail.com",
  phn: 99999999,
  address: {
    city: "Hyd",
    state: "TS",
    pincode: 500018,
  },
  marks: function (x, y) {
    var results = x + y;
    console.log(results);
    console.log("Function inside a Object");
  },
};

// console.log(obj1.address.state);

// obj1.address.city = "Warangal";
// console.log(obj1);
obj1.marks(50, 70);

var obj2 = {
  f1: function () {
    console.log("Function 1");
  },
  f2: function (name) {
    console.log(name);
  },
};
obj2.f1();
obj2.f2("NIT");
