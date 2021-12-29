var arr = [30, 40, 50, 60];

// arr.forEach(function (element, index) {
//   console.log(element, index);
// });

var Mobile = [
  {
    brand: "Apple",
    model: "Iphone 13",
  },
  {
    brand: "SamSung",
    model: "Samsung Galaxy",
  },
  {
    brand: "apple",
    model: "Iphone 11",
  },
];

Mobile.forEach(function (ele, index) {
  if (ele.brand === "Apple") {
    console.log(ele.model);
  }
});
